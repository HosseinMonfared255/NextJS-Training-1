
import Link from "next/link";
import ProjectCard from "./project-card";


export default function ProjectSection({ children , selectedProject=[] , numberOfProjects=0 , buttonLink='/' , buttonText='نمایش بیشتر'}) {
  const INITIAL_VISIBLE = 5;
  const numberToShow = numberOfProjects > 0 ? numberOfProjects : INITIAL_VISIBLE;
  const visibleProjects = selectedProject.slice(0, numberToShow);
  

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:right-0 after:w-[60px] after:h-1 after:bg-blue-600 after:rounded">
        {children}
      </h2>

      <div className="relative">
        <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] max-w-xs flex-shrink-0"
            >
              <ProjectCard
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                title={project.title}
                description={project.description}
                status={project.status}
              />
            </div>
          ))}
        </div>
        {/* Scroll icon, shown only on small screens and when overflow is possible */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
          <svg
            className="w-8 h-8 text-blue-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      {selectedProject.length > numberToShow && (
        <div className="flex justify-center mt-4">
          <Link
            href={buttonLink}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            {buttonText}  
          </Link>
        </div>
      )}
    </section>
  );
}
