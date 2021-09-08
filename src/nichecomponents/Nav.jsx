import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import LogoImg from "../Img/logo.png";
import $ from "jquery";
import {useState, useEffect} from 'react'
function Nav() {
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        res.json().then((resp)=>{
            // console.log(resp)
            setSearch(resp);
        })
    })
}, [])

$(document).ready(function () {
    $(".list-url").on("click", function () {
      var data = $(this).attr("data");
      $("#search").val(data);
      $(".autocomplete").fadeOut();
    });
    // now code for search
    $("#search").on("keyup", function () {
      $(".autocomplete").fadeIn();
    });
  });

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const type = queryParams.get("type");
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
                  <SearchBar
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
                  />

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
                    <ul data-spy="scroll" role="tablist" className="scroll ">
                      {
                        search && search.length>0 ?
                        search.map(items=>
                          <li className="listitem ">
                          <div className="divitem">
                            <NavLink
                              
                              to="InstitutionHome?id=items.id"
                              data="NIT College in India Delhi"
                              className="list-url"
                            >
                              {items.title}
                            </NavLink>
                          </div>
                        </li>
                            ):"loading"
                      }      
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
