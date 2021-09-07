import React from "react";
import { ImMap } from "react-icons/im";
import { FiChevronRight } from "react-icons/fi";
import { Slider } from "@material-ui/core";
import {
  AiFillQuestionCircle,
} from "react-icons/ai";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Nav from "../nichecomponents/Nav";
import Footer from "../nichecomponents/Footer";
import Header from "./Header";
import Filter from '../nichecomponents/Filter'
import $ from 'jquery'
const CollegeListing = () => {
  $(document).ready(function () {
    const width = $(window).width();
    if (width < 1000) {
      $("#ListingId").removeClass("container");
      $("#ListingId").addClass("container-fluid");
    } else {
      $("#ListingId").removeClass("container-fluid");
      $("#ListingId").addClass("container");
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
      <Header />
      <div className="main">
      <div className="container-fluid " id="FilterBtn">
          <Button
            variant="contained"
            id="filters"
            color="primary"
            className="mt-2"
            onClick={myFunction}
          >
            Filter
          </Button>
        </div>

        <div className="container" id="ListingId">
          <div id="bodypart-Row" className="row m-0 p-0">
            {/* Left-side */}
            <div className="col-lg-9 col-md-9 col-12 m-0 p-0 ">
              {/* content */}
              <div className="content my-4">
                <a href="#">
                  <h3>Mount Carmel College Of Nursing</h3>
                </a>
                <p className="my-4">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sint mollitia perspiciatis,
                  accusantium ipsa sunt consequuntur. Adipisci maxime fugit
                  dicta commodi!
                </p>
                <div className="bottomcontent mb-0 pb-0">
                  <div className="row mb-0 pb-0">
                    <div className="col-10 mb-0 pb-0">
                      <Button
                        variant="contained"
                        size="small"
                        className=""
                        style={{ backgroundColor: "green", color: "#fff" }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h3>Mount Carmel College Of Nursing</h3>
                </a>
                <p className="my-4">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sint mollitia perspiciatis,
                  accusantium ipsa sunt consequuntur. Adipisci maxime fugit
                  dicta commodi!
                </p>
                <div className="bottomcontent mb-0 pb-0">
                  <div className="row mb-0 pb-0">
                    <div className="col-10 mb-0 pb-0">
                      <Button
                        variant="contained"
                        size="small"
                        className=""
                        style={{ backgroundColor: "green", color: "#fff" }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h3>Mount Carmel College Of Nursing</h3>
                </a>
                <p className="my-4">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sint mollitia perspiciatis,
                  accusantium ipsa sunt consequuntur. Adipisci maxime fugit
                  dicta commodi!
                </p>
                <div className="bottomcontent mb-0 pb-0">
                  <div className="row mb-0 pb-0">
                    <div className="col-10 mb-0 pb-0">
                      <Button
                        variant="contained"
                        size="small"
                        className=""
                        style={{ backgroundColor: "green", color: "#fff" }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h3>Mount Carmel College Of Nursing</h3>
                </a>
                <p className="my-4">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sint mollitia perspiciatis,
                  accusantium ipsa sunt consequuntur. Adipisci maxime fugit
                  dicta commodi!
                </p>
                <div className="bottomcontent mb-0 pb-0">
                  <div className="row mb-0 pb-0">
                    <div className="col-10 mb-0 pb-0">
                      <Button
                        variant="contained"
                        size="small"
                        className=""
                        style={{ backgroundColor: "green", color: "#fff" }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h3>Mount Carmel College Of Nursing</h3>
                </a>
                <p className="my-4">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sint mollitia perspiciatis,
                  accusantium ipsa sunt consequuntur. Adipisci maxime fugit
                  dicta commodi!
                </p>
                <div className="bottomcontent mb-0 pb-0">
                  <div className="row mb-0 pb-0">
                    <div className="col-10 mb-0 pb-0">
                      <Button
                        variant="contained"
                        size="small"
                        className="ReadMoreBtn"
                        style={{ backgroundColor: "green", color: "#fff"}}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content my-4">
                <a href="#">
                  <h3>Mount Carmel College Of Nursing</h3>
                </a>
                <p className="my-4">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Sint mollitia perspiciatis,
                  accusantium ipsa sunt consequuntur. Adipisci maxime fugit
                  dicta commodi!
                </p>
                <div className="bottomcontent mb-0 pb-0">
                  <div className="row mb-0 pb-0">
                    <div className="col-10 mb-0 pb-0">
                      <Button
                        variant="contained"
                        size="small"
                        className=""
                        style={{ backgroundColor: "green", color: "#fff" }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left-side */}
            <div className="col-lg-3 col-md-3 col-12 " id="filterCol-3">
              <Filter/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeListing;
