import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../../actions/admin";
import UserCard from "./UserCard";

const UserList = ({ auth, admin, getAllUsers }) => {
  useEffect(() => {
    getAllUsers();
  }, []);

  if (!auth.loading && !auth.isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (auth.user && !auth.user.isAdmin) {
    return <Navigate to='/' />;
  }

  return (
    <div className='main'>
      <Link to='/admin'>
        <button className='back-btn btn'>Go Back</button>
      </Link>
      <h1>USERS</h1>
      <div className='admin-column'>
        <div className='info'>
          <h2>Id</h2>
        </div>
        <div className='info'>
          <h2>Name</h2>
        </div>
        <div className='info'>
          <h2>Email</h2>
        </div>
        <div className='info'>
          <h2>Admin</h2>
        </div>
        <div className='info'>
          <h2></h2>
        </div>
      </div>
      {admin.userList.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllUsers })(UserList);
