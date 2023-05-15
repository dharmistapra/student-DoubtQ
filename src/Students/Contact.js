import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Students/Loginpages/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { contactApi } from "../Redux/contactSlice";

const Contact = () => {
  
  const [value, setValue] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);

  //Contact from
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {

    var tokens = localStorage.getItem("token");

    let dataObj = {
      token: tokens,
      fullname: data.fullname,
      email: data.email,
      mobileNo: data.mobileNo,
      Message: data.Message,
    };
    dispatch(contactApi(dataObj));
  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--60">
                  <span className="subtitle bg-secondary-opacity">
                    Contact Us
                  </span>
                  <h2 className="title">Have Some Questions? </h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                data-sal="slide-up"
                data-sal-delay={150}
                data-sal-duration={800}
              >
                <div className="rbt-address">
                  <div className="icon">
                    <i className="feather-headphones" />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Phone Number</h4>
                    <p>
                      <Link to="tel:+444555666777">+444 555 666 777</Link>
                    </p>
                    <p>
                      <Link to="tel:+222222222333">+222 222 222 333</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                data-sal="slide-up"
                data-sal-delay={200}
                data-sal-duration={800}
              >
                <div className="rbt-address">
                  <div className="icon">
                    <i className="feather-mail" />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p>
                      <Link to="mailto:admin@gmail.com">admin@gmail.com</Link>
                    </p>
                    <p>
                      <Link to="mailto:example@gmail.com">
                        example@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                data-sal="slide-up"
                data-sal-delay={250}
                data-sal-duration={800}
              >
                <div className="rbt-address">
                  <div className="icon">
                    <i className="feather-map-pin" />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Location</h4>
                    <p>
                      5678 Bangla Main Road, cities 580 <br /> GBnagla, example
                      54786
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-contact-address mb--80">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img
                    className="w-100 radius-6"
                    src="/images/about/contact.jpg"
                    alt="Contact Images"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                  <div className="section-title text-start">
                    <span className="subtitle bg-primary-opacity">
                      inquiry now
                    </span>
                  </div>
                  <h3 className="title">You Can Contact With Me</h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action="#"
                    className="rbt-profile-row rbt-default-form row row--15"
                  >
                    <div className="col-lg-12 col-12">
                      <div className="rbt-form-group">
                        <label htmlFor="firstname">Full Name</label>
                        <input
                          id="fullname"
                          type="text"
                          defaultValue=""
                          placeholder="Jone Dio"
                          {...register("fullname", {
                            required: "Provide your Name!",
                          })}
                        />
                        <p className="text-danger">
                          {errors.fullname && errors.fullname.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="rbt-form-group">
                        <label htmlFor="lastname">Email</label>
                        <input
                          id="lastname"
                          type="email"
                          defaultValue=""
                          placeholder="jonedio@gmail.com"
                          {...register("email", {
                            required: "Please Enter A Valid Email!",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            },
                          })}
                        />{" "}
                        <p className="text-danger">
                          {errors.email && errors.email.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="rbt-form-group">
                        <label htmlFor="username">Mobile</label>
                        <Controller
                          name="mobileNo"
                          control={control}
                          rules={{ required: "Mobile number is required" }}
                          render={({
                            field: { onChange, onBlur, value, name, ref },
                          }) => (
                            <PhoneInput
                              country={"us"}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              inputRef={ref}
                            />
                          )}
                        />
                        {errors.mobileNo && (
                          <span className="text-danger">
                            {errors.mobileNo.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="rbt-form-group">
                        <label htmlFor="bio">Message</label>
                        <textarea
                          placeholder="Something Say"
                          id="bio"
                          cols={20}
                          rows={5}
                          defaultValue={""}
                          {...register("Message", {
                            required: "Enter message!",
                          })}
                        />
                        <p className="text-danger">
                          {errors.Message && errors.Message.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 mt--20">
                      <div className="rbt-form-group">
                        <button
                          className="btn-sm rbt-btn btn-gradient"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Modal */}
      <div
        className="modal fade"
        id="youtubepopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="youtubepopup"
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
                <p className="text-danger">
                  *You must view the video for atleast 2 minutes to see the
                  answer
                </p>
                <iframe
                  width="100%"
                  height={315}
                  src="https://www.youtube.com/embed/nR3ok_P2gzI"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
