export interface Project {
  id: number;
  title: string;
  code: string;
  live: string;
  desktopImages: string[];
  techStack: string[];
  privateRepo?: boolean;
}

export const agroEfficace: Project = {
  id: 1,
  title: "Agro Efficace",
  code: "",
  live: "https://agroefficace.com.br",
  desktopImages: [
    "/images/agro-efficace/image-1.png",
    "/images/agro-efficace/image2.png",
    "/images/agro-efficace/image-3.png",
    "/images/agro-efficace/image-4.png",
    "/images/agro-efficace/image-5.png",
  ],
  techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
  privateRepo: true,
};

export const rustGambling: Project = {
  id: 2,
  title: "Rust Gambling",
  code: "",
  live: "https://rust-gambling-demo.vercel.app/",
  desktopImages: [
    "/images/rust-gambling/image1.png",
    "/images/rust-gambling/image2.png",
    "/images/rust-gambling/image3.png",
    "/images/rust-gambling/image4.png",
    "/images/rust-gambling/image5.png",
  ],
  techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  privateRepo: true,
};

export const repodoc: Project = {
  id: 3,
  title: "Repodoc",
  code: "https://github.com/vitorlopes079/docbot",
  live: "https://repodoc.tech/",
  desktopImages: [
    "/images/repodoc/image-01.png",
    "/images/repodoc/image-02.png",
    "/images/repodoc/image-03.png",
    "/images/repodoc/image-04.png",
  ],
  techStack: ["Python", "FastAPI", "CrewAI", "Docker", "Redis", "PostgreSQL"],
};

export const webProjects = [
  { data: rustGambling, textKey: "Rust_gambling" },
  { data: repodoc, textKey: "Repodoc" },
  { data: agroEfficace, textKey: "Agro_efficace" },
];
