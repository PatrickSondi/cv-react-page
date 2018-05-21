import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
		<div className="navbar navbar-expand-lg">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
			</ul>
		</div>
		);
	}
}

export default Navbar;