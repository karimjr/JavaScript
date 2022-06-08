//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
    let hasil = 0;
    let arr = s.split('');
    for (let index = 0; index <= arr.length; index++) {
        if (arr[index] == 'U') {
            if (index == arr.length-1) {
            hasil += 1;
         }
            hasil += 1;
        }else if (arr[index] == 'D') {
            hasil -= 1;
                   }
         }
        return hasil
}
console.log(countingValleys('UDDDUDUU'));//1