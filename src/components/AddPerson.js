import React, {Component} from 'react';

class AddPerson extends Component{
	state = {
		name: '',
		age: '',
		role: '',
	}
	handleChange = (e)=>{
		this.setState({
			[e.target.id] : e.target.value
		})
	}
	handleSubmit=(e) =>{
		e.preventDefault();
		this.props.addPerson(this.state);
		this.setState({
			name: '',
			age: '',
			role: '',
		}); 
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={this.handleChange} value={this.state.name}/><br/>
					<label htmlFor="age">Age:</label>
					<input type="text" id="age" onChange={this.handleChange} value={this.state.age}/><br/>
					<label htmlFor="role">Role:</label>
					<input type="text" id="role" onChange={this.handleChange} value={this.state.role}/><br/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddPerson;