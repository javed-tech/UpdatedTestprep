import React from "react";
import Footer from "../nichecomponents/Footer";
import Nav from "../nichecomponents/Nav";
import {NavLink} from 'react-router-dom';
const InstitutionHome = (props) => {
  return (
    <>
    <Nav/>
      <div className="container">
        <div className="p-5 slidare" style={{ backgroundColor: "#fff" }}>
          <div className="row cofo ">
            <div className="col-md-6 border border-secondary middle-text p-1">
              <div className="d-flex flex-row p-1">
                <div className="mr-2">
                  
                  <img
                    src="https://testprepkart.com/search/user/img/national-logo.png"
                    alt=""
                  />
                </div>
                <div className="middle-text pl-2">
                  <h5 className="text-blue heading font-weight-bolder">
                    {/* National Institute of Technology, Surathkal */}
                    {props.name}
                  </h5>
                  <p className="sub-heading text-ligtgray">
                    Srinivasnagar PO, Surathkal, Mangalore, Karnataka - 575025
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 border border-secondary middle-text">
              <div className="text-center">
                <h6>JEE Main / TNC..</h6>
                <p className="text-ligtgray">Entrance Exam</p>
              </div>
            </div>
            <div className="col-md-1 border border-secondary middle-text">
              <div className="text-center">
                <h6>320</h6>
                <p className="text-ligtgray">Seats</p>
              </div>
            </div>
            <div className="col-md-2 border border-secondary middle-text">
              <div className="text-center">
                <h6>12 Lakh</h6>
                <p className="text-ligtgray">Course Fee (Total)</p>
              </div>
            </div>
            <div className="col-md-1 border border-secondary middle-text px-1">
              <div className="text-center">
                <button type="button" className="btn btn-danger btn-sm red">
                  Official Site
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb p-1 pl-3 mb-0"
                  style={{ backgroundColor: "rgb(255 255 255 / 0%)" }}
                >
                  <li className="breadcrumb-item">Home</li>
                  <li className="breadcrumb-item">
                    Universities &amp; Colleges
                  </li>
                  <li className="breadcrumb-item">Engineering </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    NIT's
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-6">
              <ul className="pagination justify-content-end pre-next mb-0">
                <li className="page-item">
                  <NavLink className="page-link" to="#">
                    
                    &lt; Previous Collages
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink className="page-link" to="#">
                    Next collages &gt;
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-8 p-1">
                  
                  <img
                    src="https://testprepkart.com/search/user/img/image1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-4 p-1">
                  
                  <img
                    src="https://testprepkart.com/search/user/img/image1.jpg"
                    alt=""
                    className="img-fluid pb-2"
                  />
                  <img
                    src="https://testprepkart.com/search/user/img/image1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="border border-secondary1 banside">
                <div className="p-3">
                  <div className="row m-0">
                    <div className="col-md-6 border border-secondary1 border-right-0 border-bottom-0 middle-text p-1">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>Government</h6>
                          <p>College Type</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1 border-bottom-0 middle-text p-1">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>
                            31 <span className="text-sky">(NIRF)</span>
                          </h6>
                          <p>College Type</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1 border-right-0  border-bottom-0 middle-text p-1">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>UG &amp; PG</h6>
                          <p>Course Level</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1 border-bottom-0 middle-text p-1">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>158</h6>
                          <p>Cutoff Marks(UG)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1 border-right-0  border-bottom-0 middle-text p-2">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>1987</h6>
                          <p>Established In</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1 border-bottom-0 middle-text p-1">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>23rd Jan, 2021</h6>
                          <p>College Type</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1 border-right-0   middle-text p-2">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>1987</h6>
                          <p>Established In</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 border border-secondary1  middle-text p-2">
                      <div className="d-flex flex-row">
                        <div className="mr-2 middle-text">
                          
                          <img
                            src="https://testprepkart.com/search/user/img/bed.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6>23rd Jan, 2021</h6>
                          <p>College Type</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 pt-3 fobtn">
                    <div className="col-md-6 p-0">
                      <iframe
                        src="https://www.youtube.com/embed/NbyHNASFi6U"
                        style={{ width: "100%", height: "100px" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div>
                        
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div>
                        <p className="pt-0">Mangalore, Karnataka</p>
                        <p className="pt-0">Phone: 0824 247 4000</p>
                        <p className="pt-0">Email: info@nits.edu</p>
                        <p className="pt-0">
                          Website: <NavLink to="#">www.nitk.edu</NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-7 p-0">
                      <button
                        type="button"
                        className="btn btn-danger w-100 red"
                      >
                        Download Admission Brochure
                      </button>
                    </div>
                    <div className="col-md-5">
                      <button
                        type="button"
                        className="btn btn-primary w-100 color-blue"
                      >
                        Keep Me Updated
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="list-group list-group-horizontal tags-list">
                
                <NavLink
                  to="#"
                  className="list-group-item  border-0 text-dark font-weight-bolder mr-2 bac"
                  style={{ backgroundColor: "transparent" }}
                >
                  Tags:
                </NavLink>
                <NavLink
                  to="#"
                  className="list-group-item  list-group-item-primary mr-2"
                >
                  Top Engineering Colleges In Karnataka
                </NavLink>
                <NavLink
                  to="#"
                  className="list-group-item  list-group-item-primary mr-2"
                >
                  NITs In India
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className style={{ backgroundColor: "#fff" }}>
          <nav className=" navbar navbar-expand-sm navbar-default sticky-top second-menu">
            <div className="row">
              <div className="col-md-12">
                <ul className="navbar-nav institution-navbar">
                  <li className="nav-item">
                    
                    <NavLink className="nav-link first-menu" to="#">
                      Menu Type
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link active" to="#">
                      Information
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Recent
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Eligibility
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Courses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Fee
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Admission
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Score &amp; Cutoff
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Reservation &amp; Quota
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Faculties
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Q&amp;A
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to="#">
                      Placements
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className=" p-5 cen-part">
          <div className="row ">
            <div className="col-md-8">
              <div className="colle-ove">
                <h3 className="hedig">College Overview</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="redmore">
                  <NavLink to="#">Show More</NavLink>
                </p>
              </div>
              <div className="colle-ove">
                <h3 className="hedig">Coursed Offerd</h3>
                <NavLink
                  to="#"
                  style={{ float: "right", color: "#555", fontWeight: 600 }}
                >
                  Custom Resulds
                  <i className="fa fa-filter" aria-hidden="true" />
                </NavLink>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                >
                  Seats = All / Cutoff = All
                </p>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Coursed</th>
                      <th>Seats</th>
                      <th>Cutoff</th>
                      <th>Exam</th>
                      <th>Fee</th>
                      <th>Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="para">
                  <strong>Seats</strong>: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p className="para">
                  <strong>Cutoff</strong>: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p className="para">
                  <strong>Fee:</strong>: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <br />
                <NavLink to="#">
                  DOWNLOAD DATA <i className="fas fa-arrow-right" />
                </NavLink>
              </div>
              <div className="colle-ove">
                <h3 className="hedig">Coursed Offerd</h3>
                <NavLink
                  to="#"
                  style={{ float: "right", color: "#555", fontWeight: 600 }}
                >
                  For B.Tech <i className="fa fa-filter" aria-hidden="true" />
                </NavLink>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                >
                  Seats = All / Cutoff = All
                </p>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Coursed</th>
                      <th>Seats</th>
                      <th>Cutoff</th>
                      <th>Exam</th>
                      <th>Fee</th>
                      <th>Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>110 </td>
                      <td>165 </td>
                      <td>JEE Main + Adv. </td>
                      <td>Rs.8 ~10L </td>
                      <td>
                        <NavLink to="#"> Click Here </NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="para">
                  <strong>Seats</strong>: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p className="para">
                  <strong>Cutoff</strong>: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <br />
                <NavLink to="#">
                  DOWNLOAD DATA <i className="fas fa-arrow-right" />
                </NavLink>
              </div>
              <div className="colle-ove">
                <h3 className="hedig">Recent Announcement</h3>
                <NavLink
                  to="#"
                  style={{ float: "right", color: "#555", fontWeight: 600 }}
                >
                  For B.Tech <i className="fa fa-filter" aria-hidden="true" />
                </NavLink>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                >
                  Seats = All / Cutoff = All
                </p>
                <table className="table table-striped ">
                  <thead>
                    <tr className="colo ">
                      <th>Date</th>
                      <th>Announcement Details</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>14/12/2020</td>
                      <td>
                        Advertisement for Maire Tecnimont Research Scholarships
                      </td>
                      <td>
                        <NavLink to="#">View Details</NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>14/12/2020</td>
                      <td>
                        Advertisement for Maire Tecnimont Research Scholarships
                      </td>
                      <td>
                        <NavLink to="#">View Details</NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>14/12/2020</td>
                      <td>
                        Advertisement for Maire Tecnimont Research Scholarships
                      </td>
                      <td>
                        <NavLink to="#">View Details</NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>14/12/2020</td>
                      <td>
                        Advertisement for Maire Tecnimont Research Scholarships
                      </td>
                      <td>
                        <NavLink to="#">View Details</NavLink>
                      </td>
                    </tr>
                    <tr>
                      <td>14/12/2020</td>
                      <td>
                        Advertisement for Maire Tecnimont Research Scholarships
                      </td>
                      <td>
                        <NavLink to="#">View Details</NavLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="para">
                  <strong>Seats</strong>: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <p className="para">
                  <strong>Cutoff</strong>: Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <br />
                <NavLink to="#">
                  DOWNLOAD DATA <i className="fas fa-arrow-right" />
                </NavLink>
              </div>
              <div className="colle-ove">
                <h3 className="hedig">
                  Facilities Available <i className="fa fa-youtube" />
                </h3>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                >
                  Campus facilities available for all students
                </p>
                <p className="para">
                  <strong>Seats Lorem ipsum</strong>
                </p>
                <br />
                <p className="redmore">
                  <NavLink to="#">Show More</NavLink>
                </p>
              </div>
              <div className="colle-ove">
                <h3 className="hedig">
                  Reservation &amp; Quota <i className="fa fa-youtube" />
                </h3>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontWeight: 600,
                    marginTop: "10px",
                  }}
                >
                  Number of seats available and conditions where they are
                  reserved.
                </p>
                <div className="row numr">
                  <div className="col-md-6">
                    <h2>Total Number of Seats Available</h2>
                    <h1 style={{ color: "#030096" }}> 2500</h1>
                  </div>
                  <div className="col-md-6">
                    <h2>
                      Total Number of <strong>Seats Reserved</strong>
                    </h2>
                    <h1 style={{ color: "#e34158" }}>300</h1>
                  </div>
                </div>
                <p>
                  <i className="fa fa-arrow-circle-right" /> Seats are reserved
                  for SC / ST / OBC / Pwd Candidates
                </p>
                <p style={{ marginTop: "5px" }}>
                  
                  <i className="fa fa-arrow-circle-right" /> Seats are reserved
                  for SC / ST / OBC / Pwd Candidates
                </p>
                <br />
                <p className="redmore">
                  <NavLink to="#">Show More</NavLink>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="colle-ove-side">
                <div className="bordr">
                  <h5>My Fit Custom College Ranking</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. <NavLink to="#">TRY IT NOW</NavLink>
                  </p>
                </div>
              </div>
              <div className="colle-ove-side">
                <h3 className="hedig1">NRIz Details For This College</h3>
                <div className="side-form">
                  <form action="/action_page.php">
                    <input type="checkbox" id name defaultValue />
                    <label htmlFor="vehicle1">
                      
                      NRIz Details For This College
                    </label>
                    <br />
                    <input type="checkbox" id name defaultValue />
                    <label htmlFor="vehicle2">
                      
                      NRIz Details For This College
                    </label>
                    <br />
                    <input type="checkbox" id name defaultValue />
                    <label htmlFor="vehicle3">
                      
                      NRIz Details For This College
                    </label>
                    <br />
                    <input type="checkbox" id name defaultValue />
                    <label htmlFor="vehicle3">
                      
                      NRIz Details For This College.
                    </label>
                    <br />
                    <br />
                  </form>
                </div>
                <NavLink to="#">
                  UNLOCK &amp; SHOW DETAILS <i className="fas fa-arrow-right" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/*cen-part*/}
      </div>
      <Footer/>
    </>
  );
};

export default InstitutionHome;
