import React from 'react'



const divStyle={
  overflowY: 'scroll',
  border:'3px solid black',
  height:'800px',

};

const Scroll = (props) => {


	return ( 

		<div style={divStyle}> 
			{props.children}
		</div>

		);
};


export default Scroll