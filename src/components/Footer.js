import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation().pathname;

  return (
    <>
      {/* Start Footer aera */}
      <footer className={"rbt-footer footer-style-1 " + ((location === "/signin" || location === "/signup" || location === "/signupmodel") ? 'd-none' : '')}>
        <div className="footer-top">
          <div className="container">
            <div className="row row--15 mt_dec--30">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Services</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to="/mcq">MCQ</Link>
                    </li>
                    <li>
                      <Link to="/Truefalse">True False</Link>
                    </li>
                    <li>
                      <Link to="/fillups">Fillups</Link>
                    </li>
                    <li>
                      <Link to="/matchthefollowing">Match The Following</Link>
                    </li>
                    <li>
                      <Link to="/definations">Definitions</Link>
                    </li>
                    <li>
                      <Link to="/shortanswerquestions">Short Answer Questions</Link>
                    </li>
                    <li>
                      <Link to="/casestudyquestions">Case Study Questions</Link>
                    </li>
                    <li>
                      <Link to="/writing">Writing Questions – Essay</Link>
                    </li>
                    <li>
                      <Link to="/longtheory">Long Answer Questions</Link>
                    </li>
                    <li>
                      <Link to="/problemsolve">Problem Solving Questions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Features</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to="#">Expert Tutors</Link>
                    </li>
                    <li>
                      <Link to="#">Plagiarism Free Solutions</Link>
                    </li>
                    <li>
                      <Link to="#">100% Correct Solutions</Link>
                    </li>
                    <li>
                      <Link to="#">24/7 Availability</Link>
                    </li>
                    <li>
                      <Link to="#">Cost Effective</Link>
                    </li>
                    <li>
                      <Link to="#">Solved on Time</Link>
                    </li>
                    <li>
                      <Link to="#">Confidentiality</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">About Us</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to="#">Become a tutor</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link to="/refundpolicy">Refund Policy</Link>
                    </li>
                    <li>
                      <Link to="/privacypolicy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/termsandconditions">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/copyrightpolicy">Copyright Policy</Link>
                    </li>
                    <li>
                      <Link to="/honourcode">Honour Code</Link>
                    </li>
                    <li>
                      <Link to="/aboutdoubtq">About DoubtQ</Link>
                    </li>
                    <li>
                      <Link to="/academicintegrity">Academic Integrity</Link>
                    </li>
                    <li>
                      <Link to="#">Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Get Contact</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <span>Phone:</span> <Link to="#">+91 98981 98982</Link>
                    </li>
                    <li>
                      <span>E-mail:</span>{" "}
                      <Link to="mailto:hr@example.com">example@mail.com</Link>
                    </li>
                  </ul>
                  <ul className="social-icon social-default icon-naked justify-content-start mt--10 mb--20">
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
                  <h5 className="ft-title">Get App</h5>
                  <div className="row">
                    <div className="col-lg-6 mb_sm--10">
                      <Link to="#">
                        <img
                          src="/images/icons/google_play.svg"
                          alt="Google Play"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link to="#">
                        <img
                          src="/images/icons/app_store.svg"
                          alt="App Store"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area copyright-style-1 ptb--20">
          <div className="container">
            <hr className="rbt-separator m-0" />
            <div className="row align-items-center pt--30">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright © 2023 DoubtQ. All Rights Reserved
                </p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                  <li>
                    Website developed by:{" "}
                    <Link target="_blank" to="#">
                      Setblue.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-text">
          <div className="container">
            <p className="mb--20 mt--20">
              *The amount will be in form of wallet points that you can redeem to
              pay upto 10% of the price for any assignment. **Use of solution
              provided by us for unfair practice like cheating will result in action
              from our end which may include permanent termination of the
              defaulter’s account.
            </p>
            <p className="pb--30">
              Disclaimer: The website contains certain images which are not owned by
              the company/ website. Such images are used for indicative purposes
              only and is a third-party content. All credits go to its rightful
              owner including its copyright owner. It is also clarified that the use
              of any photograph on the website including the use of any photograph
              of any educational institute/ university is not intended to suggest
              any association, relationship, or sponsorship whatsoever between the
              company and the said educational institute/ university. Any such use
              is for representative purposes only and all intellectual property
              rights belong to the respective owners.
            </p>
          </div>
        </div>
      </footer>
    </>
  )


}

export default Footer;