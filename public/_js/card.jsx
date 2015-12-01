import React, { Component } from 'react';
import Deals from './deals.jsx';

export default class Card extends Component{
	state = {
		city: '',
		state: '',
		category: '',
		distance: ''
	};

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount(){
	}

	render(){
		return (
			<li className='card'>
				<header className='card-header'>
					<p className='city'>Bellevue, WA </p>
					<p className='range'>3.3 mi </p>
				</header>
				<section className='business-info'>
					<div className='hero'></div>
					<a className='logo'></a>
					<h4>Nutritionists</h4>
					<a className='business'></a>
					<h3>Sound Nourishment Nutritional Counseling</h3>
				</section>
				<Deals />
			</li>
		);
	}
}
