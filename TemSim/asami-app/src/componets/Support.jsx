import React from 'react'
import{PhoneIcon,ArrowSmRightIcon} from '@heroicons/react/outline'
import {ChipIcon,SupportIcon} from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'
const Support = () => {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
        </div>
        
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, magni mollitia! Exercitationem inventore soluta sequi fugiat velit modi porro dolorum laborum, saepe repudiandae</p>
            </div>
            <div>
                <div>
                    <div>
                        <PhoneIcon />
                        <h3>Sales</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptate rerum officiis perferendis</p>
                    </div>
                    <div>
                        <p>Contact Us <ArrowSmRightIcon/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support