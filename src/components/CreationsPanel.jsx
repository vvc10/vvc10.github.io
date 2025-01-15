import React, { useState } from 'react';
import  { CarouselSlide }  from './CreationSlide';
import { NavigationButton } from './NavigationButton';
import { CreationModal } from './CreationModal';
import { motion } from 'framer-motion';

 
export function CreationsPanel({
  creations,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  onSlideSelect
}) {
  const [selectedCreation, setSelectedCreation] = useState(null);
 
  
  const slideStyles = {
    prev: "absolute left-[15%] w-[25%] h-[40vh] transform -translate-x-1/2 perspective-[1000px] rotate-y-[-25deg] rotate-x-[-10deg] opacity-50 blur-md pointer-events-none", 
    current: "w-[30%] h-[50vh] z-10 bg-black  pointer-events-auto",  
    next: "absolute right-[15%] w-[25%] h-[40vh] transform translate-x-1/2 perspective-[1000px] rotate-y-[25deg] rotate-x-[-10deg] opacity-50 blur-md pointer-events-none",
  };
  

  const getSlideIndex = (offset) => {
    if (!creations || creations.length === 0) return 0;  // return 0 if creations is undefined or empty
    return (currentSlide + offset + creations.length) % creations.length;
  };
  
 

  

  const getSafeCreation = (index) => {
    if (!creations || creations.length === 0 || index < 0 || index >= creations.length) {
      return null;  // return null if creations is empty or index is invalid
    }
    return creations[index];  // return the creation at the valid index
  };
  
  return (
    <motion.div>
    <div className="fixed top-16 bottom-2 left-[15%] w-[70%] mx-auto iceland border-[.1px] border-dashed border-[#E84A4A]/20 p-14 overflow-scroll">

<div className="fixed w-2 h-2 top-16 left-[15%] border-2 border-transparent 
      border-t-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

    <div className="fixed w-2 h-2 top-16 right-[15%] border-2 border-transparent 
      border-t-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>

    <div className="fixed w-2 h-2 bottom-2 left-[15%] border-2 border-transparent 
      border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

    <div className="fixed w-2 h-2 bottom-2 right-[15%] border-2 border-transparent 
      border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>


      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[18px] text-primary mb-4 text-center tracking-[2px]"
      >
     CREATIONS
      </motion.h1>

        <div className="flex justify-center h-fit items-center">
          <NavigationButton direction="prev" onClick={onPrevSlide} />
  
          <div className="relative flex items-center justify-center w-full">
            <CarouselSlide
              creation={getSafeCreation(getSlideIndex(-1))}
              position="prev"
              className={slideStyles.prev}
              onSelect={setSelectedCreation}
            />
  
            <CarouselSlide
              creation={getSafeCreation(currentSlide)}   
              position="current"
              className={slideStyles.current}
              onSelect={setSelectedCreation}
            />
  
            <CarouselSlide
              creation={getSafeCreation(getSlideIndex(1))}
              position="next"
              className={slideStyles.next}
              onSelect={setSelectedCreation}
            />
          </div>
  
          <NavigationButton direction="next" onClick={onNextSlide} />
        </div>
      </div>
  
      <CreationModal
        creation={selectedCreation}
        isOpen={!!selectedCreation}
        onClose={() => setSelectedCreation(null)}
      />
  </motion.div>
  )};
  