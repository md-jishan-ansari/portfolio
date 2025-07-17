import React from 'react'
import { motion } from 'framer-motion';

import { MapPin, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Timeline, TimelineItem } from './Timeline';

const experiences = [
    {
        title: "Software Engineer",
        company: "WisdmLabs",
        location: "Pune, Maharashtra",
        period: "Jan 2023 – Present",
        startDate: "Jan 2023",
        endDate: "Present",
        duration: "2+ years",
        description: "Core team member at WisdmLabs, leading frontend and backend development for Moodle-based e-learning solutions. Drove major product initiatives, mentored interns, and delivered high-quality features with a focus on performance and user experience.\n\nExplore my work on Moodle platforms: <a href=\"http://demo.tryremui.edwiser.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Edwiser RemUI Demo</a> | <a href=\"https://edwiser.org/page-builder-for-moodle/\" target=\"_blank\" rel=\"noopener noreferrer\">Edwiser Page Builder Demo</a>.",
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
        icon: 'wisdmlabs' as string | React.ElementType,
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
        description: "KnockOnce is a digital solutions company based in Bengaluru, India. As a Full Stack Developer Intern, I worked on both new and existing projects, collaborating with cross-functional teams to deliver production-ready features and apps.\n\nCollaborated with international teams on projects for <a href=\"https://www.zaio.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Zaio</a> (South Africa) and <a href=\"https://dy-namic.com/services.php\" target=\"_blank\" rel=\"noopener noreferrer\">Dynamic</a> (Dubai), contributing to real-world web solutions and branding platforms.",
        achievements: [
            "Developed two food delivery apps: ZooD and Bater-Mate using React.js and Node.js, handling both frontend and backend tasks.",
            "Added and modified core functionalities in several existing projects, improving performance and user experience.",
            "Contributed to a major group project, Zaio Online Learning App, completing 5–6 small tasks and 4–5 larger features, including authentication and dashboard modules.",
            "Worked closely with designers and backend developers to ensure seamless integration and delivery.",
            "Gained hands-on experience with Bootstrap, React.js, and Node.js in a fast-paced, collaborative environment."
        ],
        skills: ["Bootstrap", "React.js", "Node.js", "Team Collaboration", "Agile", "UI Implementation"],
        icon: 'knockonce' as string | React.ElementType,
    }
];

const WorkExperience = ({ inView }: { inView: any }) => {
    return (<>

        <Timeline>
            {experiences.map((exp, idx) => {
                return (
                    <TimelineItem key={exp.company + exp.title} year={`${exp.startDate} - ${exp.endDate}`}>
                    <motion.div

                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                        transition={{ duration: 0.7, delay: idx * 0.15 }}
                        className={`relative max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-10 border ${exp.featured ? 'border-blue-500 dark:border-blue-400' : 'border-gray-200 dark:border-gray-800'} mx-auto`}
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
                                ) : (typeof exp.icon === 'function' ? (
                                    React.createElement(exp.icon, { className: "h-6 w-6 text-white" })
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
                                    ) : (typeof exp.icon === 'function' ? (
                                        React.createElement(exp.icon, { className: "h-5 w-5 text-white" })
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
                        <div
                            className="text-gray-600 dark:text-gray-300 mb-4 text-sm"
                            dangerouslySetInnerHTML={{ __html: exp.description }}
                            style={{}}
                        />
                        <style jsx global>{`
                    .text-gray-600 a {
                      color: #2563eb;
                      text-decoration: underline;
                      font-weight: 500;
                      transition: color 0.2s;
                    }
                    .text-gray-600 a:hover {
                      color: #1e40af;
                    }
                    .dark .text-gray-300 a {
                      color: #60a5fa;
                    }
                    .dark .text-gray-300 a:hover {
                      color: #3b82f6;
                    }
                  `}</style>

                        {/* Special Achievements (badges/callouts) */}
                        {exp.special && (
                            <div className="flex flex-col gap-2 mb-4">
                                {exp.special.map((s) => (
                                    <div key={s.label} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg px-3 py-2">
                                        <s.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                                            <span className="font-semibold text-blue-800 dark:text-blue-300 text-xs">{s.label}</span>
                                            <span className="text-xs text-gray-600 dark:text-gray-300">{s.description}</span>
                                        </div>
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
                    </TimelineItem>
                );
            })}
        </Timeline>
        </>
    )
}

export default WorkExperience
