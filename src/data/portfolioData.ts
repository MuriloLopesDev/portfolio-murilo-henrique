import { PersonalInfo, Experience, Project, TechCategory, Differentiator } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Murilo Henrique',
  role: 'Desenvolvedor de Software',
  experienceYears: 'Aproximadamente 4 anos',
  location: 'São José do Rio Preto, São Paulo',
  availability: 'Disponível para oportunidades remotas ou presenciais',
  bio: 'Desenvolvedor de software com experiência na criação, manutenção e evolução de sistemas web, mobile e desktop. Atuo com foco na resolução prática de problemas, investigando causas raiz de falhas e aplicando regras de negócio para entregar soluções confiáveis, bem estruturadas e fáceis de utilizar.',
  heroSubtitle: 'Transformo necessidades reais em aplicações web, mobile e desktop eficientes, confiáveis e fáceis de usar.',
  heroDescription: 'Desenvolvedor com experiência na criação, manutenção e evolução de sistemas, atuando desde a análise do problema até a implementação, testes e entrega da solução.',
  linkedin: 'https://linkedin.com/in/murilo-henrique',
  github: 'https://github.com/murilopes007',
  email: 'murilopes007@gmail.com',
};

export const experiences: Experience[] = [
  {
    company: 'EVOMILK',
    role: 'Desenvolvedor de Software',
    period: 'Maio de 2022 — Presente',
    isCurrent: true,
    responsibilities: [
      'Desenvolvimento e manutenção contínua de aplicações mobile e web',
      'Implementação de novas funcionalidades alinhadas às regras de negócio',
      'Integração eficiente entre aplicações client-side e APIs RESTful',
      'Investigação detalhada e correção de bugs em produção e homologação',
      'Manutenção preventiva e corretiva de ecossistemas existentes',
      'Desenvolvimento utilizando Ionic, Angular, Flutter, Laravel, PHP e MySQL',
      'Execução de testes funcionais para garantia de qualidade',
      'Processos de publicação, atualização e manutenção nas lojas de aplicativos',
    ],
    technologies: ['Flutter', 'Dart', 'Ionic', 'Angular', 'Laravel', 'PHP', 'MySQL', 'APIs REST', 'Git'],
  },
  {
    company: 'BELLA CAPRI E AGILE DELIVERY',
    role: 'Desenvolvedor de Software',
    period: 'Julho de 2021 — Maio de 2022',
    responsibilities: [
      'Desenvolvimento e manutenção de sistemas voltados para gestão operacional e logística',
      'Implementação de melhorias de interface e experiência do usuário',
      'Investigação e correção de inconsistências de código em módulos legados',
      'Suporte a integrações entre serviços de pedidos e entregas',
    ],
    technologies: ['JavaScript', 'TypeScript', 'PHP', 'APIs REST', 'MySQL', 'Git'],
  },
  {
    company: 'ZANATA INFORMÁTICA',
    role: 'Desenvolvedor de Software',
    period: 'Janeiro de 2019 — Julho de 2021',
    responsibilities: [
      'Desenvolvimento de software e suporte técnico especializado para sistemas ERP/gestão',
      'Análise de demandas de clientes e implementação de evoluções operacionais',
      'Manutenção em banco de dados relacional e consultas estruturadas',
      'Diagnóstico rápido de inconsistências operacionais e melhorias de usabilidade',
    ],
    technologies: ['Delphi / PHP', 'MySQL', 'Suporte Técnico', 'Análise de Requisitos', 'Git'],
  },
];

