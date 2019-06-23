import React, { Component } from 'react';


class AddProject extends Component {
//to store the submitted date:
	constructor(){
		super();
		this.state = {
			newProject:{}
		}
	}

//categories needs to be property of the component
	//default property:
	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}

	handleSubmit(e){
//for not to submit the form
		console.log(this.refs.title.value);
		e.preventDefault();
	}

	render(){
//map thru categories ^ and output the options		
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value="category">{category}</option>
		});

    	return (
    		<div>
      
      			<h3>Add Project</h3>

			      <form onSubmit={this.handleSubmit.bind(this)}>
			      	<div>
			      		<label>Title</label><br/>
			      		<input type="text" ref="title" />
			      	</div>
			       	<div>
			      		<label>Category</label><br/>
			      		<select ref="category">
			      			{categoryOptions}
			      		</select>
			      	</div>   
			      	<input type="submit" value="Submit" />  	
			      </form>

    		</div>
  			);
		}
}
// '/' in <br> and <input> as they are not html5 but JSX
//or else error

export default AddProject;