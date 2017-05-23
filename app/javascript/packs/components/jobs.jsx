import React from 'react';
import JobItems from './jobItems';

const Jobs = () => {
  return(
    <section id="jobs-section">
      <div className="container">
        <h2 className="section-title">Work & Education</h2>
        <JobItems
          time="January – May 2017 | 4 months"
          company="TextNow"
          job="Full-stack Web Developer"
          img="textnow.png"/>
        <JobItems
          time="May – September 2016 | 4 months"
          company="Veriday"
          job="Full-stack Web Developer"
          img="veriday.png"/>
        <JobItems
          time="September – December 2014 | 4 months"
          company="TD Securities"
          job="Quality Assurance Analysis"
          img="td-1.png"/>
        <JobItems
          time="January - May 2014 | 4 months"
          company="Pivotal Labs"
          job="Agile Test Engineering"
          img="pivotal.png"/>
        <JobItems
          time="September 2013 – Present | 2B Term"
          company="University of Waterloo"
          job="Engineering Student"
          img="waterloo.png"/>
      </div>
    </section>
  );
};

export default Jobs;