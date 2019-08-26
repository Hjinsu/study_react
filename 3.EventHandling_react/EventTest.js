import React, { Component } from 'react';

class EventTest extends Component {
    state = {
        message : '',
        name : ''
    }
    handleOnChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleOnClick = () => {
        alert(this.state.name + ' : ' + this.state.message);
        this.setState({
            message : '',
            name : ''
        })
    }
    handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            this.handleOnClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange}/>
                <input type='text' name='message' value={this.state.message} onChange={this.handleOnChange} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleOnClick}>확인</button>
            </div>
        );
        state = {
            message : '',
            name : ''
        }
    }
}

export default EventTest;