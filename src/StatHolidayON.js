// import NationalStatHoliday from './StatHolidayNational.js';
// input: year, province
// output: an array of stat holidays

var OntarioStatHoliday;
OntarioStatHoliday.prototype = Object.create(NationalStatHoliday),

OntarioStatHoliday = {
    // statHolidays: [],
    getStatHolidays: function (year, province = "Ontario") {
        this.StatHolidays.push(this.getFamilyDay(year));
        this.StatHolidays.push(this.getVictoriaDay(year));
        this.StatHolidays.push(this.getCivicDay(year));
        this.StatHolidays.push(this.getThanksgivingDay(year));
       

        return this.statHolidays;
    },
 
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
                return { id: key, name: "Family Day", observed: false};
            case 2:
                key = year + "02" + (today + 20);
                return { id: key, name: "Family Day", observed: false};
            case 3:
                key = year + "02" + (today + 19);
                return { id: key, name: "Family Day", observed: false};
            case 4:
                key = year + "02" + (today + 18);
                return { id: key, name: "Family Day", observed: false};
            case 5:
                key = year + "02" + (today + 17);
                return { id: key, name: "Family Day", observed: false};
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
                return { id: key, name: "Victoria Day", observed: false};
            case 1:
                key = year + "05" + today;
                return { id: key, name: "Victoria Day", observed: false};
            case 2:
                key = year + "05" + (today - 1);
                return { id: key, name: "Victoria Day", observed: false};
            case 3:
                key = year + "05" + (today - 2);
                return { id: key, name: "Victoria Day", observed: false};
            case 4:
                key = year + "05" + (today - 3);
                return { id: key, name: "Victoria Day", observed: false};
            case 5:
                key = year + "05" + (today - 4);
                return { id: key, name: "Victoria Day", observed: false};
            case 6:
                key = year + "05" + (today - 5);
                return { id: key, name: "Victoria Day", observed: false};
        }
    },
   
    //first Monday in August
    getCivicDay:function(year){
        const date = new Date(year,7,1);
        const weekday = date.getDay();
        const today = date.getDate();
        let key;
        switch(weekday){
            case 0:
                key = year + "080" + (today + 1);
                return {id: key, name:"Civic Day"};
            case 1:
                key = year + "0801";
                return {id: key, name:"Civic Day"};
            case 2:
                key = year + "080" + (today + 6);
                return {id: key, name:"Civic Day"};
            case 3:
                key = year + "080" + (today + 5);
                return {id: key, name:"Civic Day"};
            case 4:
                key = year + "080" + (today + 4);
                return {id: key, name:"Civic Day"};
            case 5:
                key = year + "080" + (today + 3);
                return {id: key, name:"Civic Day"};
            case 6:
                key = year + "080" + (today + 2);
                return {id: key, name:"Civic Day"};
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
                key = today + 8 < 10? year + "100" + (today + 8) :  year + "10" + (today + 1);
                return { id: key, name: "Thanksgiving Day"};
            case 1:
                key = year + "10" + (today + 7);
                key = today + 7 < 10? year + "100" + (today + 7) :  year + "10" + (today + 1);
                return { id: key, name: "Thanksgiving Day"};
            case 2:
                key = year + "10" + (today + 13);
                return { id: key, name: "Thanksgiving Day"};
            case 3:
                key = year + "10" + (today + 12);
                return { id: key, name: "Thanksgiving Day"};
            case 4:
                key = year + "10" + (today + 11);
                return { id: key, name: "Thanksgiving Day"};
            case 5:
                key = year + "10" + (today + 10);
                return { id: key, name: "Thanksgiving Day"};
            case 6:
                key = year + "10" + (today + 9);
                return { id: key, name: "Thanksgiving Day"};
        }
    },

};
export default OntarioStatHoliday;