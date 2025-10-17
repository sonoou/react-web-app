import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Profile class component</h1>
        <h3>Name: {this.props.name}</h3>
        <h3>Address: {this.props.address}</h3>
        <h3>Email: {this.props.email}</h3>
        <h3>Count: {this.state.count}</h3>
        <h3>Count1: {this.state.count1}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          increment
        </button>
      </div>
    );
  }
}

export default ProfileClass;
