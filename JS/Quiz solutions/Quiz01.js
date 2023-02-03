// TODO 실행 오류나는 이유
// function Cat(name, age){
//     this.name = name;
//     this.age = age;
// }

// const tabby1 = Cat('nana', 7);
// console.log(tabby1.name);

// *this는 함수 실행 시점에서 결정. new Cat이 아닌 Cat을 불렀을 때, this는 window를 가리키게 된다.
// *따라서, window.name = 'nana' , window.age = 7
// ! 의도치 않게 전역 window 객체 오염 가능성 있으니 주의하기
// *Cat함수는 return이 없음. 따라서 tabby1 = undefined -> console.log(tabby1.name) 실행 시 오류발생

// ? 근데 new Cat(); 하더라도 return 없는 건 똑같지 않나?
// * new로 객체 생성하게 되면 따로 return문 붙이지 않아도 tabby1에 값 담기기 때문에 오류x

