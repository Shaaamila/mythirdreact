import React, { Component } from 'react';
//(getting project from project.js with importing anything..)

class ProjectItem extends Component {

	deleteProject(id){
		this.props.onDelete(id);
	}
	render(){

    return (
 //getting project as property from projects.js in list down
    <li className="Project">
      <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

    </li>
  );
}
}


export default ProjectItem;