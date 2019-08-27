import React, { Component } from 'react';

class IterTest extends Component {
    state = {
        names : ['봄', '여름', '가을', '겨울'],
        name : ''
    };

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    };
    
    //names 배열에 값을 추가하고, name 값을 초기화 
    /*
        기존 자바스크립트에선 push()를 사용해서 값을 추가시켜도 가능하지만
        리엑트에서 state는 항상 this.setState()를 사용하여 값변경을 해야 하고
        push를 사용하면 기존 배열 자체가 변형되기 때문에 잘못사용하는 방법이다.
        concat은 기존 배열과 새 값을 합친 새배열을 만들어 주기 때문에 오류 없이 
        제대로 작동한다.
    */
    handleInsert = () => {
        this.setState({
            names : this.state.names.concat(this.state.name),
            name : ''
        });
    };

    handleRemove = (index) =>{
        //편의상 name의 레퍼런스를 미리 만든다.
        const {names} = this.state;
         /* 
            배열을 자르는 내장함수 slice와 전개 연산자(...)를 사용하여
            index번째 값을 제외한 값들을 배열에 넣어준다.
         */
        /*
            ES5문법 
            this.state.names.slice(0,index).concat(this.state.names.slice(index+1,this.state.names.length))
        */

        
        this.setState({
            //filter로 index번째를 제외한 원소만 있는 새 배열 생성
            /*names : names.filter((item,i) => i !== index)*/
            names : [
                ...names.slice(0,index),
                ...names.slice(index + 1, names.length)
            ]
        });
    };
    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>)
        )
        
        
        return (
            <div>
                <input 
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                <button onClick={this.handleInsert}>추가</button>
                <ul>{nameList}</ul>
            </div>
        );
    }
}

export default IterTest;
