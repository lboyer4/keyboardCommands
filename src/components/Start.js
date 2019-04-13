import React, { Component } from 'react';
import '../SCSS/_Start.scss';

class Start extends Component {
  constructor() {
    super()

  }

  handleSubmit = (e) => {
    e.preventDefault()
    let selectedLevel = e.target.parentElement.querySelector("input[type=radio]:checked").value
    this.props.setLevel(selectedLevel)
  }

  render() {
    return (
    <section className="start-holder">
    	<form>
      <p> Choose your level of difficulty to begin: </p>
        <input type="radio" id="Beginner-level" value="Beginner" name="level" />
          <label htmlFor="Beginner-level">Beginner</label>
        <input type="radio" id="Intermediate-level" value="Intermediate" name="level"/>
          <label htmlFor="Intermediate-level">Intermediate</label>
        <input type="radio" id="Advanced-level" value="Advanced" name="level"/>
          <label htmlFor="Advanced-level">Advanced</label>
        <button className="choose-level-btn" onClick={this.handleSubmit}>Choose Your Difficulty</button>
    	</form>
    </section>
    )
  }
}

export default Start;