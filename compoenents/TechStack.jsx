'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { RiReactjsLine } from 'react-icons/ri'
import { RiNodejsFill } from 'react-icons/ri'
import { RiHtml5Fill } from 'react-icons/ri'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
const TechStack = () => {
    const icVariant = (duration)=>({
    initial : {y: -10},
    animate : {
        y: [10, -10],
    transition:{
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType : 'reverse'
    }
},
})
  return (
    <div>
      <div className='pb-20 md:flex justify-center items-center gap-10 mt-20'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className='my-10 text-center text-3xl font-bold font-mono'>Technologies</motion.h2>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration: 1.5}} animate className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={icVariant(1.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <RiReactjsLine className='text-5xl text-cyan-400  cursor-pointer hover:scale-105' />
                </motion.div>
                <motion.div variants={icVariant(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <RiNodejsFill className='text-5xl text-yellow-400 cursor-pointer hover:scale-105' />
                </motion.div>
                <motion.div variants={icVariant(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <RiHtml5Fill className='text-5xl text-red-600 cursor-pointer' />
                </motion.div>
                <motion.div variants={icVariant(7)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <RiTailwindCssFill className='text-5xl text-cyan-400 cursor-pointer hover:scale-105' />
                </motion.div>
                <motion.div variants={icVariant(9)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <RiJavascriptFill className='text-5xl text-yellow-400  cursor-pointer hover:scale-105' />
                </motion.div>
                <motion.div variants={icVariant(11)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <SiMongodb className='text-5xl text-green-500 cursor-pointer hover:scale-105' />
                </motion.div>
                <motion.div variants={icVariant(14)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <SiPython className='text-5xl hover:scale-105 cursor-pointer' style={{ color: '#3776AB' }} />
                </motion.div>
                <motion.div variants={icVariant(17)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105'>
                    <RiNextjsFill className='text-5xl hover:scale-105 cursor-pointer'  style={{ color: '#3776AB' }} />
                </motion.div>

            </motion.div>
            
        </div>
    </div>
  )
}

export default TechStack
