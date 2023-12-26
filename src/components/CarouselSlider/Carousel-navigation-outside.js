import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dribbble from '../../images/dribbble.png';
import doubs from '../../images/Doubs.png';
import fan from '../../images/fan.png';
import mohaka from '../../images/Mohaka.png';
import '../../CSS/SwiperOutside.css';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{ clickable: true, prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      pagination={{ clickable: true, el: '.swiper-pagination', type: 'fraction', }}
      wrapperTag="div"  // Set the wrapper tag to 'div'
      containerTag="div" // Set the container tag to 'div'
      className='w-full swiper-outside'
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

      {/* Navigation buttons and pagination wrapped in a single div */}
      <div className="swiper-custom-navigation d-block">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

// https://research.ibm.com/labs/almaden
