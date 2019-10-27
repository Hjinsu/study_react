/*
    실제 프로젝트를 작업할때는 미들웨어를 직접 만들어서 사용할 일이 그리 많지않다.
    대부분 다른 개발자가 만들어놓은 미들웨어를 사용하면 된다.
*/
/*
    next는 store.dispatch와 비슷한 역할을 한다.
    next(action)을 했을 때는 그다음 처리해야 할 미들웨어로 액션을 넘겨주고,
    추가로 처리할 미들웨어가 없다면 바로 리듀서에 넘겨준다.
    하지만 store.dispatch는 다음 미들웨어로 넘기지 않고 액션을 처음부터 디스패치한다.
    따라서 미들웨어 내부에서 store.dispatch를 사용할 때는 특정 조건을 만족하면
    같은 액션이 아니라 다른 액션으로 실행해야 한다.
*/
/*
    미들웨어를 사용해서 다음 정보들을 순서대로 기록
    1.현재 상태
    2.액션 정보
    3.리듀서가 처리한 다음의 새로운 상태
*/
const loggerMiddleware = store => next => action => {
    //미들웨어 내용

    //현재 스토어 상태 값 기록
    console.log('현재 상태', store.getState());
    //액션 기록
    console.log('액션',action);
    
    // 액션을 다음 미들웨어로 넘긴다.
    const result = next(action);
    //액션 처리 후의 스토어 상태를 기록
    console.log('다음 상태', store.getState());
    console.log('----------------');
    
    return result;
};

export default loggerMiddleware;