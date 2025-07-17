Shan Tailors -   https://www.sulekha.com/shan-tailors-madangir-delhi-3676083-contact-address

# ShanTailor

ShanTailor is a modern, full-featured custom tailoring and design management platform. It offers a robust backend API and a beautiful, responsive frontend, supporting user authentication, design browsing, category management, pricing tools, and admin features for a seamless tailoring experience.

---

## 🚀 Technologies Used

- **Next.js & React**: Fast, interactive, and SEO-friendly frontend.
- **Tailwind CSS**: Utility-first styling for responsive, modern design with dark/light mode.
- **Redux Toolkit**: State management for user sessions, designs, and UI state.
- **Node.js & Express**: High-performance backend API with modular architecture.
- **Prisma ORM**: Type-safe database access and migrations (PostgreSQL).
- **JWT Authentication**: Secure, stateless user sessions and role-based access control.
- **Nodemailer**: Email verification, password reset, and notifications.
- **Image Upload & Optimization**: Fast, responsive image uploads and delivery.

---

## 🌟 Key Features & How They Work

### 1. Authentication & User Management
- **Sign Up/Sign In**: Register with email/password (with email verification).
- **Password Recovery**: Forgot password and reset via email.
- **Profile Management**: View/edit profile, change password, and sign out from all devices.
- **Role-Based Access**: Admins have elevated privileges for content management.

### 2. Design & Category Management
- **Design Catalog**: Browse, filter, and search custom designs by category on the dedicated Designs page.
- **Create/Edit Designs**: Only admins can add, update, publish, or delete designs with images, specs, and pricing. There is no approval workflow—publishing is admin-only.
- **Save Designs**: Users can save favorite designs for quick access.
- **Category Management**: Admins manage categories, pricing, and images.

### 3. Pricing Tools
- **Pricing Page**: View competitive prices, compare with market rates, and use a price calculator to estimate custom outfit costs.

### 4. Service Offerings
- **Services Page**: Explore a wide range of tailoring services, including custom tailoring, wedding suits, men's tailoring, alterations, school uniforms, and more. Each service has a dedicated page with details.

### 5. Informational & Utility Pages
- **Home Page**: Showcases company introduction, values, and featured designs. No filtering is available here; filtering is on the Designs page.
- **About Us**: Learn about the company's story, values, expertise, and product range.
- **Contact Us**: Find contact information, location, working hours, and a contact form.
- **Legal Pages**: Privacy Policy, Terms of Service, and Refund Policy for compliance and transparency.

### 6. Admin Panel & Moderation
- **Admin Dashboard**: Admins can manage users, designs, categories, and images. All publishing and content management actions are admin-only.
- **User Management**: Admins can view all users, roles, and activity.
- **Image Management**: Upload, view, and delete general images for use across the platform.

### 7. Additional Features
- **Image Uploads**: Users and admins can upload images for designs and profiles.
- **User Preferences**: Save theme, preferences, and more.
- **Performance**: Caching and optimized queries for fast load times.
- **Dark/Light Mode**: User-selectable theme for better accessibility.

---

## 🗂️ Main Pages & Navigation

- **/**: Home – Company intro, values, and featured designs.
- **/about-us**: About Us – Company story, values, and expertise.
- **/contact-us**: Contact – Location, contact info, working hours, and form.
- **/prices**: Pricing – Price list, market comparison, and calculator.
- **/services**: Services – Overview of all tailoring services.
  - **/services/custom-tailoring-kahalgaon-bhagalpur**
  - **/services/wedding-suits-kahalgaon-bhagalpur**
  - **/services/tailor-for-men-kahalgaon-bhagalpur**
  - **/services/alteration-services-kahalgaon-bhagalpur**
  - **/services/school-uniform-tailoring-kahalgaon-bhagalpur**
  - **/services/online-tailor-kahalgaon-bhagalpur** (coming soon)
- **/designs**: Designs – Browse and filter all available designs by category.
- **/admin**: Admin Dashboard – Manage users, designs, categories, and images (admin only).
- **/myaccount**: User account management (profile, password, sign-out, etc.).
- **/privacy-policy**, **/terms-of-service**, **/refund-policy**: Legal and compliance pages.

---

## 🔒 Security & Performance Highlights
- **JWT Authentication**: Secure, scalable authentication for all users.
- **Role-Based Access Control**: Only admins can manage or publish content.
- **Input Validation & Sanitization**: Protects against common web vulnerabilities.
- **Rate Limiting**: Prevents abuse of sensitive endpoints.
- **Caching**: Frequently accessed data is cached for speed and efficiency.

---

## 🛡️ Comprehensive Error Handling

### Authentication & User Management
- **Duplicate Email Prevention**: System checks for existing users before registration with clear error messages.
- **Email Verification**: Required verification with 24-hour token expiry and resend functionality.
- **Invalid Credentials**: Generic security messages that don't reveal specific user details.
- **OAuth Account Linking**: Handles existing email accounts during OAuth sign-in with proper error handling.
- **Password Management**: Current password verification and 1-hour reset token expiry with secure token generation.
- **Profile Updates**: Image upload validation and automatic old image cleanup to prevent storage bloat.
- **Session Management**: Global logout functionality with token invalidation and automatic session expiry.


### Frontend Error Handling
- **Form Validation**: Zod schema validation with real-time error feedback and user-friendly messages.
- **API Error Interception**: Global axios interceptor for consistent error handling and user notifications.
- **Toast Notifications**: User-friendly error messages with proper categorization (success, error, warning).
- **Loading States**: Proper loading indicators and disabled states during async operations.
- **Input Sanitization**: Client-side validation for file uploads, form inputs, and data formatting.
