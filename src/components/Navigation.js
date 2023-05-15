import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { walletApi } from "../Redux/TotalAmountslice";
import { logout, resetLogoutData } from "../Redux/Loginpages/logoutSlice";
import { resetSignUpData } from "../Redux/Loginpages/registerSlice";
import { resetSignInData } from "../Redux/Loginpages/authSlice";
// import { referTofrnds } from "../Redux/referTofrndSlice";

const Navigation = () => {

  const location = useLocation().pathname;

  let tokens = localStorage.getItem("token");

  const navigate = useNavigate();

  const referTofrnd = useSelector((state) => state.referTofrnd);

  // fetch api for wallet
  const data = useSelector((state) => state.data);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(referTofrnds(tokens));
    if (auth.isAuthenticated && auth.isAuthenticatedStatus === 1) {
    dispatch(walletApi(tokens));
    }
  }, [auth, dispatch]);


  //Fetch Api For Logout 
  const logouts = useSelector((state) => state.logouts);
  const registers = useSelector((state) => state.registers);

  const signout = () => {
    dispatch(logout(tokens));
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (logouts) {

      if (logouts.isAuthenticated) {

        dispatch(resetLogoutData());
        dispatch(resetSignUpData());
        dispatch(resetSignInData());

        // navigate("/signup")
        window.location.href = '/signup'
      }
    }
  }, [logouts]);


  //popup-mobile-menu
  function toggleOffcanvas() {
    document.querySelector(".popup-mobile-menu").classList.toggle("active");
  }

  // sticky-nav
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  //popup-mobile-menu dropdwon
  const menuDropdwon = (e) => {
    if ($(e.target).hasClass("open")) {
      $(".submenu").removeClass("active").slideUp("400");
      $(".has-dropdown a").removeClass("open");
      $(e.target).next(".submenu").removeClass("active").slideUp("400");
      $(e.target).removeClass("open");
    } else {
      $(".submenu").removeClass("active").slideUp("400");
      $(".has-dropdown a").removeClass("open");
      $(e.target).next(".submenu").addClass("active").slideDown("400");
      $(e.target).addClass("open");
    }
  };

  return (
    <>
      {/* Start Header Area */}
      <header className={"rbt-header rbt-header-10 " + ((location === "/signin" || location === "/signup" || location === "/signupmodel") ? 'd-none' : '')}>
        <div className="rbt-sticky-placeholder" />
        {/* Start Header Top  */}
        <div className="bg-color-darker pt--10 pb--10 header-space-betwween">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-6">
                <div className="color-white d-flex small align-items-center">
                  <div className="d-none d-sm-block d-sm-none d-md-block mr--10">
                    WhatsApp for any query :
                  </div>{" "}
                  <Link className="color-white" to="#">
                    <i className="fab fa-whatsapp" /> +91 93747 44365
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-6 text-end">
                <div className="small">
                  <Link to="#" className="color-white">
                    <i className="feather-user" /> Become a Tutor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Top  */}
        <div
          className={`rbt-header-wrapper header-space-betwween header-sticky ${stickyClass}`}
        >
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="/images/logo/doubt-q.png"
                        alt="DoubtQ Logo Images"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="has-dropdown has-menu-child-item">
                      <Link to="/services">
                        Services
                        <i className="feather-chevron-down" />
                      </Link>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <Link to="/mcq">MCQ</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/truefalse">True False</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/fillups">Fillups</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/matchthefollowing">
                            Match The Following
                          </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/definations">Definations</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/shortanswerquestions">
                            Short Answer Questions
                          </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/casestudyquestions">
                            Case Study Questions
                          </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/writing">
                            Writing Questions – Essay, Etc.
                          </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/longtheory">Long Answer Questions</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/problemsolve">
                            Problem Solving Questions
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="with-megamenu">
                      <Link to="/faq">FAQs</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                {/* Navbar Icons */}
                <ul className="quick-access">
                  <li className="access-icon">
                    <Link
                      className="search-trigger-active rbt-round-btn d-md-none"
                      to="#"
                    >
                      <i className="feather-search" />
                    </Link>
                    <form
                      action="#"
                      className="rbt-search-style-1 d-none d-sm-block d-sm-none d-md-block"
                    >
                      <input type="text" placeholder="Search Question" />
                      <button className="search-btn">
                        <i className="feather-search" />
                      </button>
                    </form>
                  </li>
                  <li className="dropdown account-access rbt-user-wrapper d-none d-xl-block">
                    {localStorage.getItem("token") ? (
                      <Link
                        className="dropdown-toggle rbt-btn btn-gradient btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        to="#">
                        <i className="feather-user" />
                        Sign Out
                      </Link>
                    ) : (
                      <Link
                        className="rbt-btn btn-gradient btn-sm"
                        to="/signin"
                      >
                        <i className="feather-user" />
                        Sign In
                      </Link>
                    )}
                    <div className="dropdown-menu rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src="/images/team/user.png"
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">
                              {referTofrnd.user && referTofrnd.user.info.name}
                            </span>
                            <Link
                              className="rbt-btn-link color-primary"
                              to="/personalsettings"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/dashboard">
                              <span className="material-symbols-outlined">
                                description
                              </span>
                              <span>My Questions</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wallet">
                              <span className="material-symbols-outlined">
                                account_balance_wallet
                              </span>
                              <span>Wallet</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/earnmoney">
                              <span className="material-symbols-outlined">
                                attach_money
                              </span>
                              <span>Earn Money</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/personalsettings">
                              <span className="material-symbols-outlined">
                                settings
                              </span>
                              <span>Personal Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="material-symbols-outlined">
                                logout
                              </span>
                              <span onClick={signout}>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    <Link to="#" className="rbt-btn btn-border-gradient btn-sm">
                      <i className="fa-solid fa-wallet" />${" "}
                      {data.user && data.user.document.totalAmount}
                    </Link>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/wallet">
                              <span className="material-symbols-outlined">
                                attach_money
                              </span>
                              <span>
                                Available Amount - ${" "}
                                {data.user && data.user.document.availableAmount}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/wallet">
                              <span className="material-symbols-outlined">
                                attach_money
                              </span>
                              <span>
                                Redeemable Amount - ${" "}
                                {data.user && data.user.document.redeemableAmount}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                    <Link className="rbt-round-btn" to="#">
                      <i className="feather-user" />
                    </Link>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src="/images/team/user.png"
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">
                              {referTofrnd.user && referTofrnd.user.info.name}
                            </span>
                            <Link
                              className="rbt-btn-link color-primary"
                              to="/personalsettings"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/dashboard">
                              <i className="feather-home" />
                              <span>My Dashboard</span>
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/">
                              <i className="feather-bookmark" />
                              <span>Bookmark</span>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link to="/">
                              <i className="feather-shopping-bag" />
                              <span>Enrolled Courses</span>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link to="/">
                              <i className="feather-heart" />
                              <span>Wishlist</span>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link to="/">
                              <i className="feather-star" />
                              <span>Reviews</span>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link to="/">
                              <i className="feather-list" />
                              <span>My Quiz Attempts</span>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link to="/">
                              <i className="feather-clock" />
                              <span>Order History</span>
                            </Link>
                          </li> */}
                          <li>
                            <Link to="/postquestion">
                              <i className="feather-message-square" />
                              <span>Question &amp; Answer</span>
                            </Link>
                          </li>
                        </ul>
                        {/* <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="#">
                              <i className="feather-book-open" />
                              <span>Getting Started</span>
                            </Link>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" /> */}
                        <ul className="user-list-wrapper">
                          <li>
                            <Link to="/personalsettings">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="feather-log-out" />
                              <span onClick={signout}>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button
                      className="hamberger-button rbt-round-btn"
                      data-toggle="offcanvas"
                      onClick={toggleOffcanvas}
                    >
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
          {/* Start Search Dropdown  */}
          <div className="rbt-search-dropdown">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <div className="submit-btn">
                      <Link className="rbt-btn btn-gradient btn-md" to="#">
                        Search
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Search Dropdown  */}
        </div>
      </header>
      {/* Mobile Menu Section */}
      <div className="popup-mobile-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo/doubt-q.png" alt="Logo DoubtQ" />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  data-toggle="offcanvas"
                  onClick={toggleOffcanvas}
                  className="close-button rbt-round-btn"
                >
                  <i className="feather-x" />
                </button>
              </div>
            </div>
            <ul className="navbar-top-left rbt-information-list justify-content-start mt--20">
              <li>
                <Link to="mailto:hello@example.com">
                  <i className="feather-mail" />
                  example@gmail.com
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-whatsapp" /> +91 93747 44365
                </Link>
              </li>
            </ul>
          </div>
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="position-static">
                <Link to="/">Home</Link>
              </li>
              <li className="has-dropdown has-menu-child-item">
                <Link to="/services" onClick={menuDropdwon}>
                  Services
                  <i className="feather-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/mcq">MCQ</Link>
                  </li>
                  <li>
                    <Link to="/truefalse">True False</Link>
                  </li>
                  <li>
                    <Link to="/fillups">Fillups</Link>
                  </li>
                  <li>
                    <Link to="/matchthefollowing">Match The Following</Link>
                  </li>
                  <li>
                    <Link to="/definations">Definations</Link>
                  </li>
                  <li>
                    <Link to="/shortanswerquestions">
                      Short Answer Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/casestudyquestions">Case Study Questions</Link>
                  </li>
                  <li>
                    <Link to="/Writing">Writing Questions – Essay, Etc.</Link>
                  </li>
                  <li>
                    <Link to="/longtheory">Long Answer Questions</Link>
                  </li>
                  <li>
                    <Link to="/problemsolve">Problem Solving Questions</Link>
                  </li>
                </ul>
              </li>
              <li className="position-static">
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-bottom">
            <div className="social-share-wrapper">
              <h6>Find With Us</h6>
              <ul className="social-icon social-default icon-naked justify-content-start">
                <li>
                  <Link className="facebook" to="https://www.facebook.com/">
                    <i className="feather-facebook" />
                  </Link>
                </li>
                <li>
                  <Link className="instagram" to="https://www.instagram.com/">
                    <i className="feather-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
