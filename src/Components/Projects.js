import React, { Component } from 'react';


class Projects extends Component {


	
	render(){
// testing if there are any Projects:
	let projectItems;  //declaring variable before using it
	if(this.props.projects){
		projectItems = this.props.projects.map(project => {
			console.log(project);
		});
	}


    return (
    <div className="Projects">
      My Projects
      {this.props.test}
    </div>
  );
}
}


export default Projects;


//This App.js Component is a placeholder for all other component 
// and we render them from here

