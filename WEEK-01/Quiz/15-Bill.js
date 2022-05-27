/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
   
    var array = [gaji1, gaji2, gaji3];
    var total = 0;
    var text = '';
    for (var i = 0; i < array.length; i++) {
        var tax = taxGaji(array[i]);
        var emp = array[i] + (array[i] * tax);
        var text = `${text}Emp${i+1} : Rp.${array[i]} + Pajak(${tax*100}%)=Rp.${emp}\n`;
        var total = total + emp;
    }

    return `Total gaji yang harus dibayar : \n${text}Total : Rp.${total}`;
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */