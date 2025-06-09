import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star } from 'lucide-react';

const words = ['something', 'websites', 'experiences', 'interfaces', 'products'];

const CtaSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    
    return (
        <div className="bg-transparent text-white w-fit p-8 mx-auto flex flex-col gap-6 rounded-2xl shadow-lg text-center mt-16">
            <h1 className="text-[65px] leading-[1.2] font-medium text-center">
                Let's Build
                <span className="relative inline-block h-[70px] w-[250px] mx-4">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={words[index]}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0  text-[#d3c3ff] px-4 py-1  text-[60px] rounded-full font-serif font-light italic"
                        >

                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </span><br />
                that has value.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
                Get you required website in less than a weeks.
            </p>
            <a
                href="#contact"
                className="inline-blockpx-8 relative overflow-hidden bg-gradient-to-br w-fit mx-auto from-[#7c4cff] to-[#9872ff] text-white shadow-md border-t-[2px] border-t-white/30 hover:brightness-110 transition-all duration-300 hover:shadow-lg px-8 py-3 rounded-full text-lg shadow-md hover:brightness-110 transition-all duration-300"
            >
                Discuss Your Project
            </a>
       
        </div>
    );
};

export default CtaSection;


