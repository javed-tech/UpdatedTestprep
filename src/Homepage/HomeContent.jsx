import React from "react";
import { RiPencilRulerLine } from "react-icons/ri";
const HomeContent = () => {
  return (
    <>
      <div
        className="container   mthomeContent"
        style={{
          width: "70%",
          boxShadow: "2px 4px 26px -5px rgba(0,0,0,0.75)",
          WebkitBoxShadow: "2px 4px 26px -5px rgba(0,0,0,0.75)",
          MozBoxShadow: "2px 4px 26px -5px rgba(0,0,0,0.75)",
        }}
      >
        <div className="row">
          <div
            className="institutionHeading"
            style={{ backgroundColor: "#0251a8" }}
          >
            <div className="blogUpdateList">
              <ul>
                <li className="insName"> Institutes</li>
                <li className="viewli">
                  <button className=" viewAllBtn">View All</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 ">
            <div className="InstituteItems">
              <div className="row ">
                <div className="col-3 m-0 p-0 text-center ">
                  <a href="/school/" class="list-group-item">
                    <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>

                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row ">
                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
                <div className="col-3 m-0 p-0 text-center">
                  <a href="/school/" class="list-group-item">
                  <div className="item-content mt-3">
                      <RiPencilRulerLine className="InstituteIcon" />
                      <h5 class="card-title">Schools</h5>
                      <p class="card-text">42928</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
