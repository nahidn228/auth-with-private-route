import { useContext } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
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
              <button className="btn">
                {" "}
                <FcGoogle /> Google{" "}
              </button>
              <button className="btn">
                {" "}
                <FaGithub /> Github
              </button>
              <button className="btn">
                {" "}
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
