import React, { Component } from 'react';
import Deals from './deals.jsx';

export default class Card extends Component{
	state = {
		city: '',
		state: '',
		category: '',
		distance: '',
	};

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount(){
		this.setState(this.props.business);
	}

	render(){
		let {state, city, category, distance} = this.state;
		return (
			<li className='card'>
				<header className='card-header'>
					<p className='city'>{city}, {state} </p>
					<p className='range'>{distance} </p>
				</header>
				<section className='business-info'>
					<div className='hero'></div>
					<a className='logo'></a>
					<h4>{category}</h4>
					<a className='business'></a>
					<h3>Sound Nourishment Nutritional Counseling</h3>
				</section>
				<Deals />
			</li>
		);
	}
}
