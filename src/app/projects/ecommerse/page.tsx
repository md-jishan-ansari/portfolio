import ProjectDetailPage from '@/components/ProjectDetailPage';

export default function EcommerseProjectPage() {
  return (
    <ProjectDetailPage
      videoSrc="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
      videoPoster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      liveDemoUrl="https://ecommers.technotes4u.com/"
      githubUrl="https://github.com/yourusername/ecommerse"
      title="Ecommerse"
      overview="Ecommerse is a modern, full-featured e-commerce platform built with a focus on performance, security, and a seamless shopping experience. It features a robust admin dashboard, secure authentication, Stripe-powered checkout, and a modern, responsive UI."
      features={[
        {
          section: 'Authentication & User Management:',
          items: [
            'Sign up/sign in with email/password and Google OAuth for secure, flexible access.',
            'JWT-based sessions, role-based access (admin/user), and profile management with avatar and email.'
          ]
        },
        {
          section: 'Product Catalog & Management:',
          items: [
            'Browse, search, and filter products by category and brand.',
            'Detailed product views with images, stock status, and user reviews/ratings.',
            'Admins can add, edit, delete, and manage product stock and images.'
          ]
        },
        {
          section: 'Shopping Cart & Checkout:',
          items: [
            'Persistent cart management with quantity controls and localStorage support.',
            'Secure, multi-step Stripe checkout with address and payment forms.',
            'Order confirmation and in-app order status tracking for users.'
          ]
        },
        {
          section: 'Order Management:',
          items: [
            'Users can view order history and details, including payment and delivery status.',
            'Admins can view, dispatch, and mark orders as delivered, with efficient data grid management.'
          ]
        },
        {
          section: 'Admin Dashboard & Analytics:',
          items: [
            'Stats overview for sales, products, orders, users, and paid/unpaid orders.',
            'Sales and order analytics with interactive charts (Chart.js).',
            'Data grids for managing products and orders efficiently.'
          ]
        },
        {
          section: 'UI/UX & Community:',
          items: [
            'Responsive, mobile-friendly design with dark/light mode support.',
            'Toast notifications for user feedback, avatar/user menu, and advanced search/category navigation.'
          ]
        }
      ]}
      technologies={[
        'Next.js & React (frontend, SSR, routing, UI)',
        'TypeScript (type safety)',
        'Tailwind CSS & MUI (styling, responsive UI, admin dashboards)',
        'Prisma ORM (database access, migrations)',
        'NextAuth.js (authentication, Google OAuth, JWT sessions, role-based access)',
        'Stripe (secure payment processing, checkout)',
        'Axios (API requests)',
      ]}
      security={[
        'Input validation and sanitization with Zod and React Hook Form',
        'Secure authentication with NextAuth.js (JWT, OAuth)',
        'Role-based access control for admin/user features',
        'PCI-compliant Stripe payment processing',
        'Optimized queries and caching for fast performance',
        'Admin-only features protected at UI and API levels',
        'User-friendly error messages and toast notifications',
        'Efficient state management and data access',
        'Image upload validation and optimization',
        'Session management and secure token storage'
      ]}
    />
  );
}