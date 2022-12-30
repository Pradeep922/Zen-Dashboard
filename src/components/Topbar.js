import React, { useState } from 'react';
import './Topbar.css';

function Topbar() {

  // const [deleteuser, setDeleteuser]= useState(false);

  
  const user = localStorage.getItem('user');

  // const deleteUser = () =>
  // {
  // if (user) {
  //   localStorage.removeItem('user')
  // } 
  // return
  // }

  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="heading">Welcome to Zen Portal</span>
            </div>
            <div className="topRight">
                <span className="UserName">Pradeep Raj D.V</span>
        </div>
        <button className="logout">Logout</button>
    </div>
    </div>
  )
}

export default Topbar;