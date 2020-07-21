import React from "react";
import Moment from "moment";

export default class Time extends React.Component {
  constructor() {
    super();

    this.state = {
      time: Moment().format("h:mm:ss a")
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => this.setState(this.state), 1000);
  }

  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}
