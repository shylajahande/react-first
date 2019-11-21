import React, {Component} from 'react';
import Person from './Person';
import AddPerson from './AddPerson';

class Persons extends Component{
	state={ 
		persons:[
			{id:1,name: 'Shylaja', age: 28, role: 'Web Developer'},
			{id:2,name: 'Shreekala', age: 31, role: 'Trainee Web Developer'},
			{id:3,name: 'Sneha', age: 31, role: 'Assistant Engineer'},
			{id:4,name: 'Sandhya', age: 26, role: 'Software Engineer'}
		]
	}
	addPerson =(person)=>{
		person.id = Math.random();
		let persons = [...this.state.persons,person];
		this.setState({
			persons: persons
		})
	}
	deletePerson= (id)=>{
		let persons= this.state.persons.filter((person)=>{
			return person.id !== id;
		});
		this.setState({
			persons: persons
		})
	} 
	updatePerson= (id)=>{
		let update = this.state.persons.filter((person)=>{
			return person.id == id;
		});
		console.log(update);
	}
	render(){
		return(
			<div>
				{this.state.persons.map((person)=>{
					return((person.age >25) ? (
							<Person 
								person={person} 
								key={person.id} 
								deletePerson = {this.deletePerson} 
								updatePerson={this.updatePerson}/>
					) : null) ;
				})}
				<AddPerson addPerson ={this.addPerson} updatePerson={this.updatePerson} />
			</div>
		)
	}
}

export default Persons; 