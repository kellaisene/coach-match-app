import React, { Component } from 'react';
import '../styles/homePage.css';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};

		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleUsernameChange(name) {
		this.setState({ username: name });
	}

	handlePasswordChange(pass) {
		this.setState({ password: pass });
	}

	handleSignUp() {
		alert(`Username: ${this.state.username} Password: ${this.state.password}`);
	}

	render() {
		return (
			<main className="home-page-container">
				<div className="login-container">
					<div>Sign Up</div>
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
					<button onClick={this.handleSignUp}>Submit</button>
				</div>
			</main>
		);
	}
}

export default SignUp;
