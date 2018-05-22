import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
	render() {
		const divStyle1 = {
			backgroundImage: 'url("https://static.impression.co.uk/2018/02/css-mask-slideshow-image-1.jpg")',
		  };

		  const divStyle2 = {
			backgroundImage: 'url("https://static.impression.co.uk/2018/02/css-mask-slideshow-image-2.jpg")',
		  };

		return (
		<div className="">
			<div className="container-fluid header-container">
				<div className="slides">
					<div className="slide" style={divStyle1}></div>
					<div className="slide" style={divStyle2}></div>
				</div>
				<div className="overlay" />
				<div className="header">
					<h1 className="title">Welcome.</h1>
				</div>
			</div>

			<p className="intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
		);
	}
}

export default App;