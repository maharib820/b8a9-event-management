import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { AiOutlineLogout } from "react-icons/ai";



const Navbar = () => {

    const [open, setOpen] = useState(false);
    const { user, logOut, loading } = useContext(AuthContext);

    const links =
        <>
            <li className="mr-2"><NavLink to={"/"}>Home</NavLink></li>
            <li className="mr-2"><NavLink to={"/about"}>About</NavLink></li>
            <li className="mr-2"><NavLink to={"/contact"}>Contact</NavLink></li>
            <li className="mr-2"><NavLink to={"/coupon"}>Membership</NavLink></li>
            <li className="mr-2"><NavLink to={"/query"}>Query</NavLink></li>
        </>

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-0 lg:px-20 xl:px-48 py-5">
            <div className="flex justify-center"><h1 className="text-4xl font-lobstar text-red-500">BrightSE</h1></div>
            <div onClick={() => setOpen(!open)} className="lg:hidden my-5">
                <div className="flex flex-col justify-center">
                    {
                        open === true ? <AiOutlineClose className="text-2xl font-bold text-center ml-10"></AiOutlineClose> : <AiOutlineMenu className="text-2xl font-bold"></AiOutlineMenu>
                    }
                </div>
                {
                    open &&
                    <div>
                        <ul className="menu font-bold">
                            {links}
                        </ul>
                    </div>
                }
            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="hidden lg:flex">
                    <div>
                        <ul className="menu menu-horizontal font-bold">
                            {links}
                        </ul>
                    </div>
                </div>
                {
                    loading ? <span className="loading loading-ring loading-lg"></span> :
                    (user ? 
                        <div className="flex items-center gap-5">
                            <div><img className="h-16 w-16 rounded-full" src={user.photoURL} alt="" /></div>
                            <div onClick={logOut}>
                                <AiOutlineLogout className="font-bold text-3xl"></AiOutlineLogout>
                            </div>
                        </div>
                        :
                        <div className="">
                            <Link to={"/login"}><button className="btn bg-blue-500 mr-0 rounded-l-full text-white">SIGN IN</button></Link>
                            <Link to={"/register"}><button className="btn bg-blue-500 ml-0 rounded-r-full text-white">SIGN UP</button></Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Navbar;