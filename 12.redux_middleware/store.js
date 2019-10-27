import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
//import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
//import ReduxThunk from 'redux-thunk';
//redux-promise-middleware 와 redux-pender는 작동방식이 비슷해서 서로 충돌하기 때문에 같이 사용x
//import {createPromise} from 'redux-promise-middleware';
import penderMiddleware from 'redux-pender'; 

const logger = createLogger();

//redux-thunk
//const store = createStore(modules,applyMiddleware(logger, ReduxThunk));
/*
    redux-promise-middleware
const pm = createPromise({
    promiseTypeSuffixes :['PENDING', 'SUCCESS', 'FAILURE']
});
const store = createStore(modules, applyMiddleware(logger,pm));
*/

const store = createStore(modules, applyMiddleware(logger, penderMiddleware()));
export default store;