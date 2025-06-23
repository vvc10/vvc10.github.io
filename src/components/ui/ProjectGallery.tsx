import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGalleryProps {
  images: string[];
  activeImage: number;
  setActiveImage: (index: number) => void;
}

const ProjectGallery = ({ images, activeImage, setActiveImage }: ProjectGalleryProps) => {
  return (
    <div className="space-y-8">
      {/* Main image */}
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={images[activeImage]}
            alt={`Project screenshot ${activeImage + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {activeImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-3 justify-center">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all ${activeImage === index ? 'ring-2 ring-primary' : 'opacity-50 hover:opacity-100'}`}
            onClick={() => setActiveImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;