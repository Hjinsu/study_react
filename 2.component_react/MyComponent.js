import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MyComponent extends Component {
    //props 기본값 설정 방법 2. defaultProps
    static defaultProps = {
        hi : 'ㅋㅋㅋ',
        age : 23
    }
    static propTypes = {
        hi : PropTypes.string,
        age : PropTypes.number.isRequired
    }
    //state 정의 방법 2
    state = {
        number : 0
    };
    constructor(props){
        super(props);
        //state 정의 방법 1
       /* this.state = {
            number : 0
        };*/
    }
    render() {
        return (
            <div>
               <p> 하이하이 내 이름은 {this.props.hi} 야</p>
               <p>나이는 {this.props.age}</p>  
               <p onClick={() => {
                   this.setState({
                       number : this.state.number + 1
                   })
               }}>숫자  : {this.state.number}(누르면 중가함)</p>
            </div>
        );
    }
}
//props 기본값 설정 방법 1. defaultProps
/*MyComponent.defaultProps = {
    hi : '한진수'
}*/

//props 속성 설정 방법 1. propTypes
/*MyComponent.propTypes = {
    hi : PropTypes.string
}*/
export default MyComponent;