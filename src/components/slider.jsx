import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Slide from './Slide';

const Slider = ({data}) => {
    return ( 
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={'auto'}
      //   padding={50}
     //    spaceBetween={30}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        
     //    onSwiper={(swiper) => console.log(swiper)}
     //    onSlideChange={() => console.log('slide change')}
        // style={{backgroundColor:'blue'}}
        style={{padding:'0 20px 20px 20px',justifyContent:'center',alignItems:'center'}}
      >
          
 
        {data.map((el, index) => {
           return( 
                <SwiperSlide key={index} style={{width:'fit-content'} }>
                     <Slide key={`${el?.id}_${index}_slide`} image={el?.image} title={el?.title} author={el?.author} feedID={el?.id} authorUrl={''}></Slide>
                </SwiperSlide>
           );
            
        })}
        {/* ... */}
      </Swiper>
     );
}
 
export default Slider;