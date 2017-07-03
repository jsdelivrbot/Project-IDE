//! moment.js locale configuration
//! locale : Persian (fa)
//! author : Ebrahim Byagowi : https://github.com/ebraminio

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var symbolMap = {
        '1': 'Û±',
        '2': 'Û²',
        '3': 'Û³',
        '4': 'Û´',
        '5': 'Ûµ',
        '6': 'Û¶',
        '7': 'Û·',
        '8': 'Û¸',
        '9': 'Û¹',
        '0': 'Û°'
    }, numberMap = {
        'Û±': '1',
        'Û²': '2',
        'Û³': '3',
        'Û´': '4',
        'Ûµ': '5',
        'Û¶': '6',
        'Û·': '7',
        'Û¸': '8',
        'Û¹': '9',
        'Û°': '0'
    };

    var fa = moment.defineLocale('fa', {
        months : 'ÚØ§ÙÙÛÙ_ÙÙØ±ÛÙ_ÙØ§Ø±Ø³_Ø¢ÙØ±ÛÙ_ÙÙ_ÚÙØ¦Ù_ÚÙØ¦ÛÙ_Ø§ÙØª_Ø³Ù¾ØªØ§ÙØ¨Ø±_Ø§Ú©ØªØ¨Ø±_ÙÙØ§ÙØ¨Ø±_Ø¯Ø³Ø§ÙØ¨Ø±'.split('_'),
        monthsShort : 'ÚØ§ÙÙÛÙ_ÙÙØ±ÛÙ_ÙØ§Ø±Ø³_Ø¢ÙØ±ÛÙ_ÙÙ_ÚÙØ¦Ù_ÚÙØ¦ÛÙ_Ø§ÙØª_Ø³Ù¾ØªØ§ÙØ¨Ø±_Ø§Ú©ØªØ¨Ø±_ÙÙØ§ÙØ¨Ø±_Ø¯Ø³Ø§ÙØ¨Ø±'.split('_'),
        weekdays : 'ÛÚ©\u200cØ´ÙØ¨Ù_Ø¯ÙØ´ÙØ¨Ù_Ø³Ù\u200cØ´ÙØ¨Ù_ÚÙØ§Ø±Ø´ÙØ¨Ù_Ù¾ÙØ¬\u200cØ´ÙØ¨Ù_Ø¬ÙØ¹Ù_Ø´ÙØ¨Ù'.split('_'),
        weekdaysShort : 'ÛÚ©\u200cØ´ÙØ¨Ù_Ø¯ÙØ´ÙØ¨Ù_Ø³Ù\u200cØ´ÙØ¨Ù_ÚÙØ§Ø±Ø´ÙØ¨Ù_Ù¾ÙØ¬\u200cØ´ÙØ¨Ù_Ø¬ÙØ¹Ù_Ø´ÙØ¨Ù'.split('_'),
        weekdaysMin : 'Û_Ø¯_Ø³_Ú_Ù¾_Ø¬_Ø´'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ÙØ¨Ù Ø§Ø² Ø¸ÙØ±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸ÙØ±/,
        isPM: function (input) {
            return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸ÙØ±/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ÙØ¨Ù Ø§Ø² Ø¸ÙØ±';
            } else {
                return 'Ø¨Ø¹Ø¯ Ø§Ø² Ø¸ÙØ±';
            }
        },
        calendar : {
            sameDay : '[Ø§ÙØ±ÙØ² Ø³Ø§Ø¹Øª] LT',
            nextDay : '[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT',
            nextWeek : 'dddd [Ø³Ø§Ø¹Øª] LT',
            lastDay : '[Ø¯ÛØ±ÙØ² Ø³Ø§Ø¹Øª] LT',
            lastWeek : 'dddd [Ù¾ÛØ´] [Ø³Ø§Ø¹Øª] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ø¯Ø± %s',
            past : '%s Ù¾ÛØ´',
            s : 'ÚÙØ¯ÛÙ Ø«Ø§ÙÛÙ',
            m : 'ÛÚ© Ø¯ÙÛÙÙ',
            mm : '%d Ø¯ÙÛÙÙ',
            h : 'ÛÚ© Ø³Ø§Ø¹Øª',
            hh : '%d Ø³Ø§Ø¹Øª',
            d : 'ÛÚ© Ø±ÙØ²',
            dd : '%d Ø±ÙØ²',
            M : 'ÛÚ© ÙØ§Ù',
            MM : '%d ÙØ§Ù',
            y : 'ÛÚ© Ø³Ø§Ù',
            yy : '%d Ø³Ø§Ù'
        },
        preparse: function (string) {
            return string.replace(/[Û°-Û¹]/g, function (match) {
                return numberMap[match];
            }).replace(/Ø/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, 'Ø');
        },
        ordinalParse: /\d{1,2}Ù/,
        ordinal : '%dÙ',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return fa;

}));