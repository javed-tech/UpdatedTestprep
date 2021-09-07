import React from "react";
import { ImMap } from "react-icons/im";
import { FiChevronRight } from "react-icons/fi";
import { Slider } from "@material-ui/core";
import { IoChevronForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Nav from "../nichecomponents/Nav";
import Header from "./Header";
import Footer from "../nichecomponents/Footer";
import Form from "./Form";
import CollegeListingFilterImg from "../niche/banner.png";
import Filter from "../nichecomponents/Filter";
import $ from "jquery";
const BodyPart = () => {
  $(document).ready(function () {
    const width = $(window).width();
    if (width < 1000) {
      $("#bodypartId").removeClass("container");
      $("#bodypartId").addClass("container-fluid");
    } else {
      $("#bodypartId").removeClass("container-fluid");
      $("#bodypartId").addClass("container");
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

        <div className="container" id="bodypartId">
          <div id="bodypart-Row" className="row m-0 p-0">
            {/* Left-side */}
            <div className="col-lg-9 col-md-9 col-12 m-0 p-0">
              {/* content */}
              <div className="content bpcontent my-4">
                <h1 className="Blogheading">
                  Minimum Score needed for IIT admission :
                </h1>
                <div className="blogUpdateList m-0 p-0">
                  <ul className="blogByDetails p-0">
                    <li className="Blogby">by</li>
                    <li className="blogUpdateName mlblog">Abhinav Kumar</li>
                    <li className="mlblog">|</li>
                    <li className="mlblog">by August,24,2021</li>
                    <li className="mlblog">|</li>
                    <li className="mlblog">0 comments</li>
                    <li className="mlblog">|</li>
                    <li className="mlblog">7409 views</li>
                  </ul>
                </div>
                <p className="mtBlogcontent">
                  Sophomore: I enjoy being a part of this college because
                  everyone is super nice and helpful. The advisors and staff are
                  great! They answer emails super fast, usually with a very
                  detailed and thought out response, and sometimes I could just
                  hug them! The instructors genuin <a href="">Read Reviews</a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  facere? Illum sint dolorem voluptatibus numquam suscipit non
                  quisquam explicabo exercitationem repellat sunt nihil labore
                  corporis laborum placeat at fugit debitis a, consequatur
                  deleniti! Accusantium recusandae minus, amet quidem natus quas
                  expedita quae quaerat eius, soluta in obcaecati ut id optio.
                  However, to Categorise and Differentiate – we can conclude
                  that, there are: Academically related Education Articles These
                  are Articles about Education related to Academic Environment –
                  These are mostly written for One Specific Purpose, i.e.
                  information relevant to various academic environments whether
                  these are in Schools <br />
                  &nbsp;<h6>Academics Related :</h6>
                  in India, Colleges in India and or Universities in India.
                  These are especially targeted for a certain audience, i.e.
                  students, teachers, professors and all those who have a
                  connection with the academic environment. However, it is not
                  necessary that they cannot or will not be read by other
                  people. So their topics will be strictly focussed around their
                  objective like guiding, advising, refraining, reforming and so
                  on. They may guide students towards pursuing Courses after
                  12th, Diploma Courses in India, Courses after Graduation etc.
                  They can deal with current relevant issues or can provide
                  technical or study related material. They may also provide
                  information on Entrance Exams in India with proper
                  instructions. <br />
                  &nbsp;<h6>Informal or General :</h6>
                  Education Articles These are Articles on Education which are
                  Informal in Nature and provide General or Specific Knowledge
                  on various Topics. These are written for providing education
                  in General. These articles about education are not specific to
                  academic environments. Their audience is everyone, whether
                  common people or professionals. These are written to create
                  awareness about a topic or bring forth an idea or issue. They
                  will involve all sorts of topics which can be of personal
                  experience, biographical, current issues, important days,
                  festivals and many more. Education Articles or Articles on
                  Education have a Multidimensional role for a reader:
                  <ul>
                    <li> They provide ideas for an aspiring writer.</li>&nbsp;
                    <li>
                      {" "}
                      They are good source material for general knowledge.
                    </li>
                    &nbsp;
                    <li>
                      They inspire and encourage to achieve success and
                      happiness.
                    </li>
                    &nbsp;
                    <li>
                      They are good material for debates, discussions, essays,
                      short articles, research papers etc.
                    </li>
                    &nbsp;
                    <li>
                      They create awareness about various unknown facts and
                      aspects of society.
                    </li>
                    &nbsp;
                    <li>
                      They remove hidden truth and bring forth false and fake
                      information which encourages negative sentiments in the
                      community.
                    </li>
                    &nbsp;
                    <li>
                      They inhibit good habits and encourage peace, harmony and
                      well being of the society.
                    </li>
                    &nbsp;
                    <li>
                      They stir the imagination of creative people like artists,
                      performers, poets, lyricists, writers, editors and other
                      like-minded people.
                    </li>
                    &nbsp;
                  </ul>
                </p>
              </div>
            </div>
            {/* right-side */}

            <div className="col-lg-3 col-md-3 col-12" id="filterCol-3">
              <Filter />
              <div className="Article Articlebg mb-4">
                <h3 className="articleh3">Articles on Education</h3>
                <hr />
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <div className="link1 my-4">
                  <span>
                    <IoChevronForward className="iconChev" />
                    <NavLink to="/" className="text-dec tg">
                      10 Things to do after getting Your First Job
                    </NavLink>
                  </span>
                </div>
                <NavLink to="/" className="text-dec viewbtn">
                  VIEW MORE
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BodyPart;
