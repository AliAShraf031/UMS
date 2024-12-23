import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

interface loginFormInputs {
  username: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { saveUserData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<loginFormInputs>();

  const onSubmit = async (data: loginFormInputs) => {
    try {
      console.log(data);
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      console.log(response);
      localStorage.setItem("accessToken", response?.data?.accessToken);
      saveUserData();
      toast.success("Login Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="container-fluid login">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-4 bg-light p-5 rounded-4">
          <div className="text-center title">
            <h3 className="mb-4">User Management System</h3>
            <h4 className="mb-2">Sign In</h4>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                className="form-control mt-2"
                id="name"
                required
                placeholder="Enter your User Name"
                {...register("username")}
              />
            </div>

            <div className="input-field my-4">
              <label htmlFor="password">Password</label>
              <div className="d-flex align-items-end flex-column">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control mt-2"
                  id="password"
                  required
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <FaEye
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <button className="btn btn-warning w-100 text-light" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
