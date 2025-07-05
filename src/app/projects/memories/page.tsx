import Link from 'next/link';

export default function MemoriesProjectPage() {
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
              poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="flex gap-4">
            <Link href="https://memories.technotes4u.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href="https://github.com/yourusername/memories" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Memories</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Memories is a modern social media platform for sharing and preserving personal memories through posts, images, and stories. It features a beautiful, responsive UI with robust backend functionality, real-time interactions, and secure user management.
          </p>
        </div>

        {/* Features Section - Expanded */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <b>Authentication & User Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Sign up/sign in with email/password and JWT authentication.</li>
                <li>Password recovery, profile management, and persistent login sessions.</li>
                <li>Automatic logout on token expiration for security.</li>
              </ul>
            </li>
            <li>
              <b>Memory Creation & Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Create rich memory posts with titles, messages, tags, and images.</li>
                <li>Drag-and-drop or file picker image uploads with Cloudinary integration.</li>
                <li>Edit and delete posts with real-time updates.</li>
              </ul>
            </li>
            <li>
              <b>Social Interaction & Engagement:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Like/unlike memories with real-time updates.</li>
                <li>Interactive commenting system and bookmark functionality.</li>
                <li>User profiles with memory collections and real-time UI updates.</li>
              </ul>
            </li>
            <li>
              <b>Discovery & Navigation:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Home feed with pagination, advanced search, and tag-based discovery.</li>
                <li>Dedicated profile pages and saved memories collection.</li>
              </ul>
            </li>
            <li>
              <b>User Experience & Interface:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Responsive, mobile-first design with Material-UI components.</li>
                <li>Modern UI, smooth animations, and user-friendly interactions.</li>
                <li>Loading states, error handling, and intuitive navigation.</li>
              </ul>
            </li>
            <li>
              <b>Content Management & Organization:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Card-based layout, pagination, image optimization, and advanced filtering.</li>
                <li>Dedicated detail pages for full memory viewing and related content suggestions.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Technologies Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>React & Material-UI (frontend, UI components, design system)</li>
            <li>Redux (state management)</li>
            <li>Node.js & Express (backend API, RESTful endpoints)</li>
            <li>MongoDB & Mongoose (NoSQL database, schema validation)</li>
            <li>JWT Authentication (secure sessions)</li>
            <li>Cloudinary (image storage, optimization)</li>
            <li>Multer (file upload handling)</li>
            <li>Nodemailer (email services)</li>
            <li>bcryptjs (password hashing)</li>
            <li>React Router (client-side routing)</li>
            <li>Moment.js (date/time formatting)</li>
            <li>React Toastify (notifications)</li>
          </ul>
        </div>

        {/* Security, Error Handling & Performance Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>JWT authentication with automatic token refresh and validation</li>
            <li>Password security with bcrypt hashing and salt rounds</li>
            <li>Comprehensive input validation and sanitization</li>
            <li>Secure image upload handling and type validation</li>
            <li>CORS configuration for secure API communication</li>
            <li>Centralized error management and user-friendly messages</li>
            <li>Database security with schema validation and secure connections</li>
            <li>Cloudinary integration for secure image uploads</li>
            <li>Performance optimizations: pagination, image optimization, and efficient data loading</li>
          </ul>
        </div>
      </div>
    </section>
  );
}