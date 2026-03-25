import Image from "next/image";

const skills = [
  { src: "/images/html.png", name: "HTML" },
  { src: "/images/css.png", name: "CSS" },
  { src: "/images/javascript.png", name: "JavaScript" },
  { src: "/images/typescript.png", name: "TypeScript" },
  { src: "/images/react.png", name: "React" },
  { src: "/images/redux.png", name: "Redux" },
  { src: "/images/nextjs.png", name: "Next.js" },
  { src: "/images/tailwind.png", name: "Tailwind" },
  { src: "/images/node.png", name: "Node.js" },
  { src: "/images/postgresql.png", name: "PostgreSQL" },
  { src: "/images/socket-io.png", name: "Socket.io" },
  { src: "/images/swift.png", name: "Swift" },
  { src: "/images/docker.png", name: "Docker" },
  { src: "/images/redis.png", name: "Redis" },
  { src: "/images/git.png", name: "Git" },
];

export default function Skills() {
  return (
    <div className="w-full sm:mt-6">
      <div className="grid grid-cols-5 gap-2 responsive500:gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-2 bg-gray-100 rounded-lg shadow text-center"
          >
            <Image
              src={skill.src}
              className="w-8 h-8 responsive500:w-10 responsive500:h-10 mx-auto"
              alt={skill.name}
              width={40}
              height={40}
            />
            <p className="hidden text-xs font-mono font-bold tracking-tight responsive500:block mt-1">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
