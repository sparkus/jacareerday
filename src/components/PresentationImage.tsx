import { motion } from 'framer-motion';
import Image from 'next/image';

interface PresentationImageProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export default function PresentationImage({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
  className = ''
}: PresentationImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
    >
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`rounded-xl ${className}`}
        />
      </div>
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-center mt-4 text-lg"
        >
          {caption}
        </motion.p>
      )}
    </motion.div>
  );
} 