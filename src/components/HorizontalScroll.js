import React, { useRef } from 'react';
import Card from '../components/Card';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HorizontalScroll = ({ data = [], heading, trending,media_type }) => {
    const containerRef = useRef();

    return (
        <div className="container mx-auto px-3 my-10 relative">
            <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">{heading}</h2>

            {/* Horizontal Scroll Container */}
            <div className="relative w-full overflow-hidden">
                <div
                    ref={containerRef}
                    className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll scrollbar-none scroll-smooth transition-all"
                >
                    {data.map((data, index) => (
                        <Card
                            key={`${data.id}-heading-${index}`}
                            data={data}
                            index={index + 1}
                            trending={trending}
                            media_type={media_type}
                        />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="absolute inset-0 hidden lg:flex justify-between items-center pointer-events-none">
                    <button
                        className="bg-white p-2 text-black rounded-full shadow-md pointer-events-auto"
                        onClick={() => {
                            containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                        }}
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        className="bg-white p-2 text-black rounded-full shadow-md pointer-events-auto"
                        onClick={() => {
                            containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                        }}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
