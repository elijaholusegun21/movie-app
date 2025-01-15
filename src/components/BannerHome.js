import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData);
    const imageURL = useSelector(state => state.movieoData.imageURL);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage((prev) => (prev + 1) % bannerData.length);
        }
    };

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage((prev) => (prev - 1 + bannerData.length) % bannerData.length);
        }
    };

    useEffect (() => {
        const interval = setInterval(() =>{
            if (currentImage < bannerData.length - 1) {
                handleNext()
            }else {
                setCurrentImage(0)
            }
        },5000)

        return () =>clearInterval(interval)
    },[bannerData,imageURL])

    return (
        <section className="w-full min-h-full max-h-[95vh] overflow-hidden group">
            <div className="flex min-h-full max-h-[95vh]">
                {bannerData.map((data, index) => (
                    <div
                        key={index.id+"bannerHome"+index}
                        className="min-w-full min-h-[450px] lg:min-h-full relative"
                        style={{
                            transform: `translateX(-${currentImage * 100}%)`,
                            transition: "transform 0.5s ease",
                        }}
                    >
                        {/* Background Image */}
                        <img
                            src={imageURL + data.backdrop_path}
                            alt={data.title || "Banner"}
                            className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

                        {/* Content Section */}
                        <div className="absolute bottom-12 left-8 text-white max-w-md">
                            <h2 className="text-2xl lg:text-4xl font-bold">
                                {data?.title || data?.name}
                            </h2>
                            <p className="text-sm lg:text-base my-2 line-clamp-3">
                                {data.overview}
                            </p>
                            <div className="flex items-center gap-4">
                                <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                                <span>|</span>
                                <p>Views: {Number(data.popularity).toFixed(0)}</p>
                            </div>
                            <button className="bg-white px-4 py-2 mt-4 text-black font-bold rounded hover:bg-gradient-to-r from-red-600 to-orange-500 transition-all">
                                Play Now
                            </button>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-[45%] w-full hidden justify-between px-4 group-hover:lg:flex">
                            <button
                                onClick={handlePrevious}
                                className="bg-white p-2 rounded-full text-xl text-black"
                            >
                                <FaAngleLeft />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-white p-2 rounded-full text-xl text-black"
                            >
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BannerHome;
