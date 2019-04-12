import React, { Component } from 'react';
import '../SCSS/_StartHolder.scss';
import Start from './Start.js';

class StartHolder extends Component {

  
  render() {
    return (
    	<section className="start-holder"> 
    		<header>
    			<h1>Key Commands</h1>
    		</header>
    			<Start />
    	</section>
    )
  }
}

export default StartHolder;