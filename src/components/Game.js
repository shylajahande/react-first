import React, { Component } from 'react';
import Board from './Board'
import SquareItem from './SquareItem'

class Game extends Component{
	render(){
		return(
			 <div className="game">
		        <div className="game-board">
		          <Board />
		        </div>
		        <div className="game-info">
		          <div>{/* status */}</div>
		          <ol>{/* TODO */}</ol>
		        </div>
		      </div>
		);
	}
}

export default Game;