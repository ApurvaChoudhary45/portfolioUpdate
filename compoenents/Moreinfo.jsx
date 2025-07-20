'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Moreinfo = () => {
  return (

    <div className='relative z-50 mt-10'>
      <div className='max-w-4xl mx-auto text-center px-4 md:flex justify-center items-center'>
        <motion.h1 className='text-3xl font-mono font-semibold' whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} >About Me</motion.h1>
        <motion.p className='md:text-xl md:px-20 font-mono mt-5 px-5' whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration: 1.5}} >Hi, I'm Apurva Singh, a passionate Full-Stack Developer with a strong interest in building scalable web applications and solving real-world problems.

          With hands-on experience in React, Node.js, Python, and cloud infrastructure, I enjoy taking products from idea to production.

          Originally from a cloud engineering background, I've transitioned into full-stack development driven by my love for clean UI and solid backend architecture.

          Currently, I’m looking for roles where I can grow as an engineer and contribute to building impactful products.

          When I’m not coding, you’ll find me exploring new cafes or diving into tech podcasts.
        </motion.p>
      </div>
      
      
    </div>

  )
}

export default Moreinfo
