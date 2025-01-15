import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectDetails } from './ProjectDetail';
import { FileExplorer } from './FileExplorer';
import { playSound } from '../app/utils/playsound';

export function CreationModal({ creation, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="bg-black/95 w-full max-w-5xl p-6 rounded-none border border-[#E84A4A]/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#E84A4A] text-xl tracking-wider">PROJECT DETAILS</h2>
            <button
              onClick={() => {
                playSound();
                onClose();
              }}
              className="text-[#E84A4A] hover:text-[#E84A4A]/80 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <ProjectDetails creation={creation} />
            <FileExplorer />
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => {
                playSound();
                window.open('#', '_blank');
              }}
              className="px-4 py-2  border border-[#E84A4A] text-[#E84A4A] hover:bg-[#E84A4A] hover:text-white transition-colors"
            >
              VIEW PROJECT DEMO
            </button>
            <button
              onClick={() => {
                playSound();
                onClose();
              }}
              className="px-4 py-2 border border-[#E84A4A]/0 text-gray-500 hover:text-gray-600 transition-colors"
            >
              BACK TO ALL PROJECTS
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}