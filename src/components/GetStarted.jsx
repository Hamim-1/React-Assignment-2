import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const GetStarted = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-5 container pb-20'>
            <p className='text-secondary text-xl font-normal'>GET STARTED</p>

            <h2 className='text-4xl font-bold text-center'><i>Embrace</i> the new era of <i>outbound</i>.</h2>

            <p className='text-xl font-light text-center'>Wizia lets you train, activate, and optimize aiDRs. <br className='hidden sm:block' /> Take your outbound to new levels of performance and efficiency.</p>

            <button className='primary-button w-fit flex justify-center items-center space-x-2 group'> <span>Sign Up for the Beta</span> <FiArrowUpRight className='size-5 border border-black group-hover:border-white' /> </button>
        </div>
    );
};

export default GetStarted;