import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardShow = ({ data }) => {
    return (
        <div className="relative mb-44">
            <div className="">
                <img className="h-80 w-full rounded-lg" src={data.image} alt="" />
            </div>
            <div className="h-[340px] absolute inset-y-1/2 inset-x-1 w-10/12 mx-auto border-2 border-yellow-600 bg-white rounded-xl">
                <div className="px-5 pt-7">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <h3 className="text-xl font-bold mt-6">Price: ${data.price}</h3>
                    <div className="h-24 md:h-16 lg:h-20">
                        <p className="font-bold mt-10 flex-grow">{data.description}</p>
                    </div>
                    <button className="btn bg-pink-500 text-white font-bold mt-7"><Link to={`/details/${data.id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CardShow;

CardShow.propTypes = {
    data: PropTypes.object
}