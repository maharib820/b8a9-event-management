import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {

    const notify = (msg) => toast(msg);

    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo-url");
        const email = form.get("email");
        const password = form.get("password");
        
        if(name=='a'){
            notify("Input field missing", {position: toast.POSITION.TOP_CENTER});
        }

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(r => {
                console.log(r.user);
                updateProfile(r.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then()
                    .catch()
                logOut();
                navigate("/login")
            })
            .catch(e => console.log(e.message));
    }

    return (
        <div>
            <div className="bg-pink-200 md:mx-10 xl:mx-80 py-8 mt-10">
                <h2 className="text-3xl text-center mt-10 font-bold">SIGN UP</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="photo-url" placeholder="image link" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SIGN UP</button>
                    </div>
                </form>
                <p className="text-center font-bold">Already have an acoount ? <Link className="font-bold text-blue-600" to={"/login"}>Sign In</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;