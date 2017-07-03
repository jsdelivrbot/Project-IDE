//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Krasen Borisov : https://github.com/kraz

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var bg = moment.defineLocale('bg', {
    months : 'ÑÐ½ÑÐ°ÑÐ¸_ÑÐµÐ²ÑÑÐ°ÑÐ¸_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐ¸Ð»_Ð¼Ð°Ð¹_ÑÐ½Ð¸_ÑÐ»Ð¸_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸_Ð¾ÐºÑÐ¾Ð¼Ð²ÑÐ¸_Ð½Ð¾ÐµÐ¼Ð²ÑÐ¸_Ð´ÐµÐºÐµÐ¼Ð²ÑÐ¸'.split('_'),
    monthsShort : 'ÑÐ½Ñ_ÑÐµÐ²_Ð¼Ð°Ñ_Ð°Ð¿Ñ_Ð¼Ð°Ð¹_ÑÐ½Ð¸_ÑÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ_Ð½Ð¾Ðµ_Ð´ÐµÐº'.split('_'),
    weekdays : 'Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²ÑÐ¾ÑÐ½Ð¸Ðº_ÑÑÑÐ´Ð°_ÑÐµÑÐ²ÑÑÑÑÐº_Ð¿ÐµÑÑÐº_ÑÑÐ±Ð¾ÑÐ°'.split('_'),
    weekdaysShort : 'Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²ÑÐ¾_ÑÑÑ_ÑÐµÑ_Ð¿ÐµÑ_ÑÑÐ±'.split('_'),
    weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'D.MM.YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY H:mm',
        LLLL : 'dddd, D MMMM YYYY H:mm'
    },
    calendar : {
        sameDay : '[ÐÐ½ÐµÑ Ð²] LT',
        nextDay : '[Ð£ÑÑÐµ Ð²] LT',
        nextWeek : 'dddd [Ð²] LT',
        lastDay : '[ÐÑÐµÑÐ° Ð²] LT',
        lastWeek : function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[Ð Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°ÑÐ°] dddd [Ð²] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Ð Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT';
            }
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'ÑÐ»ÐµÐ´ %s',
        past : 'Ð¿ÑÐµÐ´Ð¸ %s',
        s : 'Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑÐ½Ð´Ð¸',
        m : 'Ð¼Ð¸Ð½ÑÑÐ°',
        mm : '%d Ð¼Ð¸Ð½ÑÑÐ¸',
        h : 'ÑÐ°Ñ',
        hh : '%d ÑÐ°ÑÐ°',
        d : 'Ð´ÐµÐ½',
        dd : '%d Ð´Ð½Ð¸',
        M : 'Ð¼ÐµÑÐµÑ',
        MM : '%d Ð¼ÐµÑÐµÑÐ°',
        y : 'Ð³Ð¾Ð´Ð¸Ð½Ð°',
        yy : '%d Ð³Ð¾Ð´Ð¸Ð½Ð¸'
    },
    ordinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|ÑÐ¸|Ð²Ð¸|ÑÐ¸|Ð¼Ð¸)/,
    ordinal : function (number) {
        var lastDigit = number % 10,
            last2Digits = number % 100;
        if (number === 0) {
            return number + '-ÐµÐ²';
        } else if (last2Digits === 0) {
            return number + '-ÐµÐ½';
        } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ÑÐ¸';
        } else if (lastDigit === 1) {
            return number + '-Ð²Ð¸';
        } else if (lastDigit === 2) {
            return number + '-ÑÐ¸';
        } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-Ð¼Ð¸';
        } else {
            return number + '-ÑÐ¸';
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

return bg;

})));
