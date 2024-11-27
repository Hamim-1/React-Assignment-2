import React, { useState, useEffect } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const InfiniteCarousel = () => {
    const items = [
        { review: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", name: "John Doe", profession: 'Chief Strategy Officer @ Company' },
        { review: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", name: "John Doe", profession: 'Chief Strategy Officer @ Company' },
        { review: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", name: "John Doe", profession: 'Chief Strategy Officer @ Company' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="relative w-full max-w-xl mx-auto overflow-hidden py-20 container">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, i) => (
                    <div key={i} className="w-full flex-shrink-0 p-4 items-center flex flex-col space-y-5">
                        <div className='bg-[#07292F] rounded-full p-5 w-fit'>
                            <img src="/qutetion.png" alt="" />
                        </div>
                        <p className='text-3xl font-light text-center max-w-[80%]'>{item.review}</p>
                        <p className='text-secondary font-semibold text-2xl'>{item.name}</p>
                        <p className='text-xl font-light opacity-70'>{item.profession}</p>
                    </div>
                ))}
            </div>


            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {items.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-secondary' : 'bg-[#07292F]'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            <button className='bg-[#07292F] rounded-lg p-2 group absolute top-1/2 -translate-y-1/2 left-2 h-fit' onClick={prevSlide}>
                <GoArrowLeft className='size-7 text-secondary/50 group-hover:text-secondary' />
            </button>

            <button className='bg-[#07292F] rounded-lg p-2 group absolute top-1/2 -translate-y-1/2 right-2 h-fit' onClick={nextSlide}>
                <GoArrowRight className='size-7 text-secondary/50 group-hover:text-secondary' />
            </button>
        </div>
    );
};

export default InfiniteCarousel;
