//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let a = 1; a <= 5; a++) {
    let printAngka = ''
    for (let b = 1; b <= a; b++) {
        printAngka = printAngka + " " + a
        // console.log(" "+ b);
    }

    console.log(printAngka);
}


// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

console.log("");

for (let a = 1; a <= 5; a++) {
    let printAngka2 = ''
    for (let b = a; b > a-5; b--) {
        if ( b > 0 ) {
        printAngka2 = printAngka2 + " " + b
        }
     }

    console.log(printAngka2);
}

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

function ketiga(angka) {
    let panjang = 0; 
    let arr = []; 
    for (let index = 1; index <= angka; index++) {
        if (index <= angka) {
            arr.push(index)
        }
        panjang += index;
    }

    let baris = '' 

   
    let index = 1; 
    let i = 0; 
    while (index <= panjang) {
        if (i <= arr.length-1) {
            baris += arr[i] + ' '
            i++
        }else{
            arr.reverse()
            i = 1
            baris += arr[i] + ' '
            i++
        }
        index++
    }

    
    let hasil = '' 
    let mulaiDari = 0
    for (let index = 0; index < angka; index++) {
        for (let index2 = 0; index2 <= index; index2++) {
            hasil += baris.split(' ')[mulaiDari] + ' '
            mulaiDari++
        }
        hasil += '\n'
    }
    return hasil
}
console.log("")
console.log(ketiga(5))

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25


function empat(n) {
    let panjang = 1
    let arr =  [] 
    for (let index = 0; index < n; index++) {
        arr[index] = new Array(index) 
        for (let index2 = 0; index2 < n; index2++) {
            arr[index][index2] = panjang
            panjang ++
        }
        
    }

    let reverseOrNot = false
    let baris = []
    for (let index = 0; index < n; index++) {
        if (reverseOrNot) {
            arr[index].reverse()
            for (let index2 = 0; index2 < n; index2++) {
                baris.push(arr[index][index2])
            }
            reverseOrNot = false
        }else{
            for (let index2 = 0; index2 < n; index2++) {
                baris.push(arr[index][index2])
            }
            reverseOrNot = true
        }
    }

    let transpose =  arr[0].map((currentValue, index) => arr.map(c => c[index]));


    let hasil = ''
    for (let index = 0; index < n; index++) {
        for (let index2 = 0; index2 < n; index2++) {
            hasil += transpose[index][index2] + ' '
        }
        hasil += '\n'
    }

    return hasil
}
console.log(empat(5))
