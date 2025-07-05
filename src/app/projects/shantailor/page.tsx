import Link from 'next/link';

export default function ShanTailorProjectPage() {
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
              poster="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="flex gap-4">
            <Link href="https://www.sulekha.com/shan-tailors-madangir-delhi-3676083-contact-address" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href="https://github.com/yourusername/shantailor" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">ShanTailor</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            ShanTailor is a modern, full-featured custom tailoring and design management platform. It offers a robust backend API and a beautiful, responsive frontend, supporting user authentication, design browsing, category management, pricing tools, and admin features for a seamless tailoring experience.
          </p>
        </div>

        {/* Features Section - Expanded */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <b>Authentication & User Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Sign up/sign in with email/password (with email verification), password recovery, and profile management.</li>
                <li>Role-based access: Admins have elevated privileges for content management and moderation.</li>
              </ul>
            </li>
            <li>
              <b>Design & Category Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Browse, filter, and search custom designs by category on the dedicated Designs page.</li>
                <li>Admins can add, update, publish, or delete designs with images, specs, and pricing. Users can save favorite designs for quick access.</li>
                <li>Admins manage categories, pricing, and images for full control over the catalog.</li>
              </ul>
            </li>
            <li>
              <b>Pricing Tools:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>View competitive prices, compare with market rates, and use a price calculator to estimate custom outfit costs.</li>
              </ul>
            </li>
            <li>
              <b>Service Offerings:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Explore a wide range of tailoring services, including custom tailoring, wedding suits, men&apos;s tailoring, alterations, school uniforms, and more. Each service has a dedicated page with details.</li>
              </ul>
            </li>
            <li>
              <b>Informational & Utility Pages:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Home page with company intro, values, and featured designs. About Us, Contact, Legal, and user account management pages for a complete user experience.</li>
              </ul>
            </li>
            <li>
              <b>Admin Panel & Moderation:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Admin dashboard for managing users, designs, categories, images, and user activity. All publishing and content management actions are admin-only.</li>
              </ul>
            </li>
            <li>
              <b>Additional Features:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Image uploads for designs and profiles, user preferences, performance optimizations, and dark/light mode for accessibility.</li>
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
            <li>Prisma ORM (PostgreSQL database access, migrations)</li>
            <li>JWT Authentication (secure, stateless sessions, role-based access)</li>
            <li>Nodemailer (email verification, password reset, notifications)</li>
            <li>Stripe (payment integration for premium features)</li>
            <li>Image upload & optimization (fast, responsive image delivery)</li>
          </ul>
        </div>

        {/* Security, Error Handling & Performance Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>JWT authentication and role-based access control</li>
            <li>Input validation and sanitization for all forms and uploads</li>
            <li>Rate limiting to prevent abuse of sensitive endpoints</li>
            <li>Caching for frequently accessed data</li>
            <li>Duplicate email prevention and email verification</li>
            <li>API error interception and toast notifications</li>
            <li>Loading states and user-friendly error messages</li>
            <li>Session management and secure token storage</li>
            <li>Image upload validation and automatic cleanup</li>
            <li>Performance optimizations: efficient queries, responsive design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}