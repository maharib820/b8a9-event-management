import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {

    const { id } = useParams();

    const [datas, setDatas] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(datas => setDatas(datas));
    }, [])

    useEffect(() => {
        const d = datas?.find(data => data.id === parseInt(id))
        setData(d)
    }, [datas, id])

    return (
        <div>
            {
                data ?
                <div className="w-full text-center">
                    <img className="w-[700px] mx-auto" src={data?.image} alt="" />
                    <h2 className="text-4xl font-bold mt-8">{data?.title}</h2>
                    <p className="font-bold mt-10 mx-2 xl:mx-40">
                        {data?.longDescription}
                    </p>
                    <h2 className="text-2xl font-bold mt-10 mb-3">Cost ${data?.price}</h2>
                    <button className="btn bg-green-600 text-white px-10 mb-8">Confirm Event</button>
                </div> 
                :
                <div></div>
            }
        </div>
    );
};

export default Details;