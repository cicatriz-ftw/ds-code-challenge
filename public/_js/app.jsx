import React, { Component } from 'react';
import {ajax} from './loader';
import Card from './card.jsx';

export default class App extends Component{
    state = {
        title:'Coupons & Deals near You',
        subtitle: '+3,600 MATCHES FOUND',
        businesses: []
    };

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        //WASNT ABLE TO GET CORS REQUEST SO I'M STORING THE DATA LOCALLY
        ajax('/data.json').then((data) => {
            this.setState({businesses: data.businesses});
        });
    }

    render(){
        let businessList = this.state.businesses.map(function(item){
            return(<Card business={item} />)
        });
        return (
            <div id='main'>
                <header id='main-header'></header>
                <section id='header-copy'>
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.subtitle}</h2>
                </section>
                <section id='card-holder'>
                    <ul className='cards'>
                        {businessList}
                    </ul>
                </section>
            </div>
        );
    }
}
