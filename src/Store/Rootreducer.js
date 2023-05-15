import { combineReducers } from "redux";
import totalReducer from "../Redux/TotalAmountslice";
import authReducer from "../Redux/Loginpages/authSlice"
import personalSettingReducer from "../Redux/personalSettingSlice";
import changePasswordReducer from "../Redux/changePasswordSlice";
import dashboardReducer from "../Redux/dashboardSlice";
import dashboardpendingReducer from "../Redux/dashboardPendingSlice";
import dashboardOpenSliceReducer from "../Redux/dashboardOpenSlice";
import dashboardCloseSliceReducer from "../Redux/dashboardCloseSlice";
import dashboardIssueReducer from "../Redux/dashboardIssueSlice";
import referTofrndReducer from "../Redux/referTofrndSlice";
import registersReducer from "../Redux/Loginpages/registerSlice";
import postingstreakReducer from "../Redux/postingstreakSlice";
import referralhistoryReducer from "../Redux/referralhistorySlice";
import contactReducer from "../Redux/contactSlice";
import logoutsReducer from "../Redux/Loginpages/logoutSlice";
import modelsReducer from "../Redux/Loginpages/modelSlice";
import registeraskReducer from "../Redux/registerQuestionSlice";
import queTypepriceReducer from "../Redux/queTypePriceSlice";
import queAnsReducer from "../Redux/questionAnswerSlice";
import postQuestionReducer from "../Redux/postQuestionSlice";
import upDownVoteReducer from "../Redux/upvoteDownvoteSlice";
import referralcompleteReducer from "../Redux/referralCashoutSlice"; 
import updateQuestionReducer from "../Redux/updateQuestionSlice";
import couponcodeReducer from "../Redux/couponcodeSlice";
import postStreakReducer from "../Redux/postStreakCashoutSlice";
import questionSubjectReducer from "../Redux/questionSubjectSlice";
import questiontypeReducer from "../Redux/questionTypeSlice";

const reducer = combineReducers({
    data: totalReducer,
    auth: authReducer,
    registers: registersReducer,
    personalSetting: personalSettingReducer,
    changepassword: changePasswordReducer,
    dashboard: dashboardReducer,
    dashboardpending: dashboardpendingReducer,
    dashboardOpen: dashboardOpenSliceReducer,
    dashboardClose: dashboardCloseSliceReducer,
    dashboardIssue: dashboardIssueReducer,
    referTofrnd: referTofrndReducer,
    postingstreak: postingstreakReducer,
    friendReferral: referralhistoryReducer,
    contact: contactReducer,
    logouts: logoutsReducer,
    models: modelsReducer,
    registerask: registeraskReducer,
    queTypeprice: queTypepriceReducer,
    queAns: queAnsReducer,
    postQuestion: postQuestionReducer,
    upDownVote : upDownVoteReducer,
    referralcomplete : referralcompleteReducer,
    updateQuestion: updateQuestionReducer,
    couponcode: couponcodeReducer,
    postStreak: postStreakReducer,
    questionSubject : questionSubjectReducer,
    questiontype: questiontypeReducer,

});


export default reducer;