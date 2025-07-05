"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Users, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Award,
      title: "30+ Agile Sprints",
      description: "All delivered on time with consistent quality"
    },
    {
      icon: Code,
      title: "Multiple Projects",
      description: "Personal projects and independent client work"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Guided new interns and maintained demo environments"
    },
    {
      icon: Zap,
      title: "Full Stack Expertise",
      description: "End-to-end development across all technologies"
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hello! I&apos;m <span className="gradient-text">Md Jishan Ansari</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A dedicated Full Stack Developer with expertise in Next.js, Node.js, and Moodle plugin/theme development.
                I&apos;m passionate about crafting robust, user-centric web applications that are both scalable and maintainable.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                🎓 Background
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I was born in <strong>Bhagalpur, Bihar</strong>, and earned my <strong>B.Tech in Electronics and Communication Engineering</strong>
                {" "}from <strong>Haldia Institute of Technology, West Bengal</strong>. Despite coming from a core engineering background,
                I transitioned into software development early on and found it to be my true passion.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                🎓 Education
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white">B.Tech in Electronics and Communication Engineering</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Haldia Institute of Technology, Haldia, West Bengal, India<br/>
                    <span className="text-xs">08/2019 - 07/2023</span>
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white">12th (BSEB Patna)</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    B.P.Verma College, Kahalgaon Bhagalpur<br/>
                    <span className="text-xs">04/2017 – 02/2018</span>
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white">10th (BSEB Patna)</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sharda Pathshala H S, Kahalgaon Bhagalpur<br/>
                    <span className="text-xs">04/2015 – 02/2016</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                🚀 Career Journey
              </h4>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Early Beginnings</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Started as a <strong>Full Stack Developer Intern</strong> at <strong>KnockOnce – Complete Digital Solutions</strong>,
                    working on multiple live projects using React.js, Next.js, Node.js, and Express.js.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Current Role</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Currently working at <strong>WisdmLabs</strong> as a <strong>Software Engineer</strong>,
                    specializing in building and maintaining advanced Moodle plugins and themes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                💡 Philosophy
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I strive to deliver <strong>high-quality solutions</strong>, continuously learn new technologies,
                and take initiative in every project I&apos;m involved in. My approach combines technical expertise
                with a strong focus on user experience and maintainable code architecture.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            🛠️ Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                React.js, Next.js, HTML, CSS, SCSS, JavaScript, jQuery
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Node.js, Express.js
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Database</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                MySQL, PostgreSQL
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specialization</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Moodle plugin/theme development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;