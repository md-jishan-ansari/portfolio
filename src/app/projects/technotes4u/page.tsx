import Link from 'next/link';

export default function TechNotes4UProjectPage() {
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
              poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="flex gap-4">
            <Link href="https://technotes4u.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href="https://github.com/yourusername/technotes4u" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">TechNotes4U</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            TechNotes4U is a modern, full-featured blogging and knowledge-sharing platform designed for developers and tech enthusiasts. It combines a beautiful, responsive UI with robust backend features, advanced content management, and a secure, scalable architecture.
          </p>
        </div>

        {/* Features Section - Expanded */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <b>Authentication & User Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Sign up/sign in with email/password (with email verification) or Google OAuth for convenience and security.</li>
                <li>Password recovery via email, profile management, and the ability to sign out from all devices.</li>
                <li>Role-based access: Admins have elevated privileges for moderation and publishing.</li>
              </ul>
            </li>
            <li>
              <b>Blog Creation & Publishing Workflow:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Rich text/MDX editor for creating blogs with tags, images, and SEO metadata.</li>
                <li>Drafts are saved by default; users can preview, edit, and manage their drafts.</li>
                <li>Non-admin users submit blogs for publication, which are reviewed and approved by admins.</li>
                <li>Blog hierarchy allows organization in parent-child categories for better navigation.</li>
              </ul>
            </li>
            <li>
              <b>Blog Interaction & Community Features:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Comment system with replies (up to 2 levels), edit/delete (with restrictions), and efficient loading.</li>
                <li>Likes/dislikes: Users can like published blogs; dislike counts are visible only to admins and blog owners.</li>
                <li>View counts for popularity metrics and distraction-free reading mode for focused reading.</li>
              </ul>
            </li>
            <li>
              <b>Admin Panel & Moderation:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Admins can view, approve/reject, unpublish, and mark blogs as featured.</li>
                <li>User management: View all users, their roles, blog counts, and comment activity.</li>
                <li>Analytics: Charts and tables for blog activity, user engagement, and platform growth.</li>
                <li>Latest activity: See the latest comments and message notes across the platform.</li>
              </ul>
            </li>
            <li>
              <b>Home, Explore, and Discovery:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Home page showcases featured, most viewed, and recent blogs.</li>
                <li>Users can search, filter by tags, and sort blogs by various criteria (newest, most liked, etc.).</li>
                <li>Dedicated explore page and blog cards with key info: title, description, owner, views, likes, and comments.</li>
              </ul>
            </li>
            <li>
              <b>Additional Features:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>SEO optimization for all blogs and pages, image uploads, user avatars, about/contact pages, and performance optimizations (caching, lazy loading, etc.).</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Technologies Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Next.js & React (frontend, SSR, SEO, UI)</li>
            <li>Tailwind CSS (responsive styling, dark/light mode)</li>
            <li>Redux Toolkit (state management)</li>
            <li>Node.js & Express (backend API, modular architecture)</li>
            <li>Prisma ORM (database access, migrations)</li>
            <li>JWT Authentication & Google OAuth (secure, stateless sessions, role-based access)</li>
            <li>MDX & Rich Text Editors (blog editing, media uploads)</li>
            <li>Nodemailer (email verification, password reset, notifications)</li>
            <li>Image optimization (responsive uploads, delivery)</li>
            <li>SEO & Analytics (meta tags, Open Graph, Google Analytics)</li>
            <li>Caching (performance, reduced database load)</li>
          </ul>
        </div>

        {/* Security, Error Handling & Performance Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>JWT & OAuth authentication with role-based access control</li>
            <li>Input validation and sanitization for all forms and uploads</li>
            <li>File upload security and type/size validation</li>
            <li>Rate limiting to prevent abuse of sensitive endpoints</li>
            <li>Session management and token refresh/logout</li>
            <li>Frontend: code splitting, lazy loading, memoization, debounced search</li>
            <li>Backend: database indexing, connection pooling, multi-level caching</li>
            <li>Image optimization and responsive delivery</li>
            <li>Comprehensive error handling: duplicate email prevention, email verification, invalid credentials, OAuth account linking, password management, profile updates, draft limits, content validation, publishing workflow, ownership protection, dependency checks, asset management, reply depth limitation, ownership verification, dependency protection, pagination, form validation, error boundaries, network resilience, user experience, fallback handling, data integrity, optimistic updates, cache management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}