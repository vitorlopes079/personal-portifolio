export type Locale = "en" | "pt";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    Welcome_to_React: "Welcome to React and react-i18next",
    Welcome:
      "I am a <span class=\"underline underline-blue\">Full Stack</span> Developer, Passionate about building innovative digital solutions.",
    Home: "Home",
    About: "About me",
    Projects: "Projects",
    Contact: "Contact",
    About_Text:
      "Hello, my name is Vitor, I am a full stack developer. I have been working with software development for 3 years, and I found my passion in this field as a technology enthusiast and a lover of learning. I am always excited to keep up with the latest tendencies. At the moment I am based in Brazil, but I spent 8 years of my life travelling the world, which I believe contributed to a better professional personality. This journey helped me acquire many soft skills and real life problem solving ability, which is the best skill a developer can have. As a freelancer I have delivered projects through direct client contact, and also completed 30+ deliveries on Fiverr for international clients. This early in my career put me in a position to deal with and solve real world problems very naturally. I would love to contribute and work together on something remarkable.",
    Web_developer: "Full Stack Developer",
    Birthday: "Birthday:",
    Phonenumber: "Phone Number:",
    Nationality: "Nationality:",
    Interest: "Interest:",
    Language: "Language Skills:",
    Brazil: "Brazil",
    Art: "Art, Travelling and Reading",
    English: "English and Portuguese",
    Ready: "READY TO CREATE SOMETHING AMAZING?",
    I_here_to_help: "I'm here to help. Tell me about your project.",
    Name: "Name",
    Email: "Email address",
    Message: "Message",
    Send: "Send",
    Your_message: "Your message",
    Success: "Your email has been sent successfully!",
    Error: "Sorry, something went wrong.",
    View_website: "View website",
    View_code: "View code",
    Private_repo: "Repository is private at the client's request.",
    See_the_website:
      "See the website's mobile view by narrowing your screen!",
    Agro_efficace:
      "A secure platform for uploading and processing large-scale agricultural geospatial files. Built with Next.js and TypeScript, it features role-based user management, email invitations, and audit logging. Users can upload geospatial data, create projects, and download processed results with data analytics dashboards. (This is a real project built for a client - internal tool accessible only with authorization)",
    Rust_gambling:
      "A full-stack gambling platform featuring provably fair games, Steam item trading, and cryptocurrency payments. Built with Next.js, Node.js, and PostgreSQL, it includes multiple game modes like case opening, mines, and plinko, real-time multiplayer with Socket.io, and a comprehensive admin panel. (This was a real project built for a client - the company has since closed, demonstration only)",
    Websites: "Websites",
    Repodoc:
      "An AI-powered tool that automatically generates documentation for any GitHub repository. Built with a microservices architecture using Python and FastAPI, it features AI agents orchestrated with CrewAI that analyze code and produce comprehensive documentation. Includes async job processing with Redis, containerization with Docker, and PostgreSQL storage via Supabase. (Personal learning project - intentionally over-engineered to practice real-world microservices patterns)",
  },
  pt: {
    Welcome_to_React: "Bem vindo",
    Welcome:
      "Sou um Desenvolvedor <span class=\"underline underline-blue\">Full Stack</span>, apaixonado por criar soluções digitais inovadoras.",
    Home: "Pagina Princial",
    About: "Sobre mim",
    Projects: "Projetos",
    Contact: "Contato",
    About_Text:
      "Olá, meu nome é Vitor, sou desenvolvedor full stack. Trabalho com desenvolvimento de software há 3 anos, e encontrei minha paixão nessa área como entusiasta de tecnologia e apaixonado por aprendizado. Estou sempre animado para me manter atualizado com as últimas tendências. No momento estou baseado no Brasil, mas passei 8 anos da minha vida viajando pelo mundo, o que acredito ter contribuído para uma personalidade profissional mais rica. Essa jornada me ajudou a desenvolver muitas habilidades interpessoais e a capacidade de resolver problemas reais, que é a melhor habilidade que um desenvolvedor pode ter. Como freelancer já entreguei projetos através de contato direto com clientes, e também completei mais de 30 entregas no Fiverr para clientes internacionais. Isso logo no início da minha carreira me colocou em uma posição de lidar e resolver problemas do mundo real de forma muito natural. Adoraria contribuir e trabalhar juntos em algo notável.",
    Web_developer: "Desenvolvedor Full Stack",
    Birthday: "Nascimento:",
    Phonenumber: "Número de telefone:",
    Nationality: "Nacionalidade:",
    Interest: "Interesses:",
    Language: "Idiomas:",
    Brazil: "Brasil",
    Art: "Arte, Viagens and Leitura",
    English: "Português e Inglês",
    Ready: "PRONTO PARA CRIAR ALGO INCRÍVEL?",
    I_here_to_help: "Estou aqui para ajudar. Conte-me sobre o seu projeto.",
    Name: "Nome",
    Email: "Email",
    Message: "Mensagem",
    Send: "Enviar",
    Your_message: "Sua mensagem",
    Success: "Seu e-mail foi enviado com sucesso!",
    Error: " Desculpe, algo deu errado.",
    View_website: "Ir para o website",
    View_code: "Ver código",
    Private_repo: "Repositório privado a pedido do cliente.",
    See_the_website: "Diminua a tela para ver a versão mobile!",
    Agro_efficace:
      "Uma plataforma segura para upload e processamento de arquivos geoespaciais agrícolas em larga escala. Desenvolvida com Next.js e TypeScript, oferece gestão de usuários com diferentes níveis de acesso, convites por email e registro de auditoria. Permite upload de dados geoespaciais, criação de projetos e download de resultados com dashboards analíticos. (Este é um projeto real desenvolvido para um cliente - ferramenta interna acessível apenas com autorização)",
    Rust_gambling:
      "Uma plataforma de apostas full-stack com jogos comprovadamente justos, integração com Steam para troca de itens e pagamentos em criptomoedas. Desenvolvida com Next.js, Node.js e PostgreSQL, inclui múltiplos modos de jogo como abertura de caixas, mines e plinko, multiplayer em tempo real com Socket.io e painel administrativo completo. (Este foi um projeto real desenvolvido para um cliente - a empresa encerrou as atividades, apenas demonstração)",
    Websites: "Websites",
    Repodoc:
      "Uma ferramenta com IA que gera documentação automaticamente para qualquer repositório GitHub. Desenvolvida com arquitetura de microsserviços usando Python e FastAPI, utiliza agentes de IA orquestrados com CrewAI que analisam código e produzem documentação completa. Inclui processamento assíncrono de jobs com Redis, containerização com Docker e armazenamento PostgreSQL via Supabase. (Projeto pessoal de aprendizado - intencionalmente complexo para praticar padrões reais de microsserviços)",
  },
};

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale][key] || key;
}

export function getTranslations(locale: Locale): Record<string, string> {
  return translations[locale];
}

export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";
