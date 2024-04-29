import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const [showPas, setShowPas] = useState(true);
  const handleClick = () => {
    setShowPas(!showPas);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, image } = data;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("password should be 6 characters");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "your password should have at least one lower case character"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "your password should have at least one Uppercase character"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUser(name, image).then(() => {
          toast.success("Congratulation");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center ">
      <Helmet>
        <title>TextileTrove - Register</title>
      </Helmet>
      <div className="my-24 border p-6 rounded-xl lg:w-1/3 shadow-xl bg-[#E8F0FE]">
        <h3 className="text-3xl mb-6 text-[#000000ca] font-bold">
          Registration Form
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Name:</label>
          <br />

          <input
            type="text"
            className="input w-full mt-2 border-b-2 py-2 px-1 rounded-lg outline-none text-[#000000d4] "
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-orange-600 mt-2">This field is required</span>
          )}
          <br />
          <br />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            className="input w-full mt-2 border-b-2 py-2 px-1 rounded-lg outline-none text-[#000000d4] "
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-orange-600 mt-2">This field is required</span>
          )}
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

          {errors.password && (
            <span className="text-orange-600 mt-2">This field is required</span>
          )}
          <br />
          <br />

          <label htmlFor="">Photo URL:</label>
          <input
            type="text"
            className="input w-full mt-2 border-b-2 py-2 px-1 rounded-lg outline-none text-[#000000d4] "
            placeholder="photo url"
            {...register("image")}
          />

          <br />
          <br />
          <p>
            if you have an account. Please go to{" "}
            <Link to={"/login"} className="text-blue-600">
              Log in
            </Link>
          </p>
          <p>{registerError}</p>

          <br />
          <input
            type="submit"
            className="btn w-full  bg-[#00b38c] text-white text-2xl"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
