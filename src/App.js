import React from 'react'
 import { robots } from './robots'

import Cardlist from './Cardlist'
import SearchBox from './SearchBox'


 const App = () => {
 	return (
		<div className="tc">
			<h1> Robo Friends </h1>
			<SearchBox />
			<Cardlist robots={robots} />
		</div>
 		);
 }


 export default App