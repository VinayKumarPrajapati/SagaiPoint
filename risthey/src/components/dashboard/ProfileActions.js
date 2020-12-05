import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> प्रोफ़ाइल जानकारी
        बदलें
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        अनुभव जोड़ें
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        शिक्षा जोड़ें
      </Link>
      <Link to="/add-family" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        परिवार की जानकारी जोड़ें
      </Link>
    </div>
  );
};

export default ProfileActions;
