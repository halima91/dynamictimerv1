import React, { Component } from "react";
import Time from "./Time";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timeMs: 0 };
  }

  start = () => {
    if (this.intervalid) {
      return;
    }
    this.intervalid = setInterval(() => {
      this.setState({
        timeMs: this.state.timeMs + 1000
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalid);
  };

  reset = () => {
    this.setState({ timeMs: 0 });
    this.stop();
  };

  render() {
    return (
      <div>
        <Time ms={this.state.timeMs} />
        <input
          type="button"
          value="Start"
          onClick={() => {
            this.start();
          }}
        />

        <input
          type="button"
          value="Stop"
          onClick={() => {
            this.stop();
          }}
        />

        <input
          type="button"
          value="Reset"
          onClick={() => {
            this.reset();
          }}
        />
      </div>
    );
  }
}

export default Timer;
