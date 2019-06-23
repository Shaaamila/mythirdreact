import React, { Component } from 'react';
//(getting project from project.js with importing anything..)

class ProjectItem extends Component {

	render(){

    return (
 //getting project as property from projects.js in list down
    <li className="Project">
      <strong>{this.props.project.title}</strong>: {this.props.project.category}

    </li>
  );
}
}


export default ProjectItem;