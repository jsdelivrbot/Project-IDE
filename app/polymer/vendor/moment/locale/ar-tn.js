//! moment.js locale configuration
//! locale  :  Arabic (Tunisia) [ar-tn]
//! author : Nader Toukabri : https://github.com/naderio

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var arTn = moment.defineLocale('ar-tn', {
    months: 'Ø¬Ø§ÙÙÙ_ÙÙÙØ±Ù_ÙØ§Ø±Ø³_Ø£ÙØ±ÙÙ_ÙØ§Ù_Ø¬ÙØ§Ù_Ø¬ÙÙÙÙØ©_Ø£ÙØª_Ø³Ø¨ØªÙØ¨Ø±_Ø£ÙØªÙØ¨Ø±_ÙÙÙÙØ¨Ø±_Ø¯ÙØ³ÙØ¨Ø±'.split('_'),
    monthsShort: 'Ø¬Ø§ÙÙÙ_ÙÙÙØ±Ù_ÙØ§Ø±Ø³_Ø£ÙØ±ÙÙ_ÙØ§Ù_Ø¬ÙØ§Ù_Ø¬ÙÙÙÙØ©_Ø£ÙØª_Ø³Ø¨ØªÙØ¨Ø±_Ø£ÙØªÙØ¨Ø±_ÙÙÙÙØ¨Ø±_Ø¯ÙØ³ÙØ¨Ø±'.split('_'),
    weekdays: 'Ø§ÙØ£Ø­Ø¯_Ø§ÙØ¥Ø«ÙÙÙ_Ø§ÙØ«ÙØ§Ø«Ø§Ø¡_Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡_Ø§ÙØ®ÙÙØ³_Ø§ÙØ¬ÙØ¹Ø©_Ø§ÙØ³Ø¨Øª'.split('_'),
    weekdaysShort: 'Ø£Ø­Ø¯_Ø¥Ø«ÙÙÙ_Ø«ÙØ§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®ÙÙØ³_Ø¬ÙØ¹Ø©_Ø³Ø¨Øª'.split('_'),
    weekdaysMin: 'Ø­_Ù_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
    weekdaysParseExact : true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Ø§ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        nextDay: '[ØºØ¯Ø§ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        nextWeek: 'dddd [Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        lastDay: '[Ø£ÙØ³ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        lastWeek: 'dddd [Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'ÙÙ %s',
        past: 'ÙÙØ° %s',
        s: 'Ø«ÙØ§Ù',
        m: 'Ø¯ÙÙÙØ©',
        mm: '%d Ø¯ÙØ§Ø¦Ù',
        h: 'Ø³Ø§Ø¹Ø©',
        hh: '%d Ø³Ø§Ø¹Ø§Øª',
        d: 'ÙÙÙ',
        dd: '%d Ø£ÙØ§Ù',
        M: 'Ø´ÙØ±',
        MM: '%d Ø£Ø´ÙØ±',
        y: 'Ø³ÙØ©',
        yy: '%d Ø³ÙÙØ§Øª'
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});

return arTn;

})));
