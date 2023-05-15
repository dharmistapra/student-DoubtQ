import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Homecarousel = () => {

    const settings = {
        slidesToShow: 2,
        speed: 500,
        slidesToScroll: 1,
        infinite: false,
        // autoplay: true,
        arrows: true,
        // dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            {/* Testimonial Start */}
            <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20">
                                <h3 className="title">Student Stories</h3>
                                <p className="description">
                                    DoubtQ has got 3k+ positive student ratings from different
                                    countries of the world. Their positive reviews show how DoubtQ
                                    dedicatedly helped them to grow
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <Slider {...settings}>

                            {/* Start Single Testimonial  */}
                            <div
                                className="swiper-slide swiper-slide-active"
                                role="group"
                                aria-label="1 / 5"
                            >
                                <div className="single-slide">
                                    <div className="rbt-testimonial-box">
                                        <div className="inner">
                                            <div className="clint-info-wrapper">
                                                <div className="thumb">
                                                    <img
                                                        src="../images/testimonial/client-01.png"
                                                        alt="Clint Images"
                                                    />
                                                </div>
                                                <div className="client-info">
                                                    <h5 className="title">Martha Maldonado</h5>
                                                    <span>
                                                        Executive Chairman <i>@ Google</i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="subtitle-3">
                                                    After the launch, vulputate at sapien sit amet, auctor
                                                    iaculis lorem. In vel hend rerit nisi. Vestibulum eget
                                                    risus velit.
                                                </p>
                                                <div className="rating mt--20">
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Testimonial  */}
                            {/* Start Single Testimonial  */}
                            <div
                                className="swiper-slide swiper-slide-next"
                                role="group"
                                aria-label="2 / 5"
                                style={{ width: 445 }}
                            >
                                <div className="single-slide">
                                    <div className="rbt-testimonial-box">
                                        <div className="inner">
                                            <div className="clint-info-wrapper">
                                                <div className="thumb">
                                                    <img
                                                        src="../images/testimonial/client-02.png"
                                                        alt="Clint Images"
                                                    />
                                                </div>
                                                <div className="client-info">
                                                    <h5 className="title">Michael D. Lovelady</h5>
                                                    <span>
                                                        CEO <i>@ Google</i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="subtitle-3">
                                                    Histudy education, vulputate at sapien sit amet, auctor
                                                    iaculis lorem. In vel hend rerit nisi. Vestibulum eget.
                                                </p>
                                                <div className="rating mt--20">
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Testimonial  */}
                            {/* Start Single Testimonial  */}
                            <div
                                className="swiper-slide"
                                role="group"
                                aria-label="3 / 5"
                                style={{ width: 445 }}
                            >
                                <div className="single-slide">
                                    <div className="rbt-testimonial-box">
                                        <div className="inner">
                                            <div className="clint-info-wrapper">
                                                <div className="thumb">
                                                    <img
                                                        src="../images/testimonial/client-03.png"
                                                        alt="Clint Images"
                                                    />
                                                </div>
                                                <div className="client-info">
                                                    <h5 className="title">Valerie J. Creasman</h5>
                                                    <span>
                                                        Executive Designer <i>@ Google</i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="subtitle-3">
                                                    Our educational, vulputate at sapien sit amet, auctor
                                                    iaculis lorem. In vel hend rerit nisi. Vestibulum eget.
                                                </p>
                                                <div className="rating mt--20">
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Testimonial  */}
                            {/* Start Single Testimonial  */}
                            <div
                                className="swiper-slide"
                                role="group"
                                aria-label="4 / 5"
                                style={{ width: 445 }}
                            >
                                <div className="single-slide">
                                    <div className="rbt-testimonial-box">
                                        <div className="inner">
                                            <div className="clint-info-wrapper">
                                                <div className="thumb">
                                                    <img
                                                        src="../images/testimonial/client-03.png"
                                                        alt="Clint Images"
                                                    />
                                                </div>
                                                <div className="client-info">
                                                    <h5 className="title">Valerie J. Creasman</h5>
                                                    <span>
                                                        Executive Designer <i>@ Google</i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="subtitle-3">
                                                    Our educational, vulputate at sapien sit amet, auctor
                                                    iaculis lorem. In vel hend rerit nisi. Vestibulum eget.
                                                </p>
                                                <div className="rating mt--20">
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Testimonial  */}
                            {/* Start Single Testimonial  */}
                            <div
                                className="swiper-slide"
                                role="group"
                                aria-label="5 / 5"
                                style={{ width: 445 }}
                            >
                                <div className="single-slide">
                                    <div className="rbt-testimonial-box">
                                        <div className="inner">
                                            <div className="clint-info-wrapper">
                                                <div className="thumb">
                                                    <img
                                                        src="../images/testimonial/client-03.png"
                                                        alt="Clint Images"
                                                    />
                                                </div>
                                                <div className="client-info">
                                                    <h5 className="title">Valerie J. Creasman</h5>
                                                    <span>
                                                        Executive Designer <i>@ Google</i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="description">
                                                <p className="subtitle-3">
                                                    Our educational, vulputate at sapien sit amet, auctor
                                                    iaculis lorem. In vel hend rerit nisi. Vestibulum eget.
                                                </p>
                                                <div className="rating mt--20">
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                    <Link to="#">
                                                        <i className="fa fa-star" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Testimonial  */}


                        </Slider>
                        {/* <div
                            className="rbt-swiper-arrow rbt-arrow-left"
                            tabIndex={0}
                            role="button"
                            aria-label="Next slide"
                            aria-controls="swiper-wrapper-173a475d34b10c8dd"
                            aria-disabled="false"
                        >
                            <div className="custom-overfolow">
                                <i className="rbt-icon feather-arrow-left" />
                                <i className="rbt-icon-top feather-arrow-left" />
                            </div>
                        </div>
                        <div
                            className="rbt-swiper-arrow rbt-arrow-right swiper-button-disabled"
                            tabIndex={-1}
                            role="button"
                            aria-label="Previous slide"
                            aria-controls="swiper-wrapper-173a475d34b10c8dd"
                            aria-disabled="true"
                        >
                            <div className="custom-overfolow">
                                <i className="rbt-icon feather-arrow-right" />
                                <i className="rbt-icon-top feather-arrow-right" />
                            </div>
                        </div>
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homecarousel;