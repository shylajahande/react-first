import React from 'react';

const Person = (props) =>{
	let {person, deletePerson, updatePerson} = props;
	return(
		<div className="personList">
			<div>Name: {person.name}</div>
			<div>Age: {person.age}</div>
			<div>Role: {person.role}</div>
			<button onClick={()=>{deletePerson(person.id)}}>Delete</button>
			<button onClick={()=>{updatePerson(person.id)}}>Update</button>
		</div>
	)
}

export default Person;