function getAreaCircle(r) {
    if (r < 0) {
        return 'radius -1 <= 0, try higher';
    } else if (isNaN (r)) {
        return 'Inputan harus dalam angka'
    } else {
        const pi = 3.14159;
        const area = pi*r*r;
        return area;
    }
}

console.log(getAreaCircle('-1')); 
console.log(getAreaCircle('a'));  
console.log(getAreaCircle(5));    
