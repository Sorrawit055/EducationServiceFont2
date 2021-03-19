import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EducationStudent from "./pages/Student/EducationStudent";
import Login from "./pages/Login";
import Header from "./components/Header";
import EducationStudentDetail from "./pages/Student/EducationStudentDetail";
import Profile from "./pages/Student/Profile";
import EditProfile from "./pages/Student/EditProfile";
import DetailEducationStudent from "./pages/Student/DetailEducationStudent";
import InsertEducation from "./pages/Teacher/InsertEducation";
import EditEducation from "./pages/Teacher/EditEducation";
import UniversityAll from "./pages/Teacher/UniversityAll";
import EditUniversity from "./pages/Teacher/EditUniversity";
import EditFaculty from "./pages/Teacher/EditFaculty";
import EditCourse from "./pages/Teacher/EditCourse";
import InsertDetailEducationStudent from "./pages/Student/InsertDetailEducationStudent";
import EducationStudentAllStudent from "./pages/Student/EducationStudentAllStudent";
import InsertUniversity from "./pages/Teacher/InsertUniversity";
import DashboardTeacher from "./pages/Teacher/DashboardTeacher";
import FacultyAll from "./pages/Teacher/FacultyAll";
import InsertFaculty from "./pages/Teacher/InsertFaculty";
import CourseAll from "./pages/Teacher/CourseAll";
import InsertCourse from "./pages/Teacher/InsertCourse";
import GroupCourseAll from "./pages/Teacher/GroupCourseAll";
import InsertGroupCourse from "./pages/Teacher/InsertGroupCourse";
import EditGroupCourse from "./pages/Teacher/EditGroupCourse";
import EducationAll from "./pages/Teacher/EducationAll";
import InsertEducationCondition from "./pages/Teacher/InsertEducationCondition";
import EducationStudentAll from "./pages/Teacher/EducationStudentAll";
import DashBoardAdmin from "./pages/Admin/DashBoardAdmin";
import EditEducationCondition from "./pages/Teacher/EditEducationCondition";
import DetailStudentEducation from "./pages/Teacher/DetailStudentEducation";
import InsertStudent from "./pages/Admin/InsertStudent";
import EducationConditionAll from "./pages/Teacher/EducationConditionAll";
import Test from "./pages/Student/Test";
import UpdateDetailEducationStudent from "./pages/Student/UpdateDetailEducationStudent";


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route  path="/educationstudent" component={EducationStudent} />
        <Route  path="/educationstudentdetail/:id" component={EducationStudentDetail} />
        <Route  path="/login" component={Login} />
        <Route  path="/profile/:id" component={Profile} />
        <Route  path="/editprofile/:id" component={EditProfile} />
        <Route  path="/detaileducationstudent/:id" component={DetailEducationStudent} />
        <Route  path="/inserteducation" component={InsertEducation} />
        <Route  path="/editeducation" component={EditEducation} />
        <Route  path="/universityAll" component={UniversityAll} />
        <Route  path="/editUniversity" component={EditUniversity} />
        <Route  path="/editFaculty" component={EditFaculty} />
        <Route  path="/editCourse" component={EditCourse} />
        <Route  path="/insertdetaileducationstudent/:id" component={InsertDetailEducationStudent} />
        <Route  path="/educationstudentallstudent" component={EducationStudentAllStudent} />
        <Route  path="/dashboardteacher" component={DashboardTeacher} />
        <Route  path="/insertuniversity" component={InsertUniversity} />
        <Route  path="/fucultyall" component={FacultyAll} />
        <Route  path="/insertfaculty" component={InsertFaculty} />
        <Route  path="/courseall" component={CourseAll} />
        <Route  path="/insertcourse" component={InsertCourse} />
        <Route  path="/groupcourseall" component={GroupCourseAll} />
        <Route  path="/insertgroupcourse" component={InsertGroupCourse} />
        <Route  path="/editgroupcourse" component={EditGroupCourse} />
        <Route  path="/educationall" component={EducationAll} />
        <Route  path="/editeducationcondition" component={EditEducationCondition} />
        <Route  path="/inserteducationcondition" component={InsertEducationCondition} />
        <Route  path="/educationstudentall" component={EducationStudentAll} />
        <Route  path="/detailstudenteducation" component={DetailStudentEducation} />
        <Route  path="/insertstudent" component={InsertStudent} />
        <Route  path="/dashboardadmin" component={DashBoardAdmin} />
        <Route  path="/editeducation" component={EditEducation} />
        <Route  path="/educationconditionall" component={EducationConditionAll} />
        <Route  path="/updatedetaileducationstudent/:id" component={UpdateDetailEducationStudent} />

        <Route  path="/Test" component={Test} />
        <Route  path="/Tests" component={Test} />

       </Switch>
    </Router>
  );
};
export default App;