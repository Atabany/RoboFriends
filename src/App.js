import React, { Component } from 'react'
import { robots } from './robots'

import Cardlist from './Cardlist'
import SearchBox from './SearchBox'


class App extends Component {
	constructor() {
		super()
		this.state = {
    		robots: robots,
    		searchfield: ''
		}
	}




	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	};


    render() {

    	 const filteredRobots = this.state.robots.filter ( user => {
			return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

        return (
            <div className="tc">
			<h1> Robo Friends </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Cardlist robots={filteredRobots} />
		</div>
        );
    }
}


export default App