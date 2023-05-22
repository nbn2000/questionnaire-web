import "./styles.css";
import  {Ozbek, Rus}  from "./functions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { uzbekObj, rusObj } from "../../languageObj";

// there is 2 components for 2 languages becouse 
//we dont know what kind of questions admin sets thatswhy, 
// but admin should be should be careful before submit coz I did not make 
// algorithm to check if both components' inputs are the same

const Admin = () => {
  const lang = localStorage.getItem('lang')
  const [langState] = useState(lang)
  return (
    <>
    <Link className="link-back" to='/register'>← {langState ? rusObj.register : uzbekObj.register}</Link>
      <Ozbek />
      <Rus/>
    </>
  );
};

export default Admin;