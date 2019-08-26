import React, {Component}from 'react';
import './App.css'

class App extends Component{
  render(){
    const style ={
      backgroundColor : 'gray',
      border : '1px solid black',
      height : Math.round(Math.random() * 300) + 50,
      width : Math.round(Math.random() * 300) + 50
      }
    return (
      <div className='my-div'>
        <div style = {style}></div>
      </div>
    );
  }
}

export default App;
