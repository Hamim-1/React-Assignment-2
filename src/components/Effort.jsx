import React from 'react';

const Effort = () => {
    const items = [
        { percent: '32', text: 'Improvement in Open Rates' },
        { percent: '75', text: 'Improvement in Ramp Time' },
        { percent: '33', text: 'Improvement in Meetings Booked' },
    ]
    return (
        <div className='py-20'>
            <div className=' relative  max-w-[1200px] mx-5 md:mx-auto p-5 flex items-center'>
                <img src="/bg-3.png" className="absolute top-0 left-0 w-full h-full hidden md:block" />

                <img src="/bg.png" className="absolute top-0 right-0 w-full h-full md:hidden rounded-3xl" />



                <div className='flex flex-col space-y-5 relative container'>
                    <p className='text-[32px]'>
                        <h2 className='font-semibold'>Allocate effort where your reps <br className='hidden sm:block' /> make an inpact.</h2>

                        <i className='font-medium text-secondary'>Let us handle the rest.</i>
                    </p>

                    <p className='text-xl font-light'>Keep your reps “in the air” -- out in the field and on the phone <br className='hidden sm:block' /> where they can build relationships.</p>

                    <div className='flex flex-col md:flex-row  gap-5 pt-10'>
                        {
                            items.map(item => (
                                <div className='flex flex-col space-y-2 md:w-[185px]'>
                                    <h2 className='text-[40px] font-bold text-secondary'>{item.percent}%</h2>
                                    <p className='text-xl font-medium'>{item.text}</p>
                                </div>
                            ))
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Effort;