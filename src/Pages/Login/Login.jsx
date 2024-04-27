import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { logInUser, GoogleLogIn, githubLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    GoogleLogIn()
      .then(() => {
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogIn = () => {
    githubLogIn()
      .then((result) => {
        console.log(result);
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
    console.log(data);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center ">
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
            <input
              type="password"
              className="w-full mt-2 border-b-2 py-2 px-1 rounded-lg outline-none text-[#000000d4] "
              placeholder="password"
              {...register("password", { required: true })}
            />
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
          <p className="text-center">or</p>
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
