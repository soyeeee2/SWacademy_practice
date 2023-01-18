// todo 함수 선언식과 표현식, 그리고 화살표 함수

// 함수선언식(호이스팅o)
// function adder(a, b){
//     return a+b;
// }

// adder = function(a, b){
//     return a+b;
// }

adder = (a, b) => a+b
console.log(adder(1,2))

// 함수표현식(호이스팅x)
// const adder = function(a, b){
//     return a+b;
// }

// const adder = (a, b) => {
//     return a+b;
// }

// const adder = (a, b) => a+b

// 인자 하나일 때 >> () 생략가능
// return문이 한 줄 일 때 >> {return } 생략가능
// 화살표함수는 익명함수로만!! 사용할 수 있으므로 
// 호출하기 위해서는 함수 표현식을 사용하거나 콜백함수를 사용.