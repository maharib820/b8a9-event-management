import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import CardShow from "../../components/CardShow";


const Home = () => {

    const datas = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Slider datas={datas}></Slider>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 lg:px-20 xl:px-48 py-5 bg-slate-200">
                {
                    datas.map(data => <CardShow key={data.id} data={data}></CardShow>)
                }
            </div>
        </div>
    );
};

export default Home;