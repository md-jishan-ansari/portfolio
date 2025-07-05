"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Award, Users, Zap, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    title: "Software Engineer",
    company: "WisdmLabs",
    location: "Pune, Maharashtra",
    period: "June 2023 – Present",
    startDate: "June 2023",
    endDate: "Present",
    duration: "2+ years",
    description: "Core team member at WisdmLabs, leading frontend and backend development for Moodle-based e-learning solutions. Drove major product initiatives, mentored interns, and delivered high-quality features with a focus on performance and user experience.",
    achievements: [
      "Developed and enhanced custom Moodle plugins and themes, improving platform performance and stability.",
      "Led frontend development of the Edwiser PageBuilder plugin and independently built the WhatsApp Notifications plugin (Node.js).",
      "Architected backend features like Course Discovery Filters and Setup Wizard for better navigation and onboarding.",
      "Engaged directly with clients for support, troubleshooting, and product demos.",
      "Mentored new interns and maintained the company demo site.",
      "Consistently recognized for on-time delivery and awarded Rising Star for technical leadership."
    ],
    special: [
      {
        icon: TrendingUp,
        label: "100% Performance Score",
        description: "Achieved 100% performance score every quarter"
      },
      {
        icon: Star,
        label: "Rising Star Award",
        description: "Won the Rising Star award for outstanding performance"
      }
    ],
    skills: ["HTML", "CSS", "SCSS", "JavaScript", "jQuery", "Node.js", "Express.js", "PHP", "MySQL", "PostgreSQL", "Moodle", "UI/UX", "Client Communication"],
    icon: 'wisdmlabs',
    featured: true
  },
  {
    title: "Full Stack Developer Intern",
    company: "KnockOnce – Complete Digital Solutions",
    location: "Bengaluru, India",
    period: "Mar 2022 – Nov 2022",
    startDate: "Mar 2022",
    endDate: "Nov 2022",
    duration: "9 months",
    description: "KnockOnce is a digital solutions company based in Bengaluru, India. As a Full Stack Developer Intern, I worked on both new and existing projects, collaborating with cross-functional teams to deliver production-ready features and apps.",
    achievements: [
      "Developed two food delivery apps: ZooD and Bater-Mate using React.js and Node.js, handling both frontend and backend tasks.",
      "Added and modified core functionalities in several existing projects, improving performance and user experience.",
      "Contributed to a major group project, Zaio Online Learning App, completing 5–6 small tasks and 4–5 larger features, including authentication and dashboard modules.",
      "Worked closely with designers and backend developers to ensure seamless integration and delivery.",
      "Gained hands-on experience with Bootstrap, React.js, and Node.js in a fast-paced, collaborative environment."
    ],
    skills: ["Bootstrap", "React.js", "Node.js", "Team Collaboration", "Agile", "UI Implementation"],
    icon: 'knockonce',
  }
];

const highlights = [
  {
    icon: Award,
    title: "Rising Star Award",
    description: "Recognized for taking initiative, demonstrating technical leadership, and delivering high-quality solutions"
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Mentor and train new interns, introducing them to company tools, codebase, and best practices"
  },
  {
    icon: Zap,
    title: "M.A.K.E.R. Mindset",
    description: "Proven mindset (Motivation, Accountability, Knowledge, Execution, Reliability) by owning critical product modules"
  }
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Cards column only, no timeline border */}
        <div className="flex flex-col gap-16">
          {experiences.map((exp, idx) => {
            let IconComp: React.ElementType | null = null;
            if (typeof exp.icon === 'function') {
              IconComp = exp.icon;
            }
            return (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`relative max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 border ${exp.featured ? 'border-blue-500 dark:border-blue-400' : 'border-gray-200 dark:border-gray-800'} mx-auto`}
              >
                {/* Timeline date/duration above card for all screens */}
                <div className="flex flex-col items-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-2">
                    {exp.startDate} - {exp.endDate} &bull; {exp.duration}
                  </span>
                  {/* Icon/logo above card */}
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-2 shadow-lg border-4 border-white dark:border-gray-800">
                    {exp.icon === 'wisdmlabs' ? (
                      <Image
                        src="/images/wisdmlabs.webp"
                        alt="WisdmLabs Logo"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    ) : exp.icon === 'knockonce' ? (
                      <Image
                        src="/images/knockonce_logo.jpg"
                        alt="KnockOnce Logo"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    ) : (IconComp && typeof IconComp === 'function' ? (
                      <IconComp className="h-6 w-6 text-white" />
                    ) : null)}
                  </span>
                </div>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                      {exp.icon === 'wisdmlabs' ? (
                        <Image
                          src="/images/wisdmlabs.webp"
                          alt="WisdmLabs Logo"
                          width={20}
                          height={20}
                          className="rounded-full object-cover"
                        />
                      ) : exp.icon === 'knockonce' ? (
                        <Image
                          src="/images/knockonce_logo.jpg"
                          alt="KnockOnce Logo"
                          width={20}
                          height={20}
                          className="rounded-full object-cover"
                        />
                      ) : (IconComp && typeof IconComp === 'function' ? (
                        <IconComp className="h-5 w-5 text-white" />
                      ) : null)}
                    </span>
                    <span className="font-bold text-lg text-gray-900 dark:text-white">{exp.company}</span>
                    {exp.featured && (
                      <span className="ml-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold">Featured</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{exp.location}</span>
                  </div>
                </div>
                <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{exp.title}</div>
                <div className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{exp.description}</div>

                {/* Special Achievements (badges/callouts) */}
                {exp.special && (
                  <div className="flex flex-col gap-2 mb-4">
                    {exp.special.map((s) => (
                      <div key={s.label} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg px-3 py-2">
                        <s.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-blue-800 dark:text-blue-300 text-xs">{s.label}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-300 ml-2">{s.description}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Achievements</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🏆 Key Highlights & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;