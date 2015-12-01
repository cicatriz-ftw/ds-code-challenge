import React, { Component } from 'react';
import Deals from './deals.jsx';

export default class Card extends Component{
	state = {
		city: '',
		state: '',
		category: '',
		distance: '',
		businessname: '',
	};

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount(){
		this.setState(this.props.business);
	}

	render(){
		let {state, city, category, distance, businessname} = this.state;
		let logoImg = {backgroundImage: 'url(assets/tile1-logo.jpg)'};
		let mainImg = {backgroundImage: 'url(assets/tile1-main.jpg)'};
		return (
			<li className='card'>
				<header className='card-header'>
					<p className='city'>{city}, {state} </p>
					<p className='range'>{distance} </p>
				</header>
				<section className='business-info'>
					<div className='hero' style={mainImg}></div>
					<a className='logo' style={logoImg}></a>
					<h4>{category}</h4>
					<a className='business'>
						<h3>{businessname}</h3>
					</a>

				</section>
				<Deals />
			</li>
		);
	}
}
