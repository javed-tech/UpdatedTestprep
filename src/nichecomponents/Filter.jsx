import React from "react";
import { ImMap } from "react-icons/im";
import { FiChevronRight } from "react-icons/fi";
import { Slider } from "@material-ui/core";
import {
  AiFillQuestionCircle,
  AiTwotoneStar,
  AiOutlineStar,
} from "react-icons/ai";
import { FaStarHalfAlt, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";
import { FcVideoCall } from "react-icons/fc";

const Filter = () => {
  return (
    <>
        <div className="filter my-4">
          <Button
            variant="contained"
            className="btnHead"
            style={{
              backgroundColor: "green",
              color: "#fff",
              width: "100%",
              height: "auto",
            }}
          >
            <ImMap style={{ marginRight: "9px" }} />
            View On Map
          </Button>
          <hr />
          <div className="collegeType">
            <h6>COLLEGE TYPE</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                4-Year
              </label>
            </div>

            <ul>
              <li className="unstyled">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Private
                  </label>
                </div>
              </li>
              <li className="unstyled">
                <div class="form-check">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Public
                  </label>
                </div>
              </li>
            </ul>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                2-Year
              </label>
            </div>

            <ul>
              <li className="unstyled">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Community
                  </label>
                </div>
              </li>
              <li className="unstyled">
                <div class="form-check">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Trade/Career
                  </label>
                </div>
              </li>
              <li className="unstyled">
                <div class="form-check">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Other
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <div className="GeneralA-S">
            <h6>
              GENERAL AREA OF STUDY
              <AiFillQuestionCircle />
            </h6>
            <div class="input-group mb-3">
              <select
                class="custom-select form-control"
                id="inputGroupSelect01"
              >
                <option selected>Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <FormControl
              variant="outlined"
              size="small"
              className=" areaSelect my-4"
            >
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <hr />
          <div className="specificMajor">
            <h6>
              SPECIFIC MAJOR
              <AiFillQuestionCircle />
            </h6>
            <div className="input">
              <input
                type="text"
                className="custom-select form-control outline-none "
                placeholder="Enter a Major"
              />
              <ul>
                <li className="unstyled">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDisabled"
                      disabled
                    />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Online
                    </label>
                  </div>
                </li>
                <li className="unstyled">
                  <div class="form-check">
                    <input
                      class="form-check-input "
                      type="checkbox"
                      value=""
                      id="flexCheckDisabled"
                      disabled
                    />
                    <label class="form-check-label" for="flexCheckDisabled">
                      Campus
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <a href="#">
              See All Majors
              <FiChevronRight />
            </a>
          </div>
          <hr />
          <div className="onlineFriendliness">
            <h6>
              ONLINE FRIENDLINESS
              <AiFillQuestionCircle />
            </h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Fully Online
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Large Online Program
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Some Online Degrees
              </label>
            </div>
          </div>
          <hr />
          <div className="Cost">
            <h6>
              COST (NET PRICE)
              <AiFillQuestionCircle />
            </h6>
            <b>$0-$16,000</b>
            <br />
            <input type="range" className="input-range" />
            <Slider
              defaultValue={20}
              aria-labelledby="discrete-slider-custom"
              step={10}
              valueLabelDisplay="auto"
              marks={true}
            />
          </div>
          <hr />
          <div className="studentBodysize">
            <h6>
              STUDENT BODY SIZE
              <AiFillQuestionCircle />
            </h6>
            <Button variant="outlined" color="primary">
              View
            </Button>
            &nbsp;
            <Button variant="outlined" color="primary">
              View
            </Button>
            &nbsp;
            <Button variant="outlined" color="primary">
              View
            </Button>
          </div>
          <hr />
          <div className="Speciality">
            <h6>
              SPECIALITY
              <AiFillQuestionCircle />
            </h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Liberal Arts
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                All-Women
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                All-Men
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                HBCU
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Hispanic-Serving Institutions
              </label>
            </div>
          </div>
          <hr />
          <div className="yourTestscores">
            <h6>
              YOUR TEST SCORES
              <AiFillQuestionCircle />
            </h6>
            <b>SAT:Select a Value</b>
            <br />
            <input type="range" className="input-range" />
            <br />
            <br />
            <b>ACT:Select a Value</b>
            <br />
            <input type="range" className="input-range" />
          </div>
          <hr />
          <div className="admissionProcess">
            <h6>ADMISSIONS PROCESS</h6>
            <div class="input-group mb-3">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="Selectivity">
            <h6>
              SELECTIVITY
              <AiFillQuestionCircle />
            </h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Extremely Selective
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Very Selective
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Selective
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Average
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Not Selective
              </label>
            </div>
          </div>
          <hr />
          <div className="religiousAffiliation">
            <h6>RELIGIOUS AFFILIATION</h6>
            <div class="input-group mb-3">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="goodFor">
            <h6>
              GOOD FOR
              <AiFillQuestionCircle />
            </h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Veterans
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                International Students
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Adult Learners
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Low-Income Students
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Middle-Class Students
              </label>
            </div>
          </div>
          <hr />
          <div className="startingSalary">
            <h6>
              STARTING SALARY AFTER GRADUAION
              <AiFillQuestionCircle />
            </h6>
            <div class="input-group mb-3">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
    </>
  );
};

export default Filter;
