import React, { Component } from 'react';
import data from '../../data';
import TextField from '@material-ui/core/TextField';
import './../../styles/coachPage.css';

import CoachCard from './CoachCard';

class CoachPage extends Component {
	constructor() {
		super();
		this.state = {
			keyWord: '',
			keyWord2: '',
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

	handleKeywordChange = () => (e) => {
		this.setState({
			keyWord: e.target.value
		});
	};

	displayData = () => {
		if (data.length > 0) {
			let filtered = data
				.filter((info) => {
					if (!info) return false;
					if (info.job_title.toLowerCase().indexOf(this.state.keyWord.toLowerCase()) !== -1) {
						return true;
					}
					return false;
				})
				.map((data) => {
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
			console.log('FILTERED ARRAY', filtered);
			return filtered;
		}
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
				<div className="search-bar-container">
					<TextField
						placeholder="Search by Field"
						value={data.job_title}
						onChange={this.handleKeywordChange()}
					/>
				</div>
				<div className="items">{renderItems}</div>
				{this.state.itemsPerPage < this.displayData().length && (
					<button className="load-more-button" onClick={this.loadMore} type="button">
						Load More
					</button>
				)}
			</main>
		);
	}
}

export default CoachPage;
