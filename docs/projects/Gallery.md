Gallery - https://gallery.technotes4u.com/

# Gallery

Gallery is a modern, user-friendly web application for managing personal photo collections. It allows users to securely upload, view, organize, and share images, with a responsive interface and robust backend features.

---

## 🚀 Technologies Used
- **PHP**: Backend logic and server-side processing
- **MySQL**: Relational database for user and image data
- **HTML, CSS, Bootstrap**: Responsive, mobile-friendly frontend
- **JavaScript & jQuery**: Dynamic UI interactions and AJAX

---

## 🌟 Key Features & How They Work

### 1. Authentication & User Management
- **Sign Up/Sign In**: Users register and log in with email and password. Sessions are managed securely.
- **Session Management**: User sessions persist across reloads; users must be logged in to access their images.
- **Logout**: Users can securely log out, ending their session.

### 2. Image Gallery & Management
- **Image Upload**: Authenticated users can upload multiple images at once. Only JPG, PNG, JPEG, and GIF formats are allowed. Duplicate filenames are automatically renamed.
- **Image Display**: Uploaded images are displayed in a responsive grid. Users can update image titles, view images in detail, and use a carousel for navigation.
- **Bin (Trash)**: Deleted images are moved to a bin. Users can restore or permanently delete images from the bin, or empty the bin entirely.
- **Image Sharing**: Users can generate secure, encrypted links to share images with others. Shared images are viewable via a special link.

### 3. User Interface & Experience
- **Navbar**: Provides navigation, login/signup modals, and logout functionality.
- **Responsive Design**: The UI adapts to all device sizes for a seamless experience.
- **AJAX Loading**: Images are loaded dynamically as users scroll, improving performance and usability.
- **Modals**: Bootstrap modals are used for login, signup, and image upload dialogs.
- **404 Page**: Custom error page for invalid routes.

---

## 🔒 Security & Validation
- **Input Validation**: Email addresses are sanitized and validated. Only allowed image types can be uploaded.
- **Session Security**: User sessions are managed via PHP sessions. Sensitive actions require authentication.
- **File Handling**: Uploaded files are renamed to prevent collisions and stored outside the web root when possible.
- **Encrypted Sharing**: Shared image links use OpenSSL encryption for security.

---

## ⚡ Performance
- **AJAX Pagination**: Images are loaded in batches for fast page loads.
- **Database Indexes**: Indexes on user and image tables improve query performance.

