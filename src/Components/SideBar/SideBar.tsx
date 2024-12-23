import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoHome } from "react-icons/io5";
import { HiUserAdd } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaBookmark,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";
export default function SideBar() {
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="sidebar ">
      <Sidebar
        collapsed={collapse}
        backgroundColor="#F2EAE1"
        className="vh-100"
      >
        <div className="py-3">
          <div className="d-flex align-items-center justify-content-between">
            {!collapse && (
              <span className="logo" onClick={() => setCollapse(!collapse)}>
                UMS
              </span>
            )}
            {collapse ? (
              <FaArrowAltCircleRight
                onClick={() => setCollapse(!collapse)}
                size={26}
                className=" text-center action-icon d-block mx-auto "
              />
            ) : (
              <FaArrowAltCircleLeft
                onClick={() => setCollapse(!collapse)}
                size={26}
                className="me-2 action-icon"
              />
            )}
          </div>

          <div className="d-flex flex-column align-items-center my-4">
            <img
              src={userData?.image}
              alt=""
              className="rounded-circle w-50 my-2"
            />
            <div
              style={collapse ? { display: "none" } : { fontSize: "16px" }}
              className="text-center"
            >
              <h4>
                {userData?.firstName} {userData?.lastName}
              </h4>
              <p>Admin</p>
            </div>
          </div>
          <Menu>
            <MenuItem icon={<IoHome />} component={<NavLink to="dashboard" />}>
              Dashboard
            </MenuItem>
            <MenuItem icon={<FaBookmark />} component={<NavLink to="users" />}>
              Users
            </MenuItem>
            <MenuItem
              icon={<HiUserAdd />}
              component={<NavLink to="add-users" />}
            >
              Add Users
            </MenuItem>
            <MenuItem icon={<CgProfile />} component={<NavLink to="profile" />}>
              Profile
            </MenuItem>
            <MenuItem icon={<CiLogout />} onClick={logout}>
              Log Out
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}
