import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

// Array of event data
const events = [
    { id: 1, title: "Event 1", image: "./assets/eventImage1.jpg", description: "Creating opportunity and space in the line of IEEE mandate to advance technology for the benefit of humanity. The subsection looks at various technical activities, including facilitating Technical Co-Sponsorship for Conferences, Conducting Workshops, Technical Seminars, Distinguished Lecture programs, Colloquiums, and other possible technical activities." },
    { id: 2, title: "Event 2", image: "./assets/eventImage2.jpg", description: "This is event 2" },
    { id: 3, title: "Event 3", image: "./assets/eventImage3.jpg", description: "This is event 3" },
    { id: 4, title: "Event 4", image: "./assets/eventImage4.jpg", description: "This is event 4" },
    { id: 5, title: "Event 5", image: "./assets/eventImage5.jpg", description: "This is event 5" },
];

const SlidingCards = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Tracks the currently active slide

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3, // Keep the number of slides constant
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        beforeChange: (_, next) => setCurrentSlide(next), // Update the active slide index on slide change
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto mt-4 mb-7">
            <Slider {...settings}>
                {events.map((e, index) => {
                    // Calculate the middle slide index
                    const middleSlideIndex = (currentSlide + 1) % events.length;
                    const isActive = index === middleSlideIndex;

                    return (
                        <div
                            key={e.id}
                            className={`h-[350px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl mb-5 bg-gray-200 p-2 sm:p-3 lg:p-4 pb-2 shadow-md transition-transform duration-300 ease-in-out ${
                                isActive
                                    ? "opacity-100 scale-105" // Full opacity and zoom for the center slide
                                    : "opacity-50 scale-90" // Reduced opacity and scale for others
                            }`}
                        >
                            <div className="h-full flex flex-col">
                                {/* Image Section */}
                                <div className="flex-grow rounded-t-xl overflow-hidden">
                                    <img
                                        src={e.image}
                                        alt={e.title}
                                        className="w-full h-full object-cover sm:w-20 sm:h-20 md:w-40 md:h-40 lg:w-full lg:h-full"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="flex flex-col items-center justify-center gap-2 p-2 sm:p-3">
                                    {/* Title */}
                                    <h3 className="text-lg sm:text-base md:text-lg font-semibold text-center">{e.title}</h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm md:text-base text-center overflow-hidden text-ellipsis line-clamp-2">
                                        {e.description}
                                    </p>
                                    <a href="/events" className="text-custom-blue2 flex items-center">
                                        Read More <ReadMoreIcon className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default SlidingCards;
