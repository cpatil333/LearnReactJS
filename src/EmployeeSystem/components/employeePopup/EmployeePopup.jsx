import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popupSlice";

const EmployeePopup = () => {
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
  });
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.employeePopup);
  console.log(formDetails);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log(formDetails);
  };
  if (!popup) return null;
  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center"
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile Url</label>
        <input
          type="text"
          name="profileUrl"
          value={formDetails.profileUrl}
          className="input"
          placeholder="Profile Url"
          onChange={handleInputChange}
        />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formDetails.name}
          className="input"
          placeholder="Employee Name"
          onChange={handleInputChange}
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formDetails.email}
          className="input"
          placeholder="Email"
          onChange={handleInputChange}
        />

        <label className="label">Your bio</label>
        <textarea
          name="bio"
          value={formDetails.bio}
          className="textarea h-24"
          placeholder="Bio"
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
