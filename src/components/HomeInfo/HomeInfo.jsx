import React, { Fragment } from "react";
// import LastLoggedIn from "../LastLoggedIn/LastLoggedIn";
import LastReportsAccessed from "../LastReport/LastReport";
import Announcements from "../Announcements/announcements";
import "./HomeInfo.css"
import  Bg  from '../../assets/bghome.png'
const Dashboard = () => {
  const lastLoggedIn = new Date(); // Replace with actual date/time
  const reports = [
    { name: "Covid Vaccine Dashboard", link: "/reports/report-1" },
    { name: "Sales Dashboard", link: "/reports/report-2" },
    { name: "dashboard1", link: "/reports/report-3" },
  ];

  return (
    <Fragment className="bg-whole">
        

    <div className="bg-home img"><img src={Bg} alt="image"/></div>
        <div style={{ display: "flex", gap: "100px", padding: "20px", justifyContent:"center",marginTop:"500px"}}>
    </div>
    <div className="tilt-card">
    <LastReportsAccessed reports={reports} /> <p>&nbsp;</p>
      <Announcements />
      </div>
    </Fragment>
  );
};

export default Dashboard;