export const projects: Project[] = [
  {
    id: 'plataforma-casamento',
    name: 'Plataforma de Casamento — Murilo e Mirelle',
    category: 'Aplicação web personalizada',
    shortDescription: 'Plataforma web personalizada criada para centralizar informações do casamento, confirmação de presença, lista de presentes, pagamentos e gerenciamento dos convidados.',
    context: 'O projeto foi desenvolvido para oferecer aos convidados uma experiência simples e organizada, reunindo em um único local todas as informações importantes do casamento.',
    problemSolved: [
      'Informações do evento espalhadas em diferentes canais sem padronização',
      'Dificuldade e morosidade para controlar confirmações de presença manuais',
      'Necessidade de organizar a quantidade exata de convidados e acompanhantes',
      'Necessidade de apresentar uma lista de presentes interativa e online',
      'Necessidade de receber e acompanhar pagamentos de presentes de forma segura',
      'Necessidade de um painel administrativo centralizado para os noivos',
    ],
    participation: 'Murilo foi responsável pela concepção, planejamento, design, desenvolvimento, integração, publicação e manutenção da plataforma.',
    mainFeatures: [
      'Página inicial personalizada com identidade visual única',
      'Informações completas sobre cerimônia, recepção e localização',
      'Confirmação de presença (RSVP) simples e intuitiva',
      'Cadastro e controle individual de acompanhantes',
      'Lista de presentes interativa com catálogo virtual',
      'Pagamentos online integrados com checkout transparente',
      'Integração nativa com a API do Mercado Pago',
      'Painel administrativo protegido com autenticação',
      'Gestão centralizada de convidados e confirmações',
      'Acompanhamento de pedidos e confirmação de pagamentos em tempo real',
      'Layout totalmente responsivo e otimizado para dispositivos móveis',
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Mercado Pago', 'Vercel', 'HTML', 'CSS', 'Git', 'GitHub'],
    technicalChallenges: [
      'Criar uma interface simples e acolhedora para convidados com variados níveis de familiaridade com tecnologia',
      'Integrar de forma robusta e segura os fluxos de pagamento online do Mercado Pago',
      'Proteger as rotas do painel administrativo contra acessos não autorizados',
      'Modelar a estrutura de dados para lidar corretamente com convidados principais e seus dependentes',
      'Garantir altíssimo desempenho e responsividade em redes móveis de celular',
      'Manter sigilo e segurança dos dados dos convidados e transações',
    ],
    result: 'Uma plataforma centralizada, responsiva e personalizada para facilitar a comunicação com convidados, o controle de presenças e a organização dos presentes.',
    status: 'Projeto desenvolvido e publicado',
    gallery: [
      { screenTitle: 'Página inicial', description: 'Apresentação visual do evento e contagem regressiva' },
      { screenTitle: 'Confirmação de presença', description: 'Formulário RSVP simplificado para o convidado e acompanhantes' },
      { screenTitle: 'Informações do evento', description: 'Detalhes da cerimônia, recepção e mapas de acesso' },
      { screenTitle: 'Lista de presentes', description: 'Catálogo de presentes virtuais com opção de contribuição' },
      { screenTitle: 'Processo de pagamento', description: 'Checkout integrado e seguro via Mercado Pago' },
      { screenTitle: 'Painel administrativo', description: 'Dashboard dos noivos para gestão de RSVP e recebimentos' },
    ],
  },
  {
    id: 'grupo-alessat',
    name: 'Sistema de Monitoramento — Grupo Alessat',
    category: 'Aplicação desktop para Windows',
    shortDescription: 'Aplicação desktop desenvolvida para organizar e facilitar a visualização de veículos e transmissões de vídeo em um ambiente centralizado.',
    context: 'O projeto foi criado para oferecer uma interface desktop prática para acompanhamento e visualização de veículos, com foco em organização, estabilidade e facilidade de utilização.',
    problemSolved: [
      'Dificuldade para visualizar múltiplos veículos simultaneamente de forma organizada',
      'Necessidade de centralizar transmissões de vídeo em uma única aplicação desktop',
      'Necessidade de melhorar a experiência e agilidade de monitoramento de frota',
      'Necessidade de tratar falhas, oscilações de rede e indisponibilidade temporária de vídeos',
      'Necessidade de distribuir a aplicação por meio de um instalador Windows prático',
    ],
    participation: 'Murilo foi responsável pelo desenvolvimento da aplicação desktop, interface, organização das visualizações, tratamento de reprodução dos vídeos, correções de desempenho e geração do instalador.',
    mainFeatures: [
      'Sistema de autenticação e login seguro',
      'Listagem de veículos cadastrados com busca rápida',
      'Visualização em mosaico personalizável',
      'Reprodução fluida de múltiplos vídeos simultaneamente',
      'Controle individual e seletivo de áudio das câmeras',
      'Gerenciamento flexível dos vídeos abertos na tela',
      'Fechamento individual ou em lote de transmissões',
      'Tratamento gracioso de falhas na reprodução e desconexões',
      'Indicadores visuais de estados de carregamento e reconexão',
      'Reconexão automática em transmissões com queda de sinal',
      'Interface responsiva adaptada para diferentes resoluções no Windows',
      'Empacotamento da aplicação em instalador executável (.msi / .exe)',
    ],
    technologies: ['Flutter', 'Dart', 'Flutter Desktop', 'Windows', 'Integração de Mídia', 'Git'],
    technicalChallenges: [
      'Renderizar múltiplos players de vídeo simultâneos sem sobrecarregar a GPU/CPU da máquina',
      'Garantir estabilidade e evitar travamentos na reprodução contínua de streams',
      'Gerenciar com precisão o ciclo de vida dos decodificadores e players de vídeo',
      'Tratar reconexões automáticas quando o sinal da câmera oscilar',
      'Manter a matriz de mosaico legível e organizada independente do número de telas abertas',
      'Criar um processo de instalação simples e direto para o cliente final em ambiente Windows',
    ],
    result: 'Uma aplicação desktop organizada e funcional, preparada para facilitar a visualização e o gerenciamento das transmissões dos veículos.',
    status: 'Projeto desenvolvido para cliente',
    gallery: [
      { screenTitle: 'Login', description: 'Acesso restrito para operadores autorizados' },
      { screenTitle: 'Tela inicial', description: 'Dashboard principal com visão geral do sistema' },
      { screenTitle: 'Listagem de veículos', description: 'Painel de seleção e filtro de frotas ativas' },
      { screenTitle: 'Visualização em mosaico', description: 'Grade multi-câmeras em tempo real' },
      { screenTitle: 'Reprodução de vídeos', description: 'Player com controle de áudio e visualização ampliada' },
      { screenTitle: 'Estados de carregamento e indisponibilidade', description: 'Tratamento visual amigável durante oscilações de rede' },
    ],
  },
];

export const techCategories: TechCategory[] = [
  {
    title: 'Mobile',
    description: 'Desenvolvimento de aplicativos híbridos e multiplataforma para iOS e Android.',
    items: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Ionic' },
      { name: 'Capacitor' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Construção de interfaces web modernas, responsivas e de alta fidelidade.',
    items: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'Backend',
    description: 'Estruturação de servidores, regras de negócio e arquitetura de APIs RESTful.',
    items: [
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'APIs REST' },
    ],
  },
  {
    title: 'Banco de Dados & Serviços',
    description: 'Armazenamento persistente, consultas relacionais e backend as a service.',
    items: [
      { name: 'MySQL' },
      { name: 'Supabase' },
    ],
  },
  {
    title: 'Desktop',
    description: 'Aplicações nativas para ambiente Windows com instaladores dedicados.',
    items: [
      { name: 'Flutter Desktop' },
      { name: 'Aplicações Windows' },
    ],
  },
  {
    title: 'Ferramentas & Workflow',
    description: 'Ferramentas essenciais do dia a dia para versionamento, testes e deploy.',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Android Studio' },
      { name: 'VS Code' },
      { name: 'Vercel' },
      { name: 'Postman' },
    ],
  },
];

