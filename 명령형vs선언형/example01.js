// 명령형&절차형 프로그래밍 : "어떻게" 처리하는지에 대한 묘사
function double(arr){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        results.push(arr[i] * 2)
    }
    return results
}
function doublePlus(arr){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            results.push(arr[i] * 2)
        }
    }
    return results
}
// ! 조건이 많아지면 이해하기 복잡해진다. 유지보수 어려워짐

// 선언형 : "무엇을" 원하는지에 대한 묘사
function double2(arr){
    return arr.map(num => num * 2)
}
function double2Plus(arr){
    return arr.filter(param => typeof param === 'number')
                .map(num => num * 2)
}


