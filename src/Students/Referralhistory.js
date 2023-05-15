import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { referralhistoryApi } from "../Redux/referralhistorySlice";
import "../Selectfrom.css";
import PulseLoader from "react-spinners/PulseLoader";
import { referralCashoutApi } from "../Redux/referralCashoutSlice";

const Referralhistory = () => {
  const [loader, setLoader] = useState(true);

  const referralcomplete = useSelector((state) => state.referralcomplete);
  console.log(referralcomplete);
  const dispatch = useDispatch();
  const friendReferral = useSelector((state) => state.friendReferral);

  const referTofrnd = useSelector((state) => state.referTofrnd);

  let tokens = localStorage.getItem("token");

  const referralhistory = async () => {
    setLoader(true);
    // var tokens = localStorage.getItem("token");
    await dispatch(referralhistoryApi(tokens));
    setLoader(false);
  };

  useEffect(() => {
    referralhistory();
  }, []);

  const handleCashOut = (userId) => {
    var token = localStorage.getItem("token");
    const cashout = { token, userId };
    dispatch(referralCashoutApi(cashout));
  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span>
              {referTofrnd.user && referTofrnd.user.info.name}
            </h5>
          </div>
        </div>

        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky-top mb--30">
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--20">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="/images/icons/earn-money.svg"
                                    alt="img"
                                  />
                                  Earn Money
                                </h6>
                              </div>
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="/earnmoney">
                                      <i className="feather-arrow-right" />
                                      <span>Refer to Friend</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/postingstreak">
                                      <i className="feather-arrow-right" />
                                      <span>Posting streak</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/referralhistory"
                                      className="active"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Referral History</span>
                                    </Link>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Dashboard Sidebar  */}
                  </div>
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="row g-5">
                          <div className="col-lg-12">
                            <div className="section-title mb--10">
                              <h4 className="mb--0">Referral History</h4>
                            </div>
                          </div>
                          <div className="rbt-dashboard-table table-responsive mobile-table-750">
                            {loader === true ? (
                              <div className="loader" align="center">
                                <PulseLoader color="#b02deb" />
                              </div>
                            ) : (
                              <>
                                <table className="rbt-table table table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Sr.</th>
                                      <th>Email</th>
                                      <th>Refer Date</th>
                                      <th>Amount</th>
                                      <th className="text-center">You Got</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {friendReferral.user &&
                                      friendReferral.user.info.map(
                                        (item, id) => {
                                          return (
                                            <tr key={id}>
                                              <th>{id + 1}</th>
                                              <td>{item.email}</td>

                                              <td>
                                                {new Date(
                                                  item.referdate
                                                ).toLocaleDateString()}
                                              </td>
                                              <td>
                                                <h6 className="color-primary text-center">
                                                  $ {item.amount}
                                                </h6>
                                              </td>
                                              <td className="">
                                                <button
                                                  className="rbt-btn btn-border-gradient btn-sm refhistorybtn"
                                                  width={100}
                                                  data-bs-target={
                                                    referralcomplete.user &&
                                                    referralcomplete.user
                                                      .message
                                                      ? "#congratulationspopup"
                                                      : ""
                                                  }
                                                  onClick={() =>
                                                    handleCashOut(item.userId)
                                                  }
                                                  disabled={
                                                    item.redeemed === true
                                                  }
                                                >
                                                  {/*<span className="btn-text">*/}
                                                  {item.redeemed === false
                                                    ? "Cash Out  "
                                                    : "Cashed Out"}
                                                  {/*</span>*/}
                                                </button>
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                  </tbody>
                                </table>
                                <div className="text-danger">
                                  {referralcomplete.error &&
                                    referralcomplete.error.error}
                                </div>
                                <div className="text-success">
                                  {referralcomplete.user &&
                                    referralcomplete.user.message}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Modal */}
      <div
        className="modal fade show"
        style={{
          display: referralcomplete.isAuthenticated
            ? "block modal-open-bg"
            : "hidden",
          background: "#00000059",
        }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div className="text-center">
                <i className="h1 feather-check-circle text-success" />
                <h4 className="mt--20 mb--20">Congratulations</h4>
                <h6 className="mb--20">
                  you got <span className="theme-gradient">$ 10</span> now you
                  can withdraw it from redeemable section
                </h6>
                <div className="d-flex justify-content-center">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    to="/dashboard"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text" data-bs-dismiss="modal">
                        OK
                      </span>
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
      </div>
    </>
  );
};

export default Referralhistory;
