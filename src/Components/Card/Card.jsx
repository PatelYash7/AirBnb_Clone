import React from 'react'
import Hotel from '../../Utils/hotels/hotel-1.jpeg'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import { Pagination, Navigation } from 'swiper';



function Card({ card }) {
    return (
        <>
            <div className='mb-8 m-2'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={12}
                    mousewheel={true}
                    loop={false}
                    cssMode={true}
                    effect='fade'
                    pagination
                    modules={[Pagination, Navigation]}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false
                    }}
                    className="h-[270px]  w-[270px] overflow-hidden"
                >
                    {
                        card.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img className='w-[250px] h-[250px] rounded-2xl object-cover' src={src} alt="img" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className='flex items-center justify-between w-full px-1 font-semibold text-sm '>
                    <h3 className='font-semibold text-sm mb-0'>Hotel111</h3>
                    {/* Card Rating */}
                    <div className='flex items-center justify-center gap-[.25rem] '>
                        <StarRoundedIcon className='' />
                        <p className='text-center text-sm'>4.8</p>
                    </div>
                </div>
                {/* Description */}
                <div className='w-[250px] px-1 py-1 '>
                    <p className='text-sm text-font-grey font-medium text-justify'>The beautiful Sunset and Beach view</p>
                    <div className='flex items-center justify-start pb-1  text-sm text-font-grey gap-2 font-medium'>
                        <p>5 nights</p>
                        <p>{card.date}</p>
                    </div>

                    <div className='flex items-center justify-start gap-0 text-sm font-semibold text-black'>
                        <p className='leading-loose tracking-[0.06]'>₹7556</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card