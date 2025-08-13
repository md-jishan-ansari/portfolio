"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAwareInView } from '@/lib/hooks/useScrollAwareInView';
import { Github, Code, Palette, Mail, Star, ArrowRight, Sparkles, Zap, Play, Eye, Layers, Globe, Rocket, Zap as ZapIcon } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const [ref, inView] = useScrollAwareInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      slug: "technotes4u",
      title: "TechNotes4U",
      featured: true,
      description: "A modern blogging and knowledge-sharing platform for developers with advanced content management and community features.",
      image: "/images/technotes4u.png",
      liveUrl: "https://technotes4u.com/",
      technologies: ["Next.js", "React", "Redux Toolkit", "Node.js", "Express", "Prisma ORM", "JWT", "Google OAuth", "MDX"],
      features: ["Blog Creation & Publishing", "Like & Comments", "Admin Panel & Moderation", "SEO Optimization", "User Management"],
      category: "Blog Platform",
      color: "from-blue-500 to-purple-600",
      icon: Globe
    },
    {
      slug: "shantailor",
      title: "ShanTailor",
      featured: true,
      description: "A modern custom tailoring and design management platform with robust backend API and beautiful responsive frontend.",
      image: "/images/shantailors.png",
      liveUrl: "http://shantailors.in",
      technologies: ["Next.js", "React", "Redux Toolkit", "Node.js", "Express", "Prisma ORM", "JWT", "Stripe", "Nodemailer"],
      features: ["Authentication & User Management", "Design & Category Management", "Pricing Tools", "Service Offerings", "Admin Panel"],
      category: "Business Platform",
      color: "from-emerald-500 to-teal-600",
      icon: Rocket
    },
    {
      slug: "richer-editor",
      title: "Richer Editor",
      featured: true,
      description: "A modern, customizable React and Next.js rich text editor built on top of Tiptap and ProseMirror. Delivers a fast, extensible, and lightweight WYSIWYG experience.",
      image: "/images/richer-editor.png",
      liveUrl: "https://www.npmjs.com/package/richer-editor",
      githubUrl: "https://github.com/md-jishan-ansari/richer-editor",
      technologies: ["React", "Next.js", "TypeScript", "Tiptap", "ProseMirror", "Tailwind CSS", "NPM Package"],
      features: ["WYSIWYG Editing", "Code Block Support", "Customizable Extensions", "TypeScript Support"],
      category: "NPM Package",
      color: "from-orange-500 to-red-600",
      icon: ZapIcon
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
      category: "E-commerce",
      color: "from-indigo-500 to-blue-600",
      icon: Globe
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
      category: "Photo Management",
      color: "from-pink-500 to-rose-600",
      icon: Eye
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
      category: "Social Media",
      color: "from-violet-500 to-purple-600",
      icon: Sparkles
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
      category: "Agency Website",
      color: "from-cyan-500 to-blue-600",
      icon: Rocket
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,

      },
    },
  };

  const imageHoverVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: { scale: 1.08, rotateY: 8 }
  };

  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -3 },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-slate-900 dark:via-blue-900/10 dark:to-purple-900/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-200/50 dark:border-blue-700/50 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-blue-500" />
            <span className="text-base font-medium text-blue-700 dark:text-blue-300">Portfolio Showcase</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "160px" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="w-40 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-10"
          />
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed px-4">
            Explore my latest work showcasing expertise in full-stack development, modern web technologies, and innovative user experiences.
          </p>
        </motion.div>

        {/* Featured Projects - Creative Magazine Layout */}
        {featuredProjects.length > 0 && (
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Featured Projects
                </h3>
              </div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-16 sm:space-y-20 lg:space-y-24"
            >
              {featuredProjects.map((project, index) => {
                const ProjectIcon = project.icon;
                return (
                  <motion.article
                    key={project.title}
                    variants={itemVariants}
                    className={`relative group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/30 dark:border-slate-700/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2 p-6 sm:p-8 lg:p-8 lg:bg-white/70 lg:border-white/30 lg:dark:bg-slate-800/70 lg:dark:border-slate-700/60 lg:hover:shadow-2xl lg:hover:-translate-y-2`}
                  >
                    {/* Responsive Layout Container */}
                    <div className={`flex flex-col ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-6 sm:gap-8 lg:gap-16 items-center`}>
                      
                      {/* Creative Project Image Section */}
                      <motion.div
                        variants={imageHoverVariants}
                        className="relative w-full lg:w-1/2 order-1 lg:order-1"
                      >
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-500">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-1000"
                            unoptimized
                          />
                          
                          {/* Dynamic Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                          
                          {/* Floating Action Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="text-center text-white">
                              <motion.a
                                href={`/projects/${project.slug}`}
                                variants={buttonVariants}
                                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/25 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/40 hover:bg-white/35 transition-all duration-500 text-sm sm:text-base md:text-lg font-semibold"
                              >
                                <Eye className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                Explore Project
                              </motion.a>
                            </div>
                          </motion.div>

                          {/* Category Badge */}
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                            className="absolute top-4 sm:top-6 left-4 sm:left-6"
                          >
                            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold rounded-xl sm:rounded-2xl border border-white/60 dark:border-slate-700/60">
                              {project.category}
                            </span>
                          </motion.div>

                          {/* Featured Badge with Glow */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                            className="absolute top-4 sm:top-6 right-4 sm:right-6"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl blur-lg animate-pulse" />
                              <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2">
                                <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                                Featured
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Enhanced Project Content Section */}
                      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-2">
                        {/* Project Header with Icon */}
                        <div className="space-y-4 sm:space-y-6">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
                            >
                              <ProjectIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                            </motion.div>
                            <motion.a
                              href={`/projects/${project.slug}`}
                              className="block cursor-pointer group"
                            >
                              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 leading-tight">
                                {project.title}
                              </h3>
                            </motion.a>
                          </div>
                          
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies Section */}
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.technologies.slice(0, 6).map((tech) => (
                              <motion.span
                                key={tech}
                                whileHover={{ scale: 1.05, y: -1 }}
                                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                            {project.technologies.length > 6 && (
                              <span className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl border border-blue-200 dark:border-blue-700 shadow-lg">
                                +{project.technologies.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Key Features Grid */}
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3">
                            <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            {project.features.slice(0, 4).map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 + idx * 0.1 }}
                                className="text-slate-600 dark:text-slate-300 text-sm sm:text-base flex items-start bg-slate-50 dark:bg-slate-800/50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                              >
                                <span className="text-blue-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-base sm:text-lg">•</span>
                                {feature}
                              </motion.li>
                            ))}
                            {project.features.length > 4 && (
                              <li className="text-blue-600 dark:text-blue-400 text-sm sm:text-base col-span-full text-center py-2">
                                +{project.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={buttonVariants}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-lg sm:rounded-xl md:rounded-2xl text-center transition-all duration-500 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 min-w-[120px] sm:min-w-[140px] md:min-w-[160px] hover:from-blue-700 hover:to-purple-700"
                          >
                            <Play className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                            Live Demo
                          </motion.a>
                          
                          {project?.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variants={buttonVariants}
                              className="px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-500 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3"
                            >
                              <Github className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                              Code
                            </motion.a>
                          )}
                          
                          <motion.a
                            href={`/projects/${project.slug}`}
                            variants={buttonVariants}
                            className="px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold rounded-lg sm:rounded-xl md:rounded-2xl hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 transition-all duration-500 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3"
                          >
                            Details
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>
        )}

        {/* Other Projects - Creative Grid Layout */}
        {otherProjects.length > 0 && (
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex items-center gap-4 mb-16"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Other Projects
                </h3>
              </div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
            >
              {otherProjects.map((project, index) => {
                const ProjectIcon = project.icon;
                return (
                  <motion.article
                    key={project.title}
                    variants={itemVariants}
                    className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/30 dark:border-slate-700/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2"
                  >
                    {/* Enhanced Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.div
                        variants={imageHoverVariants}
                        className="relative h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </motion.div>
                      
                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="absolute top-4 left-4"
                      >
                        <span className="px-3 py-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl border border-white/60 dark:border-slate-700/60">
                          {project.category}
                        </span>
                      </motion.div>

                      {/* Hover Overlay with Action */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-700/70 to-transparent flex items-end justify-center pb-8"
                      >
                        <motion.a
                          href={`/projects/${project.slug}`}
                          variants={buttonVariants}
                          className="px-6 py-3 bg-white/95 backdrop-blur-sm text-slate-800 font-bold rounded-2xl transition-all duration-500 flex items-center gap-3"
                        >
                          View Details
                          <ArrowRight className="h-5 w-5" />
                        </motion.a>
                      </motion.div>
                    </div>

                    {/* Enhanced Project Content */}
                    <div className="p-8 space-y-6">
                      {/* Project Icon and Title */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <ProjectIcon className="h-6 w-6 text-white" />
                        </div>
                        <motion.a
                          href={`/projects/${project.slug}`}
                          className="block cursor-pointer group"
                        >
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </motion.a>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                          <Code className="h-4 w-4 text-blue-500" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg border border-blue-200 dark:border-blue-700">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold py-3 px-5 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 min-w-[120px]"
                        >
                          <Play className="h-4 w-4" />
                          Demo
                        </motion.a>
                        
                        {project?.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={buttonVariants}
                            className="px-5 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 flex items-center justify-center"
                          >
                            <Github className="h-4 w-4" />
                          </motion.a>
                        )}
                        
                        <motion.a
                          href={`/projects/${project.slug}`}
                          variants={buttonVariants}
                          className="px-5 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 text-sm font-bold rounded-xl hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Details
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>
        )}

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="relative inline-block"
          >

            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/30 dark:border-slate-700/60 rounded-3xl p-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Ready to Collaborate?
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl text-lg leading-relaxed">
                Let&apos;s discuss your next project and bring your ideas to life with cutting-edge technology and exceptional user experience.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-500 text-xl hover:from-blue-700 hover:to-purple-700"
              >
                <Mail className="mr-3 h-6 w-6" />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;