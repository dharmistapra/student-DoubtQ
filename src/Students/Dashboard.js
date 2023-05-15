import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { dashboards } from "../Redux/dashboardSlice";
import { pending } from "../Redux/dashboardPendingSlice";
import { Open } from "../Redux/dashboardOpenSlice";
import { Close } from "../Redux/dashboardCloseSlice";
import { Issue } from "../Redux/dashboardIssueSlice";
import PulseLoader from "react-spinners/PulseLoader";
import { referTofrnds } from "../Redux/referTofrndSlice";
import { queTypepriceApi } from "../Redux/queTypePriceSlice";
import { questiontypeApi } from "../Redux/questionTypeSlice";

const Dashboard = () => {

    const [loader, setLoader] = useState(true);
    const [selectedQuestionType, setSelectedQuestionType] = useState("");

    const dashboard = useSelector((state) => state.dashboard);
    const dashboardpending = useSelector((state) => state.dashboardpending);
    const dashboardClose = useSelector((state) => state.dashboardClose);
    const dashboardOpen = useSelector((state) => state.dashboardOpen);
    const dashboardIssue = useSelector((state) => state.dashboardIssue);

    const referTofrnd = useSelector((state) => state.referTofrnd);

    const queTypeprice = useSelector((state) => state.queTypeprice);
    const questiontype = useSelector((state) => state.questiontype);

    let tokens = localStorage.getItem("token");

    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();
    const [currentData, setCurrentData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [status, setStatus] = useState({ all: [], pending: [], open: [], close: [], issue: [], });

    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const allque = async (limit, skip) => {
        setLoader(true);
        let currentPageSkip = (currentPage - 1) * pageSize;
        await dispatch(dashboards(tokens, limit, skip));

        dispatch(pending(tokens, limit, skip));
        dispatch(Open(tokens, limit, skip));
        dispatch(Close(tokens, limit, skip));
        dispatch(Issue(tokens, limit, skip));
        dispatch(queTypepriceApi(tokens, limit, skip));
        setLoader(false);
    };

    useEffect(() => {
        let currentPageSkip = (currentPage - 1) * pageSize;
        // const params = `?limit=${pageSize}&skip=${currentPageSkip}`;
        allque(pageSize, (currentPage - 1) * pageSize);

        dispatch(referTofrnds(tokens));
        dispatch(questiontypeApi(tokens));
    }, [dispatch, pageSize, currentPage]);

    useEffect(() => {

        setStatus({
            all: dashboard.user && dashboard.user.info,
            pending: dashboardpending.user && dashboardpending.user.info,
            open: dashboardOpen.user && dashboardOpen.user.info,
            close: dashboardClose.user && dashboardClose.user.info,
            issue: dashboardIssue.user && dashboardIssue.user.info,
        });
    }, [dashboard, dashboardpending, dashboardOpen, dashboardClose, dashboardIssue,]);


    const handleQuestionTypeChange = (event) => {
        const selectedType = event.target.value;
        setSelectedQuestionType(selectedType);
        if (selectedType) {
            const filteredData = status[selectedStatus].filter(
                (item) => item.questionType === selectedType
            );
            setCurrentData(filteredData);
        } else {
            setCurrentData(status[selectedStatus]);
        }
    };

    //pagination
    useEffect(() => {
        if (!status[selectedStatus]) {
            return;
        }

        const filteredData = status[selectedStatus].filter((item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setCurrentData(filteredData);
    }, [currentPage, selectedStatus, status, searchQuery, pageSize]);

    const handleClick = (status) => {
        setSelectedStatus(status);
        setCurrentPage(1);
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
                                                                        src="/images/icons/writing_questions.svg"
                                                                        alt="img"
                                                                    />{" "}
                                                                    My Stats
                                                                </h6>
                                                            </div>
                                                            <nav className="mainmenu-nav">
                                                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                    <li>
                                                                        <Link to="#" className={selectedStatus === 'all' ? 'active' : ''}>
                                                                            <i className="feather-arrow-right" />
                                                                            <span onClick={() => handleClick("all")}>
                                                                                All
                                                                            </span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className={selectedStatus === 'pending' ? 'active' : ''}>
                                                                            <i className="feather-arrow-right" />
                                                                            <span
                                                                                onClick={() => handleClick("pending")}
                                                                            >
                                                                                In Progress
                                                                            </span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className={selectedStatus === 'open' ? 'active' : ''}>
                                                                            <i className="feather-arrow-right" />
                                                                            <span onClick={() => handleClick("open")}>
                                                                                Open Question
                                                                            </span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className={selectedStatus === 'close' ? 'active' : ''}>
                                                                            <i className="feather-arrow-right" />
                                                                            <span
                                                                                onClick={() => handleClick("close")}
                                                                            >
                                                                                Close Question
                                                                            </span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" className={selectedStatus === 'issue' ? 'active' : ''}>
                                                                            <i className="feather-arrow-right" />
                                                                            <span
                                                                                onClick={() => handleClick("issue")}
                                                                            >
                                                                                Issue Question
                                                                            </span>
                                                                        </Link>{" "}
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt--30 mb--30 quote">
                                                <div className="bg-color-white pt--20 pr--20 pb--20 pl--20">
                                                    It is Impossible for a man to learn what he thinks he
                                                    already knows.
                                                    <br /> - DoubtQ
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Dashboard Sidebar  */}
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--30">
                                            <div className="content">
                                                <div className="section-title text-center">
                                                    <h4 className="mb--0">Ask Question from Experts</h4>
                                                    <p>Ask questions from subject level experts.</p>
                                                    <Link
                                                        className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                                        to="/postquestion"
                                                    >
                                                        <span className="icon-reverse-wrapper">
                                                            <span className="btn-text">Ask Question</span>
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
                                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--30">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="section-title">
                                                            <h4 className="mb--10 text-capitalize">
                                                                {" "}
                                                                {selectedStatus} questions
                                                            </h4>
                                                        </div>
                                                        <div className="search-bar">
                                                            <form
                                                                action="#"
                                                                className="rbt-search-style-1 d-sm-block d-sm-none d-md-block mt--10"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search Questions"
                                                                    value={searchQuery}
                                                                    onChange={(event) =>
                                                                        setSearchQuery(event.target.value)
                                                                    }
                                                                />
                                                                <button className="search-btn">
                                                                    <i className="feather-search" />
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="filter-select rbt-modern-select mt--18">
                                                            <label>Question Type :</label>
                                                            <div className="dropdown react-bootstrap-select w-100">
                                                                <select
                                                                    id="class-signup"
                                                                    className="w-100"
                                                                    onChange={handleQuestionTypeChange}
                                                                >
                                                                    <option value="">
                                                                        Select Your question Type
                                                                    </option>{" "}
                                                                    {questiontype.user &&
                                                                        questiontype.user.data.map((option) => (
                                                                            <option
                                                                                key={option._id}
                                                                                value={option.questionType}
                                                                            >
                                                                                {option.questionType}
                                                                            </option>
                                                                        ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rbt-dashboard-table table-responsive mobile-table-750 mt-3">
                                                    {loader === true ?
                                                        <div className="loader" align="center">
                                                            <PulseLoader color="#b02deb" />
                                                        </div>
                                                        :
                                                        <table className="rbt-table table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th>Question</th>
                                                                    {/* <th>Images</th> */}
                                                                    {/* <th>Type</th> */}
                                                                    {/* <th>Subject</th> */}
                                                                    <th>Price</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {currentData != null &&
                                                                    currentData.length > 0 ? (
                                                                    currentData.map((item) => {
                                                                        return (
                                                                            <tr key={item.questionId}>
                                                                                <td>
                                                                                    <span className="rbt-badge-5 bg-primary-opacity mb--5">
                                                                                        {item.questionType}
                                                                                    </span>
                                                                                    <h6 className="mb--0"   >
                                                                                        <Link
                                                                                            to={
                                                                                                item.status === "Issue"
                                                                                                    ? `/issuepostquestion/${item.questionId}`
                                                                                                    : `/myquestionanswer/${item.questionId}`
                                                                                            }
                                                                                        >
                                                                                            {item.question}
                                                                                        </Link>
                                                                                    </h6>

                                                                                    <small>{item.questionSubject}</small>
                                                                                </td>

                                                                                <td>
                                                                                    <h6 className="color-primary">
                                                                                        ${item.questionPrice}
                                                                                    </h6>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="color-primary" >
                                                                                        {item.status === "PENDING"
                                                                                            ? "Pending"
                                                                                            : item.status
                                                                                        }

                                                                                    </h6>
                                                                                </td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                                ) : (
                                                                    <tr>
                                                                        <td colSpan="5">
                                                                            {currentData === null
                                                                                ? "No data found"
                                                                                : "No data available"}
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    }
                                                </div>
                                                <div className="col-lg-12">
                                                    <nav>
                                                        <ul className="rbt-pagination justify-content-end">
                                                            <li>
                                                                <button
                                                                    className="btn btn-light"
                                                                    disabled={currentPage === 1}
                                                                    onClick={() =>
                                                                        setCurrentPage(currentPage - 1)
                                                                    }
                                                                >
                                                                    <Link to="#" aria-label="Previous">
                                                                        <i className="feather-chevron-left" />
                                                                    </Link>
                                                                </button>
                                                            </li>
                                                            <li className="active">
                                                                <Link to="#">{currentPage}</Link>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="btn btn-light"
                                                                    onClick={() =>
                                                                        setCurrentPage(currentPage + 1)
                                                                    }
                                                                    disabled={currentData.length < pageSize}
                                                                >
                                                                    <Link to="#" aria-label="Next">
                                                                        <i className="feather-chevron-right" />
                                                                    </Link>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--60 p--20">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="section-title">
                                                            <h5 className="mb--20">
                                                                Frequently asked questions
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                                                    <div className="accordion" id="accordionExamplec3">
                                                        <div className="accordion-item card">
                                                            <h2
                                                                className="accordion-header card-header"
                                                                id="headingThree1"
                                                            >
                                                                <button
                                                                    className="accordion-button"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree1"
                                                                    aria-expanded="true"
                                                                    aria-controls="collapseThree1"
                                                                >
                                                                    Can I change my Q&amp;A subject preference?
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="collapseThree1"
                                                                className="accordion-collapse collapse show"
                                                                aria-labelledby="headingThree1"
                                                                data-bs-parent="#accordionExamplec3"
                                                            >
                                                                <div className="accordion-body card-body">
                                                                    You can run Histudy easily. Any School,
                                                                    University, College can be use this histudy
                                                                    education template for their educational
                                                                    purpose. A university can be run their online
                                                                    leaning management system by histudy education
                                                                    template.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item card">
                                                            <h2
                                                                className="accordion-header card-header"
                                                                id="headingThree2"
                                                            >
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree2"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseThree2"
                                                                >
                                                                    Who evaluates my answers? whwn do i got a
                                                                    feedback report?
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="collapseThree2"
                                                                className="accordion-collapse collapse"
                                                                aria-labelledby="headingThree2"
                                                                data-bs-parent="#accordionExamplec3"
                                                            >
                                                                <div className="accordion-body card-body">
                                                                    After purchasing the product need you any
                                                                    support you can be share with us with sending
                                                                    mail to rainbowit10@gmail.com.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item card">
                                                            <h2
                                                                className="accordion-header card-header"
                                                                id="headingThree3"
                                                            >
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree3"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseThree3"
                                                                >
                                                                    When will I get paid for my answers?
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="collapseThree3"
                                                                className="accordion-collapse collapse"
                                                                aria-labelledby="headingThree3"
                                                                data-bs-parent="#accordionExamplec3"
                                                            >
                                                                <div className="accordion-body card-body">
                                                                    Yes, We will get update the Histudy. And you
                                                                    can get it any time. Next time we will comes
                                                                    with more feature. You can be get update for
                                                                    unlimited times. Our dedicated team works for
                                                                    update.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item card">
                                                            <h2
                                                                className="accordion-header card-header"
                                                                id="headingThree4"
                                                            >
                                                                <button
                                                                    className="accordion-button collapsed"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree4"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapseThree4"
                                                                >
                                                                    How many questions can i skip?
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="collapseThree4"
                                                                className="accordion-collapse collapse"
                                                                aria-labelledby="headingThree4"
                                                                data-bs-parent="#accordionExamplec3"
                                                            >
                                                                <div className="accordion-body card-body">
                                                                    If you're looking for random paragraphs,
                                                                    you've come to the right place. When a random
                                                                    word or a random sentence isn't quite enough,
                                                                    the next logical step is to find a random
                                                                    paragraph.
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
