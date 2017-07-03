//! moment.js locale configuration
//! locale : Morocco Central Atlas TamaziÉ£t (tzm)
//! author : Abdel Said : https://github.com/abdelsaid

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var tzm = moment.defineLocale('tzm', {
        months : 'âµâµâµâ´°âµ¢âµ_â´±âµâ´°âµ¢âµ_âµâ´°âµâµ_âµâ´±âµâµâµ_âµâ´°âµ¢âµ¢âµ_âµ¢âµâµâµ¢âµ_âµ¢âµâµâµ¢âµâµ£_âµâµâµâµ_âµâµâµâ´°âµâ´±âµâµ_â´½âµâµâ´±âµ_âµâµâµ¡â´°âµâ´±âµâµ_â´·âµâµâµâ´±âµâµ'.split('_'),
        monthsShort : 'âµâµâµâ´°âµ¢âµ_â´±âµâ´°âµ¢âµ_âµâ´°âµâµ_âµâ´±âµâµâµ_âµâ´°âµ¢âµ¢âµ_âµ¢âµâµâµ¢âµ_âµ¢âµâµâµ¢âµâµ£_âµâµâµâµ_âµâµâµâ´°âµâ´±âµâµ_â´½âµâµâ´±âµ_âµâµâµ¡â´°âµâ´±âµâµ_â´·âµâµâµâ´±âµâµ'.split('_'),
        weekdays : 'â´°âµâ´°âµâ´°âµ_â´°âµ¢âµâ´°âµ_â´°âµâµâµâ´°âµ_â´°â´½âµâ´°âµ_â´°â´½âµ¡â´°âµ_â´°âµâµâµâµ¡â´°âµ_â´°âµâµâ´¹âµ¢â´°âµ'.split('_'),
        weekdaysShort : 'â´°âµâ´°âµâ´°âµ_â´°âµ¢âµâ´°âµ_â´°âµâµâµâ´°âµ_â´°â´½âµâ´°âµ_â´°â´½âµ¡â´°âµ_â´°âµâµâµâµ¡â´°âµ_â´°âµâµâ´¹âµ¢â´°âµ'.split('_'),
        weekdaysMin : 'â´°âµâ´°âµâ´°âµ_â´°âµ¢âµâ´°âµ_â´°âµâµâµâ´°âµ_â´°â´½âµâ´°âµ_â´°â´½âµ¡â´°âµ_â´°âµâµâµâµ¡â´°âµ_â´°âµâµâ´¹âµ¢â´°âµ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[â´°âµâ´·âµ â´´] LT',
            nextDay: '[â´°âµâ´½â´° â´´] LT',
            nextWeek: 'dddd [â´´] LT',
            lastDay: '[â´°âµâ´°âµâµ â´´] LT',
            lastWeek: 'dddd [â´´] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'â´·â´°â´·âµ âµ âµ¢â´°âµ %s',
            past : 'âµ¢â´°âµ %s',
            s : 'âµâµâµâ´½',
            m : 'âµâµâµâµâ´º',
            mm : '%d âµâµâµâµâ´º',
            h : 'âµâ´°âµâ´°',
            hh : '%d âµâ´°âµâµâ´°âµâµâµ',
            d : 'â´°âµâµ',
            dd : '%d oâµâµâ´°âµ',
            M : 'â´°âµ¢oâµâµ',
            MM : '%d âµâµ¢âµ¢âµâµâµ',
            y : 'â´°âµâ´³â´°âµ',
            yy : '%d âµâµâ´³â´°âµâµ'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return tzm;

}));