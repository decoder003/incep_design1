// import React from "react";
// import { Card, List, Typography } from "antd";
// import { Link } from "react-router-dom";
// import { LineChartOutlined } from '@ant-design/icons';
// import VirusIcon from "../../assets/LastReports/covidvaccine.svg";
// import DashboardIcon from "../../assets/LastReports/dashboard.svg";
// import ReportSalesIcon from "../../assets/LastReports/reportsales.svg";
// import "./LastReportsAccessed.css";
// import Tilt from 'react-parallax-tilt'; //using Tilt package 

// const { Text } = Typography;

// const LastReportsAccessed = ({ reports }) => {
//   const getIcon = (name) => {
//     if (name.toLowerCase().includes('covid')) return <img src={VirusIcon} alt="covid" className="report-icon" />;
//     if (name.toLowerCase().includes('sales')) return <img src={ReportSalesIcon} alt="sales" className="report-icon" />;
//     return <img src={DashboardIcon} alt="dashboard" className="report-icon" />;
//   };

//   return (
//     <Tilt>
//     <Card
//       bordered={false}
//       className="report-card"
//     >
//       <div className="report-title-container"> 
//       <LineChartOutlined className="report-title-icon" /> 
//       <Text className="report-title" type="secondary">Last Reports Accessed:</Text>
//       </div>
//       <List
//         size="small"
//         dataSource={reports}
//         renderItem={(report) => (
//           <List.Item className="report-item">
//             {getIcon(report.name)}
//             <Link to={report.link} className="report-link">
//               {report.name}
//             </Link>
//           </List.Item>
//         )}
//       />
//     </Card>
//     </Tilt>
//   );
// };

// export default LastReportsAccessed;


import React, { useState } from "react";
import { Card, List, Typography } from "antd";
import { LineChartOutlined } from '@ant-design/icons';
import VirusIcon from "../../assets/LastReports/covidvaccine.svg";
import DashboardIcon from "../../assets/LastReports/dashboard.svg";
import ReportSalesIcon from "../../assets/LastReports/reportsales.svg";
import "./LastReportsAccessed.css";
import Tilt from 'react-parallax-tilt';

const { Text } = Typography;

const LastReportsAccessed = ({ reports }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Manage popup visibility

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible); // Toggle popup on title click
  };

  const getIcon = (name) => {
    if (name.toLowerCase().includes('covid')) return <img src={VirusIcon} alt="covid" className="report-icon" />;
    if (name.toLowerCase().includes('sales')) return <img src={ReportSalesIcon} alt="sales" className="report-icon" />;
    return <img src={DashboardIcon} alt="dashboard" className="report-icon" />;
  };

  return (
    <Tilt className="main-card">
      <Card bordered={false} className="report-card">
        <div className="report-title-container" onClick={togglePopup}>
          <LineChartOutlined className="report-title-icon" />
          <h4 className="report-title keyy" type="secondary">Last Reports Accessed:</h4>
        </div>

        {isPopupVisible && ( 
          <div className="report-popup">
            <List
              size="small"
              dataSource={reports}
              renderItem={(report) => (
                <List.Item className="report-item">
                  {getIcon(report.name)}
                  <a href={report.link} className="report-link">
                    {report.name}
                  </a>
                </List.Item>
              )}
            />
          </div>
        )}
      </Card>
    </Tilt>
  );
};

export default LastReportsAccessed;
