import React, { Component } from 'react'

class Counter extends Component {
constructor(props){
super(props);
 this.state= {
    count : 0
 }
}

componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
    console.log(`component update : count is now ${this.state.count}`)
    }
}

componentWillUnmount(){
    console.log('component being umnount')
}

increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  
  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
export default Counter
