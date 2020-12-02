import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './First_Page.css';

export default function First_Page() {
  
  return(
      <nav className="navbar"> 
      <Link className="navicon" to="/Next_Page">
      <div>
        <img className="navicon"
        src={'./ordee2.png'}
        alt=""
        />
      </div>
      <Link className="usericon" to='/Next_Page'>
        <div>
          <img className="user_icon"
          src={'./usericon.png'}
          alt=""
          />
        </div>
      </Link>
      </Link>
     </nav>
    );
}





