import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Courses from "./Courses";
import Degree from "./Degree";
const NavCd = () => {
  const [flag, setFlage] = useState(false);

  return (
    <>
      <div className="container-fluid ">
        <div className="container EducationArticles">
          <ul className="c-dmenuItems blogUpdateList">
            <li
              className="text-dec"  
               onClick={() => {
               setFlage(true)}}
               >
                <h5 className="c-dHeading">COURSES IN INDIA</h5>
            </li>

            <li 
               className="text-dec" 
                onClick={() => {
                setFlage(false)}}
                >
               
                <h5 className="c-dHeading1">DEGREES IN INDIA</h5>
            </li>
            <hr className="m-0 p-0" width="1040px" />
            {flag ? <Courses /> : <Degree />}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavCd;
