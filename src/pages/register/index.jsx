import "./styles.css";
import React, { useState } from "react";

function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const regex = /^\+[0-9]+$/;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!phoneNumber && !regex.test(phoneNumber)) {
        setErrorMessage("Iltimos to'g'ri telefon raqam kiriting");
    }else {
        setErrorMessage('')
        const newUsers = [...users, { user: phoneNumber }];
        setUsers(newUsers);
        setPhoneNumber("");
        console.log(newUsers);
    } 
  };
  

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="register-body">
    <div className="container-register">
        <header className="header-reg">
            <h1 className="text-center h1"> Iltimos telephone raqam kiriting</h1>
            <p className="description text-center">Rahmat sizga vaqtingizni ishlatganiz uchun</p>
        </header>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
        <label>
          telefon raqam:
          <input className="input-reg"
            type="tel"
            value={phoneNumber} placeholder="+99812322...."
            onChange={handlePhoneNumberChange}
          />
        </label>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="submit-button" type="submit">
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
    </div>
  );
}

export default Register;

