import React, { Component } from 'react';


class Projects extends Component {

	render(){
		console.log(this.props);
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

