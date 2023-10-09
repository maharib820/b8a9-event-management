import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='h-96'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className='w-full h-full flex justify-center items-center'>Hello</div></SwiperSlide>
                <SwiperSlide><div className='w-full h-full flex justify-center items-center'>Hello</div></SwiperSlide>
                <SwiperSlide><div className='w-full h-full flex justify-center items-center'>Hello</div></SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Slider;