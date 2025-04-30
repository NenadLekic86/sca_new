// import React from 'react'
import { Link } from 'react-router-dom';
import { blogPost } from '../../assets/data/data.ts';
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './blogSliderSection.scss';
import { Navigation, Pagination } from 'swiper/modules';

const BlogSliderSection = () => {
  return (
    <section className='blog-slider-section relative py-20 bg-orange-500/20'>
        <div className="container">
            <div className='title_container orangeLinearText mb-10'>
                <h2 className='title text-4xl lg:text-5xl'>Blogs</h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: SwiperType) => console.log(swiper)}
                className='flex items-center justify-center '  
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {blogPost.map((post, index) => (
                <SwiperSlide 
                    key={index}
                    className='flex items-center justify-center'  
                >
                    <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out hover:-translate-y-4">
                            <div className="aspect-w-16 aspect-h-9">
                                <img 
                                    src={post.imageMain} 
                                    alt={post.imageAlt} 
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className='flex flex-col lg:flex-row items-center justify-between mb-4'>
                                    <div className="flex items-center mb-2">
                                        <MdOutlinePersonOutline className="text-orange-500 mr-2" size={20} />
                                        <span className="text-darkBlue-500 text-sm">{post.author}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <MdOutlineCalendarMonth className="text-orange-500 mr-2" size={20} />
                                        <span className="text-darkBlue-500 text-sm">{post.date}</span>  
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                                <p className="text-gray-600 line-clamp-3">{post.description}</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default BlogSliderSection
