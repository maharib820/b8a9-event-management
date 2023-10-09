import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';


const Slider = ({ datas }) => {


    const bgURL = "https://i.ibb.co/MpMycnF/Pngtree-anniversary-event-poster-background-material-1011178.jpg"
    return (
        <div className='h-[300px] md:h-[500px] lg:h-[700px]' style={{ backgroundImage: `url(${bgURL})` }}>
            <div className='px-5 xl:px-[350px] py-10 h-full'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        datas.map(data => <SwiperSlide key={data.id}>
                            {
                                <div>
                                    <img src={data.image} alt="" />
                                </div>
                            }
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default Slider;

Slider.propTypes = {
    datas: PropTypes.array
}