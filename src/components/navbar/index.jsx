import "./styles.css";
import { Link, useLocation } from 'react-router-dom';
import { uzbekObj, rusObj } from "../../languageObj";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation()
  const lang = localStorage.getItem('lang')
  const [langState] = useState(lang)

  const languageUzbek= () => {
    localStorage.removeItem('lang')
    window.location.reload();
  }

  const languageRus = () => {
    localStorage.removeItem('lang')
    localStorage.setItem('lang', 'ru')
    window.location.reload()
  }
  
  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>{
        location.pathname === '/admin' || location.pathname.startsWith('/user-info/') || location.pathname === '/list-user' ? 
        <div className="link-div">
          <Link to='/admin'><button className="link">{langState ? rusObj.custom : uzbekObj.custom}</button></Link>
          <Link to='/list-user'><button className="link">{langState ? rusObj.listUser : uzbekObj.listUser}</button></Link>
        </div> : null
      }
      {location.pathname.startsWith('/user-info/') || location.pathname === '/list-user' ? <></> :
      <div className="navbar-logo-ul">
        <ul>
          <li><button className="btn-nav" onClick={languageUzbek}>OZ</button></li>
          <li><button className="btn-nav" onClick={languageRus}>RU</button></li>
        </ul>
      </div>
      }
    </div>

  );
};
export default Navbar;
