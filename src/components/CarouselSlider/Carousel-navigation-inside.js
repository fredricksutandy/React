// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import dribbble from '../../images/dribbble.png';
import doubs from '../../images/Doubs.png';
import fan from '../../images/fan.png';
import mohaka from '../../images/Mohaka.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../CSS/SwiperInside.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide className='h-40'>
        <img src={dribbble} alt="" />
      </SwiperSlide>
      <SwiperSlide className='h-40'>
        <img src={doubs} alt="" />
      </SwiperSlide>
      <SwiperSlide className='h-40'>
        <img src={fan} alt="" />
      </SwiperSlide>
      <SwiperSlide className='h-40'>
        <img src={mohaka} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
