import React from "react";
import { ImMap } from "react-icons/im";
import { FiChevronRight } from "react-icons/fi";
import { Slider } from "@material-ui/core";
import {
  AiFillQuestionCircle,
  AiTwotoneStar,
  AiOutlineStar,
} from "react-icons/ai";
import { FaStarHalfAlt, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";
import { FcVideoCall } from "react-icons/fc";
import $ from "jquery";
import Filter from "./Filter";
const Filtration = () => {
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

  const ViewList = styled.div`
    .viewListbtn {
      background-color: "green";
      color: "#fff";
      padding: "4px";
      font-size: "10px";
    }
  `;
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
          <Button variant="contained" id='filters' color="primary" className="mt-2"  onClick={myFunction}>
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
                    <a className="text-dec text-success" to="/">
                      Best Colleges
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-dec text-success FilterLinksML"
                      to="/Service"
                    >
                      Your Best Fit
                      <span
                        style={{ fontSize: "9px", verticalAlign: "text-top" }}
                      >
                        Beta
                      </span>
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-dec text-success FilterLinksML"
                      to="/About"
                    >
                      Best Colleges
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-dec text-success FilterLinksML"
                      to="/Contact"
                    >
                      Best Value
                    </a>
                  </li>
                  <li className="">
                    <a className="text-success FilterLinksML" to="/Contact">
                      <BsThreeDots />
                    </a>
                  </li>
                </ul>
              </div>
              {/* content */}
              <div className="content my-4">
                <a href="#">
                  <h6 className="mr" style={{ color: "green" }}>
                    #1 Best Colleges In America
                  </h6>
                </a>
                <a href="#">
                  <h3 className="contentMount1">
                    Mount Carmel College Of Nursing{" "}
                    <FcVideoCall className="videoIcon" />
                  </h3>
                </a>
                <div className="starsHead">
                  <span className="mr">4 Year .</span>
                  <span className="mr">COLUMBUS,OH .</span>
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
                  hug them! The instructors genuin <a href="">Read Reviews</a>
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
                        <a href="">Will You Get In? |</a>
                      </span>
                      <span className="mrContent">
                        <a href="">Compare</a>
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

              <div className="content my-4">
                <a href="#">
                  <h6 className="mr" style={{ color: "green" }}>
                    #1 Best Colleges In America
                  </h6>
                </a>
                <a href="#">
                  <h3>
                    Mount Carmel College Of Nursing{" "}
                    <FcVideoCall className="videoIcon" />
                  </h3>
                </a>
                <div className="starsHead">
                  <span className="mr">4 Year .</span>
                  <span className="mr">COLUMBUS,OH .</span>
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
                  hug them! The instructors genuin <a href="">Read Reviews</a>
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
                <hr />
                <div className="bottomcontent">
                  <div className="row">
                    <div className="col-10">
                      <span className="mrContent">
                        <a href="">Will You Get In? |</a>
                      </span>
                      <span className="mrContent">
                        <a href="">Compare</a>
                      </span>
                    </div>
                    <div className="col-2 pt-2 ">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "8px",
                          fontSize: "10px",
                        }}
                      >
                        <FaHeart />
                        &nbsp;Add to List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h6 className="mr" style={{ color: "green" }}>
                    #1 Best Colleges In America
                  </h6>
                </a>
                <a href="#">
                  <h3>
                    Mount Carmel College Of Nursing{" "}
                    <FcVideoCall className="videoIcon" />
                  </h3>
                </a>
                <div className="starsHead">
                  <span className="mr">4 Year .</span>
                  <span className="mr">COLUMBUS,OH .</span>
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
                  hug them! The instructors genuin <a href="">Read Reviews</a>
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
                <hr />
                <div className="bottomcontent">
                  <div className="row">
                    <div className="col-10">
                      <span className="mrContent">
                        <a href="">Will You Get In? |</a>
                      </span>
                      <span className="mrContent">
                        <a href="">Compare</a>
                      </span>
                    </div>
                    <div className="col-2 pt-2 ">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "8px",
                          fontSize: "10px",
                        }}
                      >
                        <FaHeart />
                        &nbsp;Add to List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h6 className="mr" style={{ color: "green" }}>
                    #1 Best Colleges In America
                  </h6>
                </a>
                <a href="#">
                  <h3>
                    Mount Carmel College Of Nursing{" "}
                    <FcVideoCall className="videoIcon" />
                  </h3>
                </a>
                <div className="starsHead">
                  <span className="mr">4 Year .</span>
                  <span className="mr">COLUMBUS,OH .</span>
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
                  hug them! The instructors genuin <a href="">Read Reviews</a>
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
                <hr />
                <div className="bottomcontent">
                  <div className="row">
                    <div className="col-10">
                      <span className="mrContent">
                        <a href="">Will You Get In? |</a>
                      </span>
                      <span className="mrContent">
                        <a href="">Compare</a>
                      </span>
                    </div>
                    <div className="col-2 pt-2 ">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "8px",
                          fontSize: "10px",
                        }}
                      >
                        <FaHeart />
                        &nbsp;Add to List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h6 className="mr" style={{ color: "green" }}>
                    #1 Best Colleges In America
                  </h6>
                </a>
                <a href="#">
                  <h3>
                    Mount Carmel College Of Nursing{" "}
                    <FcVideoCall className="videoIcon" />
                  </h3>
                </a>
                <div className="starsHead">
                  <span className="mr">4 Year .</span>
                  <span className="mr">COLUMBUS,OH .</span>
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
                  hug them! The instructors genuin <a href="">Read Reviews</a>
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
                <hr />
                <div className="bottomcontent">
                  <div className="row">
                    <div className="col-10">
                      <span className="mrContent">
                        <a href="">Will You Get In? |</a>
                      </span>
                      <span className="mrContent">
                        <a href="">Compare</a>
                      </span>
                    </div>
                    <div className="col-2 pt-2 ">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "8px",
                          fontSize: "10px",
                        }}
                      >
                        <FaHeart />
                        &nbsp;Add to List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h6 className="mr" style={{ color: "green" }}>
                    #1 Best Colleges In America
                  </h6>
                </a>
                <a href="#">
                  <h3>
                    Mount Carmel College Of Nursing{" "}
                    <FcVideoCall className="videoIcon" />
                  </h3>
                </a>
                <div className="starsHead">
                  <span className="mr">4 Year .</span>
                  <span className="mr">COLUMBUS,OH .</span>
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
                  hug them! The instructors genuin <a href="">Read Reviews</a>
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
                <hr />
                <div className="bottomcontent">
                  <div className="row">
                    <div className="col-10">
                      <span className="mrContent">
                        <a href="">Will You Get In? |</a>
                      </span>
                      <span className="mrContent">
                        <a href="">Compare</a>
                      </span>
                    </div>
                    <div className="col-2 pt-2 ">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                          color: "#fff",
                          padding: "8px",
                          fontSize: "10px",
                        }}
                      >
                        <FaHeart />
                        &nbsp;Add to List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Filtration;