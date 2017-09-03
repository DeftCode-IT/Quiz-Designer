import React, { Component } from 'react';

export class Example extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <h1>{this.props.text}</h1>
  }
}