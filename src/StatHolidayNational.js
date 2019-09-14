module.exports = {
    StatHolidays:[],
    getStatHolidays:function(year){
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

    getNewYearsDay:function(year){
        const date = new Date(year,0,1);
        return{id:year+"0101",name:"New Year's Day"};
    },

    //Friday before Easter Sunday
    getGoodFriday:function(year){
        const EasterSundayDate = this.getEasterSunday(year);
        var month = EasterSundayDate.getMonth()+ 1;
        var goodFridayDate = EasterSundayDate.getDate() - 2;
        if(goodFridayDate<=0){
            month--;
            goodFridayDate += 31;

        }
        if(goodFridayDate<10){
            return{id:year + "0" + month + "0" + goodFridayDate, name:"Good Friday"};
        }else{
            return{id:year + "0" + month + goodFridayDate, name:"Good Friday"};
        }
    },

    getCanadaDay:function(year){
        const date = new Date(year,6,1);
        return{id: year + "0701",name:"Canada Day"};
    },

    //first Monday in September
    getLabourDay:function(year){
        const date = new Date(year,8,1);
        const weekday = date.getDay();
        const today = date.getDate();
        let key;
        switch(weekday){
            case 0:
                key = year + "090" + (today + 1);
                return {id: key, name:"Labour Day"};
            case 1:
                key = year + "0901";
                return {id: key, name:"Labour Day"};
            case 2:
                key = year + "090" + (today + 6);
                return {id: key, name:"Labour Day"};
            case 3:
                key = year + "090" + (today + 5);
                return {id: key, name:"Labour Day"};
            case 4:
                key = year + "090" + (today + 4);
                return {id: key, name:"Labour Day"};
            case 5:
                key = year + "090" + (today + 3);
                return {id: key, name:"Labour Day"};
            case 6:
                key = year + "090" + (today + 2);
                return {id: key, name:"Labour Day"};
        }
    },

    getChristmasDay:function(year){
        const date = new Date(year,11,25);
        return {id: year+ "1225",name:"Christmas Day"};
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

// module.exports.NationalStatHoliday =  NationalStatHoliday;
// export default NationalStatHoliday;
