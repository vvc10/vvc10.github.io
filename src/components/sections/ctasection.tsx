import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star } from 'lucide-react';
import Button from '../ui/Button';

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
        <div className="max-w-7xl bg-zinc-950 bg-gradient-to-br from-zinc-950 to-zinc-900 text-white shadow-lg border-t-[2px] border-t-zinc-500/30 hover:brightness-110 px-12 py-8 rounded-2xl mx-auto flex flex-col gap-6 text-center mt-16 justify-between">
            <h1 className="text-[65px] text-zinc-500 opacity-85 leading-[90px] mb-3 w-full font-medium text-center">
                Have an
                <span className="shine-on-hover ml-4 bg-zinc-950 text-zinc-200 border text-[55px] border-surface px-10 py-3 mr-3 font-serif font-light italic rounded-full">idea</span>
                in mind?
            </h1>


            {/* <h1 className="text-[65px] leading-[1.2] font-medium text-center">
                Let's Build
                <span className="relative inline-block h-[70px] w-[250px] mx-4">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={words[index]}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 text-primary px-4 py-1 text-[60px] rounded-full font-serif font-light italic"
                        >

                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </span><br />
                that has value.
            </h1> */}
            <p className="text-lg md:text-xl text-zinc-500 mb-6">
                Get you required website in less than a weeks         
            </p>
            <Button
                href="#contact"
                className="px-8 py-3 w-fit mx-auto rounded-full relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-700 text-zinc-900 shadow-md border-t-[2px] border-t-zinc-500 hover:brightness-110 transition-all duration-300 hover:shadow-lg"
            >
                Discuss Your Project
            </Button>
            {/* </div> */}
        </div>
    );
};

export default CtaSection;


