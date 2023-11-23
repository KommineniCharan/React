import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavLink } from "react-router-dom";
import routes from "../../../shared/routes/FrontendRoutes";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/slices/AuthSlice";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardCounter from "../../../features/frontend/addtocart/CartCounter";

const Header = () => {
  const loggedUser = useSelector(selectUser);
  // const texts = [
  //   "search for domain booking…",
  //   "search for domain booking…",
  //   "search for domain booking…",
  // ];
  // const input = document.querySelector("#searchbox");
  // const animationWorker = function (input, texts) {
  //   this.input = input;
  //   this.defaultPlaceholder = this.input.getAttribute("placeholder");
  //   this.texts = texts;
  //   this.curTextNum = 0;
  //   this.curPlaceholder = "";
  //   this.blinkCounter = 0;
  //   this.animationFrameId = 0;
  //   this.animationActive = false;
  //   this.input.setAttribute("placeholder", this.curPlaceholder);

  //   this.switch = (timeout) => {
  //     this.input.classList.add("imitatefocus");
  //     setTimeout(() => {
  //       this.input.classList.remove("imitatefocus");
  //       if (this.curTextNum == 0)
  //         this.input.setAttribute("placeholder", this.defaultPlaceholder);
  //       else this.input.setAttribute("placeholder", this.curPlaceholder);

  //       setTimeout(() => {
  //         this.input.setAttribute("placeholder", this.curPlaceholder);
  //         if (this.animationActive)
  //           this.animationFrameId = window.requestAnimationFrame(this.animate);
  //       }, timeout);
  //     }, timeout);
  //   };

  //   this.animate = () => {
  //     if (!this.animationActive) return;
  //     let curPlaceholderFullText = this.texts[this.curTextNum];
  //     let timeout = 900;
  //     if (
  //       this.curPlaceholder == curPlaceholderFullText + "|" &&
  //       this.blinkCounter == 3
  //     ) {
  //       this.blinkCounter = 0;
  //       this.curTextNum =
  //         this.curTextNum >= this.texts.length - 1 ? 0 : this.curTextNum + 1;
  //       this.curPlaceholder = "|";
  //       this.switch(2000);
  //       return;
  //     } else if (
  //       this.curPlaceholder == curPlaceholderFullText + "|" &&
  //       this.blinkCounter < 3
  //     ) {
  //       this.curPlaceholder = curPlaceholderFullText;
  //       this.blinkCounter++;
  //     } else if (
  //       this.curPlaceholder == curPlaceholderFullText &&
  //       this.blinkCounter < 3
  //     ) {
  //       this.curPlaceholder = this.curPlaceholder + "|";
  //     } else {
  //       this.curPlaceholder =
  //         curPlaceholderFullText
  //           .split("")
  //           .slice(0, this.curPlaceholder.length + 1)
  //           .join("") + "|";
  //       timeout = 150;
  //     }
  //     this.input.setAttribute("placeholder", this.curPlaceholder);
  //     setTimeout(() => {
  //       if (this.animationActive)
  //         this.animationFrameId = window.requestAnimationFrame(this.animate);
  //     }, timeout);
  //   };

  //   this.stop = () => {
  //     this.animationActive = false;
  //     window.cancelAnimationFrame(this.animationFrameId);
  //   };

  //   this.start = () => {
  //     this.animationActive = true;
  //     this.animationFrameId = window.requestAnimationFrame(this.animate);
  //     return this;
  //   };
  // };

  // document.addEventListener("DOMContentLoaded", () => {
  //   let aw = new animationWorker(input, texts).start();
  //   input.addEventListener("focus", (e) => aw.stop());
  //   input.addEventListener("blur", (e) => {
  //     aw = new animationWorker(input, texts);
  //     if (e.target.value == "") setTimeout(aw.start, 2000);
  //   });
  // });

  return (
    <>
      <div className="pt-bottom-header bgwhite">
        <div className="container-fluid">
          <div className="row pt15 pb10 dno">
            <div className="col-12 col-md-5 col-lg-5 search-div">
              <form className="search-box-form" action="#">
                <button type="submit" className="login-btn">
                  <IconButton color="primary">
                    <SearchIcon />
                  </IconButton>
                </button>
                <input
                  className="login-inp"
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="search for domain, hosting…"
                />
                {/* <input
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                /> */}
              </form>
              {/* <div class="centered">
                <input
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                />
              </div> */}
              {/* <form class="search-box-form" action="#">
                <button type="submit" class="login-btn">
                  <i class="fa fa-search"></i>
                </button>
                <input
                  class="login-inp"
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                />
              </form> */}
            </div>
            {/* <div class="col-md-5">
              <form class="search-box-form" action="#">
                <button type="submit" class="login-btn">
                  <i class="fa fa-search"></i>
                </button>
                <input
                  class="login-inp"
                  type="texts"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                />
              </form>
            </div> */}

            {/* <div className="col-0 col-md-0 col-lg-2"></div> */}

            <div className="col-12 col-md-7 col-lg-7 text-rig">
              <div className="row  text-rig">
                <div className="col-12">
                  <ul className="icon-top-ul">
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/google-partner-big.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/meta-partner-big.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/google-workspace-big.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/google-cloud-big.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/microsoft-logo.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/rediff.jpg"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <div className="login-sign-div">
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#000" : "#000",
                        })}
                        to="/cart"
                        className=""
                      >
                        <h1 className="addtocard-head">
                          <ShoppingCartIcon color="#000" fontSize="small" />
                          {/* Cart */}
                          <CardCounter />
                        </h1>
                      </NavLink>
                      {/* <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#000" : "#000",
                        })}
                        to={"/login"}
                        // className="login-sign-div"
                      >
                        <span
                          // type="button"
                          // class="btn btn-primary"
                          // data-toggle="modal"
                          // data-target="#exampleModal"
                          className="sign-up-head"
                        >
                          sign in
                        </span>
                      </NavLink> */}
                      {routes
                        .filter((route) => {
                          if (route.authenticated == "both") return true;
                          else if (
                            route.authenticated == "yes" &&
                            loggedUser._id
                          )
                            return true;
                          else if (
                            route.authenticated == "no" &&
                            !loggedUser._id
                          )
                            return true;
                          else return false;
                        })
                        .map(({ path, label }, i) => (
                          <NavLink
                            end //not default selected
                            key={path + i}
                            to={path}
                            style={({ isActive }) => ({
                              color: isActive ? "#fed501" : "#fff",
                            })}
                            className="sign-up-head"
                          >
                            {label}
                          </NavLink>
                        ))}
                      {/* <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#000" : "#000",
                        })}
                        to={"secured"}
                        // className="login-sign-div"
                      >
                        <span
                          // type="button"
                          // class="btn btn-primary"
                          // data-toggle="modal"
                          // data-target="#exampleModal"
                          className="sign-up-head"
                        >
                          sign in
                        </span>
                      </NavLink> */}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header start */}
      <div className="second-menu">
        <div className="container">
          <ul className="second-menu-ul">
            <li class="hov ">
              <a className="about-us" href="#">
                About Us
              </a>
              <ul class="main">
                <NavLink to="/career">
                  <li className="hov32">
                    <span className="drop-new-span">Industries</span>
                    <div className="hov23">
                      <NavLink to="/b2b">
                        <p className="hov34">
                          B2B
                          <div className="hov24">
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/power"
                            >
                              <p>Power</p>
                            </NavLink>

                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/hardware"
                            >
                              <p> HardWare</p>
                            </NavLink>

                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/automotive"
                            >
                              <p>automotive</p>
                            </NavLink>

                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/healthcare"
                            >
                              <p>Healthcare</p>
                            </NavLink>

                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/tech"
                            >
                              <p>Tech</p>
                            </NavLink>

                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/manufacture"
                            >
                              <p>Manufacturing</p>
                            </NavLink>

                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/raw-material"
                            >
                              <p>Raw Material</p>
                            </NavLink>
                          </div>
                        </p>
                      </NavLink>
                      <NavLink to="/b2c">
                        <p className="hov35">
                          B2C
                          <div className="hov25">
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/realestate"
                            >
                              <p>Real-ESTATE</p>
                            </NavLink>
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/healthcare"
                            >
                              <p>Healthcare</p>
                            </NavLink>
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/e-commerce"
                            >
                              <p>E-commerce</p>
                            </NavLink>
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/lifestyle"
                            >
                              <p>Lifestyle</p>
                            </NavLink>
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/interial-furniture"
                            >
                              <p>Interiors & Furniture</p>
                            </NavLink>
                            <NavLink
                              style={({ isActive }) => ({
                                color: isActive ? "#000" : "#000",
                              })}
                              to="/education"
                            >
                              <p>Education</p>
                            </NavLink>
                          </div>
                        </p>
                      </NavLink>
                    </div>
                  </li>
                </NavLink>
                <NavLink to="/case-studies">
                  <li>
                    <span className="drop-new-span">Case studies</span>
                  </li>
                </NavLink>
                <NavLink to="/blog">
                  <li>
                    <span className="drop-new-span">Blog</span>
                  </li>
                </NavLink>
                <NavLink to="/career">
                  <li>
                    <span className="drop-new-span">Careers</span>
                  </li>
                </NavLink>
              </ul>
            </li>
            <li class="hov ">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/domain"
              >
                <span className="about-us">Domain</span>
              </NavLink>
              <ul class="main">
                <NavLink to="/domain-booking">
                  <li>
                    <span className="drop-new-span">Domain Booking</span>
                  </li>
                </NavLink>
                <NavLink to="/domain-available">
                  <li>
                    <span className="drop-new-span">Domain Available</span>
                  </li>
                </NavLink>
                <NavLink to="/domain-transfer">
                  <li>
                    <span className="drop-new-span">Domain Transfer</span>
                  </li>
                </NavLink>
              </ul>
            </li>
            <li class="hov ">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/hosting"
              >
                <span className="about-us">Hosting</span>
              </NavLink>
              <ul class="main">
                <NavLink to="/shared-hosting">
                  <li>
                    <span className="drop-new-span">Shared Hosting</span>
                  </li>
                </NavLink>
                <NavLink to="/wordpress-hosting">
                  <li>
                    <span className="drop-new-span">Wordpress Hosting</span>
                  </li>
                </NavLink>
                <NavLink to="/dedicated-hosting">
                  <li>
                    <span className="drop-new-span">Dedicated Hosting</span>
                  </li>
                </NavLink>
                <NavLink to="/vps-hosting">
                  <li>
                    <span className="drop-new-span">VPS hosting</span>
                  </li>
                </NavLink>
              </ul>
            </li>
            <li class="hov ">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/security"
              >
                <span className="about-us">Security</span>
              </NavLink>
              <ul class="main">
                <NavLink to="/standard-ssl">
                  <li>
                    <span className="drop-new-span">standard SSL</span>
                  </li>
                </NavLink>
                <NavLink to="/wildcard-ssl">
                  <li>
                    <span className="drop-new-span">Wildcard SSL</span>
                  </li>
                </NavLink>
                <NavLink to="/organization-validation-ssl">
                  <li>
                    <span className="drop-new-span">
                      Organization Validation SSL
                    </span>
                  </li>
                </NavLink>
                <NavLink to="/extented-validation-ssl">
                  <li>
                    <span className="drop-new-span">
                      Extended Validation SSL (EVSSL)
                    </span>
                  </li>
                </NavLink>
              </ul>
            </li>
            <li class="hov ">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/email"
              >
                <span className="about-us">Email</span>
              </NavLink>
              <ul class="main">
                <NavLink to="/google-workspace">
                  <li>
                    <span className="drop-new-span">Google Workspace</span>
                  </li>
                </NavLink>
                <NavLink to="/microsoft">
                  <li>
                    <span className="drop-new-span">Microsoft</span>
                  </li>
                </NavLink>
                <NavLink to="/rediff-mail">
                  <li>
                    <span className="drop-new-span">Rediff Mail</span>
                  </li>
                </NavLink>
              </ul>
            </li>

            {/* <li className="parent-menu">
              <a className="about-us" href="#">
                About Us <ArrowDropDownIcon className="drop-arrow" />
              </a>
            </li> */}

            {/* <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/domain"
              >
                <span className="about-us">Domain</span>
              </NavLink>
            </li>
            <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/hosting"
              >
                <span className="about-us">Hosting</span>
              </NavLink>
            </li>
            <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/security"
              >
                <span className="about-us">Security</span>
              </NavLink>
            </li> */}
            {/* <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/email"
              >
                <span className="about-us">Email</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div className="second-menu">
        <div className="container">
          <ul className="second-menu-ul">
            <li className="parent-menu">
              <a className="about-us" href="#">
                
                About Us <ArrowDropDownIcon className="drop-arrow" />
              
              </a>
             

              <ul className="child-menu">
                <li className="parent-submenu">
                  Industries
                  <ul className="child-submenu">
                    <li className="parent-thirdmenu">
                      <NavLink
                        className="b2c-link"
                        style={({ isActive }) => ({
                          color: isActive ? "#2e4589" : "#000",
                        })}
                        to="/b2b"
                      >
                        <span>B2B</span>
                      </NavLink>
                      <ul className="child-thirdmenu2">
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/power"
                        >
                          <li>Power</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/hardware"
                        >
                          <li>HardWare</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/automotive"
                        >
                          <li>automotive</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/healthcare"
                        >
                          <li>Healthcare</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/tech"
                        >
                          <li>Tech</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/manufacture"
                        >
                          <li>Manufacturing</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/raw-material"
                        >
                          <li>Raw Material</li>
                        </NavLink>
                      </ul>
                    </li>
                    <li className="parent-thirdmenu">
                      <NavLink
                        className="b2c-link"
                        style={({ isActive }) => ({
                          color: isActive ? "#000" : "#000",
                        })}
                        to="/b2c"
                      >
                        <span>B2C</span>
                      </NavLink>
                      <ul className="child-thirdmenu">
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/realestate"
                        >
                          <li>Real ESTATE</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/healthcare"
                        >
                          <li>Healthcare</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/e-commerce"
                        >
                          <li>E-commerce</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/lifestyle"
                        >
                          <li>Lifestyle</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/interial-furniture"
                        >
                          <li>Interiors & Furniture</li>
                        </NavLink>
                        <NavLink
                          style={({ isActive }) => ({
                            color: isActive ? "#000" : "#000",
                          })}
                          to="/education"
                        >
                          <li>Education</li>
                        </NavLink>
                      </ul>
                    </li>
                  </ul>
                </li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/case-studies"
                >
                  <li>Case Studies</li>
                </NavLink>

                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/blog"
                >
                  <li>Blog</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/career"
                >
                  <li>Careers</li>
                </NavLink>
              </ul>
            </li>
            <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/domain"
              >
                <span className="about-us">Domain</span>
              </NavLink>
              <ul className="child-menu2">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/domain-booking"
                >
                  <li>Domain Booking</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/domain-available"
                >
                  <li>Domain Available</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/domain-transfer"
                >
                  <li>Domain Transfer</li>
                </NavLink>
              </ul>
            </li>
            <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/hosting"
              >
                <span className="about-us">Hosting</span>
              </NavLink>
              <ul className="child-menu2">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/shared-hosting"
                >
                  <li>Shared Hosting</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/wordpress-hosting"
                >
                  <li>Wordpress Hosting</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/dedicated-hosting"
                >
                  <li>Dedicated Hosting</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/vps-hosting"
                >
                  <li>VPS Hosting</li>
                </NavLink>
              </ul>
            </li>
            <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/security"
              >
                <span className="about-us">Security</span>
              </NavLink>
              <ul className="child-menu2">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/standard-ssl"
                >
                  <li>Standard SSL</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/wildcard-ssl"
                >
                  <li>Wildcard SSL</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/organization-validation-ssl"
                >
                  <li>Organization Vaidation SSL (OV SSL)</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/extented-validation-ssl"
                >
                  <li>Extended Validation SSL (EVSSL)</li>
                </NavLink>
              </ul>
            </li>
            <li className="parent-menu">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#fff",
                })}
                to="/email"
              >
                <span className="about-us">Email</span>
              </NavLink>
              <ul className="child-menu2">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/google-workspace"
                >
                  <li>Google Workspace</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/microsoft"
                >
                  <li>Microsoft 365</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/rediff-mail"
                >
                  <li>Rediff Mail</li>
                </NavLink>
              </ul>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
