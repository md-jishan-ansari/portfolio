import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function MemoriesProjectPage() {
  return (
    <ProjectDetailPage
      videoSrc="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
      videoPoster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://memories.technotes4u.com/"
      githubUrl="https://github.com/yourusername/memories"
      title="Memories"
      overview="Memories is a modern social media platform for sharing and preserving personal memories through posts, images, and stories. It features a beautiful, responsive UI with robust backend functionality, real-time interactions, and secure user management."
      features={[
        {
          section: 'Authentication & User Management:',
          items: [
            'Sign up/sign in with email/password and JWT authentication.',
            'Password recovery, profile management, and persistent login sessions.',
            'Automatic logout on token expiration for security.'
          ]
        },
        {
          section: 'Memory Creation & Management:',
          items: [
            'Create rich memory posts with titles, messages, tags, and images.',
            'Drag-and-drop or file picker image uploads with Cloudinary integration.',
            'Edit and delete posts with real-time updates.'
          ]
        },
        {
          section: 'Social Interaction & Engagement:',
          items: [
            'Like/unlike memories with real-time updates.',
            'Interactive commenting system and bookmark functionality.',
            'User profiles with memory collections and real-time UI updates.'
          ]
        },
        {
          section: 'Discovery & Navigation:',
          items: [
            'Home feed with pagination, advanced search, and tag-based discovery.',
            'Dedicated profile pages and saved memories collection.'
          ]
        },
        {
          section: 'User Experience & Interface:',
          items: [
            'Responsive, mobile-first design with Material-UI components.',
            'Modern UI, smooth animations, and user-friendly interactions.',
            'Loading states, error handling, and intuitive navigation.'
          ]
        },
        {
          section: 'Content Management & Organization:',
          items: [
            'Card-based layout, pagination, image optimization, and advanced filtering.',
            'Dedicated detail pages for full memory viewing and related content suggestions.'
          ]
        }
      ]}
      technologies={[
        'React & Material-UI (frontend, UI components, design system)',
        'Redux (state management)',
        'Node.js & Express (backend API, RESTful endpoints)',
        'MongoDB & Mongoose (NoSQL database, schema validation)',
        'JWT Authentication (secure sessions)',
        'Cloudinary (image storage, optimization)',
        'Multer (file upload handling)',
        'Nodemailer (email services)',
        'bcryptjs (password hashing)',
        'React Router (client-side routing)',
        'Moment.js (date/time formatting)',
        'React Toastify (notifications)'
      ]}
      security={[
        'JWT authentication with automatic token refresh and validation',
        'Password security with bcrypt hashing and salt rounds',
        'Comprehensive input validation and sanitization',
        'Secure image upload handling and type validation',
        'CORS configuration for secure API communication',
        'Centralized error management and user-friendly messages',
        'Database security with schema validation and secure connections',
        'Cloudinary integration for secure image uploads',
        'Performance optimizations: pagination, image optimization, and efficient data loading'
      ]}
    />
  );
}