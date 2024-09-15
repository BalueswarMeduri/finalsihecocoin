import React, { useState, useRef } from "react";
import "./Addimage.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import image from "../../assets/image.png";

const Addimage = () => {
  const isLoggedIn = useSelector((state) => state.auth.status);
  const [showModal, setShowModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const fileInputRef = useRef(null); // Reference to file input

  const handleUploadClick = () => {
    if (!isLoggedIn) {
      toast.error("Please login to upload images.", {
        className: "toast-error",
        bodyClassName: "toast-error-body",
      });
    } else {
      setShowModal(true); // Show modal when button is clicked
    }
  };

  const handleAccept = () => {
    setIsAccepted(true);
    setShowModal(false); // Close the modal after acceptance
    fileInputRef.current.click(); // Open file input
  };

  return (
    <div className="fullcarbonuplod">
      <div className="binboxforuploadimg">
        <div className="fornav">
          <Navbar />
        </div>
        <h1 className="headinginupload">Upload Image here</h1>

        <div className="uploadimg">
          <button
            className="upload-button"
            onClick={handleUploadClick}
            disabled={!isLoggedIn} // Disable if not logged in
          >
            <img
              src={image}
              alt="Upload Icon"
              className="upload-icon"
            />
            Upload Image
          </button>
          <input
            type="file"
            id="file"
            ref={fileInputRef} // Connect ref to input
            style={{ display: "none" }} // Hide input initially
            disabled={!isLoggedIn || !isAccepted} // Disable until conditions are accepted
          />
        </div>

        <ToastContainer />
      </div>
      <div className="carbon">
      <div className="line"></div>
        <h1>Calculate your carbon footprints</h1>
        <Link to="/footprint">
          <button className="btn">Check</button>
        </Link>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Important Notes Before Uploading</h2>
            <ul>
              <li>
                -The image must not be the same as a previously uploaded image.
                If it is, you will lose points.
              </li>
              <li>-he image must contain both a human and a plant.</li>
              <li>
                -The new plant should be at least 1 meter away from the
                previously uploaded plant.
              </li>
            </ul>
            <button onClick={handleAccept}>I Accept</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addimage;
