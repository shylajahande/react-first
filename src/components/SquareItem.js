import React, { Component } from 'react';
function SquareItem (props){
	return(
		<button className="square" onClick={props.onClick}>{props.value}</button>
	);
}

export default SquareItem;

