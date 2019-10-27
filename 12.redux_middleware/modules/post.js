//redux-thunk
//import { handleActions, createAction} from 'redux-actions';

//redux-promise-middleware
//import { handleActions} from 'redux-actions';

//redux-pender
import { handleActions, createAction} from 'redux-actions';
import axios from 'axios';
import {pender} from 'redux-pender';
//redux-pender로 여러개의 비동기 작업을 관리할 때
//import {pender, applyPenders} from 'redux-pender';

//postId를 파라미터로 받아와서 axios를 사용하여 API요청을 하는 함수
function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};
//요청을 시작, 성공, 실패 했을 때 실행될 액션타입과 액션 생성함수 
//해당 액션 생성 함수들은 모듈 내부에서 사용하니 export로 내보낼 필요가 없다.
const GET_POST = 'GET_POST';
/*
redux-thunk, redux-promise-middleware
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';
*/
/*  redux-thunk
    
const getPostPendig = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

export const getPost = (postId) => dispatch => {
    //먼저 요청이 시작했다는 것을 알린다.
    dispatch(getPostPendig());
    
    //요청 시작. 여기서 만든 promise를 반환해야 나중에 컴포넌트에서 호출할때 getPost().then()이 가능하다.
    return getPostAPI(postId).then((response) => {
        //요청이 성공했다면 서버 응답 내용을 payload로 설정하여
        //GET_POST_SUCCESS 액션을 디스패치한다.
        dispatch(getPostSuccess(response));
        //나중에 getPostAPI.then을 했을 때 then에 전달하는
        // 함수에서 response에 접근할 수 있게 한다.
        return response;
    }).catch( error => {
        dispatch(getPostFailure(error));
        //error를 throw하여 이 함수를 실행한 후 
        //다시 한 번 catch를 할 수 있게 한다.
        throw(error);
    });
};
*/
/*
redux-thunk, redux-promise-middleware
export const getPost = (postId) => ({
    type : GET_POST,
    payload : getPostAPI(postId)
}); 
*/

export const getPost = createAction(GET_POST, getPostAPI);
const initialState = {
    data : {
        title : '',
        body : ''
    }
};
/*
export default handleActions({
    [GET_POST_PENDING] : (state, action) => {
        return {
            ...state,
            pending : true,
            error: false
        };
    },
    [GET_POST_SUCCESS] : (state, action) => {
        const {title, body} = action.payload.data;
        return {
            ...state,
            pending : false,
            error : false,
            data : {
                title,
                body
            }
        };
    },
    [GET_POST_FAILURE] : (state, action) => {
        return {
            ...state,
            pending : false,
            error : true,
        }
    }
}, initialState);
*/
//리듀서에서 비동기 작업을 redux-pender로 관리할 땐 ...pender를 사용한다.

export default handleActions({
    ...pender({
        type : GET_POST,
        onSuccess: (state, action) => {
            const {title, body} = action.payload.data;
            return {
                data : {
                    title,
                    body
                }
            };
        },
        onCancel : (state, action) => {
            return {
                data : {
                    title : '취소됨',
                    body : '취소됨'
                }
            };
        }
    })
}, initialState);

/*
redux-pender로 여러개의 비동기 작업을 관리할 때

const reducer = handleActions({
    다른 일반 액션들을 관리
});
applyPenders함수를 사용할 때 첫 파라미터에는 일반 리듀서를 넣어주고, 두번째 파라미터에는 
pender 관련 객체들을 배열 형태로 넣어준다.

export default applyPenders(reducer, [
    {
        type : GET_POST,
        onSuccess : (state, action) => {
            //성공 했을 때 할 작업이 따로 없으면 이 함수 생략 가능
            const {title, body} = action.payload.data;
            return {
                data :{
                    title,
                    body
                }
            }
        }
    }
])
*/