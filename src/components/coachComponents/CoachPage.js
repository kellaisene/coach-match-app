import React, { Component } from 'react';
import data from '../../data';
import './../../styles/coachPage.css';

import CoachCard from './CoachCard';

class CoachPage extends Component {
	constructor() {
		super();
		this.state = {
			dummyData: data,
			currentPage: 1,
			itemsPerPage: 5
		};
		this.loadMore = this.loadMore.bind(this);
	}

	loadMore() {
		this.setState((prev) => {
			return { itemsPerPage: prev.itemsPerPage + 5 };
		});
	}

	// handleClick(e) {
	// 	this.setState({
	// 		currentPage: Number(e.target.id)
	// 	})
	// }

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
		const { currentPage, itemsPerPage } = this.state;
		const indexOfLastItem = currentPage * itemsPerPage; // Start of pagination
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = this.displayData().slice(indexOfFirstItem, indexOfLastItem);
		const renderItems = currentItems.map((item, index) => {
			return <li key={index}>{item}</li>;
		});
		console.log('Mock Data', this.state.dummyData);
		return (
			<main className="coach-page-container">
				<header className="coach-page-header">Find a coach!</header>
				<div className="items">{renderItems}</div>
				{this.state.itemsPerPage < data.length && (
					<button onClick={this.loadMore} type="button">
						Load More
					</button>
				)}
			</main>
		);
	}
}

export default CoachPage;
