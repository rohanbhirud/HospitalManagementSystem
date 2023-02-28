import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <h1>Welcome, {email}!</h1>
      </div>
    );
  }
}
