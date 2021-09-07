import React from "react";
import styled from "styled-components";
import CollegeListingbanner from "../TargetImg/innerbanner.jpeg";
const Header = () => {
  const HeaderTarget = styled.div`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .headerContent {
      position: absolute;
      top: 30%;
      left: 14.125rem;
      color: #fff;
      transform: translate(-50%, -50%);
    }
    .headerContent p {
      font-size: 2.5rem;
    }
    .containers {
      position: relative;
      text-align: center;
    }
    @media only screen and (min-width:1000px){
      .headerContent p{
        font-size: 1.7rem;
      }
    }

    @media only screen and (min-width:700px) and (max-width:999px){
      .headerContent p{
        font-size: 1.5rem;
        margin-right:12rem
	    }
    }
  `;
  return (
    <HeaderTarget>
      <div className="container-fluid containers m-0 p-0">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <img
                width="100%"
                height="150px"
                src={CollegeListingbanner}
                alt="CollegeListingbanner..."
              />
              <div className="headerContent">
                <p id="heading-Header">Education Articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderTarget>
  );
};

export default Header;
