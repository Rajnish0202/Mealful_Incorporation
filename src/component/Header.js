import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <h4>
            Delivered <span>Order</span>
          </h4>
        </div>
        <Link to='/' className='home'>
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Header;
