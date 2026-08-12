import type { PersonalInfo, Experience, Project, ProjectImage, TechCategory, Differentiator } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Murilo Lopes',
  role: 'Desenvolvedor de Software',
  careerStartYear: '2019',
  experienceLabel: 'Desde 2019',
  experienceStatement: 'Profissional de tecnologia desde 2019, com trajetória em suporte, infraestrutura e desenvolvimento de software.',
  location: 'São José do Rio Preto, São Paulo',
  locationShort: 'São José do Rio Preto, SP',
  availability: 'Aberto a boas conversas profissionais',
  bio: 'Profissional de tecnologia desde 2019, com trajetória iniciada em suporte e infraestrutura e experiência posterior em desenvolvimento de software. Trabalho com aplicações web, mobile e desktop, atuando em sistemas existentes, regras de negócio, integrações, bancos de dados e investigação de problemas.',
  heroSubtitle: 'Desenvolvo e evoluo aplicações web, mobile e desktop, do entendimento da regra de negócio à entrega da funcionalidade.',
  heroDescription: 'Atuo profissionalmente com tecnologia desde 2019, com experiência em suporte, sistemas em produção e desenvolvimento de aplicações.',
};

export const professionalPhoto = {
  src: '/images/profile/murilo-lopes.jpg',
  alt: `Foto profissional de ${personalInfo.name}`,
  width: 400,
  height: 400,
} as const;

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
    role: 'Desenvolvedor Mobile Full Stack',
    period: 'Maio de 2022 — Presente',
    isCurrent: true,
    responsibilities: [
      'Manutenção e evolução das aplicações mobile e web',
      'Desenvolvimento de funcionalidades ligadas às regras de negócio',
      'Integração com APIs REST, sincronização offline e uploads de arquivos',
      'Desenvolvimento e manutenção de relatórios',
      'Investigação e correção de problemas em produção e homologação',
      'Publicação e atualização dos aplicativos nas lojas',
    ],
    technologies: ['Flutter', 'Dart', 'Ionic', 'Angular', 'Laravel', 'PHP', 'MySQL', 'APIs REST', 'Git'],
  },
  {
    company: 'QUATRILHO TECNOLOGIA',
    role: 'Desenvolvedor Mobile',
    period: 'Julho de 2021 — Maio de 2022',
    responsibilities: [
      'Desenvolvimento e manutenção dos aplicativos Bella Capri e Agile Delivery',
      'Implementação de funcionalidades mobile, correções e integrações',
      'Ajustes de interface em fluxos ligados a pedidos e entregas',
    ],
    technologies: ['JavaScript', 'TypeScript', 'PHP', 'APIs REST', 'MySQL', 'Git'],
  },
  {
    company: 'ZANATA INFORMÁTICA',
    role: 'Suporte Técnico',
    period: 'Janeiro de 2019 — Julho de 2021',
    responsibilities: [
      'Suporte técnico a usuários e empresas',
      'Manutenção e acompanhamento de servidores e ambientes dos clientes',
      'Diagnóstico de falhas de infraestrutura e problemas operacionais',
      'Atendimento direto aos clientes e acompanhamento das ocorrências',
    ],
    technologies: ['Suporte Técnico', 'Infraestrutura de TI', 'Servidores', 'Atendimento ao Cliente'],
  },
];

export const projects: Project[] = [
  {
    id: 'plataforma-casamento',
    name: 'Plataforma de Casamento — Murilo e Mirelle',
    category: 'Aplicação web personalizada',
    shortDescription: 'Criei uma plataforma para reunir informações do casamento, confirmações de presença, lista de presentes e pagamentos em um só lugar.',
    caseStudy: {
      context: 'As informações do evento e as confirmações dos convidados precisavam ser organizadas em um único canal. A plataforma também deveria controlar acompanhantes, presentes e pagamentos.',
      problems: [
        'Reunir as informações do evento em um único lugar',
        'Organizar confirmações de presença e acompanhantes',
        'Acompanhar presentes e pagamentos pelo painel administrativo',
      ],
      solution: 'Desenvolvi uma aplicação web para os convidados consultarem o evento, confirmarem presença e escolherem presentes. Para os noivos, criei um painel de acompanhamento.',
      participation: 'Cuidei do planejamento, da interface, do desenvolvimento e da publicação. Também implementei o painel administrativo, a integração com o Mercado Pago e a estrutura de dados dos convidados.',
      features: [
        'Informações da cerimônia e da recepção',
        'Confirmação de presença e acompanhantes',
        'Lista virtual de presentes',
        'Pagamento pelo Mercado Pago',
        'Painel para acompanhar convidados e presentes',
      ],
      technicalChallenges: [
        'Modelar convidados e acompanhantes',
        'Integrar o fluxo de pagamento',
        'Organizar o uso para convidados e para os noivos',
        'Adaptar a experiência para celulares',
      ],
    },
    technologies: ['React', 'TypeScript', 'Supabase', 'Mercado Pago', 'Vercel', 'HTML', 'CSS', 'Git', 'GitHub'],
    status: 'Publicado',
    coverImage: weddingProjectImages.home,
    gallery: [
      { screenTitle: 'Página inicial', description: 'Apresentação visual do evento e contagem regressiva', image: weddingProjectImages.home },
      { screenTitle: 'Confirmação de presença', description: 'Formulário para o convidado e seus acompanhantes', image: weddingProjectImages.attendanceConfirmation },
      { screenTitle: 'Informações do evento', description: 'Detalhes da cerimônia, recepção e mapas de acesso', image: weddingProjectImages.eventInformation },
      { screenTitle: 'Lista de presentes', description: 'Catálogo de presentes virtuais com opção de contribuição', image: weddingProjectImages.giftList },
      { screenTitle: 'Processo de pagamento', description: 'Pagamento de presentes pelo Mercado Pago', image: weddingProjectImages.payment },
    ],
  },
  {
    id: 'grupo-alessat',
    name: 'Sistema de Monitoramento — Grupo Alessat',
    category: 'Aplicação desktop para Windows',
    shortDescription: 'Desenvolvi uma aplicação para Windows que organiza veículos e transmissões de câmeras em mosaicos de monitoramento.',
    caseStudy: {
      context: 'A operação precisava acompanhar várias câmeras ao mesmo tempo e lidar com oscilações de sinal sem perder a organização das telas abertas.',
      problems: [
        'Visualizar câmeras de vários veículos ao mesmo tempo',
        'Manter as transmissões organizadas em mosaicos',
        'Tratar oscilações de sinal e indisponibilidade dos vídeos',
      ],
      solution: 'Criei uma aplicação desktop para selecionar veículos, abrir câmeras em mosaicos e acompanhar o estado das transmissões.',
      participation: 'Desenvolvi a aplicação desktop, a organização dos mosaicos, o controle dos players, o tratamento de reconexões e a geração do instalador para Windows.',
      features: [
        'Autenticação',
        'Busca e seleção de veículos',
        'Visualização de câmeras em mosaico',
        'Controle individual de áudio e transmissões',
        'Reconexão após quedas de sinal',
        'Instalador para Windows',
      ],
      technicalChallenges: [
        'Reproduzir várias transmissões simultaneamente',
        'Controlar o ciclo de vida dos players',
        'Tratar quedas e reconexões',
        'Manter o mosaico organizado com diferentes quantidades de câmeras',
      ],
    },
    technologies: ['Flutter', 'Dart', 'Flutter Desktop', 'Windows', 'Integração de Mídia', 'Git'],
    status: 'Projeto para cliente',
    coverImage: alessatProjectImages.openMosaic,
    gallery: [
      { screenTitle: 'Login', description: 'Acesso restrito para operadores autorizados', image: alessatProjectImages.login },
      { screenTitle: 'Cadastro de frotas', description: 'Seleção de veículos e canais para organização dos mosaicos', image: alessatProjectImages.fleetRegistration },
      { screenTitle: 'Câmeras por veículo', description: 'Painel de seleção de veículos e canais disponíveis', image: alessatProjectImages.vehicleCameras },
      { screenTitle: 'Visualização em mosaico', description: 'Câmeras organizadas em uma única grade', image: alessatProjectImages.openMosaic },
      { screenTitle: 'Estado sem câmeras', description: 'Orientação exibida antes da seleção de veículos e canais', image: alessatProjectImages.emptyMosaic },
    ],
  },
];

export const techCategories: TechCategory[] = [
  {
    title: 'Mobile',
    description: 'Aplicativos para Android e iOS.',
    items: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Ionic' },
      { name: 'Capacitor' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Interfaces e aplicações web.',
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
    description: 'APIs e regras de negócio.',
    items: [
      { name: 'Laravel' },
      { name: 'PHP' },
      { name: 'APIs REST' },
    ],
  },
  {
    title: 'Banco de Dados & Serviços',
    description: 'Persistência de dados e serviços de backend.',
    items: [
      { name: 'MySQL' },
      { name: 'Supabase' },
    ],
  },
  {
    title: 'Desktop',
    description: 'Aplicações para Windows.',
    items: [
      { name: 'Flutter Desktop' },
      { name: 'Aplicações Windows' },
    ],
  },
  {
    title: 'Ferramentas',
    description: 'Versionamento, testes e publicação.',
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
    title: 'Sistemas em produção',
    description: 'Experiência com aplicações utilizadas no dia a dia, incluindo manutenção, novas funcionalidades e correções.',
    iconName: 'Layout',
  },
  {
    title: 'Código existente',
    description: 'Entendo projetos em andamento e faço mudanças preservando os fluxos que já funcionam.',
    iconName: 'GitBranch',
  },
  {
    title: 'Investigação de problemas',
    description: 'Analiso o comportamento do sistema, procuro a origem da falha e acompanho a correção até o cenário esperado.',
    iconName: 'Bug',
  },
  {
    title: 'Regras de negócio',
    description: 'Transformo demandas operacionais em fluxos e funcionalidades que façam sentido para o usuário.',
    iconName: 'Workflow',
  },
  {
    title: 'Frontend e backend',
    description: 'Trabalho com interfaces, APIs, autenticação, bancos de dados e integrações quando o projeto exige atuação nas duas pontas.',
    iconName: 'ServerHandshake',
  },
  {
    title: 'Versatilidade técnica',
    description: 'Já trabalhei com diferentes stacks e plataformas, adaptando as ferramentas ao contexto do produto e do time.',
    iconName: 'Cpu',
  },
];
