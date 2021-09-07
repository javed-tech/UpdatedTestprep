import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillTwitterSquare} from 'react-icons/ai'
import {ImFacebook2} from 'react-icons/im'
import {VscSearch} from 'react-icons/vsc'
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
  return (
    <>
      <div classNameName="bannerImg">
        <img
          src={nichebannerImg}
          className="imgA1"
          alt="banner..."
        />
      </div>
      <div className="bannerBottom">
        <div id="my-container" className="container" >
          <div className="row">
            <div className="col-3">
              <img src={BadgeImg} className="imgB1" alt="badge..." />
            </div>
            <div className="col-8">
              <h2 className="bannerHeading">2022 Best College In America</h2>
              <div className="desc">
                <p>
                  The Best Colleges ranking is based on rigorous analysis of
                  academic, admissions, financial, and student life data from
                  the U.S. Department of Education along with millions of
                  reviews from students and alumni. The ranking compares 
                  <NavLink to="">More</NavLink>
                </p>
              </div>
            </div>
            <div className="col-1">
              <NavLink to=""><ImFacebook2 className="fb"/></NavLink>
              <NavLink to=""><AiFillTwitterSquare className="tweet"/></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
