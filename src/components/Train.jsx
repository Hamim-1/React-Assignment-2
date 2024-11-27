import React from 'react';
import { FaCheck } from "react-icons/fa6";
const Train = () => {
    const benifits = ['Quick to ramp', 'Easy to optimize', 'Quick to scale up', 'Works with all your existing tools']
    return (
        <div className=' relative h-[550px] max-w-[1200px] mx-auto px-2 flex justify-center items-center'>
            <img src="/bg-2.png" className="absolute top-0 left-0 xl:rounded-3xl w-full h-full hidden md:block" />

            <img src="/sm-bg.png" className="absolute top-0 right-0 xl:rounded-3xl w-full h-full md:hidden" />



            <div className='flex flex-col space-y-5 relative'>
                <p>
                    <h2 className='text-[40px] font-semibold'>Train your aiDR on your...</h2>

                    <i className='text-[40px] text-secondary'>prefered email st|</i>
                </p>

                <p className='text-2xl font-light max-w-96'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
                        <div className='flex items-center space-x-3'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck className='size-3 text-secondary' />
                            </div>
                            <p>Quick to ramp</p>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck className='size-3 text-secondary' />
                            </div>
                            <p>Easy to optimize</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
                        <div className='flex items-center space-x-3'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck className='size-3 text-secondary' />
                            </div>
                            <p>Quick to scale up</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck className='size-3 text-secondary' />
                            </div>
                            <p>Works with all your existing tools</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Train;