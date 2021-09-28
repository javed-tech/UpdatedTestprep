import React,{useEffect,useState} from "react";
import {AiTwotoneStar,AiOutlineStar} from "react-icons/ai";
import { FaStarHalfAlt, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";
import { FcVideoCall } from "react-icons/fc";
import $ from "jquery";
import Filter from "./Filter";
import {NavLink} from 'react-router-dom';
const ViewList = styled.div`
.viewListbtn {
  background-color: "green";
  color: "#fff";
  padding: "4px";
  font-size: "10px";
}
`;

const CollegeListing = () => {

    // get api js
    const [users, setusers]= useState([]);
    const getUsers = async () =>{
      const response= await fetch('http://edxkart.com/api/get-institution?search=Amity');
      setusers(await response.json());
    }

    useEffect(()=>{
      getUsers();
    },[])



  $(document).ready(function () {
    const width = $(window).width();
    if (width < 1000) {
      $("#FilterId").removeClass("container");
      $("#FilterId").addClass("container-fluid");
    } else {
      $("#FilterId").removeClass("container-fluid");
      $("#FilterId").addClass("container");
    }
    console.log("width");
  });

  function myFunction() {
    var x = document.getElementById("filterCol-3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  return (
    <>
      <Nav />
      <Banner />
      <div className="main">
        <div className="container-fluid " id="FilterBtn">
          <Button variant="contained" id='filters'  className="mt-2"  onClick={myFunction}>
            Filter
          </Button>
        </div>

        <div className="container  " id="FilterId">
          <div className="row m-0 p-0">
            <div className="col-lg-3 col-md-3 col-12 " id="filterCol-3">
              <Filter/>
            </div>
            {/* Right-side */}
            <div className="col-lg-9 col-md-9 col-12 m-0 p-0 ">
              <div>
                <ul className=" FilterLinks blogUpdateList my-4 mb-lg-0">
                  <li className=" tpsBottom">
                    <NavLink className="text-dec text-success" to="/">
                      Best Colleges
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-dec text-success FilterLinksML"
                      to="/Service"
                    >
                      Your Best Fit
                      <span
                        style={{ fontSize: "9px", verticalAlign: "text-top" }}
                      >
                        Beta
                      </span>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-dec text-success FilterLinksML"
                      to="/About"
                    >
                      Best Colleges
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-dec text-success FilterLinksML"
                      to="/Contact"
                    >
                      Best Value
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink className="text-success FilterLinksML" to="/Contact">
                      <BsThreeDots />
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* content */}
              {
                users.map((items)=>{
                  return(
                    <div className="content my-4" key={items.id}>
                    <NavLink to="#">
                      <h6 className="mr" style={{ color: "green" }}>
                        #1 Best Colleges In America
                      </h6>
                    </NavLink>
                    <NavLink to="#">
                      <h3 className="contentMount1">
                        {items.institution}
                        <FcVideoCall className="videoIcon" />
                      </h3>
                    </NavLink>
                    <div className="starsHead">
                      <span className="mr">4 Year .</span>
                      <span className="mr">{items.country}</span>
                      <span className="mr">
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <FaStarHalfAlt />
                        <AiOutlineStar />
                        115 reviews
                      </span>
                    </div>
                    <p className="my-4">
                      Sophomore: I enjoy being a part of this college because
                      everyone is super nice and helpful. The advisors and staff are
                      great! They answer emails super fast, usually with a very
                      detailed and thought out response, and sometimes I could just
                      hug them! The instructors genuin <NavLink to="">Read Reviews</NavLink>
                    </p>
                    <div className="bottomRate">
                      <span
                        className="mr"
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "3px",
                          borderRadius: "14px",
                        }}
                      >
                        A+
                      </span>
                      <span className="mr">Overall Niche Grade .</span>
                      <span className="mr">Acceptance Rate 7% .</span>
                      <span className="mr">Net Price $20,465 .</span>
                      <span className="mr">SAT Range 1510-1570</span>
                    </div>
                    <hr className="mb-0 pb-0" />
                    <div className="bottomcontent mb-0 pb-0">
                      <div className="row mb-0 pb-0">
                        <div className="col-10 mb-0 pb-0">
                          <span className="mrContent ">
                            <NavLink to="">Will You Get In? |</NavLink>
                          </span>
                          <span className="mrContent">
                            <NavLink to="">Compare</NavLink>
                          </span>
                        </div>
                        <ViewList className="col-2 m-0 p-0 pt-2 ">
                          <Button
                            variant="contained"
                            className="viewListbtn"
                            style={{
                              backgroundColor: "green",
                              color: "#fff",
                              padding: "4px",
                              fontSize: "10px",
                            }}
                          >
                            <FaHeart />
                            &nbsp;Add to List
                          </Button>
                        </ViewList>
                      </div>
                    </div>
                  </div>
    
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeListing;
