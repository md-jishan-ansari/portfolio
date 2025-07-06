import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function EWMProjectPage() {
  return (
    <ProjectDetailPage
      videoSrc="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
      videoPoster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://nextjs-project-two-liart.vercel.app/"
      githubUrl="https://github.com/yourusername/ewm-agency"
      title="EWM Agency"
      overview="EWM Agency Website is a modern, animated company website for a Swiss-based digital agency specializing in branding, web design, web development, and digital marketing. It showcases advanced frontend animations, responsive design, and professional agency presentation."
      features={[
        {
          section: 'Homepage & Hero Section:',
          items: [
            'Animated hero with bold typography and engaging messaging.',
            'Scroll-triggered animations using Intersection Observer.',
            'Service showcase with interactive links and hover animations.',
            'Portfolio preview featuring high-profile client work.',
            'Animated call-to-action links with smooth transitions.'
          ]
        },
        {
          section: 'Agency Page:',
          items: [
            'Detailed company story and Swiss heritage messaging.',
            'Awards section with grid layout for achievements.',
            'Technology stack highlights and professional positioning.'
          ]
        },
        {
          section: 'Services Page:',
          items: [
            'Four main service categories: Branding, Design, Web & Mobile Development, Digital Marketing.',
            'Detailed breakdowns for each service area.',
            'Interactive elements with hover animations and transitions.'
          ]
        },
        {
          section: 'Portfolio/Work Page:',
          items: [
            'Filterable portfolio by industry categories.',
            'Detailed project showcases and client diversity.',
            'Responsive grid adapts to all screen sizes.'
          ]
        },
        {
          section: 'Blog & Contact Pages:',
          items: [
            'Blog section for agency insights and updates.',
            'Professional contact forms and agency information.',
            'Smooth navigation between sections and pages.'
          ]
        },
        {
          section: 'Advanced Animation System:',
          items: [
            'Framer Motion integration for custom animation variants.',
            'Scroll-triggered and hover effects for interactive elements.',
            'Staggered animations and performance-optimized rendering.'
          ]
        },
        {
          section: 'Design & Animation Features:',
          items: [
            'Large, bold typography and high-contrast color scheme.',
            'Generous spacing, responsive design, and mobile navigation.',
            'Fade-in effects, hover states, and button interactions.',
            'Optimized bundles and lazy loading for performance.'
          ]
        }
      ]}
      technologies={[
        'Next.js 12.1.4 (SSR, routing, SEO)',
        'React 18.0.0 (hooks, functional components)',
        'Framer Motion 6.2.10 (advanced animation)',
        'Material-UI (MUI) 5.6.1 (UI components, design system)'
      ]}
      security={[
        'Intersection Observer for efficient scroll detection',
        'Lazy loading for images and components',
        'Scoped CSS Modules for maintainable styling',
        'Performance-optimized animation rendering',
        'Responsive design with mobile-first approach'
      ]}
    />
  );
}