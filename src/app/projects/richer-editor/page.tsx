import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function RicherEditorProjectPage() {
  return (
    <ProjectDetailPage
      videoType="youtube"
      videoSrc="https://www.youtube.com/embed/AzkimVvlim8?si=wy8QQEOxEToX6puF"
      videoPoster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://www.npmjs.com/package/richer-editor"
      githubUrl="https://github.com/md-jishan-ansari/richer-editor"
      title="Richer Editor"
      overview="Richer Editor is a modern, customizable React and Next.js rich text editor built on top of Tiptap and ProseMirror. It delivers a fast, extensible, and lightweight WYSIWYG experience for blogs, CMS, and web applications. The package is designed to be developer-friendly with TypeScript support, modular architecture, and extensive customization options."
      features={[
        {
          section: 'Core Editor Features:',
          items: [
            'Modern WYSIWYG interface with intuitive editing experience',
            'Built with Tiptap for robust, extensible functionality',
            'TypeScript support for type safety and better developer experience',
            'Lightweight and fast performance optimized for modern web applications'
          ]
        },
        {
          section: 'Rich Text Capabilities:',
          items: [
            'Text formatting: Bold, italic, underline, strikethrough',
            'Headings and paragraph styles with proper semantic markup',
            'Bullet and numbered lists with nested support',
            'Blockquotes and code blocks with syntax highlighting',
            'Links with customizable attributes and validation'
          ]
        },
        {
          section: 'Code Block & Language Support:',
          items: [
            'Automatic language detection from clipboard content',
            'Support for 50+ programming languages',
            'Manual language selection with dropdown interface',
          ]
        },
        {
          section: 'Customization & Extensions:',
          items: [
            'Modular extension system for adding new features',
            'Customizable themes including GitHub-style appearance',
            'Configurable toolbar and menu options',
            'Extensible architecture for custom implementations',
            'Plugin system for third-party integrations'
          ]
        },
        {
          section: 'Integration & Compatibility:',
          items: [
            'Seamless React and Next.js integration',
            'Responsive design that works on all device sizes',
            'Accessibility features for inclusive user experience',
            'SEO-friendly output with clean HTML markup',
            'Cross-browser compatibility and modern web standards'
          ]
        },
        {
          section: 'Developer Experience:',
          items: [
            'Comprehensive API documentation and examples',
            'Easy installation via npm with minimal dependencies',
            'Well-structured component architecture',
            'Extensive customization options for different use cases',
            'Active maintenance and community support'
          ]
        }
      ]}
      technologies={[
        'React (core framework and component system)',
        'Next.js (SSR support and optimization)',
        'TypeScript (type safety and developer experience)',
        'Tiptap (rich text editor foundation)',
        'Tailwind CSS (styling and responsive design)',
        'NPM Package (distribution and version management)'
      ]}
      security={[ ]}
    />
  );
}
