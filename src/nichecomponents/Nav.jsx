import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../Img/logo.png";
import smallLogo from "../Img/smallLogo.png";
import $ from "jquery";
import Dummy from "../Dummy";
import { GoThreeBars } from "react-icons/go";
function Nav() {
  $(document).ready(function () {
    $(".list-url").on("click", function () {
      var data = $(this).attr("data");
      console.log("mydata", data);
      $("#search").val(data);
      alert($("#search").val());
      $(".autocomplete").fadeOut();
    });
    $("#search").on("keyup", function () {
      var search = $("#search").val();
      var urls = "https://testprepkart.com/search/api/get-institution";
      var mydata = { search: search };
      $.ajax({
        url: urls,
        method: "GET",
        data: mydata,
        success: function (data) {
          var result = JSON.parse(data);
          console.log(data, result);
          $(".autocomplete").fadeIn();
          $(".autocomplete").append("<h1>Hello</h1>");
        },
      });
    });
  });

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  console.log("id =", id); // 55 test null

  //logo classes change 
  $(document).ready(function () {
    const width = $(window).width();
    if (width < 999) {
      $("#tpkLogo").removeClass("desktoplogo");
      $("#tpkLogo").addClass("mobilelogo");
    } else {
      $("#tpkLogo").removeClass("mobilelogo");
      $("#tpkLogo").addClass("desktoplogo");
    }
    console.log("width");
  });

  return (
    <>
      <div className="container-fluid  m-0 p-0">
        <div className="row">
          <div className="col-12 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid toggleBtnParent  m-0 p-0">
                <NavLink className="logoImg m-0 p-0" to="/">
                  <img id="" className="d-none d-lg-block" src={LogoImg} alt="logo.."/>
                  <img id="" className="d-lg-none mobilelogo" src={smallLogo} alt="logo.."/>
                </NavLink>
                <div className="col-6 ml">
                  <Dummy
                    className="searchbar"
                    style={{
                      height: "2.5rem",
                      backgroundColor: " #fcf9f9",
                      boxShadow: "5px 5px #fcf9f9",
                    }}
                  />
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <GoThreeBars />
                  </button>

                  <div
                    className="row autocomplete overflow-hidden"
                    style={{ display: "none" }}
                  >
                    <ul
                      data-spy="scroll"
                      role="tablist"
                      className="scroll "
                      id="myul"
                    >
                      <li className="listitem ">
                        <div className="divitem">
                          <NavLink
                            to="InstitutionHome?id=items.id"
                            data="NIT College in India Delhi"
                            className="list-url"
                          >
                            NIT College
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="collapse menulinkDiv navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/Home">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/BlogPage">
                        Blog
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <div className="dropdown ">
                        <NavLink
                          className=" nav-link dropdown-toggle"
                          to=""
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Downloads
                        </NavLink>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <NavLink className="dropdown-item" to="/BlogListing">
                              Blog Listing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="dropdown-item"
                              to="/InstitutionHome"
                            >
                              Institution Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              Something else
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
