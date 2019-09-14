/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
/***/ function(module, exports) {

	import NationalStatHoliday from './StatHolidayNational.js';
	
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

	var NationalStatHoliday = {
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
	
	export default NationalStatHoliday;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWY0MjlmNmZlYWY0NzNjYzFkOWQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhdEhvbGlkYXlOYXRpb25hbC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmF0aW9uYWxTdGF0SG9saWRheSIsImRhdGUiLCJob2xpZGF5IiwieWVhciIsIlN0YXRIb2xpZGF5cyIsInRlbXBTdGF0SG9saWRheXMiLCJ3aW5kb3ciLCJvbmxvYWQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwcmVMb2FkIiwicm93c09mQ3VycmVudE1vbnRoIiwiQ291bnRPZlJvdyIsInJlbmRlckNhbGVuZGFyRnJhbWUiLCJyZW5kZXJDYWxlbmRhckRheXMiLCJwcmV2TW9udGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuZXh0TW9udGgiLCJjdXJyZW50WWVhciIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdvVG9QcmV2TW9udGgiLCJnb1RvTmV4dE1vbnRoIiwidXBkYXRlU3RhdEhvbGlkYXkiLCJtb250aCIsImdldE1vbnRoIiwiZmlyc3REYXkiLCJnZXREYXkiLCJudW1iZXJPZkRheSIsImdldERhdGUiLCJyb3dzIiwiTWF0aCIsImNlaWwiLCJjYWxlbmRhciIsImlubmVySFRNTCIsImkiLCJyb3ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaiIsImNlbGwiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwiZGlzcGxheUN1cnJlbnRZZWFyIiwiZGlzcGxheUN1cnJlbnRNb250aCIsImN1cnJlbnRNb250aCIsImJvZHkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdGFuZGFyZE1vbnRoIiwidG9kYXkiLCJudW1iZXJPZkRheXMiLCJjb3VudCIsInN0YXJ0SW5kZXgiLCJjdXJyZW50RGF0ZSIsImNhbGVuZGFyQ2VsbCIsInNwYW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJjb2xvciIsInRvU3RyaW5nIiwiaW5kZXhPZiIsImhvbGlkYXlTcGFuIiwiaG9saWRheU5hbWUiLCJnZXRTdGF0SG9saWRheU5hbWVCeURhdGUiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJzZXRGdWxsWWVhciIsImdldFN0YXRIb2xpZGF5cyIsImxlbmd0aCIsInB1c2giLCJpZCIsImRhdGVJblN0cmluZyIsInN0YXRIb2xpZGF5IiwibmFtZSIsImdldE5ld1llYXJzRGF5IiwiZ2V0R29vZEZyaWRheSIsImdldENhbmFkYURheSIsImdldExhYm91ckRheSIsImdldENocmlzdG1hc0RheSIsImdldEZhbWlseURheSIsImdldFZpY3RvcmlhRGF5IiwiZ2V0Q2l2aWNEYXkiLCJnZXRUaGFua3NnaXZpbmdEYXkiLCJFYXN0ZXJTdW5kYXlEYXRlIiwiZ2V0RWFzdGVyU3VuZGF5IiwiZ29vZEZyaWRheURhdGUiLCJ3ZWVrZGF5Iiwia2V5IiwicHJvdmluY2UiLCJmIiwiZmxvb3IiLCJHIiwiQyIsIkgiLCJJIiwiSiIsIkwiLCJkYXkiLCJvYnNlcnZlZCIsIm9ic2VydmVkRGF0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9CQUFBQSxDQUFRLENBQVI7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSLEU7Ozs7OztBQ0RBLFFBQU9DLG1CQUFQLE1BQWdDLDBCQUFoQzs7QUFFQSxLQUFJQyxJQUFKO0FBQ0EsS0FBSUMsT0FBSjtBQUNBLEtBQUlDLElBQUo7QUFDQSxLQUFJQyxlQUFlLEVBQW5CO0FB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c0IsSUFBSWlCLEdBQU4sRUFBV2QsTUFBTSxrQkFBakIsRUFBUDtBQXRCUjtBQXdCSDs7QUEvT3VCLEVBQTFCOztBQW9QQSxnQkFBZTVFLG1CQUFmLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxZjQyOWY2ZmVhZjQ3M2NjMWQ5ZFxuICoqLyIsInJlcXVpcmUoXCIuL3NyYy9jYWxlbmRhclwiKTtcbnJlcXVpcmUoXCIuL3NyYy9TdGF0SG9saWRheU5hdGlvbmFsXCIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAuanNcbiAqKi8iLCJpbXBvcnQgTmF0aW9uYWxTdGF0SG9saWRheSBmcm9tICcuL1N0YXRIb2xpZGF5TmF0aW9uYWwuanMnO1xuXG52YXIgZGF0ZTtcbnZhciBob2xpZGF5IDtcbnZhciB5ZWFyO1xudmFyIFN0YXRIb2xpZGF5cyA9IFtdO1xudmFyIHRlbXBTdGF0SG9saWRheXMgPSBbXTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBwcmVMb2FkKCk7XG5cbiAgICB2YXIgcm93c09mQ3VycmVudE1vbnRoID0gQ291bnRPZlJvdyhkYXRlKTtcbiAgICByZW5kZXJDYWxlbmRhckZyYW1lKHJvd3NPZkN1cnJlbnRNb250aCk7XG4gICAgcmVuZGVyQ2FsZW5kYXJEYXlzKGRhdGUpO1xufVxuZnVuY3Rpb24gcHJlTG9hZCgpe1xuICAgIHZhciBwcmV2TW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJldk1vbnRoXCIpWzBdO1xuICAgIHZhciBuZXh0TW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dE1vbnRoXCIpWzBdO1xuICAgIHZhciBjdXJyZW50WWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFllYXJcIik7XG4gICAgcHJldk1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdvVG9QcmV2TW9udGgpO1xuICAgIG5leHRNb250aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnb1RvTmV4dE1vbnRoKTtcblxuICAgIGhvbGlkYXkgPSB1cGRhdGVTdGF0SG9saWRheSh5ZWFyKTtcblxufVxuZnVuY3Rpb24gQ291bnRPZlJvdyhkYXRlKXtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgdmFyIGZpcnN0RGF5ID0gbmV3IERhdGUoeWVhcixtb250aCwxKS5nZXREYXkoKTtcbiAgICB2YXIgbnVtYmVyT2ZEYXkgPSBuZXcgRGF0ZSh5ZWFyLG1vbnRoICsgMSwwKS5nZXREYXRlKCk7XG5cbiAgICBpZiAoZmlyc3REYXkgPT0gMCl7XG4gICAgICAgIGZpcnN0RGF5ID0gNztcbiAgICB9ZWxzZXtcbiAgICAgICAgZmlyc3REYXk9Zmlyc3REYXk7XG4gICAgfVxuICAgIHZhciByb3dzID0gTWF0aC5jZWlsKChudW1iZXJPZkRheSArIGZpcnN0RGF5IC0gMSkgLyA3KTtcbiAgICByZXR1cm4gcm93cztcbn1cbmZ1bmN0aW9uIHJlbmRlckNhbGVuZGFyRnJhbWUocm93cyl7XG4gICAgdmFyIGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhbGVuZGFyQm9keVwiKVswXTtcbiAgICBjYWxlbmRhci5pbm5lckhUTUw9XCJcIjtcblxuICAgIGZvcih2YXIgaSA9IDA7aSA8IHJvd3M7IGkrKyl7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuY2xhc3NOYW1lID0gXCJyb3dcIjtcblxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNyA7aisrKXtcbiAgICAgICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lPSBcImNvbFwiO1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50WWVhcigpe1xuICAgIHZhciBjdXJyZW50WWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFllYXJcIik7XG4gICAgY3VycmVudFllYXIuaW5uZXJIVE1MID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudE1vbnRoKG1vbnRoKXtcbiAgICB2YXIgY3VycmVudE1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50TW9udGhcIik7XG5cbiAgICBzd2l0Y2gobW9udGgpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0phbic7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvamFuLmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdGZWInO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL2ZlYi5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnTWFyJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9tYXIuanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0Fwcic7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvYXByLmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdNYXknO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL21heS5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnSnVuJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9qdW4uanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0p1bCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvanVsLmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdBdWcnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL2F1Zy5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnU2VwJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9zZXAuanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ09jdCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvb2N0LmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnTm92JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9ub3YuanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdEZWMnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL2RlYy5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0Vycm9yJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxufVxuZnVuY3Rpb24gcmVuZGVyQ2FsZW5kYXJEYXlzKGRhdGUpIHtcblxudmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG52YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG52YXIgc3RhbmRhcmRNb250aDtcbnZhciB0b2RheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG5cbnZhciBmaXJzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKTtcbnZhciBudW1iZXJPZkRheXMgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcblxudmFyIGNvdW50ID0gMTtcbmZpcnN0RGF5ID0gZmlyc3REYXkgPT0gMCA/IDc6IGZpcnN0RGF5O1xudmFyIHN0YXJ0SW5kZXggPSBmaXJzdERheSArIDY7XG52YXIgY3VycmVudERhdGUgPSBkYXRlO1xuXG53aGlsZSAoY291bnQgPD0gbnVtYmVyT2ZEYXlzKSB7XG4gICAgdmFyIGNhbGVuZGFyQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xcIik7XG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IGNvdW50O1xuXG4gICAgLy8gaWYgdG9kYXkgaXMgU2F0dXJkYXkgb3IgU3VuZGF5LCBtYWtlIGl0IHJlZFxuICAgIGlmICgoc3RhcnRJbmRleCAtIDUpICUgNyA9PT0gMCB8fCAoc3RhcnRJbmRleCAtIDYpICUgNyA9PT0gMCkge1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgLy8gZGlzcGxheSB0b2RheVxuICAgIGlmIChjb3VudCA9PSB0b2RheSl7XG4gICAgICAgIGNhbGVuZGFyQ2VsbFtzdGFydEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ICcjRDRGMjZGJztcbiAgICB9XG5cbiAgICAvLyBpZiB0b2RheSBpcyBhIHN0YXQgaG9saWRheSBtYWtlIGl0IHJlZFxuICAgIGNvdW50ID0gY291bnQgPCAxMD8gXCIwXCIgKyBjb3VudDogY291bnQudG9TdHJpbmcoKTtcbiAgICBzdGFuZGFyZE1vbnRoID0gbW9udGggPCA5PyBcIjBcIiArIChtb250aCsxKTogKG1vbnRoKzEpLnRvU3RyaW5nKCk7XG4gICAgaWYoaG9saWRheS5pbmRleE9mKHllYXIudG9TdHJpbmcoKSArIHN0YW5kYXJkTW9udGggKyBjb3VudCkgPiAtMSl7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGNhbGVuZGFyQ2VsbFtzdGFydEluZGV4XS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIHZhciBob2xpZGF5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbGlkYXlOYW1lID0gZ2V0U3RhdEhvbGlkYXlOYW1lQnlEYXRlKHllYXIudG9TdHJpbmcoKSArIHN0YW5kYXJkTW9udGggKyBjb3VudCk7XG4gICAgaWYoKGhvbGlkYXkuaW5kZXhPZih5ZWFyLnRvU3RyaW5nKCkgKyBzdGFuZGFyZE1vbnRoICsgY291bnQpID4gLTEpICYmIChob2xpZGF5TmFtZSAhPSBcIlwiKSl7XG4gICAgICAgIGhvbGlkYXlTcGFuLmlubmVySFRNTCA9IGhvbGlkYXlOYW1lO1xuICAgICAgICBob2xpZGF5U3Bhbi5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGhvbGlkYXlTcGFuLnN0eWxlLmZvbnRTaXplID0gJzQ1JSc7XG4gICAgICAgIGhvbGlkYXlTcGFuLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnMCBweCc7XG5cbiAgICB9XG4gICAgaG9saWRheVNwYW4uY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInKTtcbiAgICBjYWxlbmRhckNlbGxbc3RhcnRJbmRleF0uYXBwZW5kQ2hpbGQoaG9saWRheVNwYW4pO1xuXG4gICAgc3RhcnRJbmRleCsrO1xuICAgIGNvdW50Kys7XG59XG5kaXNwbGF5Q3VycmVudE1vbnRoKG1vbnRoKTtcbmRpc3BsYXlDdXJyZW50WWVhcigpO1xufVxuXG5mdW5jdGlvbiBnb1RvUHJldk1vbnRoKCl7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgdmFyIHByZXZNb250aCA9IGRhdGUuZ2V0TW9udGgoKSAtMTtcbiAgICBpZihwcmV2TW9udGg8MCl7XG4gICAgICAgIHByZXZNb250aCA9IDExO1xuICAgICAgICB5ZWFyIC0tO1xuICAgICAgICBob2xpZGF5ID0gdXBkYXRlU3RhdEhvbGlkYXkoeWVhcik7XG5cbiAgICB9XG4gICAgLy8gdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcixwcmV2TW9udGgsY3VycmVudERhdGUpO1xuICAgIHZhciByb3dzT2ZDdXJyZW50TW9udGggPSBDb3VudE9mUm93KGRhdGUpO1xuICAgIHJlbmRlckNhbGVuZGFyRnJhbWUocm93c09mQ3VycmVudE1vbnRoKTtcbiAgICByZW5kZXJDYWxlbmRhckRheXMoZGF0ZSk7XG5cbn1cbmZ1bmN0aW9uIGdvVG9OZXh0TW9udGgoKXtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgY3VycmVudERhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICB2YXIgbmV4dE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBpZihuZXh0TW9udGg+MTEpe1xuICAgICAgICBuZXh0TW9udGggPSAwO1xuICAgICAgICB5ZWFyICsrO1xuICAgICAgICBob2xpZGF5ID0gdXBkYXRlU3RhdEhvbGlkYXkoeWVhcik7XG5cbiAgICAgICAgfVxuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcixuZXh0TW9udGgsY3VycmVudERhdGUpO1xuICAgIHZhciByb3dzT2ZDdXJyZW50TW9udGggPSBDb3VudE9mUm93KGRhdGUpO1xuICAgIHJlbmRlckNhbGVuZGFyRnJhbWUocm93c09mQ3VycmVudE1vbnRoKTtcbiAgICByZW5kZXJDYWxlbmRhckRheXMoZGF0ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVTdGF0SG9saWRheSh5ZWFyKXtcbiAgICBOYXRpb25hbFN0YXRIb2xpZGF5LmdldFN0YXRIb2xpZGF5cyh5ZWFyKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpPCBOYXRpb25hbFN0YXRIb2xpZGF5LlN0YXRIb2xpZGF5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdGVtcFN0YXRIb2xpZGF5cy5wdXNoKE5hdGlvbmFsU3RhdEhvbGlkYXkuU3RhdEhvbGlkYXlzW2ldLmlkKVxuICAgIH1cbiAgICByZXR1cm4gdGVtcFN0YXRIb2xpZGF5cztcblxufVxuXG5mdW5jdGlvbiBnZXRTdGF0SG9saWRheU5hbWVCeURhdGUoZGF0ZUluU3RyaW5nKXtcbiAgICAvLyBpZighU3RhdEhvbGlkYXlzKSByZXR1cm4gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpPCBOYXRpb25hbFN0YXRIb2xpZGF5LlN0YXRIb2xpZGF5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHN0YXRIb2xpZGF5ID0gTmF0aW9uYWxTdGF0SG9saWRheS5TdGF0SG9saWRheXNbaV07XG4gICAgICAgIGlmKGRhdGVJblN0cmluZyA9PT0gc3RhdEhvbGlkYXkuaWQpe1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRIb2xpZGF5Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cblxuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuanNcbiAqKi8iLCJ2YXIgTmF0aW9uYWxTdGF0SG9saWRheSA9IHtcbiAgICBTdGF0SG9saWRheXM6W10sXG4gICAgZ2V0U3RhdEhvbGlkYXlzOmZ1bmN0aW9uKHllYXIpe1xuICAgICAgICAvL2VtcHR5IFN0YXRIb2xpZGF5c1xuICAgICAgICB0aGlzLlN0YXRIb2xpZGF5cy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuU3RhdEhvbGlkYXlzLnB1c2godGhpcy5nZXROZXdZZWFyc0RheSh5ZWFyKSk7XG4gICAgICAgIHRoaXMuU3RhdEhvbGlkYXlzLnB1c2godGhpcy5nZXRHb29kRnJpZGF5KHllYXIpKTtcbiAgICAgICAgdGhpcy5TdGF0SG9saWRheXMucHVzaCh0aGlzLmdldENhbmFkYURheSh5ZWFyKSk7XG4gICAgICAgIHRoaXMuU3RhdEhvbGlkYXlzLnB1c2godGhpcy5nZXRMYWJvdXJEYXkoeWVhcikpO1xuICAgICAgICB0aGlzLlN0YXRIb2xpZGF5cy5wdXNoKHRoaXMuZ2V0Q2hyaXN0bWFzRGF5KHllYXIpKTtcbiAgICAgICAgLy9PbnRhcmlvXG4gICAgICAgIHRoaXMuU3RhdEhvbGlkYXlzLnB1c2godGhpcy5nZXRGYW1pbHlEYXkoeWVhcikpO1xuICAgICAgICB0aGlzLlN0YXRIb2xpZGF5cy5wdXNoKHRoaXMuZ2V0VmljdG9yaWFEYXkoeWVhcikpO1xuICAgICAgICB0aGlzLlN0YXRIb2xpZGF5cy5wdXNoKHRoaXMuZ2V0Q2l2aWNEYXkoeWVhcikpO1xuICAgICAgICB0aGlzLlN0YXRIb2xpZGF5cy5wdXNoKHRoaXMuZ2V0VGhhbmtzZ2l2aW5nRGF5KHllYXIpKTtcblxuICAgIH0sXG5cbiAgICBnZXROZXdZZWFyc0RheTpmdW5jdGlvbih5ZWFyKXtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsMCwxKTtcbiAgICAgICAgcmV0dXJue2lkOnllYXIrXCIwMTAxXCIsbmFtZTpcIk5ldyBZZWFyJ3MgRGF5XCJ9O1xuICAgIH0sXG5cbiAgICAvL0ZyaWRheSBiZWZvcmUgRWFzdGVyIFN1bmRheVxuICAgIGdldEdvb2RGcmlkYXk6ZnVuY3Rpb24oeWVhcil7XG4gICAgICAgIGNvbnN0IEVhc3RlclN1bmRheURhdGUgPSB0aGlzLmdldEVhc3RlclN1bmRheSh5ZWFyKTtcbiAgICAgICAgdmFyIG1vbnRoID0gRWFzdGVyU3VuZGF5RGF0ZS5nZXRNb250aCgpKyAxO1xuICAgICAgICB2YXIgZ29vZEZyaWRheURhdGUgPSBFYXN0ZXJTdW5kYXlEYXRlLmdldERhdGUoKSAtIDI7XG4gICAgICAgIGlmKGdvb2RGcmlkYXlEYXRlPD0wKXtcbiAgICAgICAgICAgIG1vbnRoLS07XG4gICAgICAgICAgICBnb29kRnJpZGF5RGF0ZSArPSAzMTtcblxuICAgICAgICB9XG4gICAgICAgIGlmKGdvb2RGcmlkYXlEYXRlPDEwKXtcbiAgICAgICAgICAgIHJldHVybntpZDp5ZWFyICsgXCIwXCIgKyBtb250aCArIFwiMFwiICsgZ29vZEZyaWRheURhdGUsIG5hbWU6XCJHb29kIEZyaWRheVwifTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm57aWQ6eWVhciArIFwiMFwiICsgbW9udGggKyBnb29kRnJpZGF5RGF0ZSwgbmFtZTpcIkdvb2QgRnJpZGF5XCJ9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldENhbmFkYURheTpmdW5jdGlvbih5ZWFyKXtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsNiwxKTtcbiAgICAgICAgcmV0dXJue2lkOiB5ZWFyICsgXCIwNzAxXCIsbmFtZTpcIkNhbmFkYSBEYXlcIn07XG4gICAgfSxcblxuICAgIC8vZmlyc3QgTW9uZGF5IGluIFNlcHRlbWJlclxuICAgIGdldExhYm91ckRheTpmdW5jdGlvbih5ZWFyKXtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsOCwxKTtcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIHN3aXRjaCh3ZWVrZGF5KXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwOTBcIiArICh0b2RheSArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkxhYm91ciBEYXlcIn07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAga2V5ID0geWVhciArIFwiMDkwMVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkxhYm91ciBEYXlcIn07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAga2V5ID0geWVhciArIFwiMDkwXCIgKyAodG9kYXkgKyA2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiBrZXksIG5hbWU6XCJMYWJvdXIgRGF5XCJ9O1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA5MFwiICsgKHRvZGF5ICsgNSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpZDoga2V5LCBuYW1lOlwiTGFib3VyIERheVwifTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwOTBcIiArICh0b2RheSArIDQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkxhYm91ciBEYXlcIn07XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAga2V5ID0geWVhciArIFwiMDkwXCIgKyAodG9kYXkgKyAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiBrZXksIG5hbWU6XCJMYWJvdXIgRGF5XCJ9O1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA5MFwiICsgKHRvZGF5ICsgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpZDoga2V5LCBuYW1lOlwiTGFib3VyIERheVwifTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRDaHJpc3RtYXNEYXk6ZnVuY3Rpb24oeWVhcil7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLDExLDI1KTtcbiAgICAgICAgcmV0dXJuIHtpZDogeWVhcisgXCIxMjI1XCIsbmFtZTpcIkNocmlzdG1hcyBEYXlcIn07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQ2FsY3VsYXRlcyBFYXN0ZXIgaW4gdGhlIEdyZWdvcmlhbi9XZXN0ZXJuIChDYXRob2xpYyBhbmQgUHJvdGVzdGFudCkgY2FsZW5kYXJcbiAgICAqIGJhc2VkIG9uIHRoZSBhbGdvcml0aG0gYnkgT3VkaW4gKDE5NDApIGZyb20gaHR0cDovL3d3dy50b25kZXJpbmcuZGsvY2xhdXMvY2FsL2Vhc3Rlci5waHBcbiAgICAqIEByZXR1cm5zIHthcnJheX0gW2ludCBtb250aCwgaW50IGRheV1cbiAgICAqL1xuICAgZ2V0RWFzdGVyU3VuZGF5OiBmdW5jdGlvbiAoeWVhciwgcHJvdmluY2UgPSBcIk9udGFyaW9cIikge1xuICAgIHZhciBmID0gTWF0aC5mbG9vcixcbiAgICAgICAgLy8gR29sZGVuIE51bWJlciAtIDFcbiAgICAgICAgRyA9IHllYXIgJSAxOSxcbiAgICAgICAgQyA9IGYoeWVhciAvIDEwMCksXG4gICAgICAgIC8vIHJlbGF0ZWQgdG8gRXBhY3RcbiAgICAgICAgSCA9IChDIC0gZihDIC8gNCkgLSBmKCg4ICogQyArIDEzKSAvIDI1KSArIDE5ICogRyArIDE1KSAlIDMwLFxuICAgICAgICAvLyBudW1iZXIgb2YgZGF5cyBmcm9tIDIxIE1hcmNoIHRvIHRoZSBQYXNjaGFsIGZ1bGwgbW9vblxuICAgICAgICBJID0gSCAtIGYoSCAvIDI4KSAqICgxIC0gZigyOSAvIChIICsgMSkpICogZigoMjEgLSBHKSAvIDExKSksXG4gICAgICAgIC8vIHdlZWtkYXkgZm9yIHRoZSBQYXNjaGFsIGZ1bGwgbW9vblxuICAgICAgICBKID0gKHllYXIgKyBmKHllYXIgLyA0KSArIEkgKyAyIC0gQyArIGYoQyAvIDQpKSAlIDcsXG4gICAgICAgIC8vIG51bWJlciBvZiBkYXlzIGZyb20gMjEgTWFyY2ggdG8gdGhlIFN1bmRheSBvbiBvciBiZWZvcmUgdGhlIFBhc2NoYWwgZnVsbCBtb29uXG4gICAgICAgIEwgPSBJIC0gSixcbiAgICAgICAgbW9udGggPSAzICsgZigoTCArIDQwKSAvIDQ0KSxcbiAgICAgICAgZGF5ID0gTCArIDI4IC0gMzEgKiBmKG1vbnRoIC8gNCk7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xufSxcbi8vT250YXJpb1xuICAgIC8vIFRoaXJkIE1vbmRheSBpbiBGZWJydWFyeVxuICAgIGdldEZhbWlseURheTogZnVuY3Rpb24gKHllYXIsIHByb3ZpbmNlID0gXCJPbnRhcmlvXCIpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCAxLCAxKTtcblxuICAgICAgLy8gVGhlIGdldERheSgpIG1ldGhvZCByZXR1cm5zIHRoZSBkYXkgb2YgdGhlIHdlZWsgKGZyb20gMCB0byA2KSBmb3IgdGhlIHNwZWNpZmllZCBkYXRlLlxuICAgICAgdmFyIHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICAvLyB0b2RheSdzIGRhdGVcbiAgICAgIHZhciB0b2RheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IGtleTtcblxuICAgICAgc3dpdGNoICh3ZWVrZGF5KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwMlwiICsgKHRvZGF5ICsgMjIpO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIkZhbWlseSBEYXlcIiwgb2JzZXJ2ZWQ6IHRydWUsIG9ic2VydmVkRGF0ZTogeWVhciArIFwiMDJcIiArICh0b2RheSArIDIzKSB9O1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAga2V5ID0geWVhciArIFwiMDJcIiArICh0b2RheSArIDIxKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGtleSwgbmFtZTogXCJGYW1pbHkgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwMlwiICsgKHRvZGF5ICsgMjApO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIkZhbWlseSBEYXlcIiwgb2JzZXJ2ZWQ6IGZhbHNlfTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjAyXCIgKyAodG9kYXkgKyAxOSk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiRmFtaWx5IERheVwiLCBvYnNlcnZlZDogZmFsc2V9O1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAga2V5ID0geWVhciArIFwiMDJcIiArICh0b2RheSArIDE4KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGtleSwgbmFtZTogXCJGYW1pbHkgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwMlwiICsgKHRvZGF5ICsgMTcpO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIkZhbWlseSBEYXlcIiwgb2JzZXJ2ZWQ6IGZhbHNlfTtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjAyXCIgKyAodG9kYXkgKyAxNik7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiRmFtaWx5IERheVwiLCBvYnNlcnZlZDogdHJ1ZSwgb2JzZXJ2ZWREYXRlOiB5ZWFyICsgXCIwMlwiICsgKHRvZGF5ICsgMTUpIH07XG4gICAgICB9XG4gIH0sXG5cblxuICBnZXRWaWN0b3JpYURheTogZnVuY3Rpb24gKHllYXIsIHByb3ZpbmNlID0gXCJPbnRhcmlvXCIpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCA0LCAyNCk7XG4gICAgICBjb25zdCB3ZWVrZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQga2V5O1xuICAgICAgc3dpdGNoICh3ZWVrZGF5KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgKHRvZGF5IC0gNik7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgdG9kYXk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgKHRvZGF5IC0gMSk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgKHRvZGF5IC0gMik7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgKHRvZGF5IC0gMyk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgKHRvZGF5IC0gNCk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwNVwiICsgKHRvZGF5IC0gNSk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVmljdG9yaWEgRGF5XCIsIG9ic2VydmVkOiBmYWxzZX07XG4gICAgICB9XG4gIH0sXG5cbiAgLy9maXJzdCBNb25kYXkgaW4gQXVndXN0XG4gIGdldENpdmljRGF5OmZ1bmN0aW9uKHllYXIpe1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsNywxKTtcbiAgICAgIGNvbnN0IHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBrZXk7XG4gICAgICBzd2l0Y2god2Vla2RheSl7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwODBcIiArICh0b2RheSArIDEpO1xuICAgICAgICAgICAgICByZXR1cm4ge2lkOiBrZXksIG5hbWU6XCJDaXZpYyBEYXlcIn07XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIwODAxXCI7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkNpdmljIERheVwifTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA4MFwiICsgKHRvZGF5ICsgNik7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkNpdmljIERheVwifTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA4MFwiICsgKHRvZGF5ICsgNSk7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkNpdmljIERheVwifTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA4MFwiICsgKHRvZGF5ICsgNCk7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkNpdmljIERheVwifTtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA4MFwiICsgKHRvZGF5ICsgMyk7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkNpdmljIERheVwifTtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjA4MFwiICsgKHRvZGF5ICsgMik7XG4gICAgICAgICAgICAgIHJldHVybiB7aWQ6IGtleSwgbmFtZTpcIkNpdmljIERheVwifTtcbiAgICAgIH1cbiAgfSxcblxuIC8vU2Vjb25kIE1vbmRheSBpbiBPY3RvYmVyXG4gIGdldFRoYW5rc2dpdmluZ0RheTogZnVuY3Rpb24gKHllYXIsIHByb3ZpbmNlID0gXCJPbnRhcmlvXCIpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCA5LCAxKTtcblxuICAgICAgLy8gVGhlIGdldERheSgpIG1ldGhvZCByZXR1cm5zIHRoZSBkYXkgb2YgdGhlIHdlZWsgKGZyb20gMCB0byA2KSBmb3IgdGhlIHNwZWNpZmllZCBkYXRlLlxuICAgICAgdmFyIHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICAvLyB0b2RheSdzIGRhdGVcbiAgICAgIHZhciB0b2RheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IGtleTtcblxuICAgICAgc3dpdGNoICh3ZWVrZGF5KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBrZXkgPSB0b2RheSArIDggPCAxMD8geWVhciArIFwiMTAwXCIgKyAodG9kYXkgKyA4KSA6ICB5ZWFyICsgXCIxMFwiICsgKHRvZGF5ICsgMSk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVGhhbmtzZ2l2aW5nIERheVwifTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGtleSA9IHllYXIgKyBcIjEwXCIgKyAodG9kYXkgKyA3KTtcbiAgICAgICAgICAgICAga2V5ID0gdG9kYXkgKyA3IDwgMTA/IHllYXIgKyBcIjEwMFwiICsgKHRvZGF5ICsgNykgOiAgeWVhciArIFwiMTBcIiArICh0b2RheSArIDEpO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIlRoYW5rc2dpdmluZyBEYXlcIn07XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIxMFwiICsgKHRvZGF5ICsgMTMpO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIlRoYW5rc2dpdmluZyBEYXlcIn07XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIxMFwiICsgKHRvZGF5ICsgMTIpO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIlRoYW5rc2dpdmluZyBEYXlcIn07XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIxMFwiICsgKHRvZGF5ICsgMTEpO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIlRoYW5rc2dpdmluZyBEYXlcIn07XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIxMFwiICsgKHRvZGF5ICsgMTApO1xuICAgICAgICAgICAgICByZXR1cm4geyBpZDoga2V5LCBuYW1lOiBcIlRoYW5rc2dpdmluZyBEYXlcIn07XG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBrZXkgPSB5ZWFyICsgXCIxMFwiICsgKHRvZGF5ICsgOSk7XG4gICAgICAgICAgICAgIHJldHVybiB7IGlkOiBrZXksIG5hbWU6IFwiVGhhbmtzZ2l2aW5nIERheVwifTtcbiAgICAgIH1cbiAgfSxcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBOYXRpb25hbFN0YXRIb2xpZGF5O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvU3RhdEhvbGlkYXlOYXRpb25hbC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=