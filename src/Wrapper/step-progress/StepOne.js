import React, { memo, useEffect, useState } from "react";
import "./steps.css";

const StepOne = ({ value, handleChange, setProceed }) => {
  const [error, setError] = useState("");

  const check = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstName || !value.lastName || !value.email) {
      setProceed(false);
    } else if (!value.email.match(mailformat)) {
      setProceed(false);
      setError("Inavalid mail address");
    } else {
      setError("");
      setProceed(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      check();
    }, 1000);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="steps">
      <div className="inp-div">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={value.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="inp-div">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={value.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="inp-div">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={value.email}
          onChange={handleChange}
        />
        <p className="error">{error && error}</p>
      </div>
    </div>
  );
};

export default memo(StepOne);
