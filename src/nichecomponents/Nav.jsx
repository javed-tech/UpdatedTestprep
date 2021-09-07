import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import LogoImg from "../Img/logo.png";
import {useState} from "react";
function Nav() {
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
                <SearchBar
                list="data1"
                  style={{
                    height: "2.5rem",
                    backgroundColor: " #fcf9f9",
                    boxShadow: "5px 5px #fcf9f9",
                  }}
                  className="searchBar"
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
                            <NavLink class="dropdown-item" to="#">
                              Another action
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
