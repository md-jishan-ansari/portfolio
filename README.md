# Md Jishan Ansari - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my skills, experience, and projects as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Contact Form**: Functional contact form with email notifications

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Nodemailer** - Email sending functionality

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Skills.tsx           # Skills showcase
│   ├── Projects.tsx         # Projects grid
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
└── lib/                     # Utility functions
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue to Purple gradient (#667eea to #764ba2)
- **Background**: Light gray to white (dark mode: dark gray to black)
- **Text**: Dark gray to black (dark mode: light gray to white)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good readability

### Animations
- **Scroll-triggered**: Elements animate as they enter viewport
- **Hover effects**: Interactive elements with smooth transitions
- **Page transitions**: Smooth navigation between sections
- **Loading states**: Skeleton loaders and progress indicators

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components for specific styling
- Customize color scheme in `tailwind.config.ts`

### Images and Assets
- Replace placeholder images with your own
- Update profile picture in Hero component
- Add project screenshots and demo videos

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note**: For the contact form to work, you need to:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password from Google Account settings
3. Use the App Password in the `EMAIL_PASS` environment variable

### SEO Configuration
Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Keywords and author information

## 📊 Performance

The website is optimized for performance:
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **Caching**: Static assets are cached appropriately
- **Minification**: CSS and JS are minified in production

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory

### Other Platforms
The project can be deployed to any platform that supports Next.js.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: jishan.ansari@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
- **Portfolio**: [Your Portfolio URL]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Devicon](https://devicon.dev/) - Technology icons

---

Made with ❤️ by Md Jishan Ansari
