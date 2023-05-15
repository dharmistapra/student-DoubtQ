import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../Redux/personalSettingSlice";
import "../Selectfrom.css";

import { referTofrnds } from "../Redux/referTofrndSlice";

const Personalsettings = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const personalSetting = useSelector((state) => state.personalSetting);
  const referTofrnd = useSelector((state) => state.referTofrnd);
  console.log(personalSetting);
  const [isEditing, setEditing] = useState(false);

  let tokens = localStorage.getItem("token");

  const dispatch = useDispatch();

  //Personalsettings
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    setFormSubmitted(true);

    const dataObject = {
      token: tokens,
      name: data.name,
      email: data.email,
      board: data.board,
      city: data.city,
      school: data.school,
    };

    dispatch(setInfo(dataObject));
  };

  useEffect(() => {
    dispatch(referTofrnds(tokens));
  }, [dispatch]);

  //reset data
  useEffect(() => {
    const dataReset = referTofrnd.user && referTofrnd.user.info;
    reset(dataReset);
  }, [referTofrnd]);

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />{" "}
              <span className="normal-text">Hello,</span>{" "}
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
                                    src="assets/images/icons/account-settings.svg"
                                    alt=""
                                  />
                                  Account Settings
                                </h6>
                              </div>
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link
                                      to="/personalsettings"
                                      className="active"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Personal Settings</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/changepassword">
                                      <i className="feather-arrow-right" />
                                      <span>Change Password </span>
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
                          <div className="col-lg-6">
                            <div className="section-title mb--10">
                              <h4 className="mb--0">Personal Settings</h4>
                            </div>
                          </div>
                          <div
                            className="Personal-Settings-button col-lg-6"
                            align="right"
                          >
                            <Button
                              className="border-edit-btn"
                              size="lg"
                              onClick={() => setEditing(!isEditing)}
                            >
                              {!isEditing && <i className="fa fa-pen" />}
                              {!isEditing ? "Edit" : "Cancel"}
                            </Button>{" "}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            action="#"
                            className="rbt-profile-row rbt-default-form row row--15"
                          >
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                  id="name"
                                  type="text"
                                  className="custom-input"
                                  disabled={!isEditing}
                                  name="name"
                                  // defaultValue={
                                  //   (referTofrnd.user &&
                                  //     referTofrnd.user.info.name) ||
                                  //   ""
                                  // }
                                  {...register("name", {
                                    required: !isEditing
                                      ? "Provide Your Full name"
                                      : false,
                                    minLength: !isEditing
                                      ? {
                                          value: 3,
                                          message: "name atleast 3 characters",
                                        }
                                      : false,
                                    pattern: {
                                      value: /^[a-zA-Z\s]*$/,
                                      message:
                                        "Name should contain only alphabets and spaces",
                                    },
                                  })}
                                />
                                <span className="text-danger">
                                  {formSubmitted &&
                                    errors.name &&
                                    errors.name.message}
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                  id="email"
                                  type="email"
                                  className="custom-input"
                                  disabled={!isEditing}
                                  // defaultValue={
                                  //   referTofrnd.user &&
                                  //   referTofrnd.user.info.email
                                  // }
                                  {...register("email", {
                                    required: !isEditing
                                      ? "Please Enter A Valid Email!"
                                      : false,
                                    pattern: !isEditing
                                      ? {
                                          value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        }
                                      : false,
                                  })}
                                />{" "}
                                <span className="text-danger">
                                  {formSubmitted &&
                                    errors.email &&
                                    errors.email.message}
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="filter-select rbt-modern-select">
                                <label htmlFor="displayname" className="">
                                  Select Board
                                </label>
                                <div className="dropdown react-bootstrap-select w-100">
                                  <select
                                    id="class-signup"
                                    className="custom-input w-100"
                                    disabled={!isEditing}
                                    {...register("board", {
                                      required: !isEditing ? true : false,
                                    })}
                                  >
                                    <option
                                      defaultValue={
                                        referTofrnd.user &&
                                        referTofrnd.user.info.board
                                      }
                                    >
                                      {referTofrnd.user &&
                                        referTofrnd.user.info.board}
                                    </option>

                                    <option value="CBSE">CBSE</option>
                                    <option value="GSEB">GSEB</option>
                                    <option value="ICSE">ICSE</option>
                                  </select>
                                  {formSubmitted && errors.board && (
                                    <span className="text-danger">
                                      Please select a board
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="username">City</label>
                                <input
                                  id="username"
                                  type="text"
                                  // defaultValue={
                                  //   referTofrnd.user &&
                                  //   referTofrnd.user.info.city
                                  // }
                                  className="custom-input"
                                  disabled={!isEditing}
                                  {...register("city", {
                                    required: !isEditing
                                      ? "Provide your city name"
                                      : false,
                                  })}
                                />
                                <span className="text-danger">
                                  {formSubmitted &&
                                    errors.city &&
                                    errors.city.message}
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="Schoolname">School Name</label>
                                <input
                                  id="Schoolname"
                                  type="text"
                                  // defaultValue={
                                  //   referTofrnd.user &&
                                  //   referTofrnd.user.info.school
                                  // }
                                  className="custom-input"
                                  disabled={!isEditing}
                                  {...register("school", {
                                    required: !isEditing
                                      ? "Provide your School name"
                                      : false,
                                  })}
                                />
                                <span className="text-danger">
                                  {formSubmitted &&
                                    errors.school &&
                                    errors.school.message}
                                </span>
                              </div>
                            </div>
                            <div className="col-12 mt--20">
                              <div className="rbt-form-group">
                                <button
                                  className="btn-sm rbt-btn btn-gradient"
                                  type="submit"
                                  disabled={!isEditing}
                                >
                                  Update Info
                                </button>
                              </div>
                            </div>
                          </form>
                          <p className="text-danger text-center my-4">
                            {personalSetting.error &&
                              personalSetting.error.error}
                          </p>
                          <p className=" text-center my-4 text-success">
                            {personalSetting.user &&
                              personalSetting.user.message}
                          </p>
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

export default Personalsettings;
