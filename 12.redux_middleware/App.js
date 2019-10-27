import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {
    cancelRequest = null;
    handleCancel = () => {
        if(this.cancelRequest){
            this.cancelRequest();
            this.cancelRequest = null;
        }
    }
    loadData = async () => {
        const {PostActions, number} = this.props;
       /* PostActions.getPost(number).then((response) => {
            console.log(response);
        }
        ).catch((error) => {
            console.log(error);
            
        });*/
        try {
            /*
                ES7 문법인 async/await
                사용할 때는 await를 쓸 함수의 앞부분에 async키워드를 붙이고 
                기다려야 할 Promise 앞에 await키워드를 붙여준다.
            */
           //const response = await PostActions.getPost(number);
            const p = PostActions.getPost(number);
            this.cancelRequest = p.cancle;
            const response = await p;
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
    }

    componentDidMount(){
        /*axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response));*/
        this.loadData();
        
        window.addEventListener('keyup', (e) => {
            if(e.key === 'Escape'){
                this.handleCancel();
            }
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.number !== prevProps.number)
            this.loadData();
    }
    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        return (
            <div>
                <h1>{number}</h1>
                {
                    loading
                    ? (<h2>로딩중...</h2>)
                    : (
                        error ? (<h2>오류 발생</h2>)
                        : (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    )
                }
                {/*<button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrementAsync}>-</button>*/}
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
            </div>
        );
    }
}
/*
//redux-thunk, redux-promise-middleware
export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);
*/
export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);