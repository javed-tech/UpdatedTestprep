import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../Img/logo.png";
import $ from "jquery";
import { Fragment } from "react";
import Dummy from "../Dummy";

function Nav() {
  $(document).ready(function () {
    $(".list-url").on("click", function () {
      var data = $(this).attr("data");
      console.log('mydata',data)
      $("#search").val(data);
      alert($("#search").val());
      $(".autocomplete").fadeOut();
    });
    $("#search").on("keyup", function () {
      var search=$('#search').val();
      var urls="https://testprepkart.com/search/api/get-institution";
      var mydata={'search':search};
      $.ajax({
        url: urls,
        method:'GET',
        data:mydata,
        success:function(data){
          var result=JSON.parse(data);
          console.log(data,result);
          $(".autocomplete").fadeIn();
          $(".autocomplete").append('<h1>Hello</h1>');
        }
      });
      
    });
  });

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  console.log("id =", id); // 55 test null

  return (
    <>
      <div className="container-fluid  m-0 p-0">
        <div className="row">
          <div className="col-12 mx-auto ">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid toggleBtnParent">
                <NavLink className="logoImg" to="/">
                  <img src={LogoImg} alt="logo..." />
                </NavLink>
                <div className="col-6 ml">
                <Dummy className="searchbar"style={{height: "2.5rem",backgroundColor: " #fcf9f9",boxShadow: "5px 5px #fcf9f9"}}/>

                  {/* <SearchBar
                    autoComplete="off"
                    name="search"
                    autoComplete="off"
                    list="list"
                    id="search"
                    className="searchBar"
                    style={{
                      height: "2.5rem",
                      backgroundColor: " #fcf9f9",
                      boxShadow: "5px 5px #fcf9f9",
                    }}
                  /> */}

                  {/* <input
                    type="search"
                    name="search"
                    autoComplete="off"
                    list="list"
                    id="search"
                    className=" search-input form-control ml-2 mr-2 "
                    placeholder="Search"
                  /> */}
                  <div
                    class="row autocomplete overflow-hidden"
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

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon navtoggleIcon"></span>
                </button>
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
                      <NavLink className="nav-link " to="/BodyPart">
                        Colleges
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <div class="dropdown ">
                        <NavLink
                          class=" nav-link dropdown-toggle"
                          to=""
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Downloads
                        </NavLink>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <NavLink class="dropdown-item" to="/CollegeListing">
                              College Listing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              class="dropdown-item"
                              to="/InstitutionHome"
                            >
                              Institution Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink class="dropdown-item" to="#">
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
