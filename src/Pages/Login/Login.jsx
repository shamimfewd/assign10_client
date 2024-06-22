import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { logInUser, GoogleLogIn, githubLogIn } = useContext(AuthContext);

  const [showPas, setShowPas] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setShowPas(!showPas);
  };

  const handleGoogleLogIn = () => {
    GoogleLogIn()
      .then((result) => {
        if (result.user) {
          toast.success("Login Successfully");
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogIn = () => {
    githubLogIn()
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
          toast.success("Login Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    logInUser(email, password)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center ">
        <Helmet>
          <title>TextileTrove - LongIn</title>
        </Helmet>
        <div className="my-24 border p-6 rounded-xl lg:w-1/3 shadow-xl bg-[#E8F0FE]">
          <h3 className="text-3xl mb-6 text-[#000000ca] font-bold">
            LogIn Form
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Email:</label>
            <input
              type="email"
              className="w-full mt-2 border-b-2 py-2 px-1 rounded-lg outline-none text-[#000000d4] "
              placeholder="email"
              {...register("email", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <br />

            <label htmlFor="">Password:</label>
            <div className="relative">
              <input
                type={showPas ? "password" : "text"}
                className="input w-full mt-2 border-b-2 py-2 px-1 rounded-lg outline-none text-[#000000d4] "
                placeholder="password"
                {...register("password", { required: true })}
              />

              <span
                onClick={handleClick}
                className="text-2xl   absolute right-4 top-5 cursor-pointer"
              >
                {showPas ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <br />

            <p className="border-b border-gray-300">
              if you don not have an account. Please go to{" "}
              <Link to={"/register"} className="text-blue-600">
                Register
              </Link>
            </p>

            <br />

            <input
              type="submit"
              className="btn w-full  bg-[#00b38c] text-white text-2xl"
              value="LogIn"
            />
          </form>
          <div className="divider">OR</div>
          <div className="flex items-center justify-center gap-x-4">
            <FcGoogle
              onClick={handleGoogleLogIn}
              className="text-4xl cursor-pointer"
            />
            <FaGithub
              onClick={handleGithubLogIn}
              className="text-4xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
