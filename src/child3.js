import React from "react";

export default class Child1 extends React.Component {
  constructor() {
    super();
    this.setState = {};
  }

  componentWillUnmount() {
    console.log("Hello");
  }
  render() {
    return <>Child3</>;
  }
}
