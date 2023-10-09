import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch("/team.json")
            .then(res => res.json())
            .then(datas => setDatas(datas));
    }, [])

    console.log(datas);

    return (
        <div data-aos="fade-down-right" className="mt-10">
            <div className="bg-gray-100">
                {/* Team and Experts Section */}
                <section className="container mx-auto p-4">
                    <h1 className="text-4xl font-semibold text-center mb-8">Our Team and Experts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {datas.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4"
                            >
                                <h2 className="text-2xl font-semibold">{member.name}</h2>
                                <p className="text-gray-600 mt-3 mb-2 font-bold">{member.role}</p>
                                <p className="text-gray-600 font-bold">Expertise: {member.expertise}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhyUs;