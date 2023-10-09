import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Slider = ({ datas }) => {


    const bgURL = "https://i.ibb.co/MpMycnF/Pngtree-anniversary-event-poster-background-material-1011178.jpg"
    const bgURLL = "https://i.ibb.co/rf4xFPb/cool-background-3.png"
    return (
        <div className='h-[300px] md:h-[500px] lg:h-[700px]' style={{ backgroundImage: `url(${bgURL})` }}>
            <div className='px-5 xl:px-[350px] py-10 h-full'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        datas.map(data => <SwiperSlide key={data.id}>
                            {
                                <div className='relative h-full'>
                                    <div className='w-full h-full flex justify-center items-center' style={{ backgroundImage: `url(${bgURLL})` }}>
                                        <div className=''>
                                            <h2 className='text-3xl font-bold italic'>{data.title}</h2>
                                            <p className='font-bold mt-4'>
                                                {data.description}
                                            </p>
                                            <Link to={`/details/${data.id}`}><button className='btn mt-5 bg-pink-600 text-white'>Details</button></Link>
                                        </div>
                                    </div>
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