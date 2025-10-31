'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "This platform has transformed how we build and deploy our products. The AI-driven tools are incredibly intuitive and have cut our development time in half.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      content: "The workflows are seamless and the collaboration features are top-notch. Our team productivity has increased by 300% since we started using this platform.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Lead Developer",
      company: "DevStudio",
      content: "Outstanding design tools and incredible performance. The learning curve was minimal and we were up and running within hours.",
      avatar: "/api/placeholder/60/60",
      rating: 5
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 10,
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
              <Star className="w-5 h-5 fill-current" />
              <span>Testimonials</span>
            </motion.div>
            <motion.h2 
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Loved by developers worldwide
            </motion.h2>
            <motion.p 
              className="text-lg text-indigo-200/65"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join thousands of teams who trust our platform to build exceptional products.
            </motion.p>
          </motion.div>

          {/* Testimonials grid */}
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/25 p-8 backdrop-blur-sm border border-transparent group-hover:border-indigo-500/50 group-hover:from-indigo-500/10"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
                  }}
                >
                  {/* Quote icon */}
                  <motion.div 
                    className="absolute top-6 right-6 opacity-20"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <Quote className="w-8 h-8 text-indigo-400" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div 
                    className="mb-6 flex gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <blockquote className="mb-6 text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover bg-gray-700"
                        />
                      </div>
                      {/* Online indicator */}
                      <motion.div 
                        className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-200">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-indigo-200/65">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </motion.div>

                  {/* Background glow effect */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(168, 85, 247, 0) 100%)",
                        "linear-gradient(to right, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(99, 102, 241, 0) 100%)",
                        "linear-gradient(to right, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(168, 85, 247, 0) 100%)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom stats */}
          <motion.div 
            className="mx-auto max-w-4xl pt-16 md:pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { label: "Happy Customers", value: "10,000+" },
                { label: "Projects Completed", value: "50,000+" },
                { label: "Countries Served", value: "120+" },
                { label: "Average Rating", value: "4.9/5" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-indigo-400 mb-2"
                    animate={{ 
                      color: [
                        "rgba(99, 102, 241, 1)",
                        "rgba(168, 85, 247, 1)",
                        "rgba(99, 102, 241, 1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}