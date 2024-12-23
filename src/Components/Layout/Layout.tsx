import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../Navbar/NavBar";

export default function Layout() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100 outlet vh-100 ">
        <NavBar />
        <div className=" px-4 py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
