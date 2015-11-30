import React, { Component } from 'react';
import {ajax} from './loader';

export default class App extends Component{
    state = {
        title:'Coupons & Deals near You',
        subtitle: '+3,600 MATCHES FOUND',
    };

    constructor(props, context) {
        super(props, context);
    }
    
    componentDidMount(){
        // ajax('/data').then((data) => this.setState(data));
    }

    render(){
        return (
            <div id='main'>
                <header id='main-header'></header>
                <section id='title'>
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.subtitle}</h2>
                </section>
                <section id='card-holder'></section>
            </div>
        );
    }
}
