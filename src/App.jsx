import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
	render() {
		return (
		<div className="">
			<Navbar />
			<div className="container-fluid header-container">
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