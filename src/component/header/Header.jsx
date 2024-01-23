import React from "react";
import "./header.scss";
import { FaBook } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
      <i>
        <FaBook />
      </i>
      <h1>
        SabzLearn JS <a href="/">Book</a> List
      </h1>
    </div>
  );
};

export default Header;
