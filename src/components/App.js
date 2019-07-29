import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import '../styles/App.css';

import Header from './Header';
import HomePage from './HomePage';
import CoachPage from './coachComponents/CoachPage';
import SignUp from './SignUp';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
