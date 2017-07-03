//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var km = moment.defineLocale('km', {
    months: 'áááá¶_áá»áááá_áá¸áá¶_áááá¶_á§ááá¶_áá·áá»áá¶_áááááá¶_áá¸á á¶_ááááá¶_áá»áá¶_áá·áááá·áá¶_áááá¼'.split('_'),
    monthsShort: 'áááá¶_áá»áááá_áá¸áá¶_áááá¶_á§ááá¶_áá·áá»áá¶_áááááá¶_áá¸á á¶_ááááá¶_áá»áá¶_áá·áááá·áá¶_áááá¼'.split('_'),
    weekdays: 'á¢á¶áá·ááá_ááááá_á¢áááá¶á_áá»á_áááá ááááá·á_áá»ááá_áááá'.split('_'),
    weekdaysShort: 'á¢á¶áá·ááá_ááááá_á¢áááá¶á_áá»á_áááá ááááá·á_áá»ááá_áááá'.split('_'),
    weekdaysMin: 'á¢á¶áá·ááá_ááááá_á¢áááá¶á_áá»á_áááá ááááá·á_áá»ááá_áááá'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS : 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ááááááá áááá] LT',
        nextDay: '[ááá¢áá áááá] LT',
        nextWeek: 'dddd [áááá] LT',
        lastDay: '[áááá·ááá·á áááá] LT',
        lastWeek: 'dddd [ááááá¶á ááá»á] [áááá] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%sááá',
        past: '%sáá»á',
        s: 'ááá»áááá¶ááá·áá¶áá¸',
        m: 'áá½ááá¶áá¸',
        mm: '%d áá¶áá¸',
        h: 'áá½ááááá',
        hh: '%d áááá',
        d: 'áá½ááááá',
        dd: '%d áááá',
        M: 'áá½ááá',
        MM: '%d áá',
        y: 'áá½ááááá¶á',
        yy: '%d áááá¶á'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return km;

})));
