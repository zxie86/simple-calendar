/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(3);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// import NationalStatHoliday from './StatHolidayNational.js';
	var NationalStatHoliday = __webpack_require__(3);

	var date;
	var holiday;
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
	};
	function preLoad() {
	    var prevMonth = document.getElementsByClassName("prevMonth")[0];
	    var nextMonth = document.getElementsByClassName("nextMonth")[0];
	    var currentYear = document.getElementById("currentYear");
	    prevMonth.addEventListener("click", goToPrevMonth);
	    nextMonth.addEventListener("click", goToNextMonth);

	    holiday = updateStatHoliday(year);
	}
	function CountOfRow(date) {
	    var year = date.getFullYear();
	    var month = date.getMonth();
	    var firstDay = new Date(year, month, 1).getDay();
	    var numberOfDay = new Date(year, month + 1, 0).getDate();

	    if (firstDay == 0) {
	        firstDay = 7;
	    } else {
	        firstDay = firstDay;
	    }
	    var rows = Math.ceil((numberOfDay + firstDay - 1) / 7);
	    return rows;
	}
	function renderCalendarFrame(rows) {
	    var calendar = document.getElementsByClassName("calendarBody")[0];
	    calendar.innerHTML = "";

	    for (var i = 0; i < rows; i++) {
	        var row = document.createElement("div");
	        row.className = "row";

	        for (var j = 0; j < 7; j++) {
	            var cell = document.createElement("div");
	            cell.className = "col";
	            cell.style.backgroundColor = "white";

	            row.appendChild(cell);
	        }
	        calendar.appendChild(row);
	    }
	}
	function displayCurrentYear() {
	    var currentYear = document.getElementById("currentYear");
	    currentYear.innerHTML = date.getFullYear();
	}

	function displayCurrentMonth(month) {
	    var currentMonth = document.getElementById("currentMonth");

	    switch (month) {
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
	    firstDay = firstDay == 0 ? 7 : firstDay;
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
	        if (count == today) {
	            calendarCell[startIndex].style.backgroundColor = '#D4F26F';
	        }

	        // if today is a stat holiday make it red
	        count = count < 10 ? "0" + count : count.toString();
	        standardMonth = month < 9 ? "0" + (month + 1) : (month + 1).toString();
	        if (holiday.indexOf(year.toString() + standardMonth + count) > -1) {
	            span.style.color = "red";
	        }

	        calendarCell[startIndex].appendChild(span);

	        var holidaySpan = document.createElement('div');
	        const holidayName = getStatHolidayNameByDate(year.toString() + standardMonth + count);
	        if (holiday.indexOf(year.toString() + standardMonth + count) > -1 && holidayName != "") {
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

	function goToPrevMonth() {
	    var year = date.getFullYear();
	    var currentDate = date.getDate();
	    var prevMonth = date.getMonth() - 1;
	    if (prevMonth < 0) {
	        prevMonth = 11;
	        year--;
	        holiday = updateStatHoliday(year);
	    }
	    // var newDate = new Date();
	    date.setFullYear(year, prevMonth, currentDate);
	    var rowsOfCurrentMonth = CountOfRow(date);
	    renderCalendarFrame(rowsOfCurrentMonth);
	    renderCalendarDays(date);
	}
	function goToNextMonth() {
	    var year = date.getFullYear();
	    var currentDate = date.getDate();
	    var nextMonth = date.getMonth() + 1;
	    if (nextMonth > 11) {
	        nextMonth = 0;
	        year++;
	        holiday = updateStatHoliday(year);
	    }
	    date.setFullYear(year, nextMonth, currentDate);
	    var rowsOfCurrentMonth = CountOfRow(date);
	    renderCalendarFrame(rowsOfCurrentMonth);
	    renderCalendarDays(date);
	}
	function updateStatHoliday(year) {
	    NationalStatHoliday.getStatHolidays(year);
	    for (var i = 0; i < NationalStatHoliday.StatHolidays.length; i++) {
	        tempStatHolidays.push(NationalStatHoliday.StatHolidays[i].id);
	    }
	    return tempStatHolidays;
	}

	function getStatHolidayNameByDate(dateInString) {
	    // if(!StatHolidays) return "";

	    for (var i = 0; i < NationalStatHoliday.StatHolidays.length; i++) {
	        const statHoliday = NationalStatHoliday.StatHolidays[i];
	        if (dateInString === statHoliday.id) {
	            return statHoliday.name;
	        }
	    }
	    return "";
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	    StatHolidays: [],
	    getStatHolidays: function (year) {
	        //empty StatHolidays
	        this.StatHolidays.length = 0;

	        this.StatHolidays.push(this.getNewYearsDay(year));
	        this.StatHolidays.push(this.getGoodFriday(year));
	        this.StatHolidays.push(this.getCanadaDay(year));
	        this.StatHolidays.push(this.getLabourDay(year));
	        this.StatHolidays.push(this.getChristmasDay(year));
	        //Ontario
	        this.StatHolidays.push(this.getFamilyDay(year));
	        this.StatHolidays.push(this.getVictoriaDay(year));
	        this.StatHolidays.push(this.getCivicDay(year));
	        this.StatHolidays.push(this.getThanksgivingDay(year));
	    },

	    getNewYearsDay: function (year) {
	        const date = new Date(year, 0, 1);
	        return { id: year + "0101", name: "New Year's Day" };
	    },

	    //Friday before Easter Sunday
	    getGoodFriday: function (year) {
	        const EasterSundayDate = this.getEasterSunday(year);
	        var month = EasterSundayDate.getMonth() + 1;
	        var goodFridayDate = EasterSundayDate.getDate() - 2;
	        if (goodFridayDate <= 0) {
	            month--;
	            goodFridayDate += 31;
	        }
	        if (goodFridayDate < 10) {
	            return { id: year + "0" + month + "0" + goodFridayDate, name: "Good Friday" };
	        } else {
	            return { id: year + "0" + month + goodFridayDate, name: "Good Friday" };
	        }
	    },

	    getCanadaDay: function (year) {
	        const date = new Date(year, 6, 1);
	        return { id: year + "0701", name: "Canada Day" };
	    },

	    //first Monday in September
	    getLabourDay: function (year) {
	        const date = new Date(year, 8, 1);
	        const weekday = date.getDay();
	        const today = date.getDate();
	        let key;
	        switch (weekday) {
	            case 0:
	                key = year + "090" + (today + 1);
	                return { id: key, name: "Labour Day" };
	            case 1:
	                key = year + "0901";
	                return { id: key, name: "Labour Day" };
	            case 2:
	                key = year + "090" + (today + 6);
	                return { id: key, name: "Labour Day" };
	            case 3:
	                key = year + "090" + (today + 5);
	                return { id: key, name: "Labour Day" };
	            case 4:
	                key = year + "090" + (today + 4);
	                return { id: key, name: "Labour Day" };
	            case 5:
	                key = year + "090" + (today + 3);
	                return { id: key, name: "Labour Day" };
	            case 6:
	                key = year + "090" + (today + 2);
	                return { id: key, name: "Labour Day" };
	        }
	    },

	    getChristmasDay: function (year) {
	        const date = new Date(year, 11, 25);
	        return { id: year + "1225", name: "Christmas Day" };
	    },

	    /**
	    * Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar
	    * based on the algorithm by Oudin (1940) from http://www.tondering.dk/claus/cal/easter.php
	    * @returns {array} [int month, int day]
	    */
	    getEasterSunday: function (year, province = "Ontario") {
	        var f = Math.floor,

	        // Golden Number - 1
	        G = year % 19,
	            C = f(year / 100),

	        // related to Epact
	        H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,

	        // number of days from 21 March to the Paschal full moon
	        I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),

	        // weekday for the Paschal full moon
	        J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,

	        // number of days from 21 March to the Sunday on or before the Paschal full moon
	        L = I - J,
	            month = 3 + f((L + 40) / 44),
	            day = L + 28 - 31 * f(month / 4);

	        return new Date(year, month - 1, day);
	    },
	    //Ontario
	    // Third Monday in February
	    getFamilyDay: function (year, province = "Ontario") {
	        const date = new Date(year, 1, 1);

	        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
	        var weekday = date.getDay();

	        // today's date
	        var today = date.getDate();
	        let key;

	        switch (weekday) {
	            case 0:
	                key = year + "02" + (today + 22);
	                return { id: key, name: "Family Day", observed: true, observedDate: year + "02" + (today + 23) };
	            case 1:
	                key = year + "02" + (today + 21);
	                return { id: key, name: "Family Day", observed: false };
	            case 2:
	                key = year + "02" + (today + 20);
	                return { id: key, name: "Family Day", observed: false };
	            case 3:
	                key = year + "02" + (today + 19);
	                return { id: key, name: "Family Day", observed: false };
	            case 4:
	                key = year + "02" + (today + 18);
	                return { id: key, name: "Family Day", observed: false };
	            case 5:
	                key = year + "02" + (today + 17);
	                return { id: key, name: "Family Day", observed: false };
	            case 6:
	                key = year + "02" + (today + 16);
	                return { id: key, name: "Family Day", observed: true, observedDate: year + "02" + (today + 15) };
	        }
	    },

	    getVictoriaDay: function (year, province = "Ontario") {
	        const date = new Date(year, 4, 24);
	        const weekday = date.getDay();
	        const today = date.getDate();
	        let key;
	        switch (weekday) {
	            case 0:
	                key = year + "05" + (today - 6);
	                return { id: key, name: "Victoria Day", observed: false };
	            case 1:
	                key = year + "05" + today;
	                return { id: key, name: "Victoria Day", observed: false };
	            case 2:
	                key = year + "05" + (today - 1);
	                return { id: key, name: "Victoria Day", observed: false };
	            case 3:
	                key = year + "05" + (today - 2);
	                return { id: key, name: "Victoria Day", observed: false };
	            case 4:
	                key = year + "05" + (today - 3);
	                return { id: key, name: "Victoria Day", observed: false };
	            case 5:
	                key = year + "05" + (today - 4);
	                return { id: key, name: "Victoria Day", observed: false };
	            case 6:
	                key = year + "05" + (today - 5);
	                return { id: key, name: "Victoria Day", observed: false };
	        }
	    },

	    //first Monday in August
	    getCivicDay: function (year) {
	        const date = new Date(year, 7, 1);
	        const weekday = date.getDay();
	        const today = date.getDate();
	        let key;
	        switch (weekday) {
	            case 0:
	                key = year + "080" + (today + 1);
	                return { id: key, name: "Civic Day" };
	            case 1:
	                key = year + "0801";
	                return { id: key, name: "Civic Day" };
	            case 2:
	                key = year + "080" + (today + 6);
	                return { id: key, name: "Civic Day" };
	            case 3:
	                key = year + "080" + (today + 5);
	                return { id: key, name: "Civic Day" };
	            case 4:
	                key = year + "080" + (today + 4);
	                return { id: key, name: "Civic Day" };
	            case 5:
	                key = year + "080" + (today + 3);
	                return { id: key, name: "Civic Day" };
	            case 6:
	                key = year + "080" + (today + 2);
	                return { id: key, name: "Civic Day" };
	        }
	    },

	    //Second Monday in October
	    getThanksgivingDay: function (year, province = "Ontario") {
	        const date = new Date(year, 9, 1);

	        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
	        var weekday = date.getDay();

	        // today's date
	        var today = date.getDate();
	        let key;

	        switch (weekday) {
	            case 0:
	                key = today + 8 < 10 ? year + "100" + (today + 8) : year + "10" + (today + 1);
	                return { id: key, name: "Thanksgiving Day" };
	            case 1:
	                key = year + "10" + (today + 7);
	                key = today + 7 < 10 ? year + "100" + (today + 7) : year + "10" + (today + 1);
	                return { id: key, name: "Thanksgiving Day" };
	            case 2:
	                key = year + "10" + (today + 13);
	                return { id: key, name: "Thanksgiving Day" };
	            case 3:
	                key = year + "10" + (today + 12);
	                return { id: key, name: "Thanksgiving Day" };
	            case 4:
	                key = year + "10" + (today + 11);
	                return { id: key, name: "Thanksgiving Day" };
	            case 5:
	                key = year + "10" + (today + 10);
	                return { id: key, name: "Thanksgiving Day" };
	            case 6:
	                key = year + "10" + (today + 9);
	                return { id: key, name: "Thanksgiving Day" };
	        }
	    }

	};

	// module.exports.NationalStatHoliday =  NationalStatHoliday;
	// export default NationalStatHoliday;

/***/ }
/******/ ]);