// Remember, the Date constructor takes a zero-based month number, so a
// month value of 10 corresponds to the eleventh month, November
const dates = [new Date(2021, 10, 20), new Date(2020, 3, 12),
    new Date(2020, 5, 23), new Date(2022, 3, 18)];
    // Find the first date in 2020
    /* const matchingDate = dates.find(date => date.getFullYear() === 2020);
    console.log(matchingDate); */
    
    function matchingDate (dates, year){
        const matchingDate = dates.find(dates => dates.getFullYear() === year);
        if(isNaN(matchingDate)){
            return 'tidak ditemukan'
        }
        return matchingDate;
    }
    
    console.log(matchingDate(dates,2020));//Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)