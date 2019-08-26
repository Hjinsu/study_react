import React, {Component}from 'react';
import Validation from './Validation';
import ScrollBox from './ScrollBox';

class App extends Component{
  render(){
   
    return (
    <div>
      {/* <Validation/> */ }
      <ScrollBox ref={(ref) => {this.scrollBox = ref}}/>
      <input type='button' value='맨 밑으로'  onClick={() => this.scrollBox.scrollToBottom()}/>
      {/*
      onClick에서 this.scrollBox.scrollBottom 같은 형식으로 사용해도 틀린것은 아니지만 
      컴포넌트가 처음 렌더링될 때는 this.scrollBox값이 undefined이기 때문에 오류가 난다.
      화살표 함수 문법을 사용해 새로운 함수를 만들고 그 내부에서 this.scrollBox.scrollBottom 메서드를 실행하면, 
      버튼을 누를때 this.scrollBox.scrollBottom 값을 읽어와서 실행하므로 오류가 발생하지 않는다.
       */}
    </div>
    );
  }
}

export default App;
