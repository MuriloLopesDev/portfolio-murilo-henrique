import { useEffect, useRef } from 'react';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const getFocusableElements = (dialog: HTMLElement) =>
  Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) =>
      element.getAttribute('aria-hidden') !== 'true' &&
      !element.closest('[inert]') &&
      element.getClientRects().length > 0,
  );

const isolateBackground = (dialog: HTMLElement) => {
  const previousStates: Array<{
    element: HTMLElement;
    inert: boolean;
    ariaHidden: string | null;
  }> = [];
  let currentElement = dialog;

  while (currentElement.parentElement) {
    const parent = currentElement.parentElement;

    Array.from(parent.children).forEach((sibling) => {
      if (
        sibling === currentElement ||
        !(sibling instanceof HTMLElement) ||
        sibling.tagName === 'SCRIPT' ||
        sibling.tagName === 'STYLE'
      ) {
        return;
      }

      previousStates.push({
        element: sibling,
        inert: sibling.inert,
        ariaHidden: sibling.getAttribute('aria-hidden'),
      });
      sibling.inert = true;
      sibling.setAttribute('aria-hidden', 'true');
    });

    if (parent === document.body) break;
    currentElement = parent;
  }

  return () => {
    previousStates.forEach(({ element, inert, ariaHidden }) => {
      element.inert = inert;
      if (ariaHidden === null) {
        element.removeAttribute('aria-hidden');
      } else {
        element.setAttribute('aria-hidden', ariaHidden);
      }
    });
  };
};

interface AccessibleModalOptions {
  isOpen: boolean;
  onClose: () => void;
  returnFocusTo?: HTMLElement | null;
}

export const useAccessibleModal = ({
  isOpen,
  onClose,
  returnFocusTo,
}: AccessibleModalOptions) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previouslyFocused =
      returnFocusTo ??
      (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    const previousBodyOverflow = document.body.style.overflow;
    const restoreBackground = isolateBackground(dialog);

    document.body.style.overflow = 'hidden';

    const focusInitialElement = window.requestAnimationFrame(() => {
      const initialElement = dialog.querySelector<HTMLElement>('[data-modal-initial-focus]');
      (initialElement ?? getFocusableElements(dialog)[0] ?? dialog).focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements(dialog);
      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus({ preventScroll: true });
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstElement || !dialog.contains(activeElement))) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      window.cancelAnimationFrame(focusInitialElement);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.style.overflow = previousBodyOverflow;
      restoreBackground();

      window.requestAnimationFrame(() => {
        if (previouslyFocused?.isConnected) {
          previouslyFocused.focus({ preventScroll: true });
        }
      });
    };
  }, [isOpen, returnFocusTo]);

  return dialogRef;
};
