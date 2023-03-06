import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getAllUsers } from '../../../api/profileApi';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (username) => {
    navigate(`/admin/user/edit/${username}`);
  };

  const handleDelete = (username) => {
    deleteUser(username)
      .then(() => {
        const updatedUsers = users.filter(user => user.username !== username);
        setUsers(updatedUsers);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Authority</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.userId}>
            <td>{user.userId}</td>
            <td>{user.username}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.authorities[0].authority}</td>
            <td>{user.age}</td>
            <td>
              <Button variant="primary" onClick={() => handleEdit(user.username)}>Edit</Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(user.username)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ViewUsers;
