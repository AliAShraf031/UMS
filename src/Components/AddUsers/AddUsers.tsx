import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";

export default function Addusers() {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState([]);

  const { userData } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        data
      );
      console.log(response);
      toast.success("User Added Successfully");
      document.querySelectorAll("input").forEach((input) => (input.value = ""));
    } catch (error) {
      console.log(error);
      toast.error("User Deletion Failed");
    }
  };

  return (
    <>
      <h2>
        {window.location.pathname === "/dashboard/add-users"
          ? "Add Users"
          : "Profile"}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg p-4 rounded-4 mt-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="row my-3">
          <div className="col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control mt-2"
              id="firstName"
              required
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              value={
                window.location.pathname === "/dashboard/add-users"
                  ? null
                  : userData?.firstName
              }
              placeholder="Enter your First Name"
              {...register("firstName")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control mt-2"
              type="text"
              id="lastName"
              required
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              value={
                window.location.pathname === "/dashboard/add-users"
                  ? null
                  : userData?.lastName
              }
              placeholder="Enter Last Name"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <label htmlFor="age">Age</label>
            <input
              className="form-control mt-2"
              type="number"
              id="age"
              required
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              value={
                window.location.pathname === "/dashboard/add-users"
                  ? null
                  : userData?.age
              }
              placeholder="Enter Your Age"
              {...register("age")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input
              className="form-control mt-2"
              type="email"
              id="email"
              required
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              value={
                window.location.pathname === "/dashboard/add-users"
                  ? null
                  : userData?.email
              }
              placeholder="Enter Your Email"
              {...register("email")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="form-control mt-2"
              type="number"
              id="phone"
              required
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              value={
                window.location.pathname === "/dashboard/add-users"
                  ? null
                  : userData?.exp
              }
              placeholder="Enter Your Phone Number"
              {...register("phone")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="date">Birth Date</label>
            <input
              className="form-control mt-2"
              type="date"
              id="date"
              required
              {...(window.location.pathname === "/dashboard/profile"
                ? { disabled: true }
                : "")}
              value={
                window.location.pathname === "/dashboard/add-users"
                  ? null
                  : userData?.birthDate
              }
              placeholder="Enter Your Birth Date"
              {...register("birthDate")}
            />
          </div>
        </div>
        <button className="btn btn-warning text-white mt-4 w-50 d-block mx-auto">
          Save
        </button>
      </form>
    </>
  );
}
