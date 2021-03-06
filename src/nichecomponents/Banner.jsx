import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillTwitterSquare} from 'react-icons/ai'
import {ImFacebook2} from 'react-icons/im'
import BadgeImg from '../Img/badge.png'
import nichebannerImg from '../niche/banner-flat.png'
import $ from 'jquery'
const Banner = () => {
  $(document).ready(function(){
    const width=$( window ).width();
    if(width<1000)
    {
      $('#my-container').removeClass ('container');
      $('#my-container').addClass ('container-fluid');
    }
    else{
      $('#my-container').removeClass ('container-fluid');
      $('#my-container').addClass ('container');
    }
    console.log("width",);
  })

  const showMore=()=>{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("More");
    var btnText = document.getElementById("Btnmore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
    }
  return (
    <>
      <div className="bannerImg">
        <img
          src={nichebannerImg}
          className="imgA1"
          alt="banner..."
        />
      </div>
      <div className="bannerBottom">
        <div id="my-container" className="container" >
          <div className="row">
            <div className="col-2 m-0 p-0">
              <img src={BadgeImg} className="imgB1 m-0 p-0" alt="badge..." />
            </div>
            <div className="col-10 m-0 p-0">
              <h2 className="bannerHeading">2022 Best College In America</h2>
              <div className="desc m-0 p-0">
                <p>
                  The Best Colleges ranking is based on rigorous analysis of
                  academic, admissions, financial, and student life data from
                  the U.S. Department of Education along with millions of
                  reviews from students and alumni. The ranking compares <span id="dots">....</span>
                  <span id="More">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe unde reprehenderit nulla excepturi, nihil quidem alias magnam 
                  velit veritatis! Totam, similique est. Ipsa, accusamus minus.</span>
                  <span id="Btnmore" onClick={showMore}>Read more</span>
                  <NavLink to=""><ImFacebook2 className="fb"/></NavLink>
                  <NavLink to=""><AiFillTwitterSquare className="tweet"/></NavLink>

                </p>

              </div>

            </div>
             {/* <div className="col-1 m-0 p-0"> 
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
