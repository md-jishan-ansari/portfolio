import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function TechNotes4UProjectPage() {
  return (
    <ProjectDetailPage
      videoType="youtube"
      videoSrc="https://www.youtube.com/embed/uct33TPRZho?si=zLyZKq51THjBC9ro"
      videoPoster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://technotes4u.com/"
      title="TechNotes4U"
      overview="TechNotes4U is a modern, full-featured blogging and knowledge-sharing platform designed for developers and tech enthusiasts. It combines a beautiful, responsive UI with robust backend features, advanced content management, and a secure, scalable architecture."
      features={[
        {
          section: 'Authentication & User Management:',
          items: [
            'Sign up/sign in with email/password (with email verification) or Google OAuth for convenience and security.',
            'Password recovery via email, profile management, and the ability to sign out from all devices.',
            'Role-based access: Admins have elevated privileges for moderation and publishing.'
          ]
        },
        {
          section: 'Blog Creation & Publishing Workflow:',
          items: [
            'Rich text/MDX editor for creating blogs with tags, images, and SEO metadata.',
            'Drafts are saved by default; users can preview, edit, and manage their drafts.',
            'Non-admin users submit blogs for publication, which are reviewed and approved by admins.',
            'Blog hierarchy allows organization in parent-child categories for better navigation.'
          ]
        },
        {
          section: 'Blog Interaction & Community Features:',
          items: [
            'Comment system with replies (up to 2 levels), edit/delete (with restrictions), and efficient loading.',
            'Likes/dislikes: Users can like published blogs; dislike counts are visible only to admins and blog owners.',
            'View counts for popularity metrics and distraction-free reading mode for focused reading.'
          ]
        },
        {
          section: 'Admin Panel & Moderation:',
          items: [
            'Admins can view, approve/reject, unpublish, and mark blogs as featured.',
            'User management: View all users, their roles, blog counts, and comment activity.',
            'Analytics: Chart shows view counts for a given time interval; tables for user and blog data.',
            'Latest activity: See the latest comments and message notes across the platform.'
          ]
        },
        {
          section: 'Home, Explore, and Discovery:',
          items: [
            'Home page showcases featured, most viewed, and recent blogs.',
            'Users can search, filter by tags, and sort blogs by various criteria (newest, most liked, etc.).',
            'Dedicated explore page and blog cards with key info: title, description, owner, views, likes, and comments.'
          ]
        },
        {
          section: 'Additional Features:',
          items: [
            'SEO optimization for all blogs and pages, image uploads, user avatars, about/contact pages, and performance optimizations (caching, lazy loading, etc.).'
          ]
        }
      ]}
      technologies={[
        'Next.js & React (frontend, SSR, SEO, UI)',
        'Tailwind CSS (responsive styling, dark/light mode)',
        'TypeScript (type safety)',
        'Redux Toolkit (state management)',
        'Node.js & Express (backend API, modular architecture)',
        'Prisma ORM (database access, migrations)',
        'JWT Authentication & Google OAuth (secure, stateless sessions, role-based access)',
      ]}
      security={[
        'JWT & OAuth authentication with role-based access control',
        'Input validation and sanitization for all forms and uploads',
        'Session management and token refresh/logout',
        'Frontend: code splitting, lazy loading, memoization, debounced search',
        'Caching (performance, reduced database load)',
        'Comprehensive error handling:',
        '  - Duplicate email prevention',
        '  - Email verification',
        '  - Invalid credentials',
        '  - Password management',
        '  - Draft limits',
        '  - Content validation',
        '  - Publishing workflow',
        '  - Ownership protection',
        '  - Dependency checks',
        '  - Asset management',
        '  - Reply depth limitation',
        '  - Form validation',
        '  - Fallback handling',
        '  - Cache management'
      ]}
    />
  );
}