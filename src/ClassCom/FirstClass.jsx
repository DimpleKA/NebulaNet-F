



import React, { Component } from 'react'

export default class FirstClass extends Component {

// 1. Mounting 
    constructor(props) {
        super(props);
        this.state = { message: 'Hello!' };
        
        console.log('Constructor called'); // 1. (a )---> constructor called
                                          // 1.  (b )---> getDerivedStateFromProps [in Compnent class just before rendring checking all state]
                                          // 1. (c )----> render()  [render the componet to root]

      }

    componentDidMount() {
        console.log('Component Mounted');   
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log('Component Updated', prevProps, prevState);  //2. (a)--> when  props,state updates it updates parent component
      }
    
      componentWillUnmount() {
        console.log('Component Unmounted');  //3. (a)--> clean up resources (e.g., event listeners, timers, subscriptions
      }
      constructor12(){
        console.log('Constructorr  12');
      }

  render() {
    return (
      <div>
        Hello this is {this.name} class based component {this.state.message}
      </div>
    )
  }
}
