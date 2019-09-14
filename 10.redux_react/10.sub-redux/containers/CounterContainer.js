/*
    react-redux 라이브러리의 connect 함수를 사용하여 컴포넌트를 스토어에 연결
    connect([mapStateToProps], [mapDispatchToProps], [mergeProps])
    각 파라미터는 선택이므로 불필요하다면 생략 가능. 이 파라미터들은 함수형태이며,
    컴포넌트에서 사용할 props를 반환한다. 

    -mapStateToProps : store.getState() 결과 값인 state를 파라미터로 받아 컴포넌트의 props,로 사용할 객체를반환
    -mapDispatchToProps : dispatch를 파라미터로 받아 액션을 디스패치하는 함수들을 객체 안에 넣어서 반환
    -mergeProps : state와 dispatch가 동시에 필요한 함수를 props로 전달해야 할때 사용, 일반적으로 사용하지 않음

    connect함수를 호출하고 나면 또 다른 함수를 반환한다. 이때 반환하는 함수의 파라미터로 리덕스에 연결시킬 컴포넌트를 넣으면
    mapStateToProps, mapDispatchToProps에서 정의한 값들을 props로 받아 오는 새 컴포넌트를 만든다.
*/
import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from "react-redux";

function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ];

    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

//stroe 안의 state 값을 props로 연결한다.
const mapStateToProps = (state) =>({
    color : state.colorData.color,
    number : state.numberData.number
});

//액션을 생성하고, 해당 액션을 dispatch하는 함수를 만든후 이를 props로 연결한다.
const mapDispatchToProps = (dispatch) => ({
    onIncrement : () => dispatch(actions.increment()),
    onDecrement : () => dispatch(actions.decrement()),
    onSetColor : () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

/* 이렇게 하면 mapStateToProps의 color값, number값 과 mapDispatchToProps의 onIncrement, onDecrement, onSetColor값이 Counter 컴포넌트의 props로 들어간다. */