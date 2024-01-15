import React from "react";

class Batch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <>
        <h4>{this.state.counter}</h4>
        <button onClick={this.incrementCounter}>count</button>
      </>
    );
  }
}
export default Batch;
