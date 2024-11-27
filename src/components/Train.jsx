import React from 'react';
import { FaCheck } from "react-icons/fa6";
const Train = () => {
    return (
        <div className=' relative py-10 max-w-[1200px] px-2 flex justify-center items-center mx-5 md:mx-auto'>
            <img src="/bg-2.png" className="absolute top-0 left-0 xl:rounded-3xl w-full h-full hidden md:block" />

            <img src="/bg.png" className="absolute top-0 left-0 xl:rounded-3xl w-full h-full rounded-2xl md:hidden" />



            <div className='flex flex-col space-y-5 relative'>
                <p>
                    <h2 className='text-[40px] font-semibold'>Train your aiDR on your...</h2>

                    <i className='text-[40px] text-secondary'>prefered email st|</i>
                </p>

                <p className='text-2xl font-light max-w-96'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col sm:flex-row gap-10'>
                        <div className='flex space-x-3 text-secondary'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck />
                            </div>
                            <p className='text-xl font-medium'>Quick to ramp</p>
                        </div>

                        <div className='flex space-x-3 text-secondary'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck />
                            </div>
                            <p className='text-xl font-medium'>Easy to optimize</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-10'>
                        <div className='flex space-x-3 text-secondary'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck />
                            </div>
                            <p className='text-xl font-medium'>Quick to scale up</p>
                        </div>

                        <div className='flex space-x-3 text-secondary'>
                            <div className='border-2 border-secondary rounded-full p-1'>
                                <FaCheck />
                            </div>
                            <p className='text-xl font-medium'>Works with all your existing tools</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Train;