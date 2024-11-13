import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    console.log(name, email, password, terms);

    //Clear error message
    setError("");

    if (password.length < 6) {
      setError("Password should be 6 character or longer");
      return;
    }

    //Terms & Condition validation

    if (!terms) {
      setError("Please accept our terms & condition");
      return;
    }

    //give me a regex  in js to validate password that contains at least one uppercase and at least  one lowercase, at least one number, at least one spacial character

    // Password RegX
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // Password RegX validation
    if (!passwordRegex.test(password)) {
      setError(
        "Password should be at least 6 character or grater, and at least 1 uppercase, 1 lowercase, 1 number & 1 special character"
      );
      return;
    }

    //Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Registration successful.");
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR ", err.message);
        //Set error message
        setError(err.message);
      });
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left hero-overlay rounded-xl">
          <img
            className="rounded-xl w-full"
            src="https://i.ibb.co.com/nDYTskj/signUp.jpg"
            alt=""
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered "
                required
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="btn btn-xs absolute bottom-3 right-2"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2 items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-xs"
                />
                <span className="label-text">Accept Our terms & condition</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
              {error && (
                <p className="text-sm text-red-600 font-medium text-center mt-1">
                  {" "}
                  {error}{" "}
                </p>
              )}
            </div>
            <div className="flex my-4 justify-around">
              <button className="btn">
                <FcGoogle /> Google
              </button>
              <button className="btn">
                <FaGithub /> Github
              </button>
              <button className="btn">
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

export default SignUp;
