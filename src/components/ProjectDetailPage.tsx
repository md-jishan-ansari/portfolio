import React from 'react';
import Link from 'next/link';

/*
Props for ProjectDetailPage:
- videoType: 'local' | 'youtube' | 'none'
- videoSrc: string (URL or YouTube embed src)
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
  videoType?: 'local' | 'youtube' | 'none';
  videoSrc?: string;
  videoPoster?: string;
  liveDemoUrl: string;
  githubUrl?: string;
  title: string;
  overview: string;
  features: FeatureSection[];
  technologies: string[];
  security: string[];
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  videoType = 'local',
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
    <section className="py-8 sm:py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        {/* Breadcrumbs */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link
                href="/projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Video Section */}
        {videoType !== 'none' && videoSrc && (
          <div className="flex flex-col items-center">
            <div className="w-full aspect-video max-h-[75vh] mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-lg">
              {videoType === 'local' ? (
                <video
                  src={videoSrc}
                  controls
                  className="w-full h-full max-h-[75vh] object-cover bg-black"
                  poster={videoPoster}
                />
              ) : videoType === 'youtube' ? (
                <iframe
                  src={videoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full min-h-[300px] max-h-[75vh] bg-black"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : null}
            </div>
          </div>
        )}
            <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 ">
              <Link href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow hover:shadow-lg transition-all text-sm sm:text-base">Live Demo</Link>
              {githubUrl && <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-sm sm:text-base">GitHub</Link>}
            </div>

        <div className="max-w-4xl mx-auto">

          {/* Title & Overview */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">{title}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto px-2">{overview}</p>
          </div>

          {/* Features Section - Expanded */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
            <ul className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <b>{feature.section}</b>
                  <ul className="list-disc pl-4 sm:pl-6 mt-1 space-y-1">
                    {feature.items.map((item, i) => (
                      typeof item === 'string' ? (
                        <li key={i}>{item}</li>
                      ) : (
                        <li key={i}>
                          {item.title}
                          <ul className="list-disc pl-4 sm:pl-6 mt-1 space-y-1">
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
          <div className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Security, Error Handling & Performance Section - List Rich */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
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