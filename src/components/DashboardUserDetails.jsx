import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
// Importar estilado
const DashboardUserDetails = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard-user">
      <div className="dashboard-user__profile">
        <img
          src={currentUser.profilePicture}
          alt={`${currentUser.fullName}'s profile`}
          className="dashboard-user__profile-img"
        />
      </div>
      <div className="dashboard-user__info">
        <p className="dashboard-user__detail">
          <strong>Name:</strong> {currentUser.fullName}
        </p>
        <p className="dashboard-user__detail">
          <strong>About:</strong> {currentUser.about}
        </p>
        <p className="dashboard-user__detail">
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p className="dashboard-user__detail">
          <strong>Age:</strong> {currentUser.age}
        </p>
        <p className="dashboard-user__detail">
          <strong>Country:</strong> {currentUser.country}
        </p>
      </div>
    </div>
  );
};

export default DashboardUserDetails;
