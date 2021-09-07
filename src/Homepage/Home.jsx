import React from "react";
import Nav from "../nichecomponents/Nav";
import {
  MenuItem,
  InputLabel,
  TextField,
  Select,
  FormControl,
  Button,
  makeStyles,
} from "@material-ui/core";
import { BsThreeDotsVertical, BsFillDiamondFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import HomeContent from "./HomeContent";
import Enterance from "./Enterance";
import Featuredcolleges from "./Featuredcolleges";
import CareerOption from "./CareerOption";
import EducationArticles from "./EducationArticles";
import HomeFooter from "./HomeFooter";
import HomebannerImg from "../homeImg/home.jpeg";
import Courses from "./Courses";
const useStyles = makeStyles((theme) => ({
  formontrol: {
    minWidth: 200,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <div
        className="Homemaindiv  container-fluid m-0 p-0"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="row ">
          <div className="col-12 p-0 m-0 ">
            <div className="homeBanner ">
              <img
                src={HomebannerImg}
                className="imgHome"
                width="100%"
                alt="home.."
              />
            </div>
          </div>
        </div>
        <div className="HomeBannerContent ml ">
          <h1 className="HBcontent-h1">Your Property, Our Priority.</h1>
          <p className="HBcontent-p">
            From as low as $10 per day with limited time offer discounts
          </p>
        </div>
        <div className="HomeBannerBtn ml">
          <div className="row">
            <div className="col-6 m-0 p-0">
              <div className="diamond">
                <button className="btn1 bg-danger text-light">Buy</button>
                <center className=" text-center">
                  <BsFillDiamondFill className="myd text-danger" />
                </center>
              </div>
            </div>
            <div className="col-6">
              <button className="btn2 bg-light text-danger">Rent</button>
            </div>
          </div>
        </div>

        <div
          className=" bg-light p-4 InputHome ml"
          style={{
            boxShadow: "2px 4px 26px -5px rgba(0,0,0,0.75)",
            WebkitBoxShadow: "2px 4px 26px -5px rgba(0,0,0,0.75)",
            MozBoxShadow: "2px 4px 26px -5px rgba(0,0,0,0.75)",
          }}
        >
          <div className="row m-0 p-0">
            <div className="col-12 ">
              <div className="blogUpdateList  ">
                <form action="Filtration" method="GET">
                  <ul className="m-0 p-0 HomeList">
                    <li>
                      <TextField
                        name="keyword"
                        size="small"
                        id="outlined-basic"
                        label="Enter keywords..."
                        variant="outlined"
                        classes="HometextField1"
                      />
                    </li>
                    <li className=" mlblog">
                      <TextField
                        size="small"
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                      />
                    </li>
                    <li className="mlblog ">
                      <FormControl
                        className={classes.formontrol}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                      >
                        <InputLabel>Property</InputLabel>
                        <Select>
                          <MenuItem value={10}>ten</MenuItem>
                          <MenuItem value={20}>tewnty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                          <MenuItem value={40}>fourty</MenuItem>
                        </Select>
                      </FormControl>
                    </li>
                    <li className="mlblog">
                      <NavLink to="/" className="text-dec gray ">
                        <BsThreeDotsVertical style={{ marginTop: "10px" }} />
                      </NavLink>
                    </li>
                    <li className="mlblog mb-2 SearchBtn">
                      <Button
                      type="submit"
                        style={{ marginTop: "10px" }}
                        variant="contained"
                        color="secondary"
                        size="large"
                      >
                        Search
                      </Button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <HomeContent />
        <Enterance />
        <Featuredcolleges />
        <CareerOption />
        <EducationArticles />
        <Courses />
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
