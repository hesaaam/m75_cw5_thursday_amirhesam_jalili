


let is_weekend = (date1) => {
    let dt = new Date(date1);
    if (dt.getDay() == 5 || dt.getDay() == 4) return "weekend";

    return "not weekend";
}

// console.log(is_weekend(new Date()));

////////////////////////////////////////////////////////////////////////////

let date = new Date().setDate(7);
let date2 = new Date(date);
let date3 = new Date(new Date().setDate(11));
console.log(date2);


function differenc_inDay(date1, date2) {
    let differenceInMilliSecend = Math.abs( date1.getTime() - date2.getTime());
    return Math.floor(differenceInMilliSecend / (1000 * 60 * 60 * 24));
}
// console.log(differenc_inDay(date2, date3));

////////////////////////////////////////////////////////////////////////////////

function calculate() {
    let date = new Date().getDate() - 1;
    date = new Date().setDate(date); //create milisecend yesterday
    let yesterday = new Date(date);
    let month = new Date().getMonth() - 1
    month = new Date().setMonth(month)
    let lastMonth = new Date(month);
     month = new Date().getMonth() + 1
    month = new Date().setMonth(month)
    let nextMonth = new Date(month);
    return {
         yesterday,
         lastMonth,
         nextMonth
    }
    
}

// console.log(calculate());

////////////////////////////////////////////////////////////////////////////////////////

function getTwoDigitsDate() {
    let day = `${new Date().getDate()}`;
    if (day.length === 2 ) return day
        
    return "0" + day
     
}
// console.log(getTwoDigitsDate());


////////////////////////////////////////////////////////////////////////////////////

function amPm() {
    return new Date().toLocaleTimeString();
}

// console.log(amPm());

///////////////////////////////////////////////////////////////////////////////////////////

function differencInMinute(date1,date2) {
    let differenceInMilliSecend = Math.abs( date1.getTime() - date2.getTime());
    return Math.floor(differenceInMilliSecend / (1000 * 60));
};

// console.log(differencInMinute(date2,date3));


 



