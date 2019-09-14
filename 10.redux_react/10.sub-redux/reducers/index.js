/*
    기존에 작성했던 코드를 파일 두 개로 분리시킨 리듀서를 서브 리듀서라고 한다.
    서브 리듀서를 만든 후에는 이를 통합시키는 루트 리듀서를 만들어야 한다.
*/
import color from './color';
import number from './number';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData : number,
    colorData : color
});
/*
{
    numberData : {
        number : 0
    },
    colorData : {
        color : 'black'
    }
}
 -combinReducers를 호출할 때는 객체를 파라미터로 전달하는데, 이 객체 구조에 따라 합친 리듀서 상태 구조를 정의한다.
  스토어가 가진 상태 구조가 바뀌었으니, 기존에 작성했던 코드들은 제대로 동작하지 않는다.
  CountContainer 컴포넌트의 mapStateToProps를 조금 수정하여 코드가 작동되게 하자.
*/

export default reducers;