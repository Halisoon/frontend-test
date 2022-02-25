import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row justify-between">
            <div className="header__logo">
              <img src={logo} alt="" />
            </div>
            <div className="header__user">
              <div className="header__user-info">
                <div className="title">Handicrafted by</div>
                <div className="name">Jim HLS</div>
              </div>
              <div className="header__user-avatar">
                <img src={user} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <h1>A joke a day keeps the doctor away</h1>
        <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>
    </>
  );
};

export default Header;
