import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function ShanTailorProjectPage() {
  return (
    <ProjectDetailPage
      videoType="youtube"
      videoSrc="https://www.youtube.com/embed/1HVlkg9jObQ?si=QqfhUgpB4KwF82Z4"
      videoPoster="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://www.sulekha.com/shan-tailors-madangir-delhi-3676083-contact-address"
      githubUrl="https://github.com/yourusername/shantailor"
      title="ShanTailor"
      overview="ShanTailor is a modern, full-featured custom tailoring and design management platform. It offers a robust backend API and a beautiful, responsive frontend, supporting user authentication, design browsing, category management, pricing tools, and admin features for a seamless tailoring experience."
      features={[
        {
          section: 'Authentication & User Management:',
          items: [
            'Sign up/sign in with email/password (with email verification), password recovery, and profile management.',
            'Role-based access: Admins have elevated privileges for content management and moderation.'
          ]
        },
        {
          section: 'Design & Category Management:',
          items: [
            'Browse, filter, and search custom designs by category on the dedicated Designs page.',
            'Admins can add, update, publish, or delete designs with images, specs, and pricing. Users can save favorite designs for quick access.',
            'Admins manage categories, pricing, and images for full control over the catalog.'
          ]
        },
        {
          section: 'Pricing Tools:',
          items: [
            'View competitive prices, compare with market rates, and use a price calculator to estimate custom outfit costs.'
          ]
        },
        {
          section: 'Service Offerings:',
          items: [
            'Explore a wide range of tailoring services, including custom tailoring, wedding suits, men\'s tailoring, alterations, school uniforms, and more. Each service has a dedicated page with details.'
          ]
        },
        {
          section: 'Informational & Utility Pages:',
          items: [
            'Home page with company intro, values, and featured designs. About Us, Contact, Legal, and user account management pages for a complete user experience.'
          ]
        },
        {
          section: 'Admin Panel & Moderation:',
          items: [
            'Admin dashboard for managing users, designs, categories, images, and user activity. All publishing and content management actions are admin-only.'
          ]
        },
        {
          section: 'Additional Features:',
          items: [
            'Image uploads for designs and profiles, user preferences, performance optimizations, and dark/light mode for accessibility.'
          ]
        }
      ]}
      technologies={[
        'Next.js & React (frontend, SSR, SEO, UI)',
        'Tailwind CSS (responsive styling, dark/light mode)',
        'TypeScript (type safety)',
        'Redux Toolkit (state management)',
        'Node.js & Express (backend API, modular architecture)',
        'Prisma ORM (PostgreSQL database access, migrations)',
        'JWT Authentication (secure, stateless sessions, role-based access)'
      ]}
      security={[
        'JWT authentication and role-based access control',
        'Input validation and sanitization for all forms and uploads',
        'Rate limiting to prevent abuse of sensitive endpoints',
        'Caching for frequently accessed data',
        'Duplicate email prevention and email verification',
        'API error interception and toast notifications',
        'Loading states and user-friendly error messages',
        'Session management and secure token storage',
        'Image upload validation and automatic cleanup',
        'Performance optimizations: efficient queries, responsive design'
      ]}
    />
  );
}