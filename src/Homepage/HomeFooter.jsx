import React from "react";
import { NavLink } from "react-router-dom";
import { MdGavel, MdReport } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaYoutube} from "react-icons/fa";
import {FcStart} from 'react-icons/fc'
import $ from 'jquery'
const HomeFooter = () => {
  $(document).ready(function () {
    const width = $(window).width();
    if (width < 1000) {
      $("#HomefooterId").removeClass("container");
      $("#HomefooterId").addClass("container-fluid");
    } else {
      $("#HomefooterId").removeClass("container-fluid");
      $("#HomefooterId").addClass("container");
    }
    console.log("width");
  });

  return (
    <>
      <div className="container  p-4" id="HomefooterId">
        <div className="row">
          <div className="col-2">
            <div className="AlertLinks">
              <NavLink className="text-dec text-dark" to="">
                <h5 className="H-FlinksHeading">Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Admission Notices
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Results</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>results</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>Alerts</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGreen" to="">
                VIEW MORE
              </NavLink>
            </div>
          </div>
          <div className="col-2">
            <div className="Enterance Exams">
              <NavLink className="text-dec text-dark" to="">
                <h5 className="H-FlinksHeading">Enterance Exam</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Admission Notices
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Results</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>results</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>Alerts</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGreen" to="">
                VIEW MORE
              </NavLink>
            </div>
          </div>
          <div className="col-2">
            <div className="Knowledge Hub ">
              <NavLink className="text-dec text-dark" to="">
                <h5 className="H-FlinksHeading">Knowledge Hub</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Admission Notices
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Results</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>results</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>Alerts</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
            </div>
          </div>
          <div className="col-2">
            <div className="Institutions">
              <NavLink className="text-dec text-dark" to="">
                <h5 className="H-FlinksHeading">Instituions</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Admission Notices
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Results</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>results</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>Alerts</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGreen" to="">
                VIEW MORE
              </NavLink>
            </div>
          </div>
          <div className="col-2">
            <div className="Career Options">
              <NavLink className="text-dec text-dark" to="">
                <h5 className="H-FlinksHeading">Career Options</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Admission Notices
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Results</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>results</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>Alerts</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
            </div>
          </div>
          <div className="col-2">
            <div className="Exams">
              <NavLink className="text-dec text-dark" to="">
                <h5 className="H-FlinksHeading">Exams</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Admission Notices
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Results</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>results</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h6>Alerts</h6>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                Results
              </NavLink>
              <NavLink className="text-dec HomeFooterGray" to="">
                <h5>Alerts</h5>
              </NavLink>
              <NavLink className="text-dec HomeFooterGreen" to="">
                VIEW MORE
              </NavLink>
            </div>
          </div>
          <hr className="mt-4" />
        </div>

        <ul className=" row PDRSection blogUpdateList">
          <li className=" col-8 pagereview p-2">
            PageViews: <b>4213019</b>
          </li>
          <li className="col-2 disclaimer ">
            <MdGavel />
            DISCLAIMER &nbsp;
          </li>
          <li className="col-2 Report">
            <MdReport /> REPORT ERROR
          </li>
        </ul>
      </div>

      <div className="container-fluid Colouredlastfooter bg-dark text-light m-0 p-0">
        <div
          className="container "
          style={{
            width: "80%",
          }}
        >
          <div className="row">
            <ul className=" HomeFooterBottomLinks blogUpdateList text-center mt-4" >
              <li className="HomeFooter-border ">ABOUT US</li>
              <li className=" HomeFooter-border">DISCLAIMER</li>
              <li className="HomeFooter-border">PRIVACY POLICY</li>
              <li className="HomeFooter-border">TERMS & CONDITIONS</li>
              <li className=" HomeFooter-ml">CONTACT US</li>
            </ul>
            <h6 className="text-center tradeLine">ALL TRADE MARKS BELONG TO THE RESPECTIVE OWNERS.</h6>
            <div className="HomeFooter-icons">
                <ul className="blogUpdateList text-center">
                    <li className="HomeFooter-fb px-1"><FaFacebookF/></li>
                    <li className="HomeFooter-twiter px-1"><FaTwitter/></li>
                    <li className="HomeFooter-youtube px-1"><FaYoutube/></li>
                </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="youtubeDiv text-center">
            <ul className="blogUpdateList">
                <li className="YoutubeDiv-li1">TestprepKart on</li>
                <li className="YoutubeDiv-li2"><FcStart/></li>
                <li className="YoutubeDiv-li2">YouTube</li>
            </ul>
        </div>

    </>
  );
};

export default HomeFooter;
