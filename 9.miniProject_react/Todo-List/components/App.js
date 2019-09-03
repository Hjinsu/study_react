import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    state ={
        input : '', //input값
        //일정 데이터 초깃값
        todos : [ ]
    }
    //일정 데이터 안에 들어가는 id 값
    id = 0;
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({
            input : value
        });
    }
    //새 데이터 추가
    handleInsert = () =>{
        const {todos, input} = this.state;

        //새 데이터 객체 만들기
        const newTodo ={
            text : input,
            done : false,
            id : this.getId()
        };

        this.setState({
            todos : [...todos, newTodo],
            input : ''
        });
    }

    //todo 아이템 토글하기
    handleToggle = (id) => {
        //id로 배열의 인덱스를 찾는다.
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        console.log(index);
        

        const toggled = {
            ...todos[index],
            done : !todos[index].done
        };

        //slice를 사용하여 우리가 찾은 index 전후의 데이터들을 복사한다.
        //그리고 그 사이에는 변경된 todo객체를 넣어준다.
        this.setState({
            todos : [
                ...todos.slice(0,index), toggled, ...todos.slice(index +1, todos.length)
            ]
        });
    };

    handleRemove = (id) =>{
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos :[
                ...todos.slice(0,index),
                ...todos.slice(index +1, todos.length)
            ]
        });
    };
    render() {
        const {input, todos} = this.state;
        const {handleChange, handleInsert, handleToggle, handleRemove} = this;
        return (
            <div>
                <PageTemplate>
                    <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                    <TodoList todos = {todos} onToggle={handleToggle} onRemove={handleRemove}/>
                </PageTemplate>
            </div>
        );
    }
}

export default App;