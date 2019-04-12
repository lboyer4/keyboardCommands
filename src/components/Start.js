import React, { Component } from 'react';
import '../SCSS/_Start.scss';

class Start extends Component {
  constructor() {
    super()

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.parentElement.querySelector("input[type=radio]:checked"))
    // this.props.setDifficullty(e.parent)
  }


  render() {
    return (
    <section className="top-page">
    	<form>
      <p> Choose level of difficulty: </p>
        <input type="radio" id="Beginner-level" value="Beginner" name="level" />
          <label for="Beginner-level">Beginner</label>
        <input type="radio" id="Intermediate-level" value="Intermediate" name="level"/>
          <label for="Intermediate-level">Intermediate</label>
        <input type="radio" id="Advanced-level" value="Advanced" name="level"/>
          <label for="Advanced-level">Advanced</label>
        <button className="choose-level-btn" onClick={this.handleSubmit}>Choose Your Difficulty</button>
    	</form>
    </section>
    )
  }
}

export default Start;