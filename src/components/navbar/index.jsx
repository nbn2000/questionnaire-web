import "./styles.css";

const Navbar = () => {
  const admincheck = false
  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>{
        admincheck && <div className="link-div">
          <button className="link">Custom</button>
          <button className="link">Diagram</button>
          <button className="link">ListUser</button>
        </div>
      }
      
      <div className="navbar-logo-ul">
        <ul>
          <li><button className="btn-nav">OZ</button></li>
          <li><button className="btn-nav">RU</button></li>
        </ul>
      </div>
    </div>

  );
};
export default Navbar;
