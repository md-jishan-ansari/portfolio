import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function GalleryProjectPage() {
  return (
    <ProjectDetailPage
      videoType="youtube"
      videoSrc="https://www.youtube.com/embed/-EgHDS9YWWg?si=8BcKF1vDwFiQ9gGn"
      videoPoster="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://gallery.technotes4u.com/"
      githubUrl="https://github.com/yourusername/gallery"
      title="Gallery"
      overview="Gallery is a modern, user-friendly web application for managing personal photo collections. It allows users to securely upload, view, organize, and share images, with a responsive interface and robust backend features."
      features={[
        {
          section: 'Authentication & User Management:',
          items: [
            'Sign up/sign in with email and password, with secure session management.',
            'Sessions persist across reloads; users must be logged in to access their images.',
            'Secure logout functionality for all users.'
          ]
        },
        {
          section: 'Image Gallery & Management:',
          items: [
            'Upload multiple images at once (JPG, PNG, JPEG, GIF), with duplicate filenames automatically renamed.',
            'Responsive grid display, image detail view, and carousel navigation.',
            'Bin (Trash) system for deleted images, with restore and permanent delete options.',
            'Secure, encrypted links for sharing images with others.'
          ]
        },
        {
          section: 'User Interface & Experience:',
          items: [
            'Navbar for navigation, login/signup modals, and logout.',
            'Responsive design for all device sizes.',
            'AJAX loading for dynamic image loading and improved performance.',
            'Bootstrap modals for login, signup, and image upload dialogs.',
            'Custom 404 error page for invalid routes.'
          ]
        }
      ]}
      technologies={[
        'PHP (backend logic, server-side processing)',
        'MySQL (relational database for user and image data)',
        'HTML, CSS, Bootstrap (responsive, mobile-friendly frontend)',
        'JavaScript & jQuery (dynamic UI interactions, AJAX)'
      ]}
      security={[
        'Input validation and sanitization for email and image uploads',
        'Session security via PHP sessions and authentication checks',
        'File handling with automatic renaming and secure storage',
        'Encrypted sharing links using OpenSSL',
        'AJAX pagination for fast page loads',
        'Database indexes for improved query performance',
        'Custom error pages and user-friendly feedback'
      ]}
    />
  );
}