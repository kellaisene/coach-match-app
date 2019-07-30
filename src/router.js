import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';

import Header from '../src/components/Header';
import HomePage from './components/HomePage';
import CoachPage from './components/coachComponents/CoachPage';
import SignUp from './components/SignUp';

export default (
	<Switch>
		<div className="App">
			<Header className="header" />
			<Route exact path="/" component={HomePage} />
			<Route path="/coachpage" component={CoachPage} />
			<Route path="/signup" component={SignUp} />
		</div>
	</Switch>
);
