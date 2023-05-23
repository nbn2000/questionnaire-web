import "./styles.css";
import React, { useState, useEffect } from "react";
import { uzbekObj, rusObj } from "../../languageObj";
import { useHistory } from "react-router-dom";

function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [admin] = useState('admin12345');
  const lang = localStorage.getItem('lang')
  const [langState] = useState(lang)
  const history = useHistory()

  const regex = /^\+[0-9]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if(phoneNumber === admin){
      localStorage.clear()
      localStorage.setItem('admin', true)
      history.push('/admin')
      window.location.reload();
    }else if (!phoneNumber || !regex.test(phoneNumber) || phoneNumber.length < 9 || phoneNumber.length > 16) {
      if(langState){  
      setErrorMessage(rusObj.regAlart);
      }else{
        setErrorMessage(uzbekObj.regAlart)
      }
        setPhoneNumber('')
    }else {
        localStorage.clear()
        localStorage.setItem("users", phoneNumber);
        setPhoneNumber("");
        history.push('/')
        window.location.reload();
    }
  };
  

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    const errorTimer = setInterval(() => {
      setErrorMessage("");
    }, 2000);

    return () => {
      clearInterval(errorTimer);
    };
  }, []);

  return (
    <div className="register-body">
    <div className="container-register">
        <header className="header-reg">
            <h1 className="text-center h1">{langState ? rusObj.enterPhone : uzbekObj.enterPhone}</h1>
            <p className="description text-center">{langState ? rusObj.p : uzbekObj.p}</p>
        </header>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
        <label className="label">
          {langState ? rusObj.phonenumber : uzbekObj.phonenumber}
          <input className="input-reg"
            type="tel"
            value={phoneNumber} placeholder="+99812322...."
            onChange={handlePhoneNumberChange}
          />
        </label>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="submit-button" type="submit">
          {langState ? rusObj.submitReg : uzbekObj.submitReg}
        </button>
      </form>
    </div>
    </div>
  );
}

export default Register;