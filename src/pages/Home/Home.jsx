import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import CardShow from "../../components/CardShow";
import Subscribe from "./Subscribe";
import WhyUs from "./WhyUs";


const Home = () => {

    const datas = useLoaderData();

    return (
        <div className="bg-white">
            <Slider datas={datas}></Slider>
            <div>
                <h2 className="text-center text-3xl font-bold pt-14 pb-5 text-pink-600">Our Services</h2>
                <div data-aos="fade-right" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-20 xl:px-48 py-5">
                    {
                        datas.map(data => <CardShow key={data.id} data={data}></CardShow>)
                    }
                </div>
            </div>
            <WhyUs></WhyUs>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;