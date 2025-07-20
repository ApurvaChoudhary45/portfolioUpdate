'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import Footer from '@/compoenents/Footer'
import { useState } from 'react'
const projects = [
  {
    id: 1,
    title: "KitchenSync - Restaurant Ordering App",
    description: "A full-stack restaurant app with customer and admin portals, featuring real-time order tracking and secure authentication.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    github: "https://github.com/ApurvaChoudhary45/kitchenSync",
    live: "https://kitchen-sync-woad.vercel.app/",
    image: "/picture/Ss1.png"
  },
  {
    id: 2,
    title: "Pixel Aura - Portfolio & UI Playground",
    description: "A stunning personal portfolio site showcasing UI animations, 3D transitions, and modern layout techniques.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/ApurvaChoudhary45/PixelAura",
    live: "https://pixel-aura-brown.vercel.app/",
    image: "/picture/Ss2.png"
  },
  {
    id: 3,
    title: "JobIndeed - Job Search Platform",
    description: "A job portal web app that allows users to search, filter, and apply for jobs with features like saved jobs and application tracking.",
    tech: ["Next.js", "React", "Tailwind", "Redux"],
    github: "https://github.com/ApurvaChoudhary45/JobsPortal",
    live: "https://jobs-portal-sigma.vercel.app/",
    image: "/picture/Ss3.png"
  },
  {
    id: 4,
    title: "Shopmoze - E-commerce Platform",
    description: "A complete e-commerce app with product listings, cart, wishlist, authentication, and a responsive admin dashboard.",
    tech: ["React", "Redux Toolkit", "Tailwind", "Vite"],
    github: "https://github.com/ApurvaChoudhary45/ShopMoze",
    live: "https://shop-moze.vercel.app/",
    image: "/picture/Ss4.png"
  }
];


const page = () => {
  const [daark, setdaark] = useState(false)
  const container = (delay) => ({
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1, y: 0,
      transition: {
        duration: 1,
        delay: delay
      }
    }
  })
  const switchMode = () => {
    setdaark(!daark)
  }

  return (
    <div>
      <div className='relative min-h-screen'>
        <img src={daark ? "https://images.pexels.com/photos/1213997/pexels-photo-1213997.jpeg" : 'https://images.pexels.com/photos/599708/pexels-photo-599708.jpeg'} alt="" className='absolute inset-0 w-full h-full object-fit' />
            
        <div className='relative z-50 md:flex justify-center items-center md:px-20 px-10 py-7'>
          <div >
            <motion.h1 className='md:text-4xl font-mono p-3 bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text font-bold text-xl' variants={container(0.5)} initial='initial' animate='animate'>apurva.codes</motion.h1>
          </div>
          <motion.nav className="w-full px-8 py-4 flex justify-end items-center gap-8 text-white " variants={container(1)} initial='initial' animate='animate'>
            <Link href='/' className='bg-gray-700 p-3 rounded-4xl hover:bg-gray-800 md:block hidden'>Back to Home</Link>
            <Link href="https://x.com/home?lang=en-in" className='hover:text-blue-400 text-3xl font-extralight'><FaSquareTwitter /></Link>
            <Link href="https://github.com/ApurvaChoudhary45" className='hover:text-gray-300 text-3xl font-extralight'><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/apurva-singh-choudhary-374991223/" className='hover:text-blue-700 text-3xl font-extralight'><FaLinkedin /></Link>
            <div>
              <label className="relative w-14 h-8 cursor-pointer">
                {/* Hidden checkbox */}
                <input type="checkbox" className="sr-only peer" onClick={switchMode} />

                {/* Slider background */}
                <div className="w-14 h-8 bg-transparent rounded-full border-1 peer-checked:bg-transparent transition duration-300"></div>

                {/* Toggle circle */}
                <div className="absolute left-1 top-1  w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-6">{daark ? '🌙' : '🌞'}</div>
              </label>
            </div>
          </motion.nav>

        </div>
        <div className='relative z-50 flex justify-center items-center px-20 py-7'>
          <section className="text-center px-4 py-8 max-w-3xl mx-auto">
            <motion.h1 className={`md:text-6xl font-bold text-transparent mb-8 bg-clip-text  text-2xl ${daark ? 'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600' : 'text-white'}`} variants={container(1)} initial='initial' animate='animate'>My Projects</motion.h1>
            <motion.p className="text-white md:text-2xl  font-mono md:mt-20 mt-10 text-sm" variants={container(1.3)} initial='initial' animate='animate'>
              Here’s a collection of some of the projects I’ve worked on — from full-stack applications to frontend UI challenges.
              These projects reflect my interest in clean code, problem solving, and building for real-world users.
            </motion.p>
          </section>
        </div>
        

      </div>
      <div className='mt-5 text-center text-4xl font-mono font-bold'>
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1.5 }} >Projects</motion.h1>
        <motion.div className='md:grid md:grid-cols-2 gap-5 px-10 mt-10 grid grid-cols-1 mb-4' whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 2 }} >
          {Array.isArray(projects) && projects?.map(item => {
            return (<div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300" key={item.id}>
              <img
                src={item.image}
                alt="Project Thumbnail"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />

              <h3 className="md:text-2xl font-semibold text-gray-800 mb-2 text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 md:text-lg text-sm">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">

                {item.tech.map((i, index) => {
                  return (<div key={index}>
                    <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow">
                      {i}
                    </span>
                  </div>)
                })}
              </div>

              <div className="flex justify-between items-center mt-10">
                <a
                  href="#"
                  className="text-white bg-gray-600 p-3 md:text-lg text-sm rounded-2xl font-medium hover:"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-white bg-green-400 md:text-lg text-sm font-medium p-3 rounded-3xl"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
            )
          })}
        </motion.div>
      </div>
      <Footer />
    </div>

  )
}

export default page
