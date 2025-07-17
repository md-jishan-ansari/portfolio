"use client";

import { motion } from 'framer-motion';
import { useScrollAwareInView } from '@/lib/hooks/useScrollAwareInView';
import { MapPin, Award, Users, Zap, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import WorkExperience from './WorkExperience';



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
  const [ref, inView] = useScrollAwareInView({ triggerOnce: true, threshold: 0.1 });

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

        <WorkExperience inView={inView}  />



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