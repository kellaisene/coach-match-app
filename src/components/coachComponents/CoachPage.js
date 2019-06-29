import React, { Component } from 'react';
import data from '../../data';
import './../../styles/coachPage.css';

import CoachCard from './CoachCard';

class CoachPage extends Component {
	constructor() {
		super();
		this.state = {
			dummyData: data
		};
	}

	displayData = () => {
		return data.map((data) => {
			console.log('YO', data);
			return (
				<CoachCard
					firstName={data.first_name}
					lastName={data.last_name}
					id={data.id}
					summary={data.summary}
					location={data.location}
					jobTitle={data.job_title}
					hourlyRate={data.hourly_rate}
				/>
			);
		});
	};
	render() {
		console.log('Mock Data', this.state.dummyData);
		return (
			<main className="coach-page-container">
				<header className="coach-page-header">Find a coach!</header>
				<div>{this.displayData()}</div>
			</main>
		);
	}
}

export default CoachPage;
