import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postingStreakApi } from "../Redux/postingstreakSlice";
import PulseLoader from "react-spinners/PulseLoader";
import { postStreakCashoutApi } from "../Redux/postStreakCashoutSlice";

const Postingstreak = () => {
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();
  const postingstreak = useSelector((state) => state.postingstreak);
  const postStreak = useSelector((state) => state.postStreak);
  const referTofrnd = useSelector((state) => state.referTofrnd);

  let tokens = localStorage.getItem("token");

  const postloader = async () => {
    setLoader(true);

    await dispatch(postingStreakApi(tokens));
    setLoader(false);
  };

  useEffect(() => {
    postloader();
  }, [dispatch]);

  const colors = ["primary", "bar-color-2", "bar-color-3", "bar-color-4"];

  const handleCashOut = (srno) => {
    var token = localStorage.getItem("token");
    const cashout = { token, srno };
    dispatch(postStreakCashoutApi(cashout));
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
                                    <Link
                                      to="/postingstreak"
                                      className="active"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Posting streak</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/referralhistory">
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
                              <h4 className="mb--0">Posting Streak</h4>
                            </div>
                          </div>
                          <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                            {loader === true ? (
                              <div className="loader" align="center">
                                <PulseLoader color="#b02deb" />
                              </div>
                            ) : (
                              <>
                                <table className="rbt-table table table-borderless">
                                  <tbody>
                                    {postingstreak.user &&
                                      postingstreak.user.poststreak &&
                                      postingstreak.user.poststreak.length &&
                                      postingstreak.user.poststreak.map(
                                        (item, i) => {
                                          const percentage =
                                            (item.filldata / item.totaldata) *
                                            100;
                                          const isCashOutEnabled =
                                            item.filldata === item.totaldata;
                                          return (
                                            <tr key={i}>
                                              <th>
                                                <p className="b3">{i + 1}</p>
                                              </th>
                                              <td>
                                                <p className="b3">
                                                  {item.filldata} /
                                                  {item.totaldata}
                                                </p>
                                              </td>
                                              <td style={{ width: 400 }}>
                                                <div className="single-progress ">
                                                  <h6>{item.totaldata} Post</h6>
                                                  <div className="progress">
                                                    <div
                                                      className={`progress-bar wow fadeInLeft ${
                                                        colors[
                                                          i % colors.length
                                                        ]
                                                      }`}
                                                      data-wow-duration="0.5s"
                                                      data-wow-delay=".3s"
                                                      style={{
                                                        width: `${percentage}%`,
                                                        visibility: "visible",
                                                        animationDuration:
                                                          "0.5s",
                                                        animationDelay: "0.3s",
                                                        animationName:
                                                          "fadeInLeft",
                                                      }}
                                                      aria-valuenow={90}
                                                      aria-valuemin={0}
                                                      aria-valuemax={100}
                                                    ></div>
                                                    <span className="progress-number " />
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <h6 className="color-primary">
                                                  INR
                                                  {item.price < 10
                                                    ? `0${item.price}`
                                                    : item.price}
                                                </h6>
                                              </td>
                                              <td className="px-0">
                                                <button
                                                  className="rbt-btn btn-border-gradient btn-sm"
                                                  onClick={() =>
                                                    handleCashOut(item.srno)
                                                  }
                                                  disabled={
                                                    !isCashOutEnabled ||
                                                    item.iscashedout === true
                                                  }
                                                >
                                                  <span className="btn-text">
                                                    Cash Out
                                                  </span>
                                                </button>
                                              </td>
                                            </tr>
                                          );
                                        }
                                      )}
                                  </tbody>
                                </table>
                                <div className="text-danger text-center">
                                  {postStreak.error && postStreak.error.error}
                                </div>
                                <div className="text-success text-center">
                                  {postStreak.user && postStreak.user.message}
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
    </>
  );
};

export default Postingstreak;
