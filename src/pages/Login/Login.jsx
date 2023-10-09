import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.start";


const Login = () => {

    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app);


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        signIn(email, password)
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
            .catch(e => console.log(e.message));
    }


    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
            .catch(e => console.log(e.message));
    }

    return (
        <div>

            <div className="bg-pink-200 md:mx-10 xl:mx-80 py-8 mt-10">
                <h2 className="text-3xl text-center mt-10 font-bold">SIGN IN</h2>
                <form onSubmit={handleLogin} className="card-body">
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
                        <button className="btn btn-primary">SIGN IN</button>
                    </div>
                </form>
                <p className="text-center font-bold">Do not have an acoount ? <Link className="font-bold text-blue-600" to={"/register"}>Sign Up</Link></p>
                <div className="mt-3">
                    <h2 className="text-center font-bold">Or</h2>
                    <FcGoogle onClick={googleSignIn} className="mx-auto text-5xl mt-3"></FcGoogle>
                </div>
            </div>
        </div>
    );
};

export default Login;