import React, { Component } from 'react';

export default class Deals extends Component{
	state = {
		title:''
	};

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount(){
	}

	render(){
		return (
			<section className='deals'>
				<ul>
					<li>
						<p>20% off Regular Price for Cash-Paying Clients</p>
					</li>
					<li>
						<p>Refer a Friend, Get 25% Off Next Visit</p>
					</li>
				</ul>
			</section>
		);
	}
}
