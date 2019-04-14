import React, { Component } from 'react';
import '../SCSS/_StartHolder.scss';
import Start from './Start.js';

class StartHolder extends Component {

  
  render() {
    return (
    	<section className="start-container"> 
    		<header>
    			<h1 className="title">Compelling Key Commands</h1>
    			<p className="description">Help a unicorn fly over the rainbow by practicing key Key Commands</p>
    		</header>
    			<Start setLevel={this.props.setLevel}
                       setWrongCards={this.props.setWrongCards}
                       incorrectCards={this.props.incorrectCards}
                />

    	</section>
    )
  }
}

export default StartHolder;