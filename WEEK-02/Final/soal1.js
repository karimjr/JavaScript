function totalLompat(x,y,k){
    let lompat = 0
    for (let index = x; index <= y; index += k) {
         lompat++
    }
    return lompat
}


console.log(totalLompat(10,85,30));