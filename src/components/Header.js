import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from '../router';

import '../styles/header.css';

class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<Link to="/">Home</Link>
				<Link to="/coachpage">Find a Coach</Link>
				<Link to="/signup">Sign Up</Link>
				{/* {router} */}
			</div>
		);
	}
}

export default Header;
