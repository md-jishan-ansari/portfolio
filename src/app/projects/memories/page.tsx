import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function MemoriesProjectPage() {
  return (
    <ProjectDetailPage
      videoType="local"
      videoSrc="/videos/memories.mp4"
      videoPoster="/images/memories.png"
      liveDemoUrl="https://memories.technotes4u.com/"
      githubUrl="https://github.com/md-jishan-ansari/memories-frontend"
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
        'Nodemailer (email services)',
        'bcryptjs (password hashing)'
      ]}
      security={[
        'JWT authentication with automatic token refresh and validation',
        'Password security with bcrypt hashing and salt rounds',
        'Centralized error management and user-friendly messages',
        'Database security with schema validation and secure connections',
        'Cloudinary integration for secure image uploads',
        'Performance optimizations: pagination, image optimization, and efficient data loading'
      ]}
    />
  );
}