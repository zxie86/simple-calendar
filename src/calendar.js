import NationalStatHoliday from './StatHolidayNational.js';

var date;
var holiday ;
var year;
var StatHolidays = [];
var tempStatHolidays = [];
window.onload = function () {
    date = new Date();
    year = date.getFullYear();
    preLoad();

    var rowsOfCurrentMonth = CountOfRow(date);
    renderCalendarFrame(rowsOfCurrentMonth);
    renderCalendarDays(date);
}
function preLoad(){
    var prevMonth = document.getElementsByClassName("prevMonth")[0];
    var nextMonth = document.getElementsByClassName("nextMonth")[0];
    var currentYear = document.getElementById("currentYear");
    prevMonth.addEventListener("click",goToPrevMonth);
    nextMonth.addEventListener("click",goToNextMonth);

    holiday = updateStatHoliday(year);

}
function CountOfRow(date){
    var year = date.getFullYear();
    var month = date.getMonth();
    var firstDay = new Date(year,month,1).getDay();
    var numberOfDay = new Date(year,month + 1,0).getDate();

    if (firstDay == 0){
        firstDay = 7;
    }else{
        firstDay=firstDay;
    }
    var rows = Math.ceil((numberOfDay + firstDay - 1) / 7);
    return rows;
}
function renderCalendarFrame(rows){
    var calendar = document.getElementsByClassName("calendarBody")[0];
    calendar.innerHTML="";

    for(var i = 0;i < rows; i++){
        var row = document.createElement("div");
        row.className = "row";


        for (var j = 0; j < 7 ;j++){
            var cell = document.createElement("div");
            cell.className= "col";
            cell.style.backgroundColor = "white";

            row.appendChild(cell);
        }
        calendar.appendChild(row);
    }
}
function displayCurrentYear(){
    var currentYear = document.getElementById("currentYear");
    currentYear.innerHTML = date.getFullYear();
}

function displayCurrentMonth(month){
    var currentMonth = document.getElementById("currentMonth");

    switch(month){
        case 0:
            currentMonth.innerHTML = 'Jan';
            document.body.style.backgroundImage = 'url("../img/jan.jpg")';
            break;
        case 1:
            currentMonth.innerHTML = 'Feb';
            document.body.style.backgroundImage = 'url("../img/feb.jpg")';
            break;
        case 2:
            currentMonth.innerHTML = 'Mar';
            document.body.style.backgroundImage = 'url("../img/mar.jpg")';
            break;
        case 3:
            currentMonth.innerHTML = 'Apr';
            document.body.style.backgroundImage = 'url("../img/apr.jpg")';
            break;
        case 4:
            currentMonth.innerHTML = 'May';
            document.body.style.backgroundImage = 'url("../img/may.jpg")';
            break;
        case 5:
            currentMonth.innerHTML = 'Jun';
            document.body.style.backgroundImage = 'url("../img/jun.jpg")';
            break;
        case 6:
            currentMonth.innerHTML = 'Jul';
            document.body.style.backgroundImage = 'url("../img/jul.jpg")';
            break;
        case 7:
            currentMonth.innerHTML = 'Aug';
            document.body.style.backgroundImage = 'url("../img/aug.jpg")';
            break;
        case 8:
            currentMonth.innerHTML = 'Sep';
            document.body.style.backgroundImage = 'url("../img/sep.jpg")';
            break;
        case 9:
            currentMonth.innerHTML = 'Oct';
            document.body.style.backgroundImage = 'url("../img/oct.jpg")';
            break;
        case 10:
            currentMonth.innerHTML = 'Nov';
            document.body.style.backgroundImage = 'url("../img/nov.jpg")';
            break;
        case 11:
            currentMonth.innerHTML = 'Dec';
            document.body.style.backgroundImage = 'url("../img/dec.jpg")';
            break;
        default:
            currentMonth.innerHTML = 'Error';
            break;

    }
}
function renderCalendarDays(date) {

var year = date.getFullYear();
var month = date.getMonth();
var standardMonth;
var today = date.getDate();


var firstDay = new Date(year, month, 1).getDay();
var numberOfDays = new Date(year, month + 1, 0).getDate();

var count = 1;
firstDay = firstDay == 0 ? 7: firstDay;
var startIndex = firstDay + 6;
var currentDate = date;

while (count <= numberOfDays) {
    var calendarCell = document.getElementsByClassName("col");
    var span = document.createElement('div');

    span.classList.add('text-center');
    span.innerText = count;

    // if today is Saturday or Sunday, make it red
    if ((startIndex - 5) % 7 === 0 || (startIndex - 6) % 7 === 0) {
        span.style.color = "red";
    }
    // display today
    if (count == today){
        calendarCell[startIndex].style.backgroundColor= '#D4F26F';
    }

    // if today is a stat holiday make it red
    count = count < 10? "0" + count: count.toString();
    standardMonth = month < 9? "0" + (month+1): (month+1).toString();
    if(holiday.indexOf(year.toString() + standardMonth + count) > -1){
        span.style.color = "red";
    }

    calendarCell[startIndex].appendChild(span);

    var holidaySpan = document.createElement('div');
    const holidayName = getStatHolidayNameByDate(year.toString() + standardMonth + count);
    if((holiday.indexOf(year.toString() + standardMonth + count) > -1) && (holidayName != "")){
        holidaySpan.innerHTML = holidayName;
        holidaySpan.style.color = "red";
        holidaySpan.style.fontSize = '45%';
        holidaySpan.style.paddingBottom = '0 px';

    }
    holidaySpan.classList.add('text-center');
    calendarCell[startIndex].appendChild(holidaySpan);

    startIndex++;
    count++;
}
displayCurrentMonth(month);
displayCurrentYear();
}

function goToPrevMonth(){
    var year = date.getFullYear();
    var currentDate = date.getDate();
    var prevMonth = date.getMonth() -1;
    if(prevMonth<0){
        prevMonth = 11;
        year --;
        holiday = updateStatHoliday(year);

    }
    // var newDate = new Date();
    date.setFullYear(year,prevMonth,currentDate);
    var rowsOfCurrentMonth = CountOfRow(date);
    renderCalendarFrame(rowsOfCurrentMonth);
    renderCalendarDays(date);

}
function goToNextMonth(){
    var year = date.getFullYear();
    var currentDate = date.getDate();
    var nextMonth = date.getMonth() + 1;
    if(nextMonth>11){
        nextMonth = 0;
        year ++;
        holiday = updateStatHoliday(year);

        }
    date.setFullYear(year,nextMonth,currentDate);
    var rowsOfCurrentMonth = CountOfRow(date);
    renderCalendarFrame(rowsOfCurrentMonth);
    renderCalendarDays(date);
}
function updateStatHoliday(year){
    NationalStatHoliday.getStatHolidays(year);
    for(var i = 0; i< NationalStatHoliday.StatHolidays.length;i++){
        tempStatHolidays.push(NationalStatHoliday.StatHolidays[i].id)
    }
    return tempStatHolidays;

}

function getStatHolidayNameByDate(dateInString){
    // if(!StatHolidays) return "";

    for (var i = 0; i< NationalStatHoliday.StatHolidays.length; i++){
        const statHoliday = NationalStatHoliday.StatHolidays[i];
        if(dateInString === statHoliday.id){
            return statHoliday.name;
        }
    }
    return "";
}





