import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import $ from 'jquery';
const Footer = () => {
  $(document).ready(function () {
    const width = $(window).width();
    if (width < 1000) {
      $("#footerDiv").removeClass("container");
      $("#footerDiv").addClass("container-fluid");
    } else {
      $("#footerDiv").removeClass("container-fluid");
      $("#footerDiv").addClass("container");
    }
    console.log("width");
  });

  return (
    <>
      <div id="footerDiv" className="container FooterRow ">
        <div className="row mb-4 ">
          {/* Left  column */}
          <div className="col-4 ml leftColFooter m-0 p-0">
            <img src="/Img/logo.png"  width="180px" alt="" className="mb-4 mt-4"/>
            <ul>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/home">homey</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/ty">schools</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homtyt">colleges</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homety">resource center</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homet">contact</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homeg">Data</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homeb">Career</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homen">Partnerships</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homeh">press</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homei">information</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homeo">privacy policy</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homel">Agreement</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homem">cookie policy</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homep">web Accessibility</NavLink>
              </li>
              <li className="unstyled mb-2">
                <NavLink className="text-dec" to="/homeqq">Carrer</NavLink>
              </li>
              <li className="unstyled mb-2">
                <FaInstagramSquare className="footerIcon" /> <FaFacebook className="footerIcon1" /> <AiFillTwitterCircle className="footerIcon"/>
              </li>
              <li className="unstyled mb-2">
                <FaInstagramSquare className="footerIcon" /> <FaFacebook className="footerIcon1"/> <AiFillTwitterCircle className="footerIcon"/>
              </li>
              <li className="unstyled mb-2">
                <span style={{fontSize:"12px"}}>&copy;2021 TestprepKart.com.inc</span>
              </li>
            </ul>
          </div>
          {/* right side */}
          <div className="col-8 FooterRightCol" >
              <hr className="Footerhr " style={{height:"2px",marginBottom:"35px" ,marginTop:"40px"}}/>
            <div className="upperpart my-4">
              <h3 className="FooterHeading">
                Discover the schools, companies, and neighborhoods that are
                right for you.
              </h3>
              <div className="spans my-4  ">
              <span>
                <NavLink className="text-dec green fsize spansLinks" to="">k-12</NavLink>
              </span>
              <span>
                <NavLink className="text-dec green fsize ml spansLinks" to="">Colleges</NavLink>
              </span>
              <span>
                <NavLink className="text-dec green fsize ml spansLinks" to="">Graduation Schools</NavLink>
              </span>
              <span>
                <NavLink className="text-dec green fsize ml spansLinks" to="">Places To Live</NavLink>
              </span>

              </div>
              <hr className="my-4 Footerhr" width="800px"/>
              <h6 className="FooterClaim" >
                Do you work for a school or college?{" "}
                <NavLink className="text-dec" to="">Claim Your School</NavLink>{" "}
              </h6>
              <hr className="my-4 Footerhr" width="800px"/>
            </div>
            <div className="">
              <div className="row lowerpart">
                <div className="col-3">
                  <ul>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink " to="/home">Best Colleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/ty">students</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homtyt">top party schools</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeb">studeis</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homen">success</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeh">top best colleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/home">Best Colleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/ty">students</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homtyt">top party schools</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeb">studeis</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homen">success</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeh">top best colleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-3">
                  <ul>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/home">Best Colleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/ty">students</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homtyt">top party schools</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeb">studeis</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homen">success</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeh">top best colleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                    <li className="unstyled">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homet">top clleges</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homeg">acticities</NavLink>
                    </li>
                    <li className="unstyled ">
                      <NavLink className="text-dec gray col2fsize lowerlink" to="/homety">college Ranking</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
