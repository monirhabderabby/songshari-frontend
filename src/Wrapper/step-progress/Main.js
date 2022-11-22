import React, { useEffect, useState } from "react";
import StepOne from "../../Wrapper/step-progress/StepOne";
import StepThree from "../../Wrapper/step-progress/StepTwo";
import StepTwo from "../../Wrapper/step-progress/StepThree";
import "./main.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    employment: "",
    position: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [proceed, setProceed] = useState(true);

  //handle onChange event
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleCheck = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const handleSubmt = async () => {
    let data = {
      FirstName: state.firstName,
      LastName: state.lastName,
      Email: state.email,
      Gender: state.gender,
      Employment: state.employment,
      Position: state.position,
      Password: state.password.split("").reverse().join(""),
      Joined: new Date().toLocaleDateString(),
      Agreed: state.agreed,
    };
    setLoading(true);
    try {
      await axios.post("https://sheet.best/api/sheets/8ed1d6b4-62c3-4faf-ae64-b2125b0536ce", data).then((response) => {
        setShow(true);
        console.log(data);
      });
    } catch (err) {
      setLoading(false);
      setShow(false);
      return navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="form-div center">
        <div className="indicators-div">
          <div
            className={
              step === 1
                ? "indicators-active"
                : step > 1
                ? "indicators-done"
                : null
            }
          >
            <h2>1</h2>
          </div>
          <div
            className={
              step === 2
                ? "indicators-active"
                : step < 2
                ? "indicators-left"
                : step > 2
                ? "indicators-done"
                : null
            }
          >
            <h2>2</h2>
          </div>
          <div
            className={
              step === 3
                ? "indicators-active"
                : step < 3
                ? "indicators-left"
                : null
            }
          >
            <h2>3</h2>
          </div>
        </div>
        {/* progress starts */}
        <div className="progress-div center-block">
          <progress
            value={Math.ceil(step * 33.33)}
            max="100"
            className="progress"
          ></progress>
        </div>
        {/* progress ends */}
        {/* step components starts */}
        {step === 1 ? (
          <StepOne
            value={state}
            handleChange={handleChange}
            setProceed={setProceed}
          />
        ) : step === 2 ? (
          <StepTwo
            value={state}
            handleChange={handleChange}
            setProceed={setProceed}
          />
        ) : step === 3 ? (
          <StepThree
            value={state}
            handleChange={handleChange}
            handleCheck={handleCheck}
            setProceed={setProceed}
          />
        ) : null}
      </div>
      {/* form div ends */}

      <div className="button-div center">
        {step > 1 && (
          <button
            className="back-btn"
            onClick={() => setStep(step - 1)}
            disabled={loading}
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button className="next-btn" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
        {step === 3 && (
          <button
            className="submit-btn"
            onClick={handleSubmt}
            disabled={loading || !proceed}
          >
            {loading && !show ? "Sending..." : "Submit"}
          </button>
        )}
      </div>
      {/* button div ends */}

      {show && (
        <div className="overlay-div">
          <div className="final-div">
            <div className="flex">
              <h2>Success!</h2>
              <h3 onClick={() => window.location.reload()}>&times;</h3>
            </div>
            <hr></hr>
            <p>Registraion Successful</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
