import React, { Component } from 'react';

import '../styles/homePage.css';

class HomePage extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleUsernameChange(name) {
		this.setState({ username: name });
	}

	handlePasswordChange(pass) {
		this.setState({ password: pass });
	}

	handleLogin() {
		alert(`Username: ${this.state.username} Password: ${this.state.password}`);
	}
	render() {
		return (
			<main className="home-page-container">
				<div className="login-container">
					<div>Sign In</div>
					<input
						onChange={(e) => this.handleUsernameChange(e.target.value)}
						type="text"
						placeholder="Username"
					/>
					<input
						onChange={(e) => this.handlePasswordChange(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<button onClick={this.handleLogin}>Login</button>
				</div>
				<div>Here's the HomePage</div>
			</main>
		);
	}
}

export default HomePage;
