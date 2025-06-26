import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Reviews() {
    return (
        <>
            <section className="px-4 py-16 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-sky-800 mb-10">Traveler Reviews</h2>
                <Swiper pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} spaceBetween={30}
                    slidesPerView={1}
                    className="max-w-4xl mx-auto swiper-container">
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 mb-4">
                                “Absolutely stunning experience in Lebanon! The guide helped us plan everything perfectly.”
                            </p>
                            <p className="text-sky-800 font-semibold">— Lara, Germany</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 mb-4">
                                “I loved exploring the hidden gems mentioned here. Super useful tips and clean layout!”
                            </p>
                            <p className="text-sky-800 font-semibold">— Karim, Lebanon</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className="bg-white p-6 rounded-xl shadow-md">
                        <p className="text-gray-700 mb-4">
                            “The recommendations were spot-on. Highly recommended for first-time travelers!”
                        </p>
                        <p className="text-sky-800 font-semibold">— Maya, France</p>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 mb-4">
                                “A truly unforgettable trip thanks to this guide. The places recommended were amazing and the tips were so helpful!”
                            </p>
                            <p className="text-sky-800 font-semibold">— Nadine, USA</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 mb-4">
                                “Excellent resource for exploring Lebanon's culture and nature. The photos and descriptions made planning easy.”
                            </p>
                            <p className="text-sky-800 font-semibold">— Rami, Lebanon</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 mb-4">
                                “Loved the user-friendly layout and the detailed info on each destination. Perfect for first-time visitors.”
                            </p>
                            <p className="text-sky-800 font-semibold">— Sophie, France</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 mb-4">
                                “The booking and itinerary suggestions made my trip smooth and stress-free. Highly recommend this guide.”
                            </p>
                            <p className="text-sky-800 font-semibold">— Omar, UAE</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}
