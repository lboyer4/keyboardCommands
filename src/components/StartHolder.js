import React, { Component } from 'react';
import '../SCSS/_StartHolder.scss';
import Start from './Start.js';

class StartHolder extends Component {

  
  render() {
    return (
    	<section className="top-of-page"> 
    		<header>
    			<h1 className="title">Key Commands</h1>
    		</header>
    			<Start setLevel={this.props.setLevel} />
    	</section>
    )
  }
}

export default StartHolder;