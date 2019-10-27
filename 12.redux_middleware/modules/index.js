import { combineReducers } from 'redux';
import counter from './counter';
import post from './post';
import {penderReducer} from 'redux-pender'

export default combineReducers({
    counter,
    post,
    pender : penderReducer
});

/*
    penderReduce는 요청상태를 관리한다.

    {
        pending : {},
        success : {},
        failure : {}
    }
    요청상태를 자동으로 변경해 주기 때문에 요청과 관련된 상태는 더이상 직접 관리할 필요가 없다.
*/