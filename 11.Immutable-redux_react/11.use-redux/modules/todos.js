//todos 모듈 생성
import {Map, List} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
    Map({
        id : 0,
        text : '리액트 공부',
        done : true
    }),
    Map({
        id : 1,
        text : '컴포넌트 스타일링',
        done : false
    }),
]);

export default handleActions({
    [INSERT] : (state, action) => {
        /*
            payload 안에 있는 id, text, done의 레퍼런스 생성
            레퍼런스를 안만들고 바로 push(Map(action.payload)) 해도되지만
            이 액션이 어떤 데이터를 처리하는 지 쉽게 볼 수 있도록 하는 작업
        */
        const {id, text, done} = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },
    [TOGGLE] : (state, action) => {
        /*
            비구조화 할당을 토앟여 id라는 레퍼런스에 action.payload란 값을 넣는다.
            나중에 이 코드를 보게 되었을 때 여기서의 payload가 어떤 값을 의미하는지 
            이해가 쉬워진다.
         */
        const {payload : id} = action;
        
        //전달받은 id를 가지고 index 조회
        const index = state.findIndex(todo => todo.get('id') === id);

        /* 
            updateIn을 사용하지 않는다면 
            return state.setIn([index, 'done'], !state.getIn([0, index]))
        */
        return state.updateIn([index, 'done'], done => !done);
    },
    [REMOVE] : (state, action) => {
        const {payload : id} = action;
        const index = state.findIndex(todo => todo.get('id') === id);

        return state.delete(index);
    }
}, initialState);