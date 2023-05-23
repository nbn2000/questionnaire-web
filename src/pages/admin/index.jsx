import "./styles.css";
import  {Ozbek, Rus}  from "./functions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { uzbekObj, rusObj } from "../../languageObj";

// there is 2 components for 2 languages becouse 
//we dont know what kind of questions admin sets thatswhy, 
// but admin should be should be careful before submit coz I did not make 
// algorithm to check if both components' inputs are the same

const Admin = () => {
  const history = useHistory();
  const lang = localStorage.getItem('lang')
  const [langState] = useState(lang)
 
  const handleLinkClick = () => {
    history.push('/register');
  };
  return (
    <>
    <button className="link-back" onClick={handleLinkClick}>← {langState ? rusObj.register : uzbekObj.register}</button>
      <Ozbek />
      <Rus/>
    </>
  );
};

export default Admin;