import React from 'react';
import Link from 'next/link';

/*
Props for ProjectDetailPage:
- videoSrc: string
- videoPoster: string
- liveDemoUrl: string
- githubUrl: string
- title: string
- overview: string
- features: Array<{
    section: string,
    items: Array<string | { title: string, subitems: string[] }>
  }>
- technologies: string[]
- security: string[]
*/

export interface FeatureSection {
  section: string;
  items: Array<string | { title: string; subitems: string[] }>;
}

export interface ProjectDetailPageProps {
  videoSrc: string;
  videoPoster: string;
  liveDemoUrl: string;
  githubUrl: string;
  title: string;
  overview: string;
  features: FeatureSection[];
  technologies: string[];
  security: string[];
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  videoSrc,
  videoPoster,
  liveDemoUrl,
  githubUrl,
  title,
  overview,
  features,
  technologies,
  security,
}) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Video Section */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
            <video
              src={videoSrc}
              controls
              className="w-full h-full max-h-[75vh] object-cover bg-black"
              poster={videoPoster}
            />
          </div>
          <div className="flex gap-4">
            <Link href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Title & Overview */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">{overview}</p>
          </div>

          {/* Features Section - Expanded */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
            <ul className="space-y-6 text-gray-700 dark:text-gray-300">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <b>{feature.section}</b>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    {feature.items.map((item, i) => (
                      typeof item === 'string' ? (
                        <li key={i}>{item}</li>
                      ) : (
                        <li key={i}>
                          {item.title}
                          <ul className="list-disc pl-6 mt-1 space-y-1">
                            {item.subitems.map((sub, j) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Section - List Rich */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              {technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Security, Error Handling & Performance Section - List Rich */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
              {security.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;