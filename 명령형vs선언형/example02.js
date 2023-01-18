const CatData = [
    {
        name:'코코',
        colors: ['yellow', 'white'],
        age:7,
        ear: 'folded',
    },
    {
        name:'루루',
        colors: ['white', 'yellow', 'brown'],
        age:7,
        ear: 'folded',
    },
    {
        name:'디디',
        colors: ['black', 'white'],
        age:3,
        ear: 'folded',
    },
    {
        name:'츄츄',
        colors: ['black', 'white','yellow'],
        age:10,
        ear: 'unfolded',
    },
    undefined,
    null 
]


// 노라면서
// 귀가 접힌 고양이

// 명령형
function filterCatsImp(){
    let results = [];

    for(let i = 0; i < CatData.length; i++){
        const cat = CatData[i]
        if(cat &&
           cat.colors.includes('yellow') &&
           cat.ear === 'folded'){
                results.push(cat.name)
            }
    }

    return results
}

const filteredCatsName = filterCatsImp(CatData);

// 선언형
function filterCatsDec(CatData){
    return CatData.filter(cat => cat && cat.colors.includes('black') 
                                     && cat.ear === 'folded')
                                    .map(cat => cat.name)
}

console.log(filterCatsDec(CatData))