import Link from 'next/link';

export default function EcommerseProjectPage() {
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
              poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <div className="flex gap-4">
            <Link href="https://ecommers.technotes4u.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-lg transition-all">Live Demo</Link>
            <Link href="https://github.com/yourusername/ecommerse" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">GitHub</Link>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Ecommerse</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Ecommerse is a modern, full-featured e-commerce platform built with a focus on performance, security, and a seamless shopping experience. It features a robust admin dashboard, secure authentication, Stripe-powered checkout, and a modern, responsive UI.
          </p>
        </div>

        {/* Features Section - Expanded */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Key Features & How They Work</h2>
          <ul className="space-y-6 text-gray-700 dark:text-gray-300">
            <li>
              <b>Authentication & User Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Sign up/sign in with email/password and Google OAuth for secure, flexible access.</li>
                <li>JWT-based sessions, role-based access (admin/user), and profile management with avatar and email.</li>
              </ul>
            </li>
            <li>
              <b>Product Catalog & Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Browse, search, and filter products by category and brand.</li>
                <li>Detailed product views with images, stock status, and user reviews/ratings.</li>
                <li>Admins can add, edit, delete, and manage product stock and images.</li>
              </ul>
            </li>
            <li>
              <b>Shopping Cart & Checkout:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Persistent cart management with quantity controls and localStorage support.</li>
                <li>Secure, multi-step Stripe checkout with address and payment forms.</li>
                <li>Order confirmation and in-app order status tracking for users.</li>
              </ul>
            </li>
            <li>
              <b>Order Management:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Users can view order history and details, including payment and delivery status.</li>
                <li>Admins can view, dispatch, and mark orders as delivered, with efficient data grid management.</li>
              </ul>
            </li>
            <li>
              <b>Admin Dashboard & Analytics:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Stats overview for sales, products, orders, users, and paid/unpaid orders.</li>
                <li>Sales and order analytics with interactive charts (Chart.js).</li>
                <li>Data grids for managing products and orders efficiently.</li>
              </ul>
            </li>
            <li>
              <b>UI/UX & Community:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Responsive, mobile-friendly design with dark/light mode support.</li>
                <li>Toast notifications for user feedback, avatar/user menu, and advanced search/category navigation.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Technologies Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Next.js & React (frontend, SSR, routing, UI)</li>
            <li>TypeScript (type safety)</li>
            <li>Tailwind CSS & MUI (styling, responsive UI, admin dashboards)</li>
            <li>Prisma ORM (database access, migrations)</li>
            <li>NextAuth.js (authentication, Google OAuth, JWT sessions, role-based access)</li>
            <li>Stripe (secure payment processing, checkout)</li>
            <li>Chart.js & react-chartjs-2 (analytics, admin dashboard charts)</li>
            <li>React Hook Form & Zod (form management, validation)</li>
            <li>Axios (API requests)</li>
            <li>React Toastify (user notifications)</li>
            <li>Moment.js (date formatting)</li>
            <li>Lodash (utility functions)</li>
            <li>Sharp (image processing)</li>
          </ul>
        </div>

        {/* Security, Error Handling & Performance Section - List Rich */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Security, Error Handling & Performance</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Input validation and sanitization with Zod and React Hook Form</li>
            <li>Secure authentication with NextAuth.js (JWT, OAuth)</li>
            <li>Role-based access control for admin/user features</li>
            <li>PCI-compliant Stripe payment processing</li>
            <li>Optimized queries and caching for fast performance</li>
            <li>Admin-only features protected at UI and API levels</li>
            <li>User-friendly error messages and toast notifications</li>
            <li>Efficient state management and data access</li>
            <li>Image upload validation and optimization</li>
            <li>Session management and secure token storage</li>
          </ul>
        </div>
      </div>
    </section>
  );
}