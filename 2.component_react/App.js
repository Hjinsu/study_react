import React, {Component}from 'react';
import MyComponent from './MyComponent'
import './App.css'

class App extends Component{
  render(){
    return (
      <div>
      {/*<MyComponent hi='React'/>*/}
        <MyComponent hi='zzz' age={35}/>
      </div>
    );
  }
}

export default App;
