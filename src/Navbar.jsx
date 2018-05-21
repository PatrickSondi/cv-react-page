import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
		<div className="navbar navbar-expand-lg">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Link</a>
				</li>
			</ul>
		</div>
		);
	}
}

export default Navbar;