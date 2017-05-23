import React from 'react';

const ProjectItems = (props) => {
  var tags = props.tags.map((tag, index) => {
    return (
      <li className="tag" key={index}>{tag}</li>
    );
  });

  return (
    <div className="project-item">
      <a href={props.link} target="_blank">
        <div className="img-container">
          <img src={props.image} className="project-img"/>
          <div className="overlay">
            <i className="fa fa-external-link"></i><span>GO</span>
          </div>
        </div>
      </a>
      <div className="project-info">
        <h3 className="project-name">{props.name}</h3>
        <p className="project-description">{props.description}</p>
        <ul className="tag-container">
          {tags}
        </ul>
      </div>
    </div>

  );
}

export default ProjectItems;