import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './homepage'; // Assuming Homepage component is in the same directory

export default function UserManagement() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editUser, setEditUser] = useState(null);
    const [deleteUser, setDeleteUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            let result = await fetch('http://127.0.0.1:8000/api/users');
            result = await result.json();
            setUsers(result);
        };
        fetchUsers();
    }, []);

    const openViewUser = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setEditUser(null);
        setDeleteUser(null);
    };

    const openEditUser = (user) => {
        setEditUser(user);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitEditedUser = async (e) => {
        e.preventDefault();
        const { id, name, email, role, password } = editUser;

        try {
            let result = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ name, email, role, password })
            });

            if (result.ok) {
                result = await result.json();
                setUsers(users.map(user => (user.id === id ? result : user)));
                handleCloseModal();
            } else {
                const errorData = await result.json();
                alert('Error updating user: ' + JSON.stringify(errorData));
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const openDeleteUser = (user) => {
        setDeleteUser(user);
    };

    const submitDeletedUser = async (e) => {
        e.preventDefault();
        let { id } = deleteUser;

        await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        setUsers(users.filter(user => user.id !== id));
        handleCloseModal();
    };

    return (
        <div>
            <Homepage />
            <main className="container mt-5">
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-success mr-2" onClick={() => openViewUser(user)} type="button">
                                        View
                                    </button>
                                    <button className="btn btn-warning mr-2" onClick={() => openEditUser(user)} type="button">
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => openDeleteUser(user)} type="button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            {selectedUser && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedUser.name} Details</h5>
                                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Name: {selectedUser.name}</p>
                                <p>Email: {selectedUser.email}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {editUser && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <form onSubmit={submitEditedUser}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit {editUser.name}</h5>
                                    <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type='text' className='form-control' name='name' value={editUser.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type='email' className='form-control' name='email' value={editUser.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Role:</label>
                                        <select className='form-control' name='role' value={editUser.role} onChange={handleInputChange}>
                                            <option value='user'>User</option>
                                            <option value='doctor'>Doctor</option>
                                            <option value='admin'>Admin</option>
                                            <option value='receptionist'>Receptionist</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-success">Save</button>
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {deleteUser && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <form onSubmit={submitDeletedUser}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Delete {deleteUser.name}?</h5>
                                    <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-danger">Yes</button>
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>No</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
