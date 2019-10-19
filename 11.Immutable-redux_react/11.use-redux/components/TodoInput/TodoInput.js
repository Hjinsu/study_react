// @flow
import * as React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) =>{
    const handleKeyPressed = (e) =>{
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <div className={cn('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPressed}/>
            <div className={cn('add-button')} onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;