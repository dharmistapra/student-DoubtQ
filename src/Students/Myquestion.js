import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "../Selectfrom.css";
import { questionsub } from "../Redux/questionSubjectSlice";


const Myquestion = () => {

    //Myquestion drop-dwon
    const {register,formState: { errors },} = useForm({});

    //Name Api
    const referTofrnd = useSelector((state) => state.referTofrnd);
    let tokens = localStorage.getItem("token");
    const dispatch = useDispatch();

      //QuestionSubject Api
  const questionSubject = useSelector((state) => state.questionSubject);

  useEffect(() => {
    let tokens = localStorage.getItem("token");
    dispatch(questionsub(tokens));
  }, [dispatch]);
 

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
                                                                        src="/images/icons/writing_questions.svg"
                                                                        alt=""
                                                                    />{" "}
                                                                    My Questions
                                                                </h6>
                                                            </div>
                                                            <nav className="mainmenu-nav">
                                                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                    <li>
                                                                        <Link to="#" className="active">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>All</span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>In Progress</span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>Open Question</span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#">
                                                                            <i className="feather-arrow-right" />
                                                                            <span>Close Question</span>
                                                                        </Link>{" "}
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
                                                        <div className="section-title">
                                                            <h4 className="mb--0">My Questions</h4>
                                                        </div>
                                                        <form
                                                            action="#"
                                                            className="rbt-search-style-1 d-sm-block d-sm-none d-md-block mt--10"
                                                        >
                                                            <input type="text" placeholder="Search Courses" />
                                                            <button className="search-btn">
                                                                <i className="feather-search" />
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mt--20">
                                                            <p className="mb--0">Filter</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <form className="row">
                                                                    <div className="col-12">
                                                                        <div className="rbt-form-group">
                                                                            <input
                                                                                type="date"
                                                                                placeholder="Date"
                                                                                id="date"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="filter-select rbt-modern-select mb--15">
                                                                    <div className="dropdown react-bootstrap-select w-100">
                                                                        <select
                                                                            id="class-signup"
                                                                            className="w-100"
                                                                            {...register("board", { required: true })}
                                                                        >
                                                                            <option value="">
                                                                                Select Your Subject
                                                                            </option>
                                                                            {questionSubject.user && questionSubject.user.data.map((data) => {
                              return(
                                <option>{data.questionSubject}</option>
                              )
                            })}
                                                                        </select>
                                                                        {errors.board && (
                                                                            <span className="text-danger">
                                                                                Please select a board
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--10">
                                                        <table className="rbt-table table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th>Questions</th>
                                                                    <th>subject</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>
                                                                        <p className="b3 mb--5">December 26, 2022</p>
                                                                        <span className="h6 mb--5">
                                                                            What do you mean by ‘under conditions of a
                                                                            perfect competition in the product market’?
                                                                        </span>
                                                                    </th>
                                                                    <td>
                                                                        <span className="rbt-badge-5 bg-primary-opacity d-inline">
                                                                            Economics
                                                                        </span>{" "}
                                                                        <span className="rbt-badge-5 bg-color-warning-opacity color-warning d-inline">
                                                                            MCQ
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <p className="b3 mb--5">December 26, 2022</p>
                                                                        <span className="h6 mb--5">
                                                                            What do you mean by ‘under conditions of a
                                                                            perfect competition in the product market’?
                                                                        </span>
                                                                    </th>
                                                                    <td>
                                                                        <span className="rbt-badge-5 bg-primary-opacity d-inline">
                                                                            Economics
                                                                        </span>{" "}
                                                                        <span className="rbt-badge-5 bg-color-warning-opacity color-warning d-inline">
                                                                            MCQ
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <p className="b3 mb--5">December 26, 2022</p>
                                                                        <span className="h6 mb--5">
                                                                            What do you mean by ‘under conditions of a
                                                                            perfect competition in the product market’?
                                                                        </span>
                                                                    </th>
                                                                    <td>
                                                                        <span className="rbt-badge-5 bg-primary-opacity d-inline">
                                                                            Economics
                                                                        </span>{" "}
                                                                        <span className="rbt-badge-5 bg-color-warning-opacity color-warning d-inline">
                                                                            MCQ
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <p className="b3 mb--5">December 26, 2022</p>
                                                                        <span className="h6 mb--5">
                                                                            What do you mean by ‘under conditions of a
                                                                            perfect competition in the product market’?
                                                                        </span>
                                                                    </th>
                                                                    <td>
                                                                        <span className="rbt-badge-5 bg-primary-opacity d-inline">
                                                                            Economics
                                                                        </span>{" "}
                                                                        <span className="rbt-badge-5 bg-color-warning-opacity color-warning d-inline">
                                                                            MCQ
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>
                                                                        <p className="b3 mb--5">December 26, 2022</p>
                                                                        <span className="h6 mb--5">
                                                                            What do you mean by ‘under conditions of a
                                                                            perfect competition in the product market’?
                                                                        </span>
                                                                    </th>
                                                                    <td>
                                                                        <span className="rbt-badge-5 bg-primary-opacity d-inline">
                                                                            Economics
                                                                        </span>{" "}
                                                                        <span className="rbt-badge-5 bg-color-warning-opacity color-warning d-inline">
                                                                            MCQ
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <nav>
                                                            <ul className="rbt-pagination justify-content-end">
                                                                <li>
                                                                    <Link to="#" aria-label="Previous">
                                                                        <i className="feather-chevron-left" />
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#">1</Link>
                                                                </li>
                                                                <li className="active">
                                                                    <Link to="#">2</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#">3</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" aria-label="Next">
                                                                        <i className="feather-chevron-right" />
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
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

export default Myquestion;