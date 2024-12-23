import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { BallTriangle } from "react-loader-spinner";

export default function Users() {
  const [users, setUsers] = useState<any>([]);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const handleShow = (id: number) => {
    setShow(true);
    setUserId(id);
  };
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response?.data?.users);
      setUsers(response?.data?.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await axios.delete(`https://dummyjson.com/users/${id}`);
      console.log(response);
      handleClose();
      toast.success("User Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("User Deletion Failed");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Users</h2>
        <button
          className="btn btn-warning text-white px-5 py-2"
          onClick={() => navigate("/dashboard/add-users")}
        >
          Add New User
        </button>
      </div>
      <hr />
      {loading ? (
        <BallTriangle
          visible={true}
          height="100"
          width="100"
          color="#FEAF00"
          ariaLabel="ball-triangle-loading"
          radius="5"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
          }}
          wrapperClass=""
        />
      ) : (
        <table
          className="table shadow-lg "
          style={{ backgroundColor: "white" }}
        >
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date Of Admission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: any) => (
              <tr key={user?.id} className="text-center">
                <td className="fw-bold">{user?.id}</td>
                <td>
                  <img
                    src={user?.image}
                    alt={user?.firstName}
                    className="w-25"
                  />
                </td>
                <td>{user?.firstName}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
                <td>{user?.birthDate}</td>
                <td>
                  <MdOutlineEdit
                    color="#FEAF00"
                    size={28}
                    className="me-2 action-icon"
                    onClick={() => navigate("/dashboard/update-users")}
                  />
                  <MdDelete
                    color="#FEAF00"
                    size={28}
                    className="action-icon"
                    onClick={() => handleShow(user?.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deleting</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, Are you sure you want to delete This User!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" onClick={() => deleteUser(userId)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </table>
      )}
    </>
  );
}
