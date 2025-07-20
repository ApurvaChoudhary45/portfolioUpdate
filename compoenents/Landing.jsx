'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub} from 'react-icons/fa6'
import { FaSquareTwitter } from 'react-icons/fa6'
import { useState } from 'react'

const Landing = () => {
    const [daark, setdaark] = useState(false)
    const container = (delay)=>({
        initial : {opacity : 0, y:-100},
        animate : {opacity : 1, y:0, 
            transition : {duration: 1,
                delay: delay
            }
        }
    })
    const bottom = (delay)=>({
        initial : {opacity : 0, y:100},
        animate : {opacity : 1, y:0, 
            transition : {duration: 1,
                delay: delay
            }
        }
    })
    const switchMode = ()=>{
        setdaark(!daark)
    }
    return (
        <>
        <div className='relative min-h-screen overflow-hidden'>
            <img src={daark ? "https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg" : 'https://images.pexels.com/photos/814490/pexels-photo-814490.jpeg'} alt="" className='absolute inset-0 w-full h-full  object-fill' />
            <div className='relative z-50 md:flex justify-center items-center md:px-20 px-10 py-7'>
                <div>
                    <motion.h1 className='md:text-4xl text-2xl font-mono p-3  text-white bg-clip-text font-bold' variants={container(0.5)} initial='initial' animate='animate'>apurva.codes</motion.h1>
                </div>
                
                <motion.nav className="w-full px-8 py-4 flex justify-end items-center gap-8 text-white " variants={container(1)} initial='initial' animate='animate'>
                    
                    <Link href="https://x.com/home?lang=en-in" className='hover:text-blue-400 text-3xl font-extralight '><FaSquareTwitter/></Link>
                    <Link href="https://github.com/ApurvaChoudhary45" className='hover:text-gray-300 text-3xl font-extralight'><FaGithub/></Link>
                    <Link href="https://www.linkedin.com/in/apurva-singh-choudhary-374991223/" className='hover:text-blue-700 text-3xl font-extralight'><FaLinkedin/></Link>
                    <label className="relative w-14 h-8 cursor-pointer">
                        {/* Hidden checkbox */}
                        <input type="checkbox" className="sr-only peer" onClick={switchMode} />

                        {/* Slider background */}
                        <div className="w-14 h-8 bg-transparent rounded-full border-1 peer-checked:bg-transparent transition duration-300"></div>

                        {/* Toggle circle */}
                        <div className="absolute left-1 top-1  w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-6">{daark ? '🌙' : '🌞'}</div>
                    </label>

                    
                </motion.nav>
            </div>
            <div className='relative z-50 w-full flex justify-center items-center md:mt-40 mt-7 px-40 text-center' >
                <div className="md:w-full md:text-center space-y-4 ">
                    <motion.h1 className={`text-4xl md:text-5xl font-extrabold font-mono ${daark ? 'text-white' : 'text-black'}`} variants={bottom(0.5)} initial='initial' animate='animate'>
                        Hi, I'm Apurva Singh Choudhary
                    </motion.h1>
                    <motion.p className={`text-xl md:text-2xl font-mono ${daark ? 'text-white' : 'text-black'}` } variants={bottom(1)} initial='initial' animate='animate'>
                        Full Stack Developer
                    </motion.p>
                   <motion.p className='text-xl md:text-2xl text-gray-300' variants={bottom(1.5)} initial='initial' animate='animate'>
                    Turning ideas into interactive experiences.
                   </motion.p>
                </div>

            </div>
            <motion.div className='relative z-50 text-center mt-10 ' variants={bottom(2.5)} initial='initial' animate='animate'>
             <Link href='/Project'><button className="mt-4 px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-teal-200 transition text-center cursor-pointer">
                        View My Projects
            </button></Link>
            </motion.div>
        </div>
        
        </>
    )
}

export default Landing
