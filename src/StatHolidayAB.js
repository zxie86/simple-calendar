// import NationalStatHoliday from './StatHolidayNational.js';
// input: year, province
// output: an array of stat holidays

var AlbertaStatHoliday;
AlbertaStatHoliday.prototype = Object.create(NationalStatHoliday),

AlbertaStatHoliday = {
    // statHolidays: [],
    getStatHolidays: function (year, province = "Alberta") {
        this.StatHolidays.push(this.getFamilyDay(year));
        this.StatHolidays.push(this.getVictoriaDay(year));
        this.StatHolidays.push(this.getThanksgivingDay(year));
        this.StatHolidays.push(this.getRemembranceDay(year));

        return this.statHolidays;
    },
 
    getFamilyDay: function (year, province = "Alberta") {
        const date = new Date(year, 1, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();
        let key;

        switch (weekday) {
            case 0:
                key = year + "02" + (today + 22);
                return { id: key, name: "Family Day" };
            case 1:
                key = year + "02" + (today + 21);
                return { id: key, name: "Family Day"};
            case 2:
                key = year + "02" + (today + 20);
                return { id: key, name: "Family Day"};
            case 3:
                key = year + "02" + (today + 19);
                return { id: key, name: "Family Day"};
            // Thursday
            case 4:
                key = year + "02" + (today + 18);
                return { id: key, name: "Family Day"};
            case 5:
                key = year + "02" + (today + 17);
                return { id: key, name: "Family Day"};
            case 6:
                key = year + "02" + (today + 16);
                return { id: key, name: "Family Day" };
        }
    },


    getVictoriaDay: function (year, province = "Alberta") {
        const date = new Date(year, 4, 24);
        const weekday = date.getDay();
        const today = date.getDate();
        let key;
        switch (weekday) {
            case 0:
                key = year + "05" + (today - 6);
                return { id: key, name: "Victoria Day"};
            case 1:
                key = year + "05" + today;
                return { id: key, name: "Victoria Day"};
            case 2:
                key = year + "05" + (today - 1);
                return { id: key, name: "Victoria Day"};
            case 3:
                key = year + "05" + (today - 2);
                return { id: key, name: "Victoria Day"};
            // Thursday
            case 4:
                key = year + "05" + (today - 3);
                return { id: key, name: "Victoria Day"};
            case 5:
                key = year + "05" + (today - 4);
                return { id: key, name: "Victoria Day"};
            case 6:
                key = year + "05" + (today - 5);
                return { id: key, name: "Victoria Day"};
        }
    },
   
   
    getThanksgivingDay: function (year, province = "Alberta") {
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

    getRemembranceDay: function (year, province = "Alberta") {
        const date = new Date(year, 10, 11);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        // Saturday
        if (weekday === 6) {
            return { id: year + "11" + today, name: "Remembrance Day"};
        }
        // Sunday
        else if (weekday === 0) {
            return { id: year + "11" + today, name: "Remembrance Day" };
        }
        else {
            return { id: year + "11" + today, name: "Remembrance Day" };
        }
    }
};
export default AlbertaStatHoliday;