import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './styles.css';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'



const Category = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16">Salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16">pizza</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16">soup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16">desserts</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16">Salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className="text-3xl uppercase text-center -mt-16"></h3>
        </SwiperSlide>
      </Swiper>
    );
};

export default Category;