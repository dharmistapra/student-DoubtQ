import React from "react";
import { Link } from "react-router-dom";


const Bonus = () => {


  return (

    <>
      {/* Start Bonus Area */}
      <div className="wallet-bonus-icon rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--20">
                <h3 className="title">Bonuses</h3>
                <p className="description">What you will get?</p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img src="/images/icons/reward.svg" alt="Icons Images" />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">$ 10 Reward</h5>
                    <p className="description mb--20">Upon Registration</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img
                      src="/images/icons/multiple_experts.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">Multiple Experts</h5>
                    <p className="description mb--20">for Variety of Questions</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img
                      src="/images/icons/free_plagiarism.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">Free Plagiarism</h5>
                    <p className="description mb--20">
                      Solutions on every solution
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img
                      src="/images/icons/lifetime_access.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">Lifetime Access</h5>
                    <p className="description mb--20">to your solutions</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img
                      src="/images/icons/redeemable_reward.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">Redeemable Reward</h5>
                    <p className="description mb--20">Points</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img
                      src="/images/icons/unlimited.svg"
                      alt="Icons Images"
                    />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">Unlimited</h5>
                    <p className="description mb--20">Search question </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img src="/images/icons/repost.svg" alt="Icons Images" />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">Re Answer</h5>
                    <p className="description mb--20">
                      for incorrect answer you received
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
            {/* Start Category Box Layout  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="rbt-cat-box rbt-cat-box-1 text-left">
                <div className="inner">
                  <div className="icons">
                    <img src="/images/icons/24x7.svg" alt="Icons Images" />
                  </div>
                  <div className="content">
                    <h5 className="title mb--5">24*7</h5>
                    <p className="description mb--20">Available</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Category Box Layout  */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--40 text-center">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                  to="/signup"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Get it now!</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Bonus Area */}
    </>

  )
}

export default Bonus;