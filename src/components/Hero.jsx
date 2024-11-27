import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
const Hero = () => {
    return (
        <div className='w-full relative overflow-hidden h-[550px]' >
            <div className='flex flex-col space-y-5 z-20 container relative px-4 py-8 mt-24'>
                <p className='text-2xl text-secondary'>AI SDRs (aiDRs)</p>
                <h1 className='text-6xl font-semibold'>More <i>leads</i>, <br />less <i>people</i>.</h1>
                <p className='text-xl font-light w-96'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                <button className='primary-button w-fit flex justify-center items-center space-x-2 group'> <span>Sign Up for the Beta</span> <FiArrowUpRight className='size-5 border border-black group-hover:border-white' /> </button>
            </div>
            <img src="/bg-1.png" class="absolute top-0 right-0 w-full h-full object-cover z-0 hidden sm:block" />

            <img src="/sm-bg.png" class="absolute top-0 right-0 w-full h-full object-cover z-0 sm:hidden" />
        </div>
    );
};

export default Hero;