// todo 콜백함수란?
function say(arg){
    arg()
}

val = function(){console.log("hey~");}

say(val)


// Js는 함수를 특별한 종류의 '값'으로 취급하기 때문에 위와같이 인자값으로 넘기거나 다른 변수에 대입해 호출하는게 가능하다.
//여기서 val은 지금 바로 실행되지 않지만 다른 함수의 입력값으로 전달되어 다른 함수에 의해 나중에 호출됨!!
// >> 이것이 콜백함수의 정의 
// 물론 val 자체는 콜백 함수는 아니지만, 이 val이라고 하는 함수가 다른 함수의 입력값으로 전달되어 그것이 '나중에 호출'이 된다면(Called Back) 이 맥락에서 val 은 콜백 함수(CallBack Function) 가 되는 것.

// 콜백은 간단히 말하면 함수 안에서 실행하는 또 다른 함수 이다.
// 또 다른 함수를 만들 때 인풋(parameters)을 함수로 받아서 사용할 수 있는데, 이 때 인자로 사용되는 함수를 말한다.
// 즉, 파라미터로 변수가 아닌 함수를 전달하는 것을 말하며, 또한 함수이름 없이 '익명'으로도 전달 가능한 함수를 일컫는다.

// !콜백함수 사용 원칙 
// !1. 익명의 함수 사용  2. 함수의 이름만 넘기기  3. 전역, 지역변수를 콜백함수의 파라미터로 전달