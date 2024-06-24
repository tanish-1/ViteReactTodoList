import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0    left-0  w-full'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close?<IoIosClose /> :  <MdOutlineFileDownload size=".7em" color='#fff'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}> 
                    <h3 className='text-sm font-semibold'>{data.tag.tag}</h3>
                    </div>
                )
            }

        </div>
    </motion.div>
  )
}

export default Card