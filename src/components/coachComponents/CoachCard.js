import React from 'react';
import './../../styles/coachCard.css';

export default function CoachCard(props) {
	console.log('Props', props);
	return (
		<div className="coach-card-container">
			{/* <div className="data">
				<div className="name">Name:</div>
			</div> */}
			<div className="content">
				<div className="margining">{props.firstName}</div>
				<div className="margining">{props.lastName}</div>
			</div>
			{/* <div className="data2">
				<div className="name">Summary:</div>
			</div> */}
			<div className="content">
				<div className="margining">{props.summary}</div>
			</div>
			{/* <div className="data3">
				<div className="name">Location:</div>
			</div> */}
			<div className="content">
				<div className="margining">{props.location}</div>
			</div>
			{/* <div className="data4">
				<div className="name">Job Title:</div>
			</div> */}
			<div className="content">
				<div className="margining">{props.jobTitle}</div>
			</div>
			{/* <div className="data5">
				<div className="name">Hourly Rate:</div>
			</div> */}
			<div className="content">
				<div className="margining">{props.hourlyRate}</div>
			</div>
			<button>Request a Call</button>
		</div>
	);
}
