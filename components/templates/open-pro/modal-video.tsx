'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface ModalVideoProps {
  thumb?: string;
  thumbWidth?: number;
  thumbHeight?: number;
  thumbAlt?: string;
  video: string;
  videoWidth?: number;
  videoHeight?: number;
}

export default function ModalVideo({
  thumb = '/api/placeholder/800/450',
  thumbWidth = 800,
  thumbHeight = 450,
  thumbAlt = 'Modal video thumbnail',
  video,
  videoWidth = 1920,
  videoHeight = 1080,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center">
      {/* Video thumbnail */}
      <motion.button
        className="group relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl"
        onClick={() => setModalOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <img
          className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out group-hover:shadow-xl"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
        />
        {/* Play icon */}
        <motion.div
          className="absolute group-hover:scale-110 transition-transform duration-150 ease-in-out"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(99, 102, 241, 0.4)",
              "0 0 0 20px rgba(99, 102, 241, 0)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-80 transition-opacity duration-150 ease-in-out"
            viewBox="0 0 88 88"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                <stop stopColor="#EBF1FF" stopOpacity=".8" offset="0%" />
                <stop stopColor="#7E8FFF" offset="100%" />
              </linearGradient>
            </defs>
            <circle fill="url(#a)" cx="44" cy="44" r="44" />
            <path
              className="fill-current text-indigo-600"
              d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
            />
          </svg>
        </motion.div>
      </motion.button>

      {/* Modal backdrop */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            {/* Modal backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal dialog */}
            <motion.div
              className="relative w-full max-w-6xl mx-auto h-full flex items-center"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                <video
                  width={videoWidth}
                  height={videoHeight}
                  autoPlay
                  controls
                  className="w-full h-full"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Close button */}
              <motion.button
                className="absolute top-2 right-2 flex items-center justify-center w-12 h-12 bg-gray-50 hover:bg-white rounded-full shadow-lg transition-colors duration-200"
                onClick={() => setModalOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Close</span>
                <X className="w-6 h-6 text-gray-500" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}