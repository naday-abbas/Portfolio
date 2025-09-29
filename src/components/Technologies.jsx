import React from 'react'
import { TbBrandTailwind } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{duration: 1.5}} 
        className='my-20 text-center text-4xl'>Tehnologies</motion.h2>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration: 1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
                <RiHtml5Line className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className='p-4'>
                <FaCss3Alt className="text-7xl text-blue-600" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)} 
            className='p-4'>
                <TbBrandTailwind className="text-7xl  text-cyan-400" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)} className='p-4'>
                <DiJavascript1 className="text-7xl text-yellow-400" />
            </motion.div>
           <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)} className='p-4'>
                <RiReactjsLine className="text-7xl text-cyan-500" />
            </motion.div>
            {/*
            <div className='p-4'>
                <BiLogoPostgresql className="text-7xl" />
            </div> */}
        </motion.div>
      
    </div>
  )
}

export default Technologies
