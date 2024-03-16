import React from 'react';
import {motion} from 'framer-motion';

export function SimpleButton() {
  return (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={()=>console.log('Thilina')}
        className={'button'}
    >
      <p>
          Press
      </p>
  </motion.button>
  )
}
