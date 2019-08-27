import React, { Component } from 'react';

class IterSample extends Component {
    render() {
        const names = ['봄', '여름', '가을', '겨울'];
        /*
        key 값 없는 map() 
        const nameList = names.map(
            (name) => (<li>{name}</li>)
        );
        */
        // key 값 있는 map()
        const nameList = names.map(
            (name,index) => (<li key={index}>{name}</li>)
        )
        
        return (
            <div>
                <ul>{nameList}</ul>
            </div>
        );
    }
}

export default IterSample;