export const differentiators: Differentiator[] = [
  {
    title: 'Experiência em Projetos Reais',
    description: 'Atuação prática comprovada na criação de softwares web, mobile e desktop entregues e utilizados por usuários finais.',
    iconName: 'Layout',
  },
  {
    title: 'Evolução de Códigos Existentes',
    description: 'Facilidade para compreender projetos já iniciados por outros times, aplicando melhorias contínuas sem quebrar funcionalidades.',
    iconName: 'GitBranch',
  },
  {
    title: 'Investigação de Causa Raiz',
    description: 'Postura analítica na identificação e correção de bugs, atacando a origem do problema e garantindo a estabilidade do sistema.',
    iconName: 'Bug',
  },
  {
    title: 'Implementação de Regras de Negócio',
    description: 'Tradução precisa de requisitos e necessidades do cliente em código limpo, seguro e funcional em ambas as pontas (front e back).',
    iconName: 'Workflow',
  },
  {
    title: 'Integração Completa (Front & Back)',
    description: 'Domínio da comunicação entre cliente e servidor através de APIs REST, autenticação, bancos de dados e serviços terceiros.',
    iconName: 'ServerHandshake',
  },
  {
    title: 'IA como Ferramenta Estratégica',
    description: 'Utilização responsável de inteligência artificial para acelerar refinamentos, testes, documentação e produtividade técnica.',
    iconName: 'Cpu',
  },
];
