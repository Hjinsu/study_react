import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} = this.props;
        /* 
            앞 코드에서는 비구조화 할당을 이용하여 this.props안에 있는 
            done, children, onToggle, onRemove 레퍼런스를 만들어 주었다. 
            이러면 this.props.done에서 this.props를 빼고 done만 사용가능하다.
        */
        return (
            <div className={cn('todo-item')} onClick={onToggle}>
                <input className={cn('tick')} type='checkbox' checked={done} readOnly/>
                <div className={cn('text', {done})}>{children}</div>
                <div className={cn('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                }}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;