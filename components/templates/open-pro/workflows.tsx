'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Users,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Workflows() {
  const workflows = [
    {
      icon: Code,
      title: "Design & Development",
      description: "From concept to code, streamline your entire development process",
      color: "from-blue-500 to-cyan-600",
      steps: ["Research", "Design", "Develop", "Test"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools",
      color: "from-purple-500 to-pink-600",
      steps: ["Plan", "Assign", "Review", "Deploy"]
    },
    {
      icon: Rocket,
      title: "Launch & Scale",
      description: "Deploy with confidence and scale your applications globally",
      color: "from-green-500 to-emerald-600",
      steps: ["Build", "Deploy", "Monitor", "Scale"]
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.03) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <motion.div 
            className="mx-auto max-w-3xl pb-16 text-center md:pb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 pb-3 font-medium text-indigo-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Zap className="w-5 h-5" />
              <span>Workflows</span>
            </motion.div>
            <motion.h2 
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Streamlined workflows for modern teams
            </motion.h2>
            <motion.p 
              className="text-lg text-indigo-200/65"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Optimize your development process with automated workflows and seamless integrations.
            </motion.p>
          </motion.div>

          {/* Workflows grid */}
          <motion.div 
            className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.title}
                variants={fadeInUp}
                className="group relative"
              >
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/25 p-8 backdrop-blur-sm border border-transparent group-hover:border-indigo-500/50"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background glow */}
                  <motion.div 
                    className={`absolute -inset-1 bg-gradient-to-r ${workflow.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div 
                    className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${workflow.color} shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <workflow.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative mb-4 font-nacelle text-xl font-semibold text-gray-200">
                    {workflow.title}
                  </h3>
                  <p className="relative mb-6 text-indigo-200/65">
                    {workflow.description}
                  </p>

                  {/* Workflow steps */}
                  <div className="relative space-y-3">
                    {workflow.steps.map((step, stepIndex) => (
                      <motion.div
                        key={step}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.8 + (index * 0.2) + (stepIndex * 0.1) 
                        }}
                      >
                        <motion.div 
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${workflow.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <CheckCircle className="w-3 h-3 text-white" />
                        </motion.div>
                        <span className="text-sm text-gray-300">{step}</span>
                        {stepIndex < workflow.steps.length - 1 && (
                          <motion.div
                            animate={{ 
                              x: [0, 5, 0],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: stepIndex * 0.5
                            }}
                          >
                            <ArrowRight className="w-3 h-3 text-indigo-400/50 ml-auto" />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)`
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="mx-auto max-w-3xl pt-16 text-center md:pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="relative inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-6 backdrop-blur-sm border border-indigo-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Target className="w-8 h-8 text-indigo-400" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-200 mb-1">
                  Ready to optimize your workflow?
                </h3>
                <p className="text-sm text-indigo-200/65">
                  Start automating your processes today and boost your team's productivity.
                </p>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-6 h-6 text-indigo-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}