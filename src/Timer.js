import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      color: "#f4f4f4" 
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }
}

export default Timer;
