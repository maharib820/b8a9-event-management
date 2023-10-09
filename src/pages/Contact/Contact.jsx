import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-8">Contact Us</h2>
            <div className="flex justify-center gap-5 mt-40 mb-10 font-bold">
                <div className="text-center">
                    <AiFillPhone></AiFillPhone>
                    <p>01987......</p>
                </div>
                <div>
                    <FaLocationDot></FaLocationDot>
                    <p>Dhaka 1216</p>
                </div>
                <div>
                    <AiOutlineMail></AiOutlineMail>
                    <p>abc@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;