import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const images = [
    {
        source:'https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    },
    {
        source:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    },
    {
        source:'https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    },
    {
        source:'https://images.unsplash.com/photo-1584132869994-873f9363a562?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    },
    {
        source:'https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png'
    },
]

export const Swipper = () => {
  return (
    <div>
        <Swiper 
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
             coverflowEffect={{
                rotate:0,
                stretch:0,
                 depth:100,
                 modifier:2.5,
             }}
             pagination={{el:'.swiper-pagination',clickable:true }}
             navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              autoplay={{
                delay:3000,
                
              }}
              speed={800}
             modules={[EffectCoverflow,Pagination ,Navigation , Autoplay]}
            className='swiper_container flex items-center justify-center '
            >
               {images.map((item)=><SwiperSlide className='swiper-slider '>
                <img
          className=' object-cover shadow-lg'
          src={item.source}
          alt=""
        />
                </SwiperSlide>) }
               
                <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
           
          </div>
          <div className="swiper-button-next slider-arrow">
           
          </div>
          <div className="swiper-pagination"></div>
        </div>
            </Swiper>
        
    </div>
  )
}
