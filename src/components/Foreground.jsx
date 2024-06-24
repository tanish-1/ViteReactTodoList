import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    // useState
    const data = [
        {
            desc : "This is the demo data,great!",
            filesize:".4mb",
            close: false,
            tag: {isOpen: true, tag: "Download Now",tagColor : "green" },
        },
        {
            desc : "This is the demo data,great!",
            filesize:".4mb",
            close: false,
            tag: {isOpen: true, tag: "Download Now",tagColor : "blue" },
        },
        {
            desc : "This is the demo data,great!",
            filesize:".4mb",
            close: true,
            tag: {isOpen: false, tag: "Download Now",tagColor : "green" },
        }
    ]
  return (
    <div ref={ref} className="fixed w-full h-full  top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data={item} refrence={ref}/>
        ))}
    {/* <Card/> */}
    </div>
  )
}

export default Foreground