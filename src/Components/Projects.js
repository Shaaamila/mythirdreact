import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {


	
	render(){
//all stuff are in render?
// testing if there are any Projects:
	let projectItems;  //declaring variable before using it
	if(this.props.projects){
		projectItems = this.props.projects.map(project => {
			return(
//return each project as property
				<ProjectItem key={project.title} project={project} />
				)
		});
	}


    return (
    <div className="Projects">
      
      {projectItems}
    </div>
  );
}
}


export default Projects;


//This App.js Component is a placeholder for all other component 
// and we render them from here

