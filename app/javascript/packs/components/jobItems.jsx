import React from "react";

const JobItems = (props) => {
  return (
    <div className="job-container">
      <div className="job-left">

        <img src={props.img} className="company-img"/>
      </div>
      <div className="job-right">
        <div className="circle"></div>
        <h3 className="job-time">{props.time}</h3>
        <h4 className="job-company">{props.company}</h4>
        <h3 className="job-title">{props.job}</h3>
      </div>
    </div>
  );
}

export default JobItems;