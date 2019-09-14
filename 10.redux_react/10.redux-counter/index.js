import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import reducers from './reducers'
//리액트 애플리케이션에 손쉽게 스토어를 연동할 수 있도록 도와주는 컴포넌트
//이걸 사용해 연동할 프로젝트의 최상위 컴포넌트를 감싸고, Provider 컴포넌트의 props로 store를 넣어주면 된다.
import { Provider } from "react-redux";
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
