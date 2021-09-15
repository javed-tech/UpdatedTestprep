import React from "react";
const EducationArticles = () => {
  return (
    <>
      <div className="container-fluid ">
        <div
          className="container EducationArticles"
          style={{
            width: "80%",
            paddingTop: "4rem",
            paddingLeft: "4rem",
            paddingRight: "5rem",
            paddingBottom: "5rem",
          }}
        >
          <div className="row  m-0 p-0 mb-4">
            <ul className="FeaturedHeading blogUpdateList">
              <li>
                <h2 className="Careerheading">Education Articles</h2>
              </li>
              <li className="FeaturedViewBtn">
                <button className="feturedViewbtn  ">VIEW</button>
              </li>
            </ul>
            <div className="col-4  EducationItems-width p-0 m-0">
              <div className="Educationbg-white p-3">
                <h5>Advantages And Disadvantages Of Movies</h5>
                <p>401223 views</p>
              </div>
            </div>
            <div className="col-4   pr-1 pl-1">
              <div className="Educationbg-white p-3">
                <h5>Advantages And Disadvantages Of Movies</h5>
                <p>401223 views</p>
              </div>
            </div>
            <div className="col-4  pl-1 p-0 m-0">
              <div className="Educationbg-white p-3">
                <h5>Advantages And Disadvantages Of Movies</h5>
                <p>401223 views</p>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="row m-0 p-0">
            <div className="col-4  EducationItems-width p-0 m-0">
              <div className="Educationbg-white p-3">
                <h5>Advantages And Disadvantages Of Movies</h5>
                <p>401223 views</p>
              </div>
            </div>
            <div className="col-4  pr-1 pl-1">
              <div className="Educationbg-white p-3 ">
                <h5>Advantages And Disadvantages Of Movies</h5>
                <p>401223 views</p>
              </div>
            </div>
            <div className="col-4  pl-1 p-0 m-0">
              <div className="Educationbg-white p-3">
                <h5>Advantages And Disadvantages Of Movies</h5>
                <p>401223 views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationArticles;
