import React from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../app/utils/playsound';

export function CarouselSlide({ creation, position, className, onSelect }) {
    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={className}
            onClick={() => {
                playSound();
                onSelect(creation);
            }}

        >

            <div className="relative w-full h-full border border-[#E84A4A]/20 cursor-pointer p-3">
                <div className="absolute w-2 h-2 top-0 left-0 right-0 bottom-0 border-2 border-transparent 
          border-t-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

                <div className="absolute w-2 h-2 top-0 right-0 bottom-0 border-2 border-transparent 
          border-t-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>

                <div className="absolute w-2 h-2  left-0 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

                <div className="absolute w-2 h-2 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>

                <img
                    src={creation.image}
                    alt={creation.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            playSound();
                        }}
                        className="w-fit text-center justify-end px-2 py-1 border-2 border-[#E84A4A] hover:bg-[#E84A4A] transition-colors"
                    >
                        VIEW LIVE
                    </button>
                </div>
            </div>
            <div className="relative mt-4 border-b-2 border-[#E84A4A] pb-2">
                <h2 className="text-[18px] tracking-wider font-medium text-red-400 mb-1 big-shoulders">
                    {creation.title}.....
                </h2>
                <p className="text-gray-400 text-sm">
                    {creation.description}
                </p>
                <div className="absolute w-2 h-2  left-0 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

      <div className="absolute w-2 h-2 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>
            </div>

            
        </motion.div>
    );
}

// ... rest of the component remains the same