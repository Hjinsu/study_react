import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        /*
        비구조화 할당 문법
        -비구조화 할당 문법은 객체에서 특정 값을 추출하여 따로 레퍼런스를 만들때 사용한다.
        -리액트 컴포넌트에서 state나 props를 참조할 때 자주 사용한다. 
         코드의 가독성과 편리함 때문에 자주 사용.

        */
        const {scrollHeight, clientHeight} = this.box;

        /*
        위의 코드는 다음과 같다.
        const scrollHeight = this.box.scrollHeight;
        const clientHeight = this.box.clientHeight;
         */
        this.box.scrollTop = scrollHeight - clientHeight;

        
    }
    render() {
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        };
        
        return (
            <div 
            style={style} 
            ref={(ref)=>{
                this.box = ref
            }}>
              <div style={innerStyle}/>  
            </div>
        );
    }
}

export default ScrollBox;