import React from 'react';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header>
        <h1>Book Management App</h1>
        <hr />
        <div className="links">
            <NavLink to="/"  exact className={isActive =>
    "link" + (!isActive ? " unselected" : "")
  }
            >Book List   
            </NavLink>
            <NavLink to="/add"
            exact className={isActive =>
    "link" + (!isActive ? " unselected" : "")
  }
            >
Add Book
            </NavLink>
        </div>
    </header>
  )
}

export default Header