// @flow 
import * as React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cn('page-template')}>
            <h1>일정 관리</h1>
            <div className={cn('content')}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;