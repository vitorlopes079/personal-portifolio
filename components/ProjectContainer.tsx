import ImageSlider from "./ImageSlider";

interface ProjectContainerProps {
  title: string;
  text: string;
  images: string[];
  code: string;
  live: string;
  reversed?: boolean;
  techStack?: string[];
  privateRepo?: boolean;
  translations: Record<string, string>;
}

export default function ProjectContainer({
  title,
  text,
  images,
  code,
  live,
  reversed = false,
  techStack = [],
  privateRepo = false,
  translations,
}: ProjectContainerProps) {
  return (
    <div className="project-card bg-gray-100 rounded-xl shadow-lg mx-4 md:mx-8 lg:mx-16 mb-16 overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div
        className={`flex flex-col lg:flex-row lg:items-stretch ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Accent Bar */}
        <div className="bg-gray-800 h-1 lg:h-auto lg:w-1.5 flex-shrink-0"></div>

        {/* Image Section */}
        <div className="lg:w-1/2 overflow-hidden lg:min-h-full">
          <ImageSlider images={images} />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
          <h2 className="font-montserrat text-2xl lg:text-3xl text-gray-900 font-bold mb-4 uppercase tracking-wide">
            {title}
          </h2>

          {/* Tech Stack Tags */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <p className="text-base lg:text-lg font-montserrat font-medium text-gray-600 leading-relaxed mb-8">
            {text}
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-10">
              {live && (
                <a
                  href={live}
                  className="text-blue-400 hover:text-blue-700 underline font-bold lg:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translations.View_website}
                </a>
              )}

              {code && !privateRepo && (
                <a
                  href={code}
                  className="text-blue-400 hover:text-blue-700 underline font-bold lg:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translations.View_code}
                </a>
              )}
            </div>

            {privateRepo && (
              <p className="text-sm text-gray-500 italic">
                {translations.Private_repo}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
