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
/******/ 	__webpack_require__.p = "/";
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE3ZGZhZjhhNDU1ZWEwNGQxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIk5hdGlvbmFsU3RhdEhvbGlkYXkiLCJkYXRlIiwiaG9saWRheSIsInllYXIiLCJTdGF0SG9saWRheXMiLCJ0ZW1wU3RhdEhvbGlkYXlzIiwid2luZG93Iiwib25sb2FkIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicHJlTG9hZCIsInJvd3NPZkN1cnJlbnRNb250aCIsIkNvdW50T2ZSb3ciLCJyZW5kZXJDYWxlbmRhckZyYW1lIiwicmVuZGVyQ2FsZW5kYXJEYXlzIiwicHJldk1vbnRoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibmV4dE1vbnRoIiwiY3VycmVudFllYXIiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnb1RvUHJldk1vbnRoIiwiZ29Ub05leHRNb250aCIsInVwZGF0ZVN0YXRIb2xpZGF5IiwibW9udGgiLCJnZXRNb250aCIsImZpcnN0RGF5IiwiZ2V0RGF5IiwibnVtYmVyT2ZEYXkiLCJnZXREYXRlIiwicm93cyIsIk1hdGgiLCJjZWlsIiwiY2FsZW5kYXIiLCJpbm5lckhUTUwiLCJpIiwicm93IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImoiLCJjZWxsIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlDdXJyZW50WWVhciIsImRpc3BsYXlDdXJyZW50TW9udGgiLCJjdXJyZW50TW9udGgiLCJib2R5IiwiYmFja2dyb3VuZEltYWdlIiwic3RhbmRhcmRNb250aCIsInRvZGF5IiwibnVtYmVyT2ZEYXlzIiwiY291bnQiLCJzdGFydEluZGV4IiwiY3VycmVudERhdGUiLCJjYWxlbmRhckNlbGwiLCJzcGFuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiY29sb3IiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJob2xpZGF5U3BhbiIsImhvbGlkYXlOYW1lIiwiZ2V0U3RhdEhvbGlkYXlOYW1lQnlEYXRlIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwic2V0RnVsbFllYXIiLCJnZXRTdGF0SG9saWRheXMiLCJsZW5ndGgiLCJwdXNoIiwiaWQiLCJkYXRlSW5TdHJpbmciLCJzdGF0SG9saWRheSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxRQUFPQSxtQkFBUCxNQUFnQywwQkFBaEM7O0FBRUEsS0FBSUMsSUFBSjtBQUNBLEtBQUlDLE9BQUo7QUFDQSxLQUFJQyxJQUFKO0FBQ0EsS0FBSUMsZUFBZSxFQUFuQjtBQUNBLEtBQUlDLG1CQUFtQixFQUF2QjtBQUNBQyxRQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEJOLFlBQU8sSUFBSU8sSUFBSixFQUFQO0FBQ0FMLFlBQU9GLEtBQUtRLFdBQUwsRUFBUDtBQUNBQzs7QUFFQSxTQUFJQyxxQkFBcUJDLFdBQVdYLElBQVgsQ0FBekI7QUFDQVkseUJBQW9CRixrQkFBcEI7QUFDQUcsd0JBQW1CYixJQUFuQjtBQUNILEVBUkQ7QUFTQSxVQUFTUyxPQUFULEdBQWtCO0FBQ2QsU0FBSUssWUFBWUMsU0FBU0Msc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkMsQ0FBN0MsQ0FBaEI7QUFDQSxTQUFJQyxZQUFZRixTQUFTQyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxDQUFoQjtBQUNBLFNBQUlFLGNBQWNILFNBQVNJLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7QUFDQUwsZUFBVU0sZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBbUND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QyxFQUFvQ3FDLEVBQTFEO0FBQ0g7QUFDRCxZQUFPcEUsZ0JBQVA7QUFFSDs7QUFFRCxVQUFTNkQsd0JBQVQsQ0FBa0NRLFlBQWxDLEVBQStDO0FBQzNDOztBQUVBLFVBQUssSUFBSXRDLElBQUksQ0FBYixFQUFnQkEsSUFBR3BDLG9CQUFvQkksWUFBcEIsQ0FBaUNtRSxNQUFwRCxFQUE0RG5DLEdBQTVELEVBQWdFO0FBQzVELGVBQU11QyxjQUFjM0Usb0JBQW9CSSxZQUFwQixDQUFpQ2dDLENBQWpDLENBQXBCO0FBQ0EsYUFBR3NDLGlCQUFpQkMsWUFBWUYsRUFBaEMsRUFBbUM7QUFDL0Isb0JBQU9FLFlBQVlDLElBQW5CO0FBQ0g7QUFDSjtBQUNELFlBQU8sRUFBUDtBQUNILEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOWE3ZGZhZjhhNDU1ZWEwNGQxYzZcbiAqKi8iLCJpbXBvcnQgTmF0aW9uYWxTdGF0SG9saWRheSBmcm9tICcuL1N0YXRIb2xpZGF5TmF0aW9uYWwuanMnO1xuXG52YXIgZGF0ZTtcbnZhciBob2xpZGF5IDtcbnZhciB5ZWFyO1xudmFyIFN0YXRIb2xpZGF5cyA9IFtdO1xudmFyIHRlbXBTdGF0SG9saWRheXMgPSBbXTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBwcmVMb2FkKCk7XG5cbiAgICB2YXIgcm93c09mQ3VycmVudE1vbnRoID0gQ291bnRPZlJvdyhkYXRlKTtcbiAgICByZW5kZXJDYWxlbmRhckZyYW1lKHJvd3NPZkN1cnJlbnRNb250aCk7XG4gICAgcmVuZGVyQ2FsZW5kYXJEYXlzKGRhdGUpO1xufVxuZnVuY3Rpb24gcHJlTG9hZCgpe1xuICAgIHZhciBwcmV2TW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJldk1vbnRoXCIpWzBdO1xuICAgIHZhciBuZXh0TW9udGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dE1vbnRoXCIpWzBdO1xuICAgIHZhciBjdXJyZW50WWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFllYXJcIik7XG4gICAgcHJldk1vbnRoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdvVG9QcmV2TW9udGgpO1xuICAgIG5leHRNb250aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnb1RvTmV4dE1vbnRoKTtcblxuICAgIGhvbGlkYXkgPSB1cGRhdGVTdGF0SG9saWRheSh5ZWFyKTtcblxufVxuZnVuY3Rpb24gQ291bnRPZlJvdyhkYXRlKXtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgdmFyIGZpcnN0RGF5ID0gbmV3IERhdGUoeWVhcixtb250aCwxKS5nZXREYXkoKTtcbiAgICB2YXIgbnVtYmVyT2ZEYXkgPSBuZXcgRGF0ZSh5ZWFyLG1vbnRoICsgMSwwKS5nZXREYXRlKCk7XG5cbiAgICBpZiAoZmlyc3REYXkgPT0gMCl7XG4gICAgICAgIGZpcnN0RGF5ID0gNztcbiAgICB9ZWxzZXtcbiAgICAgICAgZmlyc3REYXk9Zmlyc3REYXk7XG4gICAgfVxuICAgIHZhciByb3dzID0gTWF0aC5jZWlsKChudW1iZXJPZkRheSArIGZpcnN0RGF5IC0gMSkgLyA3KTtcbiAgICByZXR1cm4gcm93cztcbn1cbmZ1bmN0aW9uIHJlbmRlckNhbGVuZGFyRnJhbWUocm93cyl7XG4gICAgdmFyIGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhbGVuZGFyQm9keVwiKVswXTtcbiAgICBjYWxlbmRhci5pbm5lckhUTUw9XCJcIjtcblxuICAgIGZvcih2YXIgaSA9IDA7aSA8IHJvd3M7IGkrKyl7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuY2xhc3NOYW1lID0gXCJyb3dcIjtcblxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNyA7aisrKXtcbiAgICAgICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lPSBcImNvbFwiO1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxlbmRhci5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50WWVhcigpe1xuICAgIHZhciBjdXJyZW50WWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFllYXJcIik7XG4gICAgY3VycmVudFllYXIuaW5uZXJIVE1MID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudE1vbnRoKG1vbnRoKXtcbiAgICB2YXIgY3VycmVudE1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50TW9udGhcIik7XG5cbiAgICBzd2l0Y2gobW9udGgpe1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0phbic7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvamFuLmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdGZWInO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL2ZlYi5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnTWFyJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9tYXIuanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0Fwcic7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvYXByLmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdNYXknO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL21heS5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnSnVuJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9qdW4uanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0p1bCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvanVsLmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdBdWcnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL2F1Zy5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnU2VwJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9zZXAuanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ09jdCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCIuLi9pbWcvb2N0LmpwZ1wiKSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5pbm5lckhUTUwgPSAnTm92JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIi4uL2ltZy9ub3YuanBnXCIpJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgY3VycmVudE1vbnRoLmlubmVySFRNTCA9ICdEZWMnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiLi4vaW1nL2RlYy5qcGdcIiknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjdXJyZW50TW9udGguaW5uZXJIVE1MID0gJ0Vycm9yJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxufVxuZnVuY3Rpb24gcmVuZGVyQ2FsZW5kYXJEYXlzKGRhdGUpIHtcblxudmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG52YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG52YXIgc3RhbmRhcmRNb250aDtcbnZhciB0b2RheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG5cbnZhciBmaXJzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKTtcbnZhciBudW1iZXJPZkRheXMgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTtcblxudmFyIGNvdW50ID0gMTtcbmZpcnN0RGF5ID0gZmlyc3REYXkgPT0gMCA/IDc6IGZpcnN0RGF5O1xudmFyIHN0YXJ0SW5kZXggPSBmaXJzdERheSArIDY7XG52YXIgY3VycmVudERhdGUgPSBkYXRlO1xuXG53aGlsZSAoY291bnQgPD0gbnVtYmVyT2ZEYXlzKSB7XG4gICAgdmFyIGNhbGVuZGFyQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xcIik7XG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IGNvdW50O1xuXG4gICAgLy8gaWYgdG9kYXkgaXMgU2F0dXJkYXkgb3IgU3VuZGF5LCBtYWtlIGl0IHJlZFxuICAgIGlmICgoc3RhcnRJbmRleCAtIDUpICUgNyA9PT0gMCB8fCAoc3RhcnRJbmRleCAtIDYpICUgNyA9PT0gMCkge1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgLy8gZGlzcGxheSB0b2RheVxuICAgIGlmIChjb3VudCA9PSB0b2RheSl7XG4gICAgICAgIGNhbGVuZGFyQ2VsbFtzdGFydEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ICcjRDRGMjZGJztcbiAgICB9XG5cbiAgICAvLyBpZiB0b2RheSBpcyBhIHN0YXQgaG9saWRheSBtYWtlIGl0IHJlZFxuICAgIGNvdW50ID0gY291bnQgPCAxMD8gXCIwXCIgKyBjb3VudDogY291bnQudG9TdHJpbmcoKTtcbiAgICBzdGFuZGFyZE1vbnRoID0gbW9udGggPCA5PyBcIjBcIiArIChtb250aCsxKTogKG1vbnRoKzEpLnRvU3RyaW5nKCk7XG4gICAgaWYoaG9saWRheS5pbmRleE9mKHllYXIudG9TdHJpbmcoKSArIHN0YW5kYXJkTW9udGggKyBjb3VudCkgPiAtMSl7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIGNhbGVuZGFyQ2VsbFtzdGFydEluZGV4XS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIHZhciBob2xpZGF5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbGlkYXlOYW1lID0gZ2V0U3RhdEhvbGlkYXlOYW1lQnlEYXRlKHllYXIudG9TdHJpbmcoKSArIHN0YW5kYXJkTW9udGggKyBjb3VudCk7XG4gICAgaWYoKGhvbGlkYXkuaW5kZXhPZih5ZWFyLnRvU3RyaW5nKCkgKyBzdGFuZGFyZE1vbnRoICsgY291bnQpID4gLTEpICYmIChob2xpZGF5TmFtZSAhPSBcIlwiKSl7XG4gICAgICAgIGhvbGlkYXlTcGFuLmlubmVySFRNTCA9IGhvbGlkYXlOYW1lO1xuICAgICAgICBob2xpZGF5U3Bhbi5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGhvbGlkYXlTcGFuLnN0eWxlLmZvbnRTaXplID0gJzQ1JSc7XG4gICAgICAgIGhvbGlkYXlTcGFuLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnMCBweCc7XG5cbiAgICB9XG4gICAgaG9saWRheVNwYW4uY2xhc3NMaXN0LmFkZCgndGV4dC1jZW50ZXInKTtcbiAgICBjYWxlbmRhckNlbGxbc3RhcnRJbmRleF0uYXBwZW5kQ2hpbGQoaG9saWRheVNwYW4pO1xuXG4gICAgc3RhcnRJbmRleCsrO1xuICAgIGNvdW50Kys7XG59XG5kaXNwbGF5Q3VycmVudE1vbnRoKG1vbnRoKTtcbmRpc3BsYXlDdXJyZW50WWVhcigpO1xufVxuXG5mdW5jdGlvbiBnb1RvUHJldk1vbnRoKCl7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgdmFyIHByZXZNb250aCA9IGRhdGUuZ2V0TW9udGgoKSAtMTtcbiAgICBpZihwcmV2TW9udGg8MCl7XG4gICAgICAgIHByZXZNb250aCA9IDExO1xuICAgICAgICB5ZWFyIC0tO1xuICAgICAgICBob2xpZGF5ID0gdXBkYXRlU3RhdEhvbGlkYXkoeWVhcik7XG5cbiAgICB9XG4gICAgLy8gdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcixwcmV2TW9udGgsY3VycmVudERhdGUpO1xuICAgIHZhciByb3dzT2ZDdXJyZW50TW9udGggPSBDb3VudE9mUm93KGRhdGUpO1xuICAgIHJlbmRlckNhbGVuZGFyRnJhbWUocm93c09mQ3VycmVudE1vbnRoKTtcbiAgICByZW5kZXJDYWxlbmRhckRheXMoZGF0ZSk7XG5cbn1cbmZ1bmN0aW9uIGdvVG9OZXh0TW9udGgoKXtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgY3VycmVudERhdGUgPSBkYXRlLmdldERhdGUoKTtcbiAgICB2YXIgbmV4dE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBpZihuZXh0TW9udGg+MTEpe1xuICAgICAgICBuZXh0TW9udGggPSAwO1xuICAgICAgICB5ZWFyICsrO1xuICAgICAgICBob2xpZGF5ID0gdXBkYXRlU3RhdEhvbGlkYXkoeWVhcik7XG5cbiAgICAgICAgfVxuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcixuZXh0TW9udGgsY3VycmVudERhdGUpO1xuICAgIHZhciByb3dzT2ZDdXJyZW50TW9udGggPSBDb3VudE9mUm93KGRhdGUpO1xuICAgIHJlbmRlckNhbGVuZGFyRnJhbWUocm93c09mQ3VycmVudE1vbnRoKTtcbiAgICByZW5kZXJDYWxlbmRhckRheXMoZGF0ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVTdGF0SG9saWRheSh5ZWFyKXtcbiAgICBOYXRpb25hbFN0YXRIb2xpZGF5LmdldFN0YXRIb2xpZGF5cyh5ZWFyKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpPCBOYXRpb25hbFN0YXRIb2xpZGF5LlN0YXRIb2xpZGF5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdGVtcFN0YXRIb2xpZGF5cy5wdXNoKE5hdGlvbmFsU3RhdEhvbGlkYXkuU3RhdEhvbGlkYXlzW2ldLmlkKVxuICAgIH1cbiAgICByZXR1cm4gdGVtcFN0YXRIb2xpZGF5cztcblxufVxuXG5mdW5jdGlvbiBnZXRTdGF0SG9saWRheU5hbWVCeURhdGUoZGF0ZUluU3RyaW5nKXtcbiAgICAvLyBpZighU3RhdEhvbGlkYXlzKSByZXR1cm4gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpPCBOYXRpb25hbFN0YXRIb2xpZGF5LlN0YXRIb2xpZGF5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHN0YXRIb2xpZGF5ID0gTmF0aW9uYWxTdGF0SG9saWRheS5TdGF0SG9saWRheXNbaV07XG4gICAgICAgIGlmKGRhdGVJblN0cmluZyA9PT0gc3RhdEhvbGlkYXkuaWQpe1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRIb2xpZGF5Lm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cblxuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2FsZW5kYXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9