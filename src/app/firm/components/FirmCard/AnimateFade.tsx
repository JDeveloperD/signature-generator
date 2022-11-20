import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const AnimateFade = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateFade;
