import React from 'react';

const Services = () => {
    const services = [
        { img: "/icon-1.png", heading: 'You’re in Control', details: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.' },

        { img: "/icon-2.png", heading: 'Infinitely Scalable', details: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.' },

        { img: "/icon-3.png", heading: 'Incredibly Flexible', details: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.' },
    ]
    return (
        <div className='container flex flex-wrap justify-center gap-x-5 gap-y-16 py-20'>
            {
                services.map((service, i) => (
                    <div className='flex flex-col space-y-5 w-80 border border-secondary/20 rounded-xl p-5 shadow-md shadow-secondary/35'>
                        <img src={service.img} className='w-14' />

                        <h3 className='text-[28px] font-semibold'>{service.heading}</h3>

                        <p className='text-[22px] font-light opacity-80'>{service.details}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Services;