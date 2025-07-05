import Link from 'next/link';

export default function EWMProjectPage() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Video Section */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-full max-w-3xl aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
            <video
              src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
              controls
              className="w-full h-full object-cover bg-black"
              poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="flex gap-4">
            <Link href="https://nextjs-project-two-liart.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href="https://github.com/yourusername/ewm-agency" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">EWM Agency</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            EWM Agency Website is a modern, animated company website for a Swiss-based digital agency specializing in branding, web design, web development, and digital marketing. It showcases advanced frontend animations, responsive design, and professional agency presentation.
          </p>
        </div>

        {/* Features Section - Expanded */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <b>Homepage & Hero Section:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Animated hero with bold typography and engaging messaging.</li>
                <li>Scroll-triggered animations using Intersection Observer.</li>
                <li>Service showcase with interactive links and hover animations.</li>
                <li>Portfolio preview featuring high-profile client work.</li>
                <li>Animated call-to-action links with smooth transitions.</li>
              </ul>
            </li>
            <li>
              <b>Agency Page:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Detailed company story and Swiss heritage messaging.</li>
                <li>Awards section with grid layout for achievements.</li>
                <li>Technology stack highlights and professional positioning.</li>
              </ul>
            </li>
            <li>
              <b>Services Page:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Four main service categories: Branding, Design, Web & Mobile Development, Digital Marketing.</li>
                <li>Detailed breakdowns for each service area.</li>
                <li>Interactive elements with hover animations and transitions.</li>
              </ul>
            </li>
            <li>
              <b>Portfolio/Work Page:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Filterable portfolio by industry categories.</li>
                <li>Detailed project showcases and client diversity.</li>
                <li>Responsive grid adapts to all screen sizes.</li>
              </ul>
            </li>
            <li>
              <b>Blog & Contact Pages:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Blog section for agency insights and updates.</li>
                <li>Professional contact forms and agency information.</li>
                <li>Smooth navigation between sections and pages.</li>
              </ul>
            </li>
            <li>
              <b>Advanced Animation System:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Framer Motion integration for custom animation variants.</li>
                <li>Scroll-triggered and hover effects for interactive elements.</li>
                <li>Staggered animations and performance-optimized rendering.</li>
              </ul>
            </li>
            <li>
              <b>Design & Animation Features:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Large, bold typography and high-contrast color scheme.</li>
                <li>Generous spacing, responsive design, and mobile navigation.</li>
                <li>Fade-in effects, hover states, and button interactions.</li>
                <li>Optimized bundles and lazy loading for performance.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Technologies Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Next.js 12.1.4 (SSR, routing, SEO)</li>
            <li>React 18.0.0 (hooks, functional components)</li>
            <li>Framer Motion 6.2.10 (advanced animation)</li>
            <li>Material-UI (MUI) 5.6.1 (UI components, design system)</li>
            <li>React Intersection Observer 8.34.0 (scroll-triggered animations, lazy loading)</li>
            <li>React Multi Carousel 2.8.0 (responsive carousels)</li>
            <li>React Scroll 1.8.7 (smooth navigation)</li>
            <li>CSS Modules (scoped styling)</li>
            <li>Custom CSS (tailored animations, responsive design)</li>
          </ul>
        </div>

        {/* Security, Error Handling & Performance Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Intersection Observer for efficient scroll detection</li>
            <li>Lazy loading for images and components</li>
            <li>Optimized bundles with Next.js code splitting</li>
            <li>Scoped CSS Modules for maintainable styling</li>
            <li>Performance-optimized animation rendering</li>
            <li>Responsive design with mobile-first approach</li>
            <li>Custom error pages and graceful fallbacks</li>
            <li>Accessibility and touch-friendly navigation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}