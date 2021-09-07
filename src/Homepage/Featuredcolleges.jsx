import React from "react";
import { NavLink } from "react-router-dom";
import HomeFeaturedImg from '../homeImg/IIt.png'
const Featuredcolleges = () => {
  return (
    <>
      <div className="container-fluid bg-success mt-4" >
        <div className="container FeaturedCollegeContainer">
            <div className="row  m-0 p-0 " >
              <ul className="FeaturedHeading blogUpdateList">
               <li><h2 className="text-light">Featured Colleges</h2></li> 
                <li className="FeaturedViewBtn"><button className="feturedViewbtn  ">VIEW</button></li> 
              </ul>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="IIt">
                  <NavLink to="/">
                    <img className="FeaturedImgH-W" src={HomeFeaturedImg} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6 ">
                <div className="IIt">
                  <NavLink to="/">
                  <img className="FeaturedImgH-W" src={HomeFeaturedImg} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="IIt">
                  <NavLink to="/">
                  <img className="FeaturedImgH-W" src={HomeFeaturedImg} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="IIt">
                  <NavLink to="/">
                  <img className="FeaturedImgH-W" src={HomeFeaturedImg} alt="" />
                  </NavLink>
                </div>
              </div>
            
          </div> 
        </div>
      </div>
    </>
  );
};

export default Featuredcolleges;
