import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#07292F] py-10'>
            <div className='container flex flex-col space-y-5 sm:space-y-0 sm:flex-row  justify-between items-center'>
                <img src="/logo.png" alt="" />
                <p className='text-base font-light text-[#96ACAF]'>Copyright © 2023 Wizia. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;