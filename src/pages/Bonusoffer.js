import React from "react";


const Bonusoffer = () => {

  return (
    <>
      {/* Start Offers Area */}
      <div className="rbt-categories-area pb--80 pt--10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h3 className="title">Wallet Bonus Offers Area</h3>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <div className="bg-color-primary-opacity pt--50 pb--50 pl--50 pr--50 radius-10 rbt-cat-box-1">
                <div className="bonus-offer-inner bg-color-lightblue radius-10 shadow-3">
                  <div className="bg-color-lightblue right-arrow">
                    <i className="feather-arrow-right" />
                  </div>
                  <div className="bonus-tag color-white bg-color-secondary">
                    BONUS
                  </div>
                  <div className="color-white">
                    ON 1<sup>st</sup> TIME DEPOSIT
                  </div>
                  <div className="bonus-rs color-white">20%</div>
                </div>
                <div className="color-lightblue mt--10">
                  <b>WHEN YOU ADD FUNDS TO YOUR ACCOUNTS</b>
                </div>
                <p className="color-lightblue">*Min deposit of $ 05</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="bg-color-secondary-opacity pt--50 pb--50 pl--50 pr--50 radius-10 rbt-cat-box-1">
                <div className="bonus-offer-inner bg-color-lightviolet radius-10 shadow-3">
                  <div className="bg-color-lightviolet right-arrow">
                    <i className="feather-arrow-right" />
                  </div>
                  <div className="bonus-tag color-white bg-color-primary">
                    BONUS
                  </div>
                  <div className="color-white">
                    AFTER 1<sup>st</sup> TIME DEPOSIT
                  </div>
                  <div className="bonus-rs color-white">10%</div>
                </div>
                <div className="color-lightviolet mt--10">
                  <b>WHEN YOU ADD FUNDS TO YOUR ACCOUNTS</b>
                </div>
                <p className="color-lightviolet">*Min deposit of $ 05</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Offers Area */}
      {/* Start Steps Area */}
      <div className="bg-color-light rbt-section-gap pb--0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--20">
                <h3 className="title">Complete Question Help in 4 Steps</h3>
                <p className="description">It’s THAT Simple.</p>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                <div className="row align-items-center">
                  <div className="col-lg-5 d-flex align-items-center border-end">
                    <h2 className="d-inline mb--0 mr--20">
                      <span className="theme-gradient">01</span>
                      <img
                        className="mx-auto d-block"
                        src="/images/icons/down_arrow.svg"
                        alt="img"
                      />
                    </h2>
                    <h5 className="d-inline mb--0 ">Sign up</h5>
                  </div>
                  <div className="col-lg-7 pl--20">
                    <p>
                      Fill in your details at DoubtQ register to complete the
                      sign-up process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                <div className="row align-items-center">
                  <div className="col-lg-5 d-flex align-items-center border-end">
                    <h2 className="d-inline mb--0 mr--20">
                      <span className="theme-gradient">02</span>
                      <img
                        className="mx-auto d-block"
                        src="/images/icons/down_arrow.svg"
                        alt="img"
                      />
                    </h2>
                    <h5 className="d-inline mb--0 ">Place your Question</h5>
                  </div>
                  <div className="col-lg-7 pl--20">
                    <p>
                      On the dashboard, place your desired Question and upload your
                      queries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                <div className="row align-items-center">
                  <div className="col-lg-5 d-flex align-items-center border-end">
                    <h2 className="d-inline mb--0 mr--20">
                      <span className="theme-gradient">03</span>
                      <img
                        className="mx-auto d-block"
                        src="/images/icons/down_arrow.svg"
                        alt="img"
                      />
                    </h2>
                    <h5 className="d-inline mb--0 ">Make Payment</h5>
                  </div>
                  <div className="col-lg-7 pl--20">
                    <p>
                      Depending on your Question Type, you will get price of that
                      Question and Submit it.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-color-white radius-10 pr--20 pl--20 pb--10 pt--10 mb--20">
                <div className="row align-items-center">
                  <div className="col-lg-5 d-flex align-items-center border-end">
                    <h2 className="d-inline mb--0 mr--20">
                      <span className="theme-gradient">04</span>
                      <img
                        className="mx-auto d-block"
                        src="/images/icons/down_arrow.svg"
                        alt="img"
                      />
                    </h2>
                    <h5 className="d-inline mb--0 ">Get Solution</h5>
                  </div>
                  <div className="col-lg-7 pl--20">
                    <p>
                      Once payment is done, you will get Your Question answer done
                      before mentioned deadline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img src="/images/banner/4steps.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      {/* End Steps Area */}
    </>

  )
}

export default Bonusoffer;