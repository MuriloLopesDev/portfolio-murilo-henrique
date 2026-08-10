import type { PersonalInfo, Experience, Project, ProjectImage, TechCategory, Differentiator } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Murilo Henrique',
  role: 'Desenvolvedor de Software',
  careerStartYear: '2019',
  experienceLabel: 'Desde 2019',
  experienceStatement: 'Desenvolvedor de Software com experiência profissional desde 2019.',
  location: 'São José do Rio Preto, São Paulo',
  locationShort: 'São José do Rio Preto, SP',
  availability: 'Disponível para oportunidades remotas ou presenciais',
  bio: 'Desenvolvedor de Software com experiência profissional desde 2019. Atuo na criação, manutenção e evolução de sistemas web, mobile e desktop, com foco na resolução prática de problemas, investigação de causas raiz de falhas e aplicação de regras de negócio para entregar soluções confiáveis, bem estruturadas e fáceis de utilizar.',
  heroSubtitle: 'Transformo necessidades reais em aplicações web, mobile e desktop eficientes, confiáveis e fáceis de usar.',
  heroDescription: 'Desenvolvedor de Software com experiência profissional desde 2019.',
};

export const professionalLinks = {
  linkedin: {
    url: 'https://www.linkedin.com/in/murilolopesdev',
    label: 'linkedin.com/in/murilolopesdev',
  },
  github: {
    url: 'https://github.com/MuriloLopesDev',
    label: 'github.com/MuriloLopesDev',
  },
  email: {
    address: 'murilopes007@gmail.com',
    url: 'mailto:murilopes007@gmail.com',
  },
} as const;

export const resumeDocument = {
  url: '/documents/Curriculo_Murilo_Lopes.pdf',
  filename: 'Curriculo_Murilo_Lopes.pdf',
} as const;

export const coreTechnologies = [
  'Flutter',
  'Dart',
  'Ionic',
  'Angular',
  'React',
  'TypeScript',
  'JavaScript',
  'Laravel',
  'PHP',
  'MySQL',
  'Supabase',
  'APIs REST',
  'Git',
] as const;

const weddingProjectImages = {
  home: {
    src: '/projects/plataforma-casamento/home.webp',
    alt: 'Página inicial da plataforma de casamento de Murilo e Mirelle',
    width: 1891,
    height: 954,
  },
  attendanceConfirmation: {
    src: '/projects/plataforma-casamento/confirmacao-presenca.webp',
    alt: 'Formulário de confirmação de presença com campo para acompanhante',
    width: 1894,
    height: 956,
  },
  eventInformation: {
    src: '/projects/plataforma-casamento/informacoes.webp',
    alt: 'Página de informações do casamento com data, horários e locais',
    width: 1894,
    height: 952,
  },
  giftList: {
    src: '/projects/plataforma-casamento/lista-presentes.webp',
    alt: 'Lista virtual de presentes da plataforma de casamento',
    width: 1890,
    height: 956,
  },
  payment: {
    src: '/projects/plataforma-casamento/pagamento.webp',
    alt: 'Tela de finalização de presente com pagamento pelo Mercado Pago',
    width: 1889,
    height: 952,
  },
} satisfies Record<string, ProjectImage>;

const alessatProjectImages = {
  login: {
    src: '/projects/grupo-alessat/login.webp',
    alt: 'Tela de login do sistema de monitoramento do Grupo Alessat',
    width: 784,
    height: 555,
  },
  fleetRegistration: {
    src: '/projects/grupo-alessat/cadastro-frota.webp',
    alt: 'Modal de cadastro de frota com seleção de veículos e canais',
    width: 1912,
    height: 1003,
  },
  vehicleCameras: {
    src: '/projects/grupo-alessat/cameras-veiculo.webp',
    alt: 'Lista de veículos e canais com uma câmera de monitoramento aberta',
    width: 1915,
    height: 1003,
  },
  openMosaic: {
    src: '/projects/grupo-alessat/mosaico-aberto.webp',
    alt: 'Mosaico de monitoramento com seis transmissões de câmeras abertas',
    width: 1903,
    height: 1009,
  },
  emptyMosaic: {
    src: '/projects/grupo-alessat/estado-sem-cameras.webp',
    alt: 'Estado inicial do mosaico sem câmeras selecionadas',
    width: 1903,
    height: 1016,
  },
} satisfies Record<string, ProjectImage>;

export const experiences: Experience[] = [
  {
    company: 'EVOMILK',
    role: personalInfo.role,
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
    role: personalInfo.role,
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
    role: personalInfo.role,
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
    caseStudy: {
      context: 'O projeto foi desenvolvido para oferecer aos convidados uma experiência simples e organizada, reunindo em um único local todas as informações importantes do casamento.',
      problems: [
        'Informações do evento espalhadas em diferentes canais sem padronização',
        'Dificuldade e morosidade para controlar confirmações de presença manuais',
        'Necessidade de organizar a quantidade exata de convidados e acompanhantes',
        'Necessidade de apresentar uma lista de presentes interativa e online',
        'Necessidade de receber e acompanhar pagamentos de presentes de forma segura',
        'Necessidade de um painel administrativo centralizado para os noivos',
      ],
      solution: 'Uma plataforma centralizada, responsiva e personalizada para facilitar a comunicação com convidados, o controle de presenças e a organização dos presentes.',
      participation: 'Murilo foi responsável pela concepção, planejamento, design, desenvolvimento, integração, publicação e manutenção da plataforma.',
      features: [
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
      technicalChallenges: [
        'Criar uma interface simples e acolhedora para convidados com variados níveis de familiaridade com tecnologia',
        'Integrar de forma robusta e segura os fluxos de pagamento online do Mercado Pago',
        'Proteger as rotas do painel administrativo contra acessos não autorizados',
        'Modelar a estrutura de dados para lidar corretamente com convidados principais e seus dependentes',
        'Garantir altíssimo desempenho e responsividade em redes móveis de celular',
        'Manter sigilo e segurança dos dados dos convidados e transações',
      ],
    },
    technologies: ['React', 'TypeScript', 'Supabase', 'Mercado Pago', 'Vercel', 'HTML', 'CSS', 'Git', 'GitHub'],
    status: 'Projeto desenvolvido e publicado',
    coverImage: weddingProjectImages.home,
    gallery: [
      { screenTitle: 'Página inicial', description: 'Apresentação visual do evento e contagem regressiva', image: weddingProjectImages.home },
      { screenTitle: 'Confirmação de presença', description: 'Formulário RSVP simplificado para o convidado e acompanhantes', image: weddingProjectImages.attendanceConfirmation },
      { screenTitle: 'Informações do evento', description: 'Detalhes da cerimônia, recepção e mapas de acesso', image: weddingProjectImages.eventInformation },
      { screenTitle: 'Lista de presentes', description: 'Catálogo de presentes virtuais com opção de contribuição', image: weddingProjectImages.giftList },
      { screenTitle: 'Processo de pagamento', description: 'Checkout integrado e seguro via Mercado Pago', image: weddingProjectImages.payment },
    ],
  },
  {
    id: 'grupo-alessat',
    name: 'Sistema de Monitoramento — Grupo Alessat',
    category: 'Aplicação desktop para Windows',
    shortDescription: 'Aplicação desktop desenvolvida para organizar e facilitar a visualização de veículos e transmissões de vídeo em um ambiente centralizado.',
    caseStudy: {
      context: 'O projeto foi criado para oferecer uma interface desktop prática para acompanhamento e visualização de veículos, com foco em organização, estabilidade e facilidade de utilização.',
      problems: [
        'Dificuldade para visualizar múltiplos veículos simultaneamente de forma organizada',
        'Necessidade de centralizar transmissões de vídeo em uma única aplicação desktop',
        'Necessidade de melhorar a experiência e agilidade de monitoramento de frota',
        'Necessidade de tratar falhas, oscilações de rede e indisponibilidade temporária de vídeos',
        'Necessidade de distribuir a aplicação por meio de um instalador Windows prático',
      ],
      solution: 'Uma aplicação desktop organizada e funcional, preparada para facilitar a visualização e o gerenciamento das transmissões dos veículos.',
      participation: 'Murilo foi responsável pelo desenvolvimento da aplicação desktop, interface, organização das visualizações, tratamento de reprodução dos vídeos, correções de desempenho e geração do instalador.',
      features: [
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
      technicalChallenges: [
        'Renderizar múltiplos players de vídeo simultâneos sem sobrecarregar a GPU/CPU da máquina',
        'Garantir estabilidade e evitar travamentos na reprodução contínua de streams',
        'Gerenciar com precisão o ciclo de vida dos decodificadores e players de vídeo',
        'Tratar reconexões automáticas quando o sinal da câmera oscilar',
        'Manter a matriz de mosaico legível e organizada independente do número de telas abertas',
        'Criar um processo de instalação simples e direto para o cliente final em ambiente Windows',
      ],
    },
    technologies: ['Flutter', 'Dart', 'Flutter Desktop', 'Windows', 'Integração de Mídia', 'Git'],
    status: 'Projeto desenvolvido para cliente',
    coverImage: alessatProjectImages.openMosaic,
    gallery: [
      { screenTitle: 'Login', description: 'Acesso restrito para operadores autorizados', image: alessatProjectImages.login },
      { screenTitle: 'Cadastro de frotas', description: 'Seleção de veículos e canais para organização dos mosaicos', image: alessatProjectImages.fleetRegistration },
      { screenTitle: 'Câmeras por veículo', description: 'Painel de seleção de veículos e canais disponíveis', image: alessatProjectImages.vehicleCameras },
      { screenTitle: 'Visualização em mosaico', description: 'Grade multi-câmeras em tempo real', image: alessatProjectImages.openMosaic },
      { screenTitle: 'Estado sem câmeras', description: 'Orientação exibida antes da seleção de veículos e canais', image: alessatProjectImages.emptyMosaic },
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
