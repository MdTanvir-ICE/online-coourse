import React from 'react';
import logo from '../../images/ICON/Logo.png';
import banner from '../../images/banner.jpg';
import './Header.css';
const Header = () => {
    
    return (
        <div>
        <div className="containr header">
          <div>
            <img src={logo} alt=""/>
          </div>
        
          <li>
            <a href="#">Catagories</a>
          </li>
          <form className="form" >
            <input type="text" placeholder="search for anything......"/>
            <button className="btn">Search</button>
          </form>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Sign-in</a>
          </li>
        </div>
    
        <div className="cover">
            <img src={banner} alt=""/>
            </div>
      </div>

   
    

    );
};

export default Header;