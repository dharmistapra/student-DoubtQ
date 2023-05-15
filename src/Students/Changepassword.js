import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../Redux/changePasswordSlice";
import PulseLoader from "react-spinners/PulseLoader";

const Changepassword = () => {

    const [loader, setLoader] = useState(true);

    const changepassword = useSelector((state) => state.changepassword);

    const token = useSelector((state) => state.changepassword.token);

    const referTofrnd = useSelector((state) => state.referTofrnd);

    let tokens = localStorage.getItem("token");

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Changepassword from
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({});

    const new_password = watch("new_password");

    const onSubmit = (data) => {

        // var tokens = localStorage.getItem("token");
        let dataobject = {
            token: tokens,
            password: data.password,
            new_password: data.new_password,
        }
        dispatch(changePassword(dataobject));
    };


    return (
        <>
            <main className="rbt-main-wrapper">
                <div className="blue-title">
                    <div className="container">
                        <h5 className="color-white pt--20 pb--20 mb--0">
                            <i className="feather-user" />{" "}
                            <span className="normal-text">Hello,</span> {referTofrnd.user && referTofrnd.user.info.name}
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
                                                                        src="/images/icons/account-settings.svg"
                                                                        alt="img"
                                                                    />
                                                                    Account Settings
                                                                </h6>
                                                            </div>
                                                            <nav className="mainmenu-nav">
                                                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                    <li>
                                                                        <Link to="/personalsettings">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>Personal Settings</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/changepassword" className="active">
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
                                                    <div className="col-lg-12">
                                                        <div className="section-title mb--10">
                                                            <h4 className="mb--0">Change Password</h4>
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
                                                                    <label htmlFor="">Current Password</label>
                                                                    <input
                                                                        id=""
                                                                        type="password"
                                                                        defaultValue=""
                                                                        placeholder="Old Password"
                                                                        {...register("password", {
                                                                            required: "Old Password required",
                                                                        })}
                                                                    />
                                                                    <p className="text-danger">
                                                                        {errors.password &&
                                                                            errors.password.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12"></div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="rbt-form-group">
                                                                    <label htmlFor="">New password</label>
                                                                    <input
                                                                        id=""
                                                                        type="text"
                                                                        defaultValue=""
                                                                        placeholder="New password"
                                                                        {...register("new_password", {
                                                                            required: "Add new password",
                                                                            minLength: {
                                                                                value: 6,
                                                                                message: "Password must be 8 digit",
                                                                            },
                                                                        })}
                                                                    />
                                                                    <p className="text-danger">
                                                                        {errors.new_password &&
                                                                            errors.new_password.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="rbt-form-group">
                                                                    <label htmlFor="">Retype password</label>
                                                                    <input
                                                                        id=""
                                                                        type="text"
                                                                        defaultValue=""
                                                                        placeholder="Retype password"
                                                                        {...register("Retype_password", {
                                                                            required: "Retype password is required",
                                                                            validate: (value) =>
                                                                                value === new_password ||
                                                                                "The password does not match",
                                                                        })}
                                                                    />
                                                                    <span className="text-danger">
                                                                        {errors.Retype_password &&
                                                                            errors.Retype_password.message}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 mt--20">
                                                                <div className="rbt-form-group">
                                                                    <button
                                                                        type="submit"
                                                                        className="btn-sm rbt-btn btn-gradient"
                                                                        to="#"
                                                                    >
                                                                        Save Password
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
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
    )
}

export default Changepassword;