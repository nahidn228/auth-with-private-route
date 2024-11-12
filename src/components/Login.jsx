import { useContext } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Sign-in successful.");
        e.target.reset();
        navigate("/profile");
      })
      .catch((err) => {
        console.log("ERROR ", err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("Sign-in with GOOGLE successful.");
        navigate("/profile");
      })
      .catch((err) => {
        console.log("ERROR ", err.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        alert("Sign-in with Github successful.");
        navigate("/profile");
      })
      .catch((err) => {
        console.log("ERROR ", err.message);
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left hero-overlay rounded-xl">
          <img
            className="rounded-xl w-full"
            src="https://i.ibb.co.com/RNy8Wxn/login.jpg"
            alt=""
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex my-4 justify-around">
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                <FcGoogle /> Google
              </button>
              <button onClick={handleGithubSignIn} className="btn btn-ghost">
                <FaGithub /> Github
              </button>
              <button className="btn btn-ghost">
                <FaTwitter />
                Twitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
