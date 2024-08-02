import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Image from "../assets/onw.png";
import { FaArrowRight } from "react-icons/fa";
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login"); // Redirect to login page if no user is logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="body1">
      <div className="color"></div>
      <div className="Main">
        <div className="left">
          <img src={Image} alt="" />
        </div>
        <div className="right">
          <div>
            {" "}
            <div className="Main2">
              <div className="Line"></div>
              <div>
                <h1 className="purple">I'm Muhammad Saim Khan.</h1>
                <h1 className="purple1">I'm M.Saim.Khan</h1>

                <h1 className="white">Web Developer</h1>
              </div>
            </div>
            <div>
              <p className="para">
                As a dedicated front-end developer, I am passionate about
                creating engaging and user-friendly web interfaces. Proficient
                in HTML, CSS, and JavaScript, I specialize in utilizing
                frameworks like Bootstrap and Tailwind CSS to build responsive
                and dynamic web applications. With a keen eye for design and a
                commitment to delivering high-quality code, I thrive in
                collaborative environments where I can contribute my technical
                expertise to achieve project goals effectively.
              </p>
            </div>
            <div>
              <button className="button" onClick={handleLogout}>
                Logout{" "}
                <span className="button-icon">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={handleLogout}>Logout</button>
      <p>Welcome to Dashboard</p> */}
    </div>
  );
};

export default Dashboard;
