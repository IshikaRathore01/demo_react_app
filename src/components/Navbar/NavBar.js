import React, { useState } from "react";
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

  const Navbar = ({ Nav1, Nav2, Nav3, Nav4}) => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };
    const handleLogout = () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      navigate("/login");
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(prevState => !prevState);
    };

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">{Nav1}</Link>
          </li>
          <li>
            <Link to="/about">{Nav2}</Link>
          </li>
          <li>
            <Link to="/add">{Nav3}</Link>
          </li>
          <li 
         
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/example">
            {Nav4}
          </Link>
          {dropdownOpen && (
            <ul className="dropdown">
              <li><Link to="/useState">Use State</Link></li>
              <li><Link to="/useEffect">Use Effect</Link></li>
              <li><Link to="/useRef">Use Ref</Link></li>
              <li><Link to="/useMemo">Use Memo</Link></li>
              <li><Link to="/useReducer">Use Reducer</Link></li>
              <li><Link to="/useContext">Use Context</Link></li>
            </ul>
          )}
        </li>
        <li>
            <button onClick={() => handleLogout('/logout')}>Logout</button>
        </li>
        </ul>
      </nav>
    );
  };
export default Navbar;