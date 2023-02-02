const promise = new Promise((resolve, reject) => {
    // promise 내부에서 비동기 상황 종료 시, resolve 함수 호출
    // promise 내부에서 오류 발생 시, reject 함수 호출
})

function asyncPromiseWork() {
    // some code...
    // 
    return new Promise((resolve, reject) => {
        // some code...
        // 
        return resolve('complete')
    })
}

// then의 result에는 resolve를 호출하여 넘긴 complete가 들어있음
asyncPromiseWork().then(result => console.log(result))




