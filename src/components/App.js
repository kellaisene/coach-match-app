import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import '../styles/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CoachPage from './coachComponents/CoachPage';
import SignUp from './SignUp';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header className="header" />
					<Route exact path="/" component={HomePage} />
					<Route path="/coachpage" component={CoachPage} />
					<Route path="/signup" component={SignUp} />
				</div>
			</Router>
		);
	}
}

export default App;
