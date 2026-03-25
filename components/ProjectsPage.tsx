import ProjectContainer from "./ProjectContainer";
import { webProjects } from "@/lib/projects";

interface ProjectsPageProps {
  translations: Record<string, string>;
}

export default function ProjectsPage({ translations }: ProjectsPageProps) {
  return (
    <div className="py-12 lg:py-20">
      {/* Projects */}
      {webProjects.map((project, index) => (
        <ProjectContainer
          key={project.data.id}
          title={project.data.title}
          text={translations[project.textKey]}
          images={project.data.desktopImages}
          code={project.data.code}
          live={project.data.live}
          reversed={index % 2 === 1}
          techStack={project.data.techStack}
          privateRepo={project.data.privateRepo}
          translations={translations}
        />
      ))}
    </div>
  );
}
