import React from 'react';
import './../../styles/coachCard.css';

export default function CoachCard(props) {
	console.log('Props', props);
	return (
		<div className="coach-card-container">
			<div className="data">
				<div className="name">Name:</div>
				<div className="margining">{props.firstName}</div>
				<div className="margining">{props.lastName}</div>
			</div>
			<div className="data">
				<div className="name">Summary:</div>
				<div className="margining">{props.summary}</div>
			</div>
			<div className="data">
				<div className="name">Location:</div>
				<div className="margining">{props.location}</div>
			</div>
			<div className="data">
				<div className="name">Job Title:</div>
				<div className="margining">{props.jobTitle}</div>
			</div>
			<div className="data">
				<div className="name">Hourly Rate:</div>
				<div className="margining">{props.hourlyRate}</div>
			</div>
		</div>
	);
}
