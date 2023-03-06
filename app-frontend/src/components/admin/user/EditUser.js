import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../../../api/profileApi";

function EditUser() {
  const { username } = useParams();
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    authority: "",
    address: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await getUser(username);
    setUser(result.data);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    navigate("/admin/users");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-1">
            <label htmlFor="username" className="form-label"><h4>Editing: {user.username}</h4></label>
          </div>
          <div className="form-group mb-1">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter first name"
              name="firstname"
              id="firstname"
              value={user.firstname}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter last name"
              name="lastname"
              id="lastname"
              value={user.lastname}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              id="email"
              value={user.email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter age"
              name="age"
              id="age"
              value={user.age}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="authority" className="form-label">Authority</label>
            <select
              className="form-control form-control-lg"
              name="authority"
              id="authority"
              value={user.authority}
              onChange={(e) => onChange(e)}
            >
              <option value="">Select Authority</option>
              <option value="ADMIN">ADMIN</option>
              <option value="DOCTOR">DOCTOR</option>
              <option value="LABINCHARGE">LABINCHARGE</option>
              <option value="PHARMACIST">PHARMACIST</option>
              <option value="RECEPTIONIST">RECEPTIONIST</option>
              <option value="WARDINCHARGE">WARDINCHARGE</option>
            </select>
          </div>
          <div className="form-group mb-1">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter address"
              name="address"
              id="address"
              value={user.address}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block mt-1">Update User</button>
        </form>
      </div>
    </div>

  );
}

export default EditUser;
