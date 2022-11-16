import React, { useState,useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function VirtualTour() {
    
  useEffect(() => {
    AOS.init();
  }, []);
    const imgs = [
        {id: 1, value: 'images/image 3.png'},
        {id: 2, value: 'images/image 4.png'},
        {id: 3, value: 'images/image 5.png'},
        {id: 3, value: 'images/image 5.png'},
    ]
    const [slider, setSlider] = useState(imgs[1])
    const handleClick = (index) => {
        const sliderData = imgs[index]
        setSlider(sliderData)
    }
  return (
    <div  className='bg-slate-900 w-full h-screen flex flex-col items-center'>
       <h1 className='text-4xl font-bold text-center max-tablet:text-2xl text-white mt-8'>Virtual Tour <br/> Studio Ampu</h1>
      <div className='w-4/5 m-auto flex h-4/5 justify-between items-center max-tablet:flex-col'>
       <div className='w-1/5 h-4/5 max-tablet:w-full max-tablet:h-1/4 max-tablet:flex overflow-y-scroll max-tablet:overflow-x-scroll  scrollbar-none'>
      {imgs.map((data,i) => {
        return(<div  key={i}>
            <img src={data.value} className="w-full h-full mb-6" onClick={() => handleClick(i)}/>
        </div>
        )
      })}
      </div>
       <img data-aos="fade" src={slider.value} className='w-3/4 h-4/5' />
       </div>
    </div>
  )
}

export default VirtualTour
