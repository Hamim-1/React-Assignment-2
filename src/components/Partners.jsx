import { img } from 'framer-motion/client';
import React from 'react';

const Partners = () => {
    const partners = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className='flex flex-col items-center container py-10 space-y-5'>
                <p className="text-secondary text-base uppercase">our trusted partners</p>

                <div className='flex flex-wrap items-center space-x-5 justify-center'>
                    {
                        partners.map(partner => (
                            <img src={`partner-${partner}.png`} alt="" key={partner} className='h-16' />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Partners;