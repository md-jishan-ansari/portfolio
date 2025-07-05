"use client";

import React from 'react';

interface ProjectDetailsContentProps {
  intro: string;
  sections: Record<string, string>;
}

function renderSection(title: string, content: string) {
  // Remove the heading line
  const lines = content.split('\n').filter(Boolean);
  const headingIdx = lines.findIndex(line => line.startsWith('##'));
  const body = headingIdx >= 0 ? lines.slice(headingIdx + 1) : lines;
  // Render as paragraphs and lists
  return (
    <section className="mb-8" key={title}>
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3">{title}</h2>
      {body.map((line, idx) => {
        if (line.startsWith('- ')) {
          // List item
          return <li key={idx} className="ml-6 list-disc text-gray-700 dark:text-gray-200 text-base">{line.replace(/^- /, '')}</li>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={idx} className="text-lg font-semibold text-blue-600 dark:text-blue-200 mt-4 mb-2">{line.replace(/^### /, '')}</h3>;
        }
        if (line.trim() === '') {
          return null;
        }
        return <p key={idx} className="text-gray-700 dark:text-gray-200 text-base mb-2">{line}</p>;
      })}
    </section>
  );
}

const sectionOrder = [
  'Technologies Used',
  'Key Features & How They Work',
  'Main Pages & Navigation',
  'Security & Performance Highlights',
  'Comprehensive Error Handling',
];

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({ intro, sections }) => {
  // Extract description (first paragraph after # Title)
  const introLines = intro.split('\n').filter(Boolean);
  const titleIdx = introLines.findIndex(line => line.startsWith('# '));
  const description = introLines.slice(titleIdx + 1).find(line => line.trim() !== '');

  return (
    <div>
      {description && (
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{description}</p>
      )}
      {sectionOrder.map((section) =>
        sections[section] ? renderSection(section, sections[section]) : null
      )}
      {/* Render any other sections not in the order above */}
      {Object.entries(sections)
        .filter(([key]) => !sectionOrder.includes(key))
        .map(([key, content]) => renderSection(key, content))}
    </div>
  );
};

export default ProjectDetailsContent;