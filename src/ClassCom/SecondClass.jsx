import React, { Component } from 'react'

export default class SecondClass extends Component {
    constructor(props){
        super(props);
        // super() method refers to the parent class Component.
        // By calling the super() method in the constructor method, we call the parent's
        // constructor method and gets access to the parent's properties and methods.
        console.log('Constructor called');
    }


  render() {
    return (
      <div>
        React app cycle.
        <h1>1. mount</h1>
        <h1>2. derive state from props</h1>
        <h1>3. component did mount/render</h1>
        <h1>4. unmount</h1>

      </div>
    )
  }
}
