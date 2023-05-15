import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    Navigate,

} from "react-router-dom";
import "./index.css"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Scroll from "./components/Scroll";
import Backtotop from "./components/Backtotop";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from './pages/Home';
// import Demo from "./components/Demo";

import Dashboard from "./Students/Dashboard";
import Contact from "./Students/Contact";
import Faq from "./Faqs/Faq";

import Refundpolicy from "./Staticpages/Refundpolicy";
import Privacypolicy from "./Staticpages/Privacypolicy";
import Termsandconditions from "./Staticpages/Termsandconditions";
import Copyrightpolicy from "./Staticpages/Copyrightpolicy";
import Honourcode from "./Staticpages/Honorcode";
import Aboutdoubtq from "./Staticpages/Aboutdoubtq";
import Academicintegrity from "./Staticpages/Academicintegrity";
import Reviews from "./Staticpages/Reviews";

import Mcq from "./Students/Mcqservice/Mcq";
import Myquestion from "./Students/Myquestion";
import Postquestion from "./Students/Postquestion";
import Search from "./Students/Search";
import Services from "./Students/Services/Services";
import Myquestionanswer from "./Students/Myquestionanswer";
import Issuepostquestion from "./Students/Issuepostquestion";

import Truefalse from "./Students/Truefalse/Truefalse";
import Fillups from "./Students/Fillups/Fillups";
import Matchfollow from "./Students/Matchthefollowing/Matchfollow";
import Define from "./Students/Definations/Define";
import Shortanswerquestions from "./Students/Shortanswerquestions/Shortanswerquestions";
import Casestudyquestions from "./Students/Casestudyquestions/Casestudyquestions";
import Writing from "./Students/Writingquestions/Writing";
import Longtheory from "./Students/Longanswer/Longtheory";
import Problemsolve from "./Students/Problemsolving/Problemsolve";

import Personalsettings from "./Students/Personalsettings";
import Changepassword from "./Students/Changepassword";

import Postingstreak from "./Students/Postingstreak";
import Referralhistory from "./Students/Referralhistory";
import Refertofriend from "./Students/Refertofriend";

import Paymentoption from "./Students/Wallet/Paymentoption";
import Totalamount from "./Students/Wallet/Totalamount";
import Transactionhistory from "./Students/Wallet/Transactionhistory";

import Signin from "./Students/Loginpages/Signin";
import Signup from "./Students/Loginpages/Signup";
import Signupmodel from "./Students/Loginpages/Signupmodel";


const App = () => {

    const token = localStorage.getItem("token");


    return (

        <>
            <Router>
                <Backtotop />
                <Navigation />
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/demo" component={Demo} exact></Route> */}

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />

                    <Route path="/refundpolicy" element={<Refundpolicy />} />
                    <Route path="/privacypolicy" element={<Privacypolicy />} />
                    <Route path="/termsandconditions" element={<Termsandconditions />} />
                    <Route path="/copyrightpolicy" element={<Copyrightpolicy />} />
                    <Route path="/honourcode" element={<Honourcode />} />
                    <Route path="/aboutdoubtq" element={<Aboutdoubtq />} />
                    <Route path="/academicintegrity" element={<Academicintegrity />} />
                    <Route path="/reviews" element={<Reviews />} />

                    <Route path="/mcq" element={<Mcq />} />
                    <Route path="/myquestion" element={<Myquestion />} />
                    <Route path="/postquestion" element={<Postquestion />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/services" element={<Services />} />
                    {/* <Route path="/myquestionanswer" element={<Myquestionanswer />} /> */}
                    <Route path="/myquestionanswer/:id" element={<Myquestionanswer />} />
                    {/* <Route path="/issuepostquestion" element={<Issuepostquestion />} /> */}
                    <Route path="/issuepostquestion/:id" element={<Issuepostquestion />} />


                    <Route path="/Truefalse" element={<Truefalse />} />
                    <Route path="/fillups" element={<Fillups />} />
                    <Route path="/matchthefollowing" element={<Matchfollow />} />
                    <Route path="/definations" element={<Define />} />
                    <Route path="/shortanswerquestions" element={<Shortanswerquestions />} />
                    <Route path="/casestudyquestions" element={<Casestudyquestions />} />
                    <Route path="/writing" element={<Writing />} />
                    <Route path="/longtheory" element={<Longtheory />} />
                    <Route path="/problemsolve" element={<Problemsolve />} />

                    <Route path="/personalsettings" element={<Personalsettings />} />
                    <Route path="/personalsettings" element={<Personalsettings />} />
                    {/* <Route path="/personalsettings/:id" element={<Personalsettings />} /> */}
                    <Route path="/changepassword" element={<Changepassword />} />

                    <Route path="/postingstreak" element={<Postingstreak />} />
                    <Route path="/referralhistory" element={<Referralhistory />} />
                    <Route path="/earnmoney" element={<Refertofriend />} />

                    <Route path="/paymentoption" element={<Paymentoption />} />
                    <Route path="/wallet" element={<Totalamount />} />
                    <Route path="/transactionhistory" element={<Transactionhistory />} />

                   
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signupmodel" element={<Signupmodel />} />


                </Routes>
                <Scroll />
                <Footer />
            </Router>
        </>

    )

}

export default App;