"use client";

import { motion } from 'framer-motion';
import { useScrollAwareInView } from '@/lib/hooks/useScrollAwareInView';
import { ExternalLink, Github, Code, Palette, Mail } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [ref, inView] = useScrollAwareInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      slug: "technotes4u",
      title: "TechNotes4U",
      description: "A modern blogging and knowledge-sharing platform for developers with advanced content management and community features.",
      image: "/images/technotes4u.png",
      liveUrl: "https://technotes4u.com/",
      technologies: ["Next.js", "React", "Redux Toolkit", "Node.js", "Express", "Prisma ORM", "JWT", "Google OAuth", "MDX"],
      features: ["Blog Creation & Publishing", "Like & Comments", "Admin Panel & Moderation", "SEO Optimization", "User Management"],
      category: "Blog Platform"
    },
    {
      slug: "shantailor",
      title: "ShanTailor",
      description: "A modern custom tailoring and design management platform with robust backend API and beautiful responsive frontend.",
      image: "/images/shantailors.png",
      liveUrl: "http://shantailors.in",
      technologies: ["Next.js", "React", "Redux Toolkit", "Node.js", "Express", "Prisma ORM", "JWT", "Stripe", "Nodemailer"],
      features: ["Authentication & User Management", "Design & Category Management", "Pricing Tools", "Service Offerings", "Admin Panel"],
      category: "Business Platform"
    },
    {
      slug: "ecommerse",
      title: "Ecommerse",
      description: "A modern, full-featured e-commerce platform with admin dashboard, secure authentication, Stripe-powered checkout, and responsive UI.",
      image: "/images/ecommerse.png",
      liveUrl: "https://ecommers.technotes4u.com/",
      githubUrl: "https://github.com/md-jishan-ansari/ecommers",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "NextAuth.js", "Stripe", "MUI", "Chart.js"],
      features: ["Authentication & User Management", "Product Catalog & Management", "Shopping Cart & Checkout", "Order Management", "Admin Dashboard & Analytics"],
      category: "E-commerce"
    },
    {
      slug: "gallery",
      title: "Gallery",
      description: "A user-friendly web application for managing personal photo collections with secure upload, view, organize, and share features.",
      image: "/images/gallery.png",
      liveUrl: "https://gallery.technotes4u.com/",
      githubUrl: "https://github.com/md-jishan-ansari/gallery",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      features: ["Image Upload & Management", "Gallery Display", "Bin (Trash) System", "Image Sharing", "Responsive Design"],
      category: "Photo Management"
    },
    {
      slug: "memories",
      title: "Memories",
      description: "A modern social media platform for sharing and preserving personal memories through posts, images, and stories.",
      image: "/images/memories.png",
      liveUrl: "https://memories.technotes4u.com/",
      githubUrl: "https://github.com/md-jishan-ansari/memories-frontend",
      technologies: ["React", "Material-UI", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      features: ["Memory Creation & Management", "Social Interaction", "Discovery & Navigation", "User Experience", "Content Management"],
      category: "Social Media"
    },
    {
      slug: "ewm-agency",
      title: "EWM Agency",
      description: "A modern, animated company website for a Swiss-based digital agency with advanced frontend animations and professional presentation.",
      image: "/images/ewm.png",
      liveUrl: "https://nextjs-project-two-liart.vercel.app/",
      githubUrl: "https://github.com/md-jishan-ansari/nextjs-project",
      technologies: ["Next.js", "React", "Framer Motion", "Material-UI", "React Intersection Observer", "React Multi Carousel"],
      features: ["Animated Hero Section", "Service Showcase", "Portfolio/Work Page", "Blog & Contact Pages", "Advanced Animation System"],
      category: "Agency Website"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            modern web technologies, and user experience design.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.a
                  href={`/projects/${project.slug}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width="500"
                    height="500"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </motion.a>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-6 flex flex-col h-[calc(100%-12rem)]">
                <motion.a
                  href={`/projects/${project.slug}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </motion.a>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Code className="h-4 w-4 mr-1" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 text-xs flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-1 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-blue-600 dark:text-blue-400 text-xs">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r min-w-[150px] from-blue-600 to-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </motion.a>
                  {project?.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                  )}

                  <motion.a
                    href={`/projects/${project.slug}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 flex items-center justify-center"
                  >
                    Details
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;