import Link from 'next/link';

export default function GalleryProjectPage() {
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
              poster="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="flex gap-4">
            <Link href="https://gallery.technotes4u.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href="https://github.com/yourusername/gallery" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Gallery</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Gallery is a modern, user-friendly web application for managing personal photo collections. It allows users to securely upload, view, organize, and share images, with a responsive interface and robust backend features.
          </p>
        </div>

        {/* Features Section - Expanded */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <b>Authentication & User Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Sign up/sign in with email and password, with secure session management.</li>
                <li>Sessions persist across reloads; users must be logged in to access their images.</li>
                <li>Secure logout functionality for all users.</li>
              </ul>
            </li>
            <li>
              <b>Image Gallery & Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Upload multiple images at once (JPG, PNG, JPEG, GIF), with duplicate filenames automatically renamed.</li>
                <li>Responsive grid display, image detail view, and carousel navigation.</li>
                <li>Bin (Trash) system for deleted images, with restore and permanent delete options.</li>
                <li>Secure, encrypted links for sharing images with others.</li>
              </ul>
            </li>
            <li>
              <b>User Interface & Experience:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Navbar for navigation, login/signup modals, and logout.</li>
                <li>Responsive design for all device sizes.</li>
                <li>AJAX loading for dynamic image loading and improved performance.</li>
                <li>Bootstrap modals for login, signup, and image upload dialogs.</li>
                <li>Custom 404 error page for invalid routes.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Technologies Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>PHP (backend logic, server-side processing)</li>
            <li>MySQL (relational database for user and image data)</li>
            <li>HTML, CSS, Bootstrap (responsive, mobile-friendly frontend)</li>
            <li>JavaScript & jQuery (dynamic UI interactions, AJAX)</li>
          </ul>
        </div>

        {/* Security, Error Handling & Performance Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Input validation and sanitization for email and image uploads</li>
            <li>Session security via PHP sessions and authentication checks</li>
            <li>File handling with automatic renaming and secure storage</li>
            <li>Encrypted sharing links using OpenSSL</li>
            <li>AJAX pagination for fast page loads</li>
            <li>Database indexes for improved query performance</li>
            <li>Custom error pages and user-friendly feedback</li>
          </ul>
        </div>
      </div>
    </section>
  );
}