
Ecommers - https://ecommers.technotes4u.com/

# Ecommerse

Ecommerse is a modern, full-featured e-commerce platform built with a focus on performance, security, and a seamless shopping experience. It features a robust admin dashboard, secure authentication, Stripe-powered checkout, and a modern, responsive UI.

---

## 🚀 Technologies Used
- **Next.js & React**: Modern frontend framework for SSR, routing, and UI.
- **Tailwind CSS**: Utility-first CSS for responsive, dark/light mode design.
- **TypeScript**: Type safety throughout the codebase.
- **Prisma ORM**: Type-safe database access and migrations.
- **NextAuth.js**: Authentication with Google OAuth and credentials, JWT sessions, and role-based access.
- **Stripe**: Secure payment processing and checkout.
- **MUI (Material UI)**: Admin dashboards and data grids.
- **Chart.js & react-chartjs-2**: Analytics and admin dashboard charts.
- **React Hook Form & Zod**: Form management and validation.
- **Axios**: API requests.
- **React Toastify**: User notifications.
- **Moment.js**: Date formatting.
- **Lodash**: Utility functions.
- **Sharp**: Image processing.


---

## 🌟 Key Features & How They Work

### 1. Authentication & User Management
- **Sign Up/Sign In**: Email/password and Google OAuth sign-in.
- **JWT Sessions**: Stateless, secure user sessions.
- **Role-Based Access**: Admin and user roles, with admin-only dashboard and management features.
- **Profile Management**: Avatar, name, and email (basic profile, no address book).

### 2. Product Catalog & Management
- **Product Listing**: Browse, search, and filter products by category and brand.
- **Product Details**: View images, brand, category, stock status, and reviews.
- **Product Reviews & Ratings**: Only users who have received a delivered order can review and rate products.
- **Admin Product Management**: Add, edit, delete, and toggle stock status for products. Image upload supported.

### 3. Shopping Cart & Checkout
- **Cart Management**: Add, remove, and update product quantities in the cart. Cart state is persisted in localStorage.
- **Quantity Controls**: Quantity limits enforced (1-10 per product).
- **Stripe Checkout**: Secure, multi-step checkout with address and payment forms. PCI-compliant payment processing.
- **Order Confirmation**: Users receive confirmation and can view order status in-app.

### 4. Order Management
- **User Orders**: Users can view their order history and order details, including payment and delivery status.
- **Admin Order Management**: Admins can view all orders, dispatch, and mark as delivered. Data grid for efficient management.
- **Order Status**: Pending, complete, dispatched, delivered.

### 5. Admin Dashboard & Analytics
- **Stats Overview**: Total sales, products, orders, users, paid/unpaid orders.
- **Analytics**: Sales and order analytics with charts (Chart.js).
- **Product & Order Management**: Data grids for managing products and orders.

### 6. UI/UX & Community
- **Responsive Design**: Mobile-friendly, modern UI.
- **Dark/Light Mode**: User-selectable theme.
- **Toast Notifications**: Feedback for actions (add to cart, checkout, errors, etc.).
- **Avatar & User Menu**: Profile access, order history, and admin dashboard (if authorized).
- **Search & Categories**: Search bar and category navigation for product discovery.

---

## 🔒 Security & Performance Highlights
- **Input Validation & Sanitization**: All forms validated with Zod and React Hook Form.
- **Secure Authentication**: NextAuth.js with JWT and OAuth.
- **Role-Based Access Control**: Admin-only features protected at both UI and API levels.
- **Stripe Payments**: PCI-compliant, secure payment processing.
- **Optimized Queries & Caching**: Efficient data access and state management.

---

Ecommerse is designed to be user-friendly, secure, and scalable, making it an ideal platform for modern online shopping and business growth.