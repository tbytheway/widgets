import React from 'react'


export default class Rgb extends React.Component {
  constructor() {
    super();

    this.state = {
      red: 127,
      green: 127,
      blue: 127
    }
    this.handleRedChange = this.handleRedChange.bind(this)
    this.handleBlueChange = this.handleBlueChange.bind(this)
    this.handleGreenChange = this.handleGreenChange.bind(this)
  }

  handleRedChange(event) {
    this.setState({ red: event.target.value })
  }
    handleBlueChange(event) {
      this.setState({ blue: event.target.value })
  }
  handleGreenChange(event) {
    this.setState({ green: event.target.value })
}


  render() {
    return(
      <div>
<div style={{backgroundColor:'rgb(' + this.state.red + ',' + this.state.green + ',' + this.state.blue + ')', height:40, width:80}}/>
<div><p>RGB {this.state.red},{this.state.green}, {this.state.blue}</p></div>
      <input 
      id="red" 
      type="range" 
      min="0" max="255" 
      value={this.state.red} 
      onChange={this.handleRedChange}
      step="1"/>
      <input 
      id="blue" 
      type="range" 
      min="0" max="255" 
      value={this.state.green} 
      onChange={this.handleGreenChange}
      step="1"/>
      <input 
      id="green" 
      type="range" 
      min="0" max="255" 
      value={this.state.blue} 
      onChange={this.handleBlueChange}
      step="1"/>
      </div>
    )
  }
  
}