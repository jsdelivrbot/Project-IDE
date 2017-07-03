;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';

    //! moment.js locale configuration
    //! locale : afrikaans (af)
    //! author : Werner Mollentze : https://github.com/wernerm

    var af = moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[MÃ´re om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris RÃ¶ling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    //! moment.js locale configuration
    //! locale : Moroccan Arabic (ar-ma)
    //! author : ElFadili Yassine : https://github.com/ElFadiliY
    //! author : Abdel Said : https://github.com/abdelsaid

    var ar_ma = moment.defineLocale('ar-ma', {
        months : 'ÙÙØ§ÙØ±_ÙØ¨Ø±Ø§ÙØ±_ÙØ§Ø±Ø³_Ø£Ø¨Ø±ÙÙ_ÙØ§Ù_ÙÙÙÙÙ_ÙÙÙÙÙØ²_ØºØ´Øª_Ø´ØªÙØ¨Ø±_Ø£ÙØªÙØ¨Ø±_ÙÙÙØ¨Ø±_Ø¯Ø¬ÙØ¨Ø±'.split('_'),
        monthsShort : 'ÙÙØ§ÙØ±_ÙØ¨Ø±Ø§ÙØ±_ÙØ§Ø±Ø³_Ø£Ø¨Ø±ÙÙ_ÙØ§Ù_ÙÙÙÙÙ_ÙÙÙÙÙØ²_ØºØ´Øª_Ø´ØªÙØ¨Ø±_Ø£ÙØªÙØ¨Ø±_ÙÙÙØ¨Ø±_Ø¯Ø¬ÙØ¨Ø±'.split('_'),
        weekdays : 'Ø§ÙØ£Ø­Ø¯_Ø§ÙØ¥ØªÙÙÙ_Ø§ÙØ«ÙØ§Ø«Ø§Ø¡_Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡_Ø§ÙØ®ÙÙØ³_Ø§ÙØ¬ÙØ¹Ø©_Ø§ÙØ³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø§Ø­Ø¯_Ø§ØªÙÙÙ_Ø«ÙØ§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®ÙÙØ³_Ø¬ÙØ¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Ø§ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£ÙØ³ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÙÙ %s',
            past : 'ÙÙØ° %s',
            s : 'Ø«ÙØ§Ù',
            m : 'Ø¯ÙÙÙØ©',
            mm : '%d Ø¯ÙØ§Ø¦Ù',
            h : 'Ø³Ø§Ø¹Ø©',
            hh : '%d Ø³Ø§Ø¹Ø§Øª',
            d : 'ÙÙÙ',
            dd : '%d Ø£ÙØ§Ù',
            M : 'Ø´ÙØ±',
            MM : '%d Ø£Ø´ÙØ±',
            y : 'Ø³ÙØ©',
            yy : '%d Ø³ÙÙØ§Øª'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Arabic Saudi Arabia (ar-sa)
    //! author : Suhail Alkowaileet : https://github.com/xsoh

    var ar_sa__symbolMap = {
        '1': 'Ù¡',
        '2': 'Ù¢',
        '3': 'Ù£',
        '4': 'Ù¤',
        '5': 'Ù¥',
        '6': 'Ù¦',
        '7': 'Ù§',
        '8': 'Ù¨',
        '9': 'Ù©',
        '0': 'Ù '
    }, ar_sa__numberMap = {
        'Ù¡': '1',
        'Ù¢': '2',
        'Ù£': '3',
        'Ù¤': '4',
        'Ù¥': '5',
        'Ù¦': '6',
        'Ù§': '7',
        'Ù¨': '8',
        'Ù©': '9',
        'Ù ': '0'
    };

    var ar_sa = moment.defineLocale('ar-sa', {
        months : 'ÙÙØ§ÙØ±_ÙØ¨Ø±Ø§ÙØ±_ÙØ§Ø±Ø³_Ø£Ø¨Ø±ÙÙ_ÙØ§ÙÙ_ÙÙÙÙÙ_ÙÙÙÙÙ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙØ¨Ø±_Ø£ÙØªÙØ¨Ø±_ÙÙÙÙØ¨Ø±_Ø¯ÙØ³ÙØ¨Ø±'.split('_'),
        monthsShort : 'ÙÙØ§ÙØ±_ÙØ¨Ø±Ø§ÙØ±_ÙØ§Ø±Ø³_Ø£Ø¨Ø±ÙÙ_ÙØ§ÙÙ_ÙÙÙÙÙ_ÙÙÙÙÙ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙØ¨Ø±_Ø£ÙØªÙØ¨Ø±_ÙÙÙÙØ¨Ø±_Ø¯ÙØ³ÙØ¨Ø±'.split('_'),
        weekdays : 'Ø§ÙØ£Ø­Ø¯_Ø§ÙØ¥Ø«ÙÙÙ_Ø§ÙØ«ÙØ§Ø«Ø§Ø¡_Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡_Ø§ÙØ®ÙÙØ³_Ø§ÙØ¬ÙØ¹Ø©_Ø§ÙØ³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø£Ø­Ø¯_Ø¥Ø«ÙÙÙ_Ø«ÙØ§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®ÙÙØ³_Ø¬ÙØ¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /Øµ|Ù/,
        isPM : function (input) {
            return 'Ù' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Øµ';
            } else {
                return 'Ù';
            }
        },
        calendar : {
            sameDay: '[Ø§ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£ÙØ³ Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹ÙÙ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÙÙ %s',
            past : 'ÙÙØ° %s',
            s : 'Ø«ÙØ§Ù',
            m : 'Ø¯ÙÙÙØ©',
            mm : '%d Ø¯ÙØ§Ø¦Ù',
            h : 'Ø³Ø§Ø¹Ø©',
            hh : '%d Ø³Ø§Ø¹Ø§Øª',
            d : 'ÙÙÙ',
            dd : '%d Ø£ÙØ§Ù',
            M : 'Ø´ÙØ±',
            MM : '%d Ø£Ø´ÙØ±',
            y : 'Ø³ÙØ©',
            yy : '%d Ø³ÙÙØ§Øª'
        },
        preparse: function (string) {
            return string.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (match) {
                return ar_sa__numberMap[match];
            }).replace(/Ø/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ar_sa__symbolMap[match];
            }).replace(/,/g, 'Ø');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale  : Tunisian Arabic (ar-tn)

    var ar_tn = moment.defineLocale('ar-tn', {
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

    //! moment.js locale configuration
    //! Locale: Arabic (ar)
    //! Author: Abdel Said: https://github.com/abdelsaid
    //! Changes in months, weekdays: Ahmed Elkhatib
    //! Native plural forms: forabi https://github.com/forabi

    var ar__symbolMap = {
        '1': 'Ù¡',
        '2': 'Ù¢',
        '3': 'Ù£',
        '4': 'Ù¤',
        '5': 'Ù¥',
        '6': 'Ù¦',
        '7': 'Ù§',
        '8': 'Ù¨',
        '9': 'Ù©',
        '0': 'Ù '
    }, ar__numberMap = {
        'Ù¡': '1',
        'Ù¢': '2',
        'Ù£': '3',
        'Ù¤': '4',
        'Ù¥': '5',
        'Ù¦': '6',
        'Ù§': '7',
        'Ù¨': '8',
        'Ù©': '9',
        'Ù ': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['Ø£ÙÙ ÙÙ Ø«Ø§ÙÙØ©', 'Ø«Ø§ÙÙØ© ÙØ§Ø­Ø¯Ø©', ['Ø«Ø§ÙÙØªØ§Ù', 'Ø«Ø§ÙÙØªÙÙ'], '%d Ø«ÙØ§Ù', '%d Ø«Ø§ÙÙØ©', '%d Ø«Ø§ÙÙØ©'],
        m : ['Ø£ÙÙ ÙÙ Ø¯ÙÙÙØ©', 'Ø¯ÙÙÙØ© ÙØ§Ø­Ø¯Ø©', ['Ø¯ÙÙÙØªØ§Ù', 'Ø¯ÙÙÙØªÙÙ'], '%d Ø¯ÙØ§Ø¦Ù', '%d Ø¯ÙÙÙØ©', '%d Ø¯ÙÙÙØ©'],
        h : ['Ø£ÙÙ ÙÙ Ø³Ø§Ø¹Ø©', 'Ø³Ø§Ø¹Ø© ÙØ§Ø­Ø¯Ø©', ['Ø³Ø§Ø¹ØªØ§Ù', 'Ø³Ø§Ø¹ØªÙÙ'], '%d Ø³Ø§Ø¹Ø§Øª', '%d Ø³Ø§Ø¹Ø©', '%d Ø³Ø§Ø¹Ø©'],
        d : ['Ø£ÙÙ ÙÙ ÙÙÙ', 'ÙÙÙ ÙØ§Ø­Ø¯', ['ÙÙÙØ§Ù', 'ÙÙÙÙÙ'], '%d Ø£ÙØ§Ù', '%d ÙÙÙÙØ§', '%d ÙÙÙ'],
        M : ['Ø£ÙÙ ÙÙ Ø´ÙØ±', 'Ø´ÙØ± ÙØ§Ø­Ø¯', ['Ø´ÙØ±Ø§Ù', 'Ø´ÙØ±ÙÙ'], '%d Ø£Ø´ÙØ±', '%d Ø´ÙØ±Ø§', '%d Ø´ÙØ±'],
        y : ['Ø£ÙÙ ÙÙ Ø¹Ø§Ù', 'Ø¹Ø§Ù ÙØ§Ø­Ø¯', ['Ø¹Ø§ÙØ§Ù', 'Ø¹Ø§ÙÙÙ'], '%d Ø£Ø¹ÙØ§Ù', '%d Ø¹Ø§ÙÙØ§', '%d Ø¹Ø§Ù']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, ar__months = [
        'ÙØ§ÙÙÙ Ø§ÙØ«Ø§ÙÙ ÙÙØ§ÙØ±',
        'Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙØ±',
        'Ø¢Ø°Ø§Ø± ÙØ§Ø±Ø³',
        'ÙÙØ³Ø§Ù Ø£Ø¨Ø±ÙÙ',
        'Ø£ÙØ§Ø± ÙØ§ÙÙ',
        'Ø­Ø²ÙØ±Ø§Ù ÙÙÙÙÙ',
        'ØªÙÙØ² ÙÙÙÙÙ',
        'Ø¢Ø¨ Ø£ØºØ³Ø·Ø³',
        'Ø£ÙÙÙÙ Ø³Ø¨ØªÙØ¨Ø±',
        'ØªØ´Ø±ÙÙ Ø§ÙØ£ÙÙ Ø£ÙØªÙØ¨Ø±',
        'ØªØ´Ø±ÙÙ Ø§ÙØ«Ø§ÙÙ ÙÙÙÙØ¨Ø±',
        'ÙØ§ÙÙÙ Ø§ÙØ£ÙÙ Ø¯ÙØ³ÙØ¨Ø±'
    ];

    var ar = moment.defineLocale('ar', {
        months : ar__months,
        monthsShort : ar__months,
        weekdays : 'Ø§ÙØ£Ø­Ø¯_Ø§ÙØ¥Ø«ÙÙÙ_Ø§ÙØ«ÙØ§Ø«Ø§Ø¡_Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡_Ø§ÙØ®ÙÙØ³_Ø§ÙØ¬ÙØ¹Ø©_Ø§ÙØ³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø£Ø­Ø¯_Ø¥Ø«ÙÙÙ_Ø«ÙØ§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®ÙÙØ³_Ø¬ÙØ¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /Øµ|Ù/,
        isPM : function (input) {
            return 'Ù' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Øµ';
            } else {
                return 'Ù';
            }
        },
        calendar : {
            sameDay: '[Ø§ÙÙÙÙ Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯ÙØ§ Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£ÙØ³ Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹ÙØ¯ Ø§ÙØ³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ø¨Ø¹Ø¯ %s',
            past : 'ÙÙØ° %s',
            s : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/\u200f/g, '').replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (match) {
                return ar__numberMap[match];
            }).replace(/Ø/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ar__symbolMap[match];
            }).replace(/,/g, 'Ø');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : azerbaijani (az)
    //! author : topchiyev : https://github.com/topchiyev

    var az__suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-Ã¼ncÃ¼',
        4: '-Ã¼ncÃ¼',
        100: '-Ã¼ncÃ¼',
        6: '-ncÄ±',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-Ä±ncÄ±',
        90: '-Ä±ncÄ±'
    };

    var az = moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertÉsi_ÃÉrÅÉnbÉ axÅamÄ±_ÃÉrÅÉnbÉ_CÃ¼mÉ axÅamÄ±_CÃ¼mÉ_ÅÉnbÉ'.split('_'),
        weekdaysShort : 'Baz_BzE_ÃAx_ÃÉr_CAx_CÃ¼m_ÅÉn'.split('_'),
        weekdaysMin : 'Bz_BE_ÃA_ÃÉ_CA_CÃ¼_ÅÉ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugÃ¼n saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gÉlÉn hÉftÉ] dddd [saat] LT',
            lastDay : '[dÃ¼nÉn] LT',
            lastWeek : '[keÃ§Én hÉftÉ] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s ÉvvÉl',
            s : 'birneÃ§É saniyyÉ',
            m : 'bir dÉqiqÉ',
            mm : '%d dÉqiqÉ',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gÃ¼n',
            dd : '%d gÃ¼n',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecÉ|sÉhÉr|gÃ¼ndÃ¼z|axÅam/,
        isPM : function (input) {
            return /^(gÃ¼ndÃ¼z|axÅam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecÉ';
            } else if (hour < 12) {
                return 'sÉhÉr';
            } else if (hour < 17) {
                return 'gÃ¼ndÃ¼z';
            } else {
                return 'axÅam';
            }
        },
        ordinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-Ä±ncÄ±';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (az__suffixes[a] || az__suffixes[b] || az__suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : belarusian (be)
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion ElensÃºle : https://github.com/Oire

    function be__plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function be__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? 'ÑÐ²ÑÐ»ÑÐ½Ð°_ÑÐ²ÑÐ»ÑÐ½Ñ_ÑÐ²ÑÐ»ÑÐ½' : 'ÑÐ²ÑÐ»ÑÐ½Ñ_ÑÐ²ÑÐ»ÑÐ½Ñ_ÑÐ²ÑÐ»ÑÐ½',
            'hh': withoutSuffix ? 'Ð³Ð°Ð´Ð·ÑÐ½Ð°_Ð³Ð°Ð´Ð·ÑÐ½Ñ_Ð³Ð°Ð´Ð·ÑÐ½' : 'Ð³Ð°Ð´Ð·ÑÐ½Ñ_Ð³Ð°Ð´Ð·ÑÐ½Ñ_Ð³Ð°Ð´Ð·ÑÐ½',
            'dd': 'Ð´Ð·ÐµÐ½Ñ_Ð´Ð½Ñ_Ð´Ð·ÑÐ½',
            'MM': 'Ð¼ÐµÑÑÑ_Ð¼ÐµÑÑÑÑ_Ð¼ÐµÑÑÑÐ°Ñ',
            'yy': 'Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ_Ð³Ð°Ð´Ð¾Ñ'
        };
        if (key === 'm') {
            return withoutSuffix ? 'ÑÐ²ÑÐ»ÑÐ½Ð°' : 'ÑÐ²ÑÐ»ÑÐ½Ñ';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'Ð³Ð°Ð´Ð·ÑÐ½Ð°' : 'Ð³Ð°Ð´Ð·ÑÐ½Ñ';
        }
        else {
            return number + ' ' + be__plural(format[key], +number);
        }
    }

    var be = moment.defineLocale('be', {
        months : {
            format: 'ÑÑÑÐ´Ð·ÐµÐ½Ñ_Ð»ÑÑÐ°Ð³Ð°_ÑÐ°ÐºÐ°Ð²ÑÐºÐ°_ÐºÑÐ°ÑÐ°Ð²ÑÐºÐ°_ÑÑÐ°ÑÐ½Ñ_ÑÑÑÐ²ÐµÐ½Ñ_Ð»ÑÐ¿ÐµÐ½Ñ_Ð¶Ð½ÑÑÐ½Ñ_Ð²ÐµÑÐ°ÑÐ½Ñ_ÐºÐ°ÑÑÑÑÑÐ½ÑÐºÐ°_Ð»ÑÑÑÐ°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ'.split('_'),
            standalone: 'ÑÑÑÐ´Ð·ÐµÐ½Ñ_Ð»ÑÑÑ_ÑÐ°ÐºÐ°Ð²ÑÐº_ÐºÑÐ°ÑÐ°Ð²ÑÐº_ÑÑÐ°Ð²ÐµÐ½Ñ_ÑÑÑÐ²ÐµÐ½Ñ_Ð»ÑÐ¿ÐµÐ½Ñ_Ð¶Ð½ÑÐ²ÐµÐ½Ñ_Ð²ÐµÑÐ°ÑÐµÐ½Ñ_ÐºÐ°ÑÑÑÑÑÐ½ÑÐº_Ð»ÑÑÑÐ°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½Ñ'.split('_')
        },
        monthsShort : 'ÑÑÑÐ´_Ð»ÑÑ_ÑÐ°Ðº_ÐºÑÐ°Ñ_ÑÑÐ°Ð²_ÑÑÑÐ²_Ð»ÑÐ¿_Ð¶Ð½ÑÐ²_Ð²ÐµÑ_ÐºÐ°ÑÑ_Ð»ÑÑÑ_ÑÐ½ÐµÐ¶'.split('_'),
        weekdays : {
            format: 'Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑÑÐ¾ÑÐ°Ðº_ÑÐµÑÐ°Ð´Ñ_ÑÐ°ÑÐ²ÐµÑ_Ð¿ÑÑÐ½ÑÑÑ_ÑÑÐ±Ð¾ÑÑ'.split('_'),
            standalone: 'Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑÑÐ¾ÑÐ°Ðº_ÑÐµÑÐ°Ð´Ð°_ÑÐ°ÑÐ²ÐµÑ_Ð¿ÑÑÐ½ÑÑÐ°_ÑÑÐ±Ð¾ÑÐ°'.split('_'),
            isFormat: /\[ ?[ÐÐ²] ?(?:Ð¼ÑÐ½ÑÐ»ÑÑ|Ð½Ð°ÑÑÑÐ¿Ð½ÑÑ)? ?\] ?dddd/
        },
        weekdaysShort : 'Ð½Ð´_Ð¿Ð½_Ð°Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
        weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð°Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Ð³.',
            LLL : 'D MMMM YYYY Ð³., HH:mm',
            LLLL : 'dddd, D MMMM YYYY Ð³., HH:mm'
        },
        calendar : {
            sameDay: '[Ð¡ÑÐ½Ð½Ñ Ñ] LT',
            nextDay: '[ÐÐ°ÑÑÑÐ° Ñ] LT',
            lastDay: '[Ð£ÑÐ¾ÑÐ° Ñ] LT',
            nextWeek: function () {
                return '[Ð£] dddd [Ñ] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[Ð£ Ð¼ÑÐ½ÑÐ»ÑÑ] dddd [Ñ] LT';
                case 1:
                case 2:
                case 4:
                    return '[Ð£ Ð¼ÑÐ½ÑÐ»Ñ] dddd [Ñ] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ð¿ÑÐ°Ð· %s',
            past : '%s ÑÐ°Ð¼Ñ',
            s : 'Ð½ÐµÐºÐ°Ð»ÑÐºÑ ÑÐµÐºÑÐ½Ð´',
            m : be__relativeTimeWithPlural,
            mm : be__relativeTimeWithPlural,
            h : be__relativeTimeWithPlural,
            hh : be__relativeTimeWithPlural,
            d : 'Ð´Ð·ÐµÐ½Ñ',
            dd : be__relativeTimeWithPlural,
            M : 'Ð¼ÐµÑÑÑ',
            MM : be__relativeTimeWithPlural,
            y : 'Ð³Ð¾Ð´',
            yy : be__relativeTimeWithPlural
        },
        meridiemParse: /Ð½Ð¾ÑÑ|ÑÐ°Ð½ÑÑÑ|Ð´Ð½Ñ|Ð²ÐµÑÐ°ÑÐ°/,
        isPM : function (input) {
            return /^(Ð´Ð½Ñ|Ð²ÐµÑÐ°ÑÐ°)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'Ð½Ð¾ÑÑ';
            } else if (hour < 12) {
                return 'ÑÐ°Ð½ÑÑÑ';
            } else if (hour < 17) {
                return 'Ð´Ð½Ñ';
            } else {
                return 'Ð²ÐµÑÐ°ÑÐ°';
            }
        },
        ordinalParse: /\d{1,2}-(Ñ|Ñ|Ð³Ð°)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-Ñ' : number + '-Ñ';
            case 'D':
                return number + '-Ð³Ð°';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : bulgarian (bg)
    //! author : Krasen Borisov : https://github.com/kraz

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

    //! moment.js locale configuration
    //! locale : Bengali (bn)
    //! author : Kaushik Gandhi : https://github.com/kaushikgandhi

    var bn__symbolMap = {
        '1': 'à§§',
        '2': 'à§¨',
        '3': 'à§©',
        '4': 'à§ª',
        '5': 'à§«',
        '6': 'à§¬',
        '7': 'à§­',
        '8': 'à§®',
        '9': 'à§¯',
        '0': 'à§¦'
    },
    bn__numberMap = {
        'à§§': '1',
        'à§¨': '2',
        'à§©': '3',
        'à§ª': '4',
        'à§«': '5',
        'à§¬': '6',
        'à§­': '7',
        'à§®': '8',
        'à§¯': '9',
        'à§¦': '0'
    };

    var bn = moment.defineLocale('bn', {
        months : 'à¦à¦¾à¦¨à§à§à¦¾à¦°à§_à¦«à§à¦¬à§à§à¦¾à¦°à§_à¦®à¦¾à¦°à§à¦_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§_à¦à§à¦¨_à¦à§à¦²à¦¾à¦_à¦à¦à¦¾à¦¸à§à¦_à¦¸à§à¦ªà§à¦à§à¦®à§à¦¬à¦°_à¦à¦à§à¦à§à¦¬à¦°_à¦¨à¦­à§à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§à¦®à§à¦¬à¦°'.split('_'),
        monthsShort : 'à¦à¦¾à¦¨à§_à¦«à§à¦¬_à¦®à¦¾à¦°à§à¦_à¦à¦ªà¦°_à¦®à§_à¦à§à¦¨_à¦à§à¦²_à¦à¦_à¦¸à§à¦ªà§à¦_à¦à¦à§à¦à§_à¦¨à¦­_à¦¡à¦¿à¦¸à§à¦®à§'.split('_'),
        weekdays : 'à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§à¦®à¦¬à¦¾à¦°_à¦®à¦à§à¦à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°'.split('_'),
        weekdaysShort : 'à¦°à¦¬à¦¿_à¦¸à§à¦®_à¦®à¦à§à¦à¦²_à¦¬à§à¦§_à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿_à¦¶à§à¦à§à¦°_à¦¶à¦¨à¦¿'.split('_'),
        weekdaysMin : 'à¦°à¦¬_à¦¸à¦®_à¦®à¦à§à¦_à¦¬à§_à¦¬à§à¦°à¦¿à¦¹_à¦¶à§_à¦¶à¦¨à¦¿'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¦¸à¦®à§',
            LTS : 'A h:mm:ss à¦¸à¦®à§',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¦¸à¦®à§',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§'
        },
        calendar : {
            sameDay : '[à¦à¦] LT',
            nextDay : '[à¦à¦à¦¾à¦®à§à¦à¦¾à¦²] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¦à¦¤à¦à¦¾à¦²] LT',
            lastWeek : '[à¦à¦¤] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à¦ªà¦°à§',
            past : '%s à¦à¦à§',
            s : 'à¦à§à§à¦ à¦¸à§à¦à§à¦¨à§à¦¡',
            m : 'à¦à¦ à¦®à¦¿à¦¨à¦¿à¦',
            mm : '%d à¦®à¦¿à¦¨à¦¿à¦',
            h : 'à¦à¦ à¦à¦¨à§à¦à¦¾',
            hh : '%d à¦à¦¨à§à¦à¦¾',
            d : 'à¦à¦ à¦¦à¦¿à¦¨',
            dd : '%d à¦¦à¦¿à¦¨',
            M : 'à¦à¦ à¦®à¦¾à¦¸',
            MM : '%d à¦®à¦¾à¦¸',
            y : 'à¦à¦ à¦¬à¦à¦°',
            yy : '%d à¦¬à¦à¦°'
        },
        preparse: function (string) {
            return string.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function (match) {
                return bn__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return bn__symbolMap[match];
            });
        },
        meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦à¦¾à¦²|à¦°à¦¾à¦¤/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à¦°à¦¾à¦¤' && hour >= 4) ||
                    (meridiem === 'à¦¦à§à¦ªà§à¦°' && hour < 5) ||
                    meridiem === 'à¦¬à¦¿à¦à¦¾à¦²') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¦°à¦¾à¦¤';
            } else if (hour < 10) {
                return 'à¦¸à¦à¦¾à¦²';
            } else if (hour < 17) {
                return 'à¦¦à§à¦ªà§à¦°';
            } else if (hour < 20) {
                return 'à¦¬à¦¿à¦à¦¾à¦²';
            } else {
                return 'à¦°à¦¾à¦¤';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : tibetan (bo)
    //! author : Thupten N. Chakrishar : https://github.com/vajradog

    var bo__symbolMap = {
        '1': 'à¼¡',
        '2': 'à¼¢',
        '3': 'à¼£',
        '4': 'à¼¤',
        '5': 'à¼¥',
        '6': 'à¼¦',
        '7': 'à¼§',
        '8': 'à¼¨',
        '9': 'à¼©',
        '0': 'à¼ '
    },
    bo__numberMap = {
        'à¼¡': '1',
        'à¼¢': '2',
        'à¼£': '3',
        'à¼¤': '4',
        'à¼¥': '5',
        'à¼¦': '6',
        'à¼§': '7',
        'à¼¨': '8',
        'à¼©': '9',
        'à¼ ': '0'
    };

    var bo = moment.defineLocale('bo', {
        months : 'à½à¾³à¼à½à¼à½à½à¼à½à½¼_à½à¾³à¼à½à¼à½à½à½²à½¦à¼à½_à½à¾³à¼à½à¼à½à½¦à½´à½à¼à½_à½à¾³à¼à½à¼à½à½à½²à¼à½_à½à¾³à¼à½à¼à½£à¾à¼à½_à½à¾³à¼à½à¼à½à¾²à½´à½à¼à½_à½à¾³à¼à½à¼à½à½à½´à½à¼à½_à½à¾³à¼à½à¼à½à½¢à¾à¾±à½à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½à½à½²à½à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½à½à½²à½¦à¼à½'.split('_'),
        monthsShort : 'à½à¾³à¼à½à¼à½à½à¼à½à½¼_à½à¾³à¼à½à¼à½à½à½²à½¦à¼à½_à½à¾³à¼à½à¼à½à½¦à½´à½à¼à½_à½à¾³à¼à½à¼à½à½à½²à¼à½_à½à¾³à¼à½à¼à½£à¾à¼à½_à½à¾³à¼à½à¼à½à¾²à½´à½à¼à½_à½à¾³à¼à½à¼à½à½à½´à½à¼à½_à½à¾³à¼à½à¼à½à½¢à¾à¾±à½à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½à½à½²à½à¼à½_à½à¾³à¼à½à¼à½à½à½´à¼à½à½à½²à½¦à¼à½'.split('_'),
        weekdays : 'à½à½à½ à¼à½à½²à¼à½à¼_à½à½à½ à¼à½à¾³à¼à½à¼_à½à½à½ à¼à½à½²à½à¼à½à½à½¢à¼_à½à½à½ à¼à½£à¾·à½à¼à½à¼_à½à½à½ à¼à½à½´à½¢à¼à½à½´_à½à½à½ à¼à½à¼à½¦à½à½¦à¼_à½à½à½ à¼à½¦à¾¤à½ºà½à¼à½à¼'.split('_'),
        weekdaysShort : 'à½à½²à¼à½à¼_à½à¾³à¼à½à¼_à½à½²à½à¼à½à½à½¢à¼_à½£à¾·à½à¼à½à¼_à½à½´à½¢à¼à½à½´_à½à¼à½¦à½à½¦à¼_à½¦à¾¤à½ºà½à¼à½à¼'.split('_'),
        weekdaysMin : 'à½à½²à¼à½à¼_à½à¾³à¼à½à¼_à½à½²à½à¼à½à½à½¢à¼_à½£à¾·à½à¼à½à¼_à½à½´à½¢à¼à½à½´_à½à¼à½¦à½à½¦à¼_à½¦à¾¤à½ºà½à¼à½à¼'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[à½à½²à¼à½¢à½²à½] LT',
            nextDay : '[à½¦à½à¼à½à½²à½] LT',
            nextWeek : '[à½à½à½´à½à¼à½à¾²à½à¼à½¢à¾à½ºà½¦à¼à½], LT',
            lastDay : '[à½à¼à½¦à½] LT',
            lastWeek : '[à½à½à½´à½à¼à½à¾²à½à¼à½à½à½ à¼à½] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à½£à¼',
            past : '%s à½¦à¾à½à¼à½£',
            s : 'à½£à½à¼à½¦à½',
            m : 'à½¦à¾à½¢à¼à½à¼à½à½à½²à½',
            mm : '%d à½¦à¾à½¢à¼à½',
            h : 'à½à½´à¼à½à½¼à½à¼à½à½à½²à½',
            hh : '%d à½à½´à¼à½à½¼à½',
            d : 'à½à½²à½à¼à½à½à½²à½',
            dd : '%d à½à½²à½à¼',
            M : 'à½à¾³à¼à½à¼à½à½à½²à½',
            MM : '%d à½à¾³à¼à½',
            y : 'à½£à½¼à¼à½à½à½²à½',
            yy : '%d à½£à½¼'
        },
        preparse: function (string) {
            return string.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function (match) {
                return bo__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return bo__symbolMap[match];
            });
        },
        meridiemParse: /à½à½à½à¼à½à½¼|à½à½¼à½à½¦à¼à½à½¦|à½à½²à½à¼à½à½´à½|à½à½à½¼à½à¼à½à½|à½à½à½à¼à½à½¼/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à½à½à½à¼à½à½¼' && hour >= 4) ||
                    (meridiem === 'à½à½²à½à¼à½à½´à½' && hour < 5) ||
                    meridiem === 'à½à½à½¼à½à¼à½à½') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à½à½à½à¼à½à½¼';
            } else if (hour < 10) {
                return 'à½à½¼à½à½¦à¼à½à½¦';
            } else if (hour < 17) {
                return 'à½à½²à½à¼à½à½´à½';
            } else if (hour < 20) {
                return 'à½à½à½¼à½à¼à½à½';
            } else {
                return 'à½à½à½à¼à½à½¼';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : breton (br)
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
            return number + ' bloaz';
        default:
            return number + ' vloaz';
        }
    }
    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }
    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }
    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    var br = moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondennoÃ¹',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        ordinalParse: /\d{1,2}(aÃ±|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'aÃ±' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : bosnian (bs)
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan MarkoviÄ

    function bs__translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
        }
    }

    var bs = moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._Äet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_Äe_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juÄer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[proÅ¡lu] dddd [u] LT';
                case 6:
                    return '[proÅ¡le] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[proÅ¡li] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            m      : bs__translate,
            mm     : bs__translate,
            h      : bs__translate,
            hh     : bs__translate,
            d      : 'dan',
            dd     : bs__translate,
            M      : 'mjesec',
            MM     : bs__translate,
            y      : 'godinu',
            yy     : bs__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : catalan (ca)
    //! author : Juan G. Hurtado : https://github.com/juanghurtado

    var ca = moment.defineLocale('ca', {
        months : 'gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[demÃ  a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'fa %s',
            s : 'uns segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        ordinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'Ã¨';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : czech (cs)
    //! author : petrbela : https://github.com/petrbela

    var cs__months = 'leden_Ãºnor_bÅezen_duben_kvÄten_Äerven_Äervenec_srpen_zÃ¡ÅÃ­_ÅÃ­jen_listopad_prosinec'.split('_'),
        cs__monthsShort = 'led_Ãºno_bÅe_dub_kvÄ_Ävn_Ävc_srp_zÃ¡Å_ÅÃ­j_lis_pro'.split('_');
    function cs__plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function cs__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pÃ¡r sekund' : 'pÃ¡r sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'dny' : 'dnÃ­');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mÄsÃ­c' : 'mÄsÃ­cem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'mÄsÃ­ce' : 'mÄsÃ­cÅ¯');
            } else {
                return result + 'mÄsÃ­ci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (cs__plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
        }
    }

    var cs = moment.defineLocale('cs', {
        months : cs__months,
        monthsShort : cs__monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (Äervenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(cs__months, cs__monthsShort)),
        shortMonthsParse : (function (monthsShort) {
            var i, _shortMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }
            return _shortMonthsParse;
        }(cs__monthsShort)),
        longMonthsParse : (function (months) {
            var i, _longMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }
            return _longMonthsParse;
        }(cs__months)),
        weekdays : 'nedÄle_pondÄlÃ­_ÃºterÃ½_stÅeda_Ätvrtek_pÃ¡tek_sobota'.split('_'),
        weekdaysShort : 'ne_po_Ãºt_st_Ät_pÃ¡_so'.split('_'),
        weekdaysMin : 'ne_po_Ãºt_st_Ät_pÃ¡_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[zÃ­tra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v nedÄli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve stÅedu v] LT';
                case 4:
                    return '[ve Ätvrtek v] LT';
                case 5:
                    return '[v pÃ¡tek v] LT';
                case 6:
                    return '[v sobotu v] LT';
                }
            },
            lastDay: '[vÄera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulou nedÄli v] LT';
                case 1:
                case 2:
                    return '[minulÃ©] dddd [v] LT';
                case 3:
                    return '[minulou stÅedu v] LT';
                case 4:
                case 5:
                    return '[minulÃ½] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pÅed %s',
            s : cs__translate,
            m : cs__translate,
            mm : cs__translate,
            h : cs__translate,
            hh : cs__translate,
            d : cs__translate,
            dd : cs__translate,
            M : cs__translate,
            MM : cs__translate,
            y : cs__translate,
            yy : cs__translate
        },
        ordinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : chuvash (cv)
    //! author : Anatoly Mironov : https://github.com/mirontoli

    var cv = moment.defineLocale('cv', {
        months : 'ÐºÓÑÐ»Ð°Ñ_Ð½Ð°ÑÓÑ_Ð¿ÑÑ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«ÓÑÑÐ¼Ðµ_ÑÑÓ_Ò«ÑÑÐ»Ð°_Ð°Ð²ÓÐ½_ÑÐ¿Ð°_ÑÓ³Ðº_ÑÐ°ÑÑÐ°Ð²'.split('_'),
        monthsShort : 'ÐºÓÑ_Ð½Ð°Ñ_Ð¿ÑÑ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«ÓÑ_ÑÑÓ_Ò«ÑÑ_Ð°Ð²Ð½_ÑÐ¿Ð°_ÑÓ³Ðº_ÑÐ°Ñ'.split('_'),
        weekdays : 'Ð²ÑÑÑÐ°ÑÐ½Ð¸ÐºÑÐ½_ÑÑÐ½ÑÐ¸ÐºÑÐ½_ÑÑÐ»Ð°ÑÐ¸ÐºÑÐ½_ÑÐ½ÐºÑÐ½_ÐºÓÒ«Ð½ÐµÑÐ½Ð¸ÐºÑÐ½_ÑÑÐ½ÐµÐºÑÐ½_ÑÓÐ¼Ð°ÑÐºÑÐ½'.split('_'),
        weekdaysShort : 'Ð²ÑÑ_ÑÑÐ½_ÑÑÐ»_ÑÐ½_ÐºÓÒ«_ÑÑÐ½_ÑÓÐ¼'.split('_'),
        weekdaysMin : 'Ð²Ñ_ÑÐ½_ÑÑ_ÑÐ½_ÐºÒ«_ÑÑ_ÑÐ¼'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [Ò«ÑÐ»ÑÐ¸] MMMM [ÑÐ¹ÓÑÓÐ½] D[-Ð¼ÓÑÓ]',
            LLL : 'YYYY [Ò«ÑÐ»ÑÐ¸] MMMM [ÑÐ¹ÓÑÓÐ½] D[-Ð¼ÓÑÓ], HH:mm',
            LLLL : 'dddd, YYYY [Ò«ÑÐ»ÑÐ¸] MMMM [ÑÐ¹ÓÑÓÐ½] D[-Ð¼ÓÑÓ], HH:mm'
        },
        calendar : {
            sameDay: '[ÐÐ°ÑÐ½] LT [ÑÐµÑÐµÑÑÐµ]',
            nextDay: '[Ð«ÑÐ°Ð½] LT [ÑÐµÑÐµÑÑÐµ]',
            lastDay: '[ÓÐ½ÐµÑ] LT [ÑÐµÑÐµÑÑÐµ]',
            nextWeek: '[ÒªÐ¸ÑÐµÑ] dddd LT [ÑÐµÑÐµÑÑÐµ]',
            lastWeek: '[ÐÑÑÐ½Ó] dddd LT [ÑÐµÑÐµÑÑÐµ]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /ÑÐµÑÐµÑ$/i.exec(output) ? 'ÑÐµÐ½' : /Ò«ÑÐ»$/i.exec(output) ? 'ÑÐ°Ð½' : 'ÑÐ°Ð½';
                return output + affix;
            },
            past : '%s ÐºÐ°ÑÐ»Ð»Ð°',
            s : 'Ð¿ÓÑ-Ð¸Ðº Ò«ÐµÐºÐºÑÐ½Ñ',
            m : 'Ð¿ÓÑ Ð¼Ð¸Ð½ÑÑ',
            mm : '%d Ð¼Ð¸Ð½ÑÑ',
            h : 'Ð¿ÓÑ ÑÐµÑÐµÑ',
            hh : '%d ÑÐµÑÐµÑ',
            d : 'Ð¿ÓÑ ÐºÑÐ½',
            dd : '%d ÐºÑÐ½',
            M : 'Ð¿ÓÑ ÑÐ¹ÓÑ',
            MM : '%d ÑÐ¹ÓÑ',
            y : 'Ð¿ÓÑ Ò«ÑÐ»',
            yy : '%d Ò«ÑÐ»'
        },
        ordinalParse: /\d{1,2}-Ð¼ÓÑ/,
        ordinal : '%d-Ð¼ÓÑ',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Welsh (cy)
    //! author : Robert Allen

    var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn Ã´l',
            s: 'ychydig eiliadau',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : danish (da)
    //! author : Ulrik Nielsen : https://github.com/mrbase

    var da = moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag'.split('_'),
        weekdaysShort : 'sÃ¸n_man_tir_ons_tor_fre_lÃ¸r'.split('_'),
        weekdaysMin : 'sÃ¸_ma_ti_on_to_fr_lÃ¸'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[I dag kl.] LT',
            nextDay : '[I morgen kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[I gÃ¥r kl.] LT',
            lastWeek : '[sidste] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'fÃ¥ sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en mÃ¥ned',
            MM : '%d mÃ¥neder',
            y : 'et Ã¥r',
            yy : '%d Ã¥r'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : austrian german (de-at)
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion ElensÃºle: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG
    //! author : Mikolaj Dadela : https://github.com/mik01aj

    function de_at__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de_at = moment.defineLocale('de-at', {
        months : 'JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'JÃ¤n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            m : de_at__processRelativeTime,
            mm : '%d Minuten',
            h : de_at__processRelativeTime,
            hh : '%d Stunden',
            d : de_at__processRelativeTime,
            dd : de_at__processRelativeTime,
            M : de_at__processRelativeTime,
            MM : de_at__processRelativeTime,
            y : de_at__processRelativeTime,
            yy : de_at__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : german (de)
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion ElensÃºle: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj

    function de__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de = moment.defineLocale('de', {
        months : 'Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            m : de__processRelativeTime,
            mm : '%d Minuten',
            h : de__processRelativeTime,
            hh : '%d Stunden',
            d : de__processRelativeTime,
            dd : de__processRelativeTime,
            M : de__processRelativeTime,
            MM : de__processRelativeTime,
            y : de__processRelativeTime,
            yy : de__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : dhivehi (dv)
    //! author : Jawish Hameed : https://github.com/jawish

    var dv__months = [
        'ÞÞ¬ÞÞªÞÞ¦ÞÞ©',
        'ÞÞ¬ÞÞ°ÞÞªÞÞ¦ÞÞ©',
        'ÞÞ§ÞÞ¨ÞÞª',
        'ÞÞ­ÞÞ°ÞÞ©ÞÞª',
        'ÞÞ­',
        'ÞÞ«ÞÞ°',
        'ÞÞªÞÞ¦ÞÞ¨',
        'ÞÞ¯ÞÞ¦ÞÞ°ÞÞª',
        'ÞÞ¬ÞÞ°ÞÞ¬ÞÞ°ÞÞ¦ÞÞª',
        'ÞÞ®ÞÞ°ÞÞ¯ÞÞ¦ÞÞª',
        'ÞÞ®ÞÞ¬ÞÞ°ÞÞ¦ÞÞª',
        'ÞÞ¨ÞÞ¬ÞÞ°ÞÞ¦ÞÞª'
    ], dv__weekdays = [
        'ÞÞ§ÞÞ¨ÞÞ°ÞÞ¦',
        'ÞÞ¯ÞÞ¦',
        'ÞÞ¦ÞÞ°ÞÞ§ÞÞ¦',
        'ÞÞªÞÞ¦',
        'ÞÞªÞÞ§ÞÞ°ÞÞ¦ÞÞ¨',
        'ÞÞªÞÞªÞÞª',
        'ÞÞ®ÞÞ¨ÞÞ¨ÞÞª'
    ];

    var dv = moment.defineLocale('dv', {
        months : dv__months,
        monthsShort : dv__months,
        weekdays : dv__weekdays,
        weekdaysShort : dv__weekdays,
        weekdaysMin : 'ÞÞ§ÞÞ¨_ÞÞ¯ÞÞ¦_ÞÞ¦ÞÞ°_ÞÞªÞÞ¦_ÞÞªÞÞ§_ÞÞªÞÞª_ÞÞ®ÞÞ¨'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ÞÞ|ÞÞ/,
        isPM : function (input) {
            return 'ÞÞ' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ÞÞ';
            } else {
                return 'ÞÞ';
            }
        },
        calendar : {
            sameDay : '[ÞÞ¨ÞÞ¦ÞÞª] LT',
            nextDay : '[ÞÞ§ÞÞ¦ÞÞ§] LT',
            nextWeek : 'dddd LT',
            lastDay : '[ÞÞ¨ÞÞ°ÞÞ¬] LT',
            lastWeek : '[ÞÞ§ÞÞ¨ÞÞªÞÞ¨] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ÞÞ¬ÞÞ­ÞÞ¦ÞÞ¨ %s',
            past : 'ÞÞªÞÞ¨ÞÞ° %s',
            s : 'ÞÞ¨ÞÞªÞÞ°ÞÞªÞÞ®ÞÞ¬ÞÞ°',
            m : 'ÞÞ¨ÞÞ¨ÞÞ¬ÞÞ°',
            mm : 'ÞÞ¨ÞÞ¨ÞÞª %d',
            h : 'ÞÞ¦ÞÞ¨ÞÞ¨ÞÞ¬ÞÞ°',
            hh : 'ÞÞ¦ÞÞ¨ÞÞ¨ÞÞª %d',
            d : 'ÞÞªÞÞ¦ÞÞ¬ÞÞ°',
            dd : 'ÞÞªÞÞ¦ÞÞ° %d',
            M : 'ÞÞ¦ÞÞ¬ÞÞ°',
            MM : 'ÞÞ¦ÞÞ° %d',
            y : 'ÞÞ¦ÞÞ¦ÞÞ¬ÞÞ°',
            yy : 'ÞÞ¦ÞÞ¦ÞÞª %d'
        },
        preparse: function (string) {
            return string.replace(/Ø/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, 'Ø');
        },
        week : {
            dow : 7,  // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    //! moment.js locale configuration
    //! locale : modern greek (el)
    //! author : Aggelos Karalias : https://github.com/mehiel

    var el = moment.defineLocale('el', {
        monthsNominativeEl : 'ÎÎ±Î½Î¿ÏÎ¬ÏÎ¹Î¿Ï_Î¦ÎµÎ²ÏÎ¿ÏÎ¬ÏÎ¹Î¿Ï_ÎÎ¬ÏÏÎ¹Î¿Ï_ÎÏÏÎ¯Î»Î¹Î¿Ï_ÎÎ¬Î¹Î¿Ï_ÎÎ¿ÏÎ½Î¹Î¿Ï_ÎÎ¿ÏÎ»Î¹Î¿Ï_ÎÏÎ³Î¿ÏÏÏÎ¿Ï_Î£ÎµÏÏÎ­Î¼Î²ÏÎ¹Î¿Ï_ÎÎºÏÏÎ²ÏÎ¹Î¿Ï_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï_ÎÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï'.split('_'),
        monthsGenitiveEl : 'ÎÎ±Î½Î¿ÏÎ±ÏÎ¯Î¿Ï_Î¦ÎµÎ²ÏÎ¿ÏÎ±ÏÎ¯Î¿Ï_ÎÎ±ÏÏÎ¯Î¿Ï_ÎÏÏÎ¹Î»Î¯Î¿Ï_ÎÎ±ÎÎ¿Ï_ÎÎ¿ÏÎ½Î¯Î¿Ï_ÎÎ¿ÏÎ»Î¯Î¿Ï_ÎÏÎ³Î¿ÏÏÏÎ¿Ï_Î£ÎµÏÏÎµÎ¼Î²ÏÎ¯Î¿Ï_ÎÎºÏÏÎ²ÏÎ¯Î¿Ï_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï_ÎÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï'.split('_'),
        months : function (momentToFormat, format) {
            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'ÎÎ±Î½_Î¦ÎµÎ²_ÎÎ±Ï_ÎÏÏ_ÎÎ±Ï_ÎÎ¿ÏÎ½_ÎÎ¿ÏÎ»_ÎÏÎ³_Î£ÎµÏ_ÎÎºÏ_ÎÎ¿Îµ_ÎÎµÎº'.split('_'),
        weekdays : 'ÎÏÏÎ¹Î±ÎºÎ®_ÎÎµÏÏÎ­ÏÎ±_Î¤ÏÎ¯ÏÎ·_Î¤ÎµÏÎ¬ÏÏÎ·_Î Î­Î¼ÏÏÎ·_Î Î±ÏÎ±ÏÎºÎµÏÎ®_Î£Î¬Î²Î²Î±ÏÎ¿'.split('_'),
        weekdaysShort : 'ÎÏÏ_ÎÎµÏ_Î¤ÏÎ¹_Î¤ÎµÏ_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²'.split('_'),
        weekdaysMin : 'ÎÏ_ÎÎµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'Î¼Î¼' : 'ÎÎ';
            } else {
                return isLower ? 'ÏÎ¼' : 'Î Î';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'Î¼');
        },
        meridiemParse : /[Î Î]\.?Î?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Î£Î®Î¼ÎµÏÎ± {}] LT',
            nextDay : '[ÎÏÏÎ¹Î¿ {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Î§Î¸ÎµÏ {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[ÏÎ¿ ÏÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT';
                    default:
                        return '[ÏÎ·Î½ ÏÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (isFunction(output)) {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? 'ÏÏÎ·' : 'ÏÏÎ¹Ï'));
        },
        relativeTime : {
            future : 'ÏÎµ %s',
            past : '%s ÏÏÎ¹Î½',
            s : 'Î»Î¯Î³Î± Î´ÎµÏÏÎµÏÏÎ»ÎµÏÏÎ±',
            m : 'Î­Î½Î± Î»ÎµÏÏÏ',
            mm : '%d Î»ÎµÏÏÎ¬',
            h : 'Î¼Î¯Î± ÏÏÎ±',
            hh : '%d ÏÏÎµÏ',
            d : 'Î¼Î¯Î± Î¼Î­ÏÎ±',
            dd : '%d Î¼Î­ÏÎµÏ',
            M : 'Î­Î½Î±Ï Î¼Î®Î½Î±Ï',
            MM : '%d Î¼Î®Î½ÎµÏ',
            y : 'Î­Î½Î±Ï ÏÏÏÎ½Î¿Ï',
            yy : '%d ÏÏÏÎ½Î¹Î±'
        },
        ordinalParse: /\d{1,2}Î·/,
        ordinal: '%dÎ·',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : australian english (en-au)

    var en_au = moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : canadian english (en-ca)
    //! author : Jonathan Abourbih : https://github.com/jonbca

    var en_ca = moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY h:mm A',
            LLLL : 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    //! moment.js locale configuration
    //! locale : great britain english (en-gb)
    //! author : Chris Gedrim : https://github.com/chrisgedrim

    var en_gb = moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Irish english (en-ie)
    //! author : Chris Cartlidge : https://github.com/chriscartlidge

    var en_ie = moment.defineLocale('en-ie', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : New Zealand english (en-nz)

    var en_nz = moment.defineLocale('en-nz', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : esperanto (eo)
    //! author : Colin Dean : https://github.com/colindean
    //! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
    //!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

    var eo = moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec'.split('_'),
        weekdays : 'DimanÄo_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato'.split('_'),
        weekdaysShort : 'Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Ä´a_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-an de] MMMM, YYYY',
            LLL : 'D[-an de] MMMM, YYYY HH:mm',
            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[HodiaÅ­ je] LT',
            nextDay : '[MorgaÅ­ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[HieraÅ­ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'je %s',
            past : 'antaÅ­ %s',
            s : 'sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', Äar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        ordinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : spanish (es)
    //! author : Julio NapurÃ­ : https://github.com/julionc

    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        es__monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var es = moment.defineLocale('es', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return es__monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado'.split('_'),
        weekdaysShort : 'dom._lun._mar._miÃ©._jue._vie._sÃ¡b.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sÃ¡'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[maÃ±ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un dÃ­a',
            dd : '%d dÃ­as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un aÃ±o',
            yy : '%d aÃ±os'
        },
        ordinalParse : /\d{1,2}Âº/,
        ordinal : '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : estonian (et)
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka

    function et__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mÃµne sekundi', 'mÃµni sekund', 'paar sekundit'],
            'm' : ['Ã¼he minuti', 'Ã¼ks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['Ã¼he tunni', 'tund aega', 'Ã¼ks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['Ã¼he pÃ¤eva', 'Ã¼ks pÃ¤ev'],
            'M' : ['kuu aja', 'kuu aega', 'Ã¼ks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['Ã¼he aasta', 'aasta', 'Ã¼ks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    var et = moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'H:mm:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[TÃ¤na,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[JÃ¤rgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pÃ¤rast',
            past   : '%s tagasi',
            s      : et__processRelativeTime,
            m      : et__processRelativeTime,
            mm     : et__processRelativeTime,
            h      : et__processRelativeTime,
            hh     : et__processRelativeTime,
            d      : et__processRelativeTime,
            dd     : '%d pÃ¤eva',
            M      : et__processRelativeTime,
            MM     : et__processRelativeTime,
            y      : et__processRelativeTime,
            yy     : et__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : euskara (eu)
    //! author : Eneko Illarramendi : https://github.com/eillarra

    var eu = moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact : true,
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] HH:mm',
            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Persian (fa)
    //! author : Ebrahim Byagowi : https://github.com/ebraminio

    var fa__symbolMap = {
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
    }, fa__numberMap = {
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
                return fa__numberMap[match];
            }).replace(/Ø/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return fa__symbolMap[match];
            }).replace(/,/g, 'Ø');
        },
        ordinalParse: /\d{1,2}Ù/,
        ordinal : '%dÙ',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : finnish (fi)
    //! author : Tarmo Aidantausta : https://github.com/bleadof

    var numbersPast = 'nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljÃ¤n', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];
    function fi__translate(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'pÃ¤ivÃ¤n' : 'pÃ¤ivÃ¤';
        case 'dd':
            result = isFuture ? 'pÃ¤ivÃ¤n' : 'pÃ¤ivÃ¤Ã¤';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }
    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    var fi = moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] HH.mm',
            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar : {
            sameDay : '[tÃ¤nÃ¤Ã¤n] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pÃ¤Ã¤stÃ¤',
            past : '%s sitten',
            s : fi__translate,
            m : fi__translate,
            mm : fi__translate,
            h : fi__translate,
            hh : fi__translate,
            d : fi__translate,
            dd : fi__translate,
            M : fi__translate,
            MM : fi__translate,
            y : fi__translate,
            yy : fi__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : faroese (fo)
    //! author : Ragnar Johannesen : https://github.com/ragnar123

    var fo = moment.defineLocale('fo', {
        months : 'januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley'.split('_'),
        weekdaysMin : 'su_mÃ¡_tÃ½_mi_hÃ³_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Ã dag kl.] LT',
            nextDay : '[Ã morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Ã gjÃ¡r kl.] LT',
            lastWeek : '[sÃ­Ã°stu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s sÃ­Ã°ani',
            s : 'fÃ¡ sekund',
            m : 'ein minutt',
            mm : '%d minuttir',
            h : 'ein tÃ­mi',
            hh : '%d tÃ­mar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mÃ¡naÃ°i',
            MM : '%d mÃ¡naÃ°ir',
            y : 'eitt Ã¡r',
            yy : '%d Ã¡r'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : canadian french (fr-ca)
    //! author : Jonathan Abourbih : https://github.com/jonbca

    var fr_ca = moment.defineLocale('fr-ca', {
        months : 'janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre'.split('_'),
        monthsShort : 'janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Aujourd\'hui Ã ] LT',
            nextDay: '[Demain Ã ] LT',
            nextWeek: 'dddd [Ã ] LT',
            lastDay: '[Hier Ã ] LT',
            lastWeek: 'dddd [dernier Ã ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'e');
        }
    });

    //! moment.js locale configuration
    //! locale : swiss french (fr)
    //! author : Gaspard Bucher : https://github.com/gaspard

    var fr_ch = moment.defineLocale('fr-ch', {
        months : 'janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre'.split('_'),
        monthsShort : 'janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Aujourd\'hui Ã ] LT',
            nextDay: '[Demain Ã ] LT',
            nextWeek: 'dddd [Ã ] LT',
            lastDay: '[Hier Ã ] LT',
            lastWeek: 'dddd [dernier Ã ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'e');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : french (fr)
    //! author : John Fischer : https://github.com/jfroffice

    var fr = moment.defineLocale('fr', {
        months : 'janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre'.split('_'),
        monthsShort : 'janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Aujourd\'hui Ã ] LT',
            nextDay: '[Demain Ã ] LT',
            nextWeek: 'dddd [Ã ] LT',
            lastDay: '[Hier Ã ] LT',
            lastWeek: 'dddd [dernier Ã ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : '');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : frisian (fy)
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v

    var fy__monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        fy__monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    var fy = moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return fy__monthsShortWithoutDots[m.month()];
            } else {
                return fy__monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[Ã´frÃ»ne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            m : 'ien minÃºt',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : great britain scottish gealic (gd)
    //! author : Jon Ashdown : https://github.com/jonashdown

    var gd__months = [
        'Am Faoilleach', 'An Gearran', 'Am MÃ rt', 'An Giblean', 'An CÃ¨itean', 'An t-Ãgmhios', 'An t-Iuchar', 'An LÃ¹nastal', 'An t-Sultain', 'An DÃ mhair', 'An t-Samhain', 'An DÃ¹bhlachd'
    ];

    var gd__monthsShort = ['Faoi', 'Gear', 'MÃ rt', 'Gibl', 'CÃ¨it', 'Ãgmh', 'Iuch', 'LÃ¹n', 'Sult', 'DÃ mh', 'Samh', 'DÃ¹bh'];

    var gd__weekdays = ['DidÃ²mhnaich', 'Diluain', 'DimÃ irt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

    var weekdaysMin = ['DÃ²', 'Lu', 'MÃ ', 'Ci', 'Ar', 'Ha', 'Sa'];

    var gd = moment.defineLocale('gd', {
        months : gd__months,
        monthsShort : gd__monthsShort,
        monthsParseExact : true,
        weekdays : gd__weekdays,
        weekdaysShort : weekdaysShort,
        weekdaysMin : weekdaysMin,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[An-diugh aig] LT',
            nextDay : '[A-mÃ ireach aig] LT',
            nextWeek : 'dddd [aig] LT',
            lastDay : '[An-dÃ¨ aig] LT',
            lastWeek : 'dddd [seo chaidh] [aig] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ann an %s',
            past : 'bho chionn %s',
            s : 'beagan diogan',
            m : 'mionaid',
            mm : '%d mionaidean',
            h : 'uair',
            hh : '%d uairean',
            d : 'latha',
            dd : '%d latha',
            M : 'mÃ¬os',
            MM : '%d mÃ¬osan',
            y : 'bliadhna',
            yy : '%d bliadhna'
        },
        ordinalParse : /\d{1,2}(d|na|mh)/,
        ordinal : function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : galician (gl)
    //! author : Juan G. Hurtado : https://github.com/juanghurtado

    var gl = moment.defineLocale('gl', {
        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
        monthsShort : 'Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado'.split('_'),
        weekdaysShort : 'Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'Ã¡s' : 'Ã¡') + '] LT';
            },
            nextDay : function () {
                return '[maÃ±Ã¡ ' + ((this.hours() !== 1) ? 'Ã¡s' : 'Ã¡') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'Ã¡s' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'Ã¡' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'Ã¡s' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str === 'uns segundos') {
                    return 'nuns segundos';
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un dÃ­a',
            dd : '%d dÃ­as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        ordinalParse : /\d{1,2}Âº/,
        ordinal : '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Hebrew (he)
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter

    var he = moment.defineLocale('he', {
        months : '×× ×××¨_×¤××¨×××¨_××¨×¥_××¤×¨××_×××_××× ×_××××_×××××¡×_×¡×¤××××¨_×××§××××¨_× ×××××¨_××¦×××¨'.split('_'),
        monthsShort : '×× ××³_×¤××¨×³_××¨×¥_××¤×¨×³_×××_××× ×_××××_××××³_×¡×¤××³_×××§×³_× ×××³_××¦××³'.split('_'),
        weekdays : '×¨××©××_×©× ×_×©×××©×_×¨×××¢×_××××©×_×©××©×_×©××ª'.split('_'),
        weekdaysShort : '××³_××³_××³_××³_××³_××³_×©×³'.split('_'),
        weekdaysMin : '×_×_×_×_×_×_×©'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [×]MMMM YYYY',
            LLL : 'D [×]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [×]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[×××× ×Ö¾]LT',
            nextDay : '[×××¨ ×Ö¾]LT',
            nextWeek : 'dddd [××©×¢×] LT',
            lastDay : '[××ª××× ×Ö¾]LT',
            lastWeek : '[××××] dddd [××××¨×× ××©×¢×] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '××¢×× %s',
            past : '××¤× × %s',
            s : '××¡×¤×¨ ×©× ×××ª',
            m : '××§×',
            mm : '%d ××§××ª',
            h : '×©×¢×',
            hh : function (number) {
                if (number === 2) {
                    return '×©×¢×ª×××';
                }
                return number + ' ×©×¢××ª';
            },
            d : '×××',
            dd : function (number) {
                if (number === 2) {
                    return '××××××';
                }
                return number + ' ××××';
            },
            M : '××××©',
            MM : function (number) {
                if (number === 2) {
                    return '××××©×××';
                }
                return number + ' ××××©××';
            },
            y : '×©× ×',
            yy : function (number) {
                if (number === 2) {
                    return '×©× ×ª×××';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' ×©× ×';
                }
                return number + ' ×©× ××';
            }
        },
        meridiemParse: /×××"×¦|××¤× ×"×¦|×××¨× ××¦××¨×××|××¤× × ××¦××¨×××|××¤× ××ª ×××§×¨|××××§×¨|××¢×¨×/i,
        isPM : function (input) {
            return /^(×××"×¦|×××¨× ××¦××¨×××|××¢×¨×)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return '××¤× ××ª ×××§×¨';
            } else if (hour < 10) {
                return '××××§×¨';
            } else if (hour < 12) {
                return isLower ? '××¤× ×"×¦' : '××¤× × ××¦××¨×××';
            } else if (hour < 18) {
                return isLower ? '×××"×¦' : '×××¨× ××¦××¨×××';
            } else {
                return '××¢×¨×';
            }
        }
    });

    //! moment.js locale configuration
    //! locale : hindi (hi)
    //! author : Mayank Singhal : https://github.com/mayanksinghal

    var hi__symbolMap = {
        '1': 'à¥§',
        '2': 'à¥¨',
        '3': 'à¥©',
        '4': 'à¥ª',
        '5': 'à¥«',
        '6': 'à¥¬',
        '7': 'à¥­',
        '8': 'à¥®',
        '9': 'à¥¯',
        '0': 'à¥¦'
    },
    hi__numberMap = {
        'à¥§': '1',
        'à¥¨': '2',
        'à¥©': '3',
        'à¥ª': '4',
        'à¥«': '5',
        'à¥¬': '6',
        'à¥­': '7',
        'à¥®': '8',
        'à¥¯': '9',
        'à¥¦': '0'
    };

    var hi = moment.defineLocale('hi', {
        months : 'à¤à¤¨à¤µà¤°à¥_à¤«à¤¼à¤°à¤µà¤°à¥_à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¥à¤²_à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²à¤¾à¤_à¤à¤à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤à¤à¥à¤à¥à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°'.split('_'),
        monthsShort : 'à¤à¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¥._à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²._à¤à¤._à¤¸à¤¿à¤¤._à¤à¤à¥à¤à¥._à¤¨à¤µ._à¤¦à¤¿à¤¸.'.split('_'),
        monthsParseExact: true,
        weekdays : 'à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥à¤®à¤µà¤¾à¤°_à¤®à¤à¤à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤à¥à¤°à¥à¤µà¤¾à¤°_à¤¶à¥à¤à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°'.split('_'),
        weekdaysShort : 'à¤°à¤µà¤¿_à¤¸à¥à¤®_à¤®à¤à¤à¤²_à¤¬à¥à¤§_à¤à¥à¤°à¥_à¤¶à¥à¤à¥à¤°_à¤¶à¤¨à¤¿'.split('_'),
        weekdaysMin : 'à¤°_à¤¸à¥_à¤®à¤_à¤¬à¥_à¤à¥_à¤¶à¥_à¤¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¤¬à¤à¥',
            LTS : 'A h:mm:ss à¤¬à¤à¥',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¤¬à¤à¥',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¤¬à¤à¥'
        },
        calendar : {
            sameDay : '[à¤à¤] LT',
            nextDay : '[à¤à¤²] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¤à¤²] LT',
            lastWeek : '[à¤ªà¤¿à¤à¤²à¥] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à¤®à¥à¤',
            past : '%s à¤ªà¤¹à¤²à¥',
            s : 'à¤à¥à¤ à¤¹à¥ à¤à¥à¤·à¤£',
            m : 'à¤à¤ à¤®à¤¿à¤¨à¤',
            mm : '%d à¤®à¤¿à¤¨à¤',
            h : 'à¤à¤ à¤à¤à¤à¤¾',
            hh : '%d à¤à¤à¤à¥',
            d : 'à¤à¤ à¤¦à¤¿à¤¨',
            dd : '%d à¤¦à¤¿à¤¨',
            M : 'à¤à¤ à¤®à¤¹à¥à¤¨à¥',
            MM : '%d à¤®à¤¹à¥à¤¨à¥',
            y : 'à¤à¤ à¤µà¤°à¥à¤·',
            yy : '%d à¤µà¤°à¥à¤·'
        },
        preparse: function (string) {
            return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
                return hi__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return hi__symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¤°à¤¾à¤¤') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¥à¤¬à¤¹') {
                return hour;
            } else if (meridiem === 'à¤¦à¥à¤ªà¤¹à¤°') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¤¶à¤¾à¤®') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¤°à¤¾à¤¤';
            } else if (hour < 10) {
                return 'à¤¸à¥à¤¬à¤¹';
            } else if (hour < 17) {
                return 'à¤¦à¥à¤ªà¤¹à¤°';
            } else if (hour < 20) {
                return 'à¤¶à¤¾à¤®';
            } else {
                return 'à¤°à¤¾à¤¤';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : hrvatski (hr)
    //! author : Bojan MarkoviÄ : https://github.com/bmarkovic

    function hr__translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
        }
    }

    var hr = moment.defineLocale('hr', {
        months : {
            format: 'sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort : 'sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._Äet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_Äe_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juÄer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[proÅ¡lu] dddd [u] LT';
                case 6:
                    return '[proÅ¡le] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[proÅ¡li] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            m      : hr__translate,
            mm     : hr__translate,
            h      : hr__translate,
            hh     : hr__translate,
            d      : 'dan',
            dd     : hr__translate,
            M      : 'mjesec',
            MM     : hr__translate,
            y      : 'godinu',
            yy     : hr__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : hungarian (hu)
    //! author : Adam Brunner : https://github.com/adambrunner

    var weekEndings = 'vasÃ¡rnap hÃ©tfÅn kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton'.split(' ');
    function hu__translate(number, withoutSuffix, key, isFuture) {
        var num = number,
            suffix;
        switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'nÃ©hÃ¡ny mÃ¡sodperc' : 'nÃ©hÃ¡ny mÃ¡sodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' Ã³ra' : ' Ã³rÃ¡ja');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' Ã³ra' : ' Ã³rÃ¡ja');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hÃ³nap' : ' hÃ³napja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hÃ³nap' : ' hÃ³napja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' Ã©v' : ' Ã©ve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' Ã©v' : ' Ã©ve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[mÃºlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december'.split('_'),
        monthsShort : 'jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasÃ¡rnap_hÃ©tfÅ_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat'.split('_'),
        weekdaysShort : 'vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s mÃºlva',
            past : '%s',
            s : hu__translate,
            m : hu__translate,
            mm : hu__translate,
            h : hu__translate,
            hh : hu__translate,
            d : hu__translate,
            dd : hu__translate,
            M : hu__translate,
            MM : hu__translate,
            y : hu__translate,
            yy : hu__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Armenian (hy-am)
    //! author : Armendarabyan : https://github.com/armendarabyan

    var hy_am = moment.defineLocale('hy-am', {
        months : {
            format: 'Õ°Õ¸ÖÕ¶Õ¾Õ¡ÖÕ«_ÖÕ¥Õ¿ÖÕ¾Õ¡ÖÕ«_Õ´Õ¡ÖÕ¿Õ«_Õ¡ÕºÖÕ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸ÖÕ¶Õ«Õ½Õ«_Õ°Õ¸ÖÕ¬Õ«Õ½Õ«_ÖÕ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥ÖÕ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥ÖÕ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥ÖÕ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥ÖÕ«'.split('_'),
            standalone: 'Õ°Õ¸ÖÕ¶Õ¾Õ¡Ö_ÖÕ¥Õ¿ÖÕ¾Õ¡Ö_Õ´Õ¡ÖÕ¿_Õ¡ÕºÖÕ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸ÖÕ¶Õ«Õ½_Õ°Õ¸ÖÕ¬Õ«Õ½_ÖÕ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö'.split('_')
        },
        monthsShort : 'Õ°Õ¶Õ¾_ÖÕ¿Ö_Õ´ÖÕ¿_Õ¡ÕºÖ_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_ÖÕ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿'.split('_'),
        weekdays : 'Õ¯Õ«ÖÕ¡Õ¯Õ«_Õ¥ÖÕ¯Õ¸ÖÕ·Õ¡Õ¢Õ©Õ«_Õ¥ÖÕ¥ÖÕ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸ÖÕ¥ÖÕ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸ÖÖÕ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©'.split('_'),
        weekdaysShort : 'Õ¯ÖÕ¯_Õ¥ÖÕ¯_Õ¥ÖÖ_Õ¹ÖÖ_Õ°Õ¶Õ£_Õ¸ÖÖÕ¢_Õ·Õ¢Õ©'.split('_'),
        weekdaysMin : 'Õ¯ÖÕ¯_Õ¥ÖÕ¯_Õ¥ÖÖ_Õ¹ÖÖ_Õ°Õ¶Õ£_Õ¸ÖÖÕ¢_Õ·Õ¢Õ©'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Õ©.',
            LLL : 'D MMMM YYYY Õ©., HH:mm',
            LLLL : 'dddd, D MMMM YYYY Õ©., HH:mm'
        },
        calendar : {
            sameDay: '[Õ¡ÕµÕ½ÖÖ] LT',
            nextDay: '[Õ¾Õ¡Õ²Õ¨] LT',
            lastDay: '[Õ¥ÖÕ¥Õ¯] LT',
            nextWeek: function () {
                return 'dddd [ÖÖÕ¨ ÕªÕ¡Õ´Õ¨] LT';
            },
            lastWeek: function () {
                return '[Õ¡Õ¶ÖÕ¡Õ®] dddd [ÖÖÕ¨ ÕªÕ¡Õ´Õ¨] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s Õ°Õ¥Õ¿Õ¸',
            past : '%s Õ¡Õ¼Õ¡Õ»',
            s : 'Õ´Õ« ÖÕ¡Õ¶Õ« Õ¾Õ¡ÕµÖÕ¯ÕµÕ¡Õ¶',
            m : 'ÖÕ¸ÕºÕ¥',
            mm : '%d ÖÕ¸ÕºÕ¥',
            h : 'ÕªÕ¡Õ´',
            hh : '%d ÕªÕ¡Õ´',
            d : 'ÖÖ',
            dd : '%d ÖÖ',
            M : 'Õ¡Õ´Õ«Õ½',
            MM : '%d Õ¡Õ´Õ«Õ½',
            y : 'Õ¿Õ¡ÖÕ«',
            yy : '%d Õ¿Õ¡ÖÕ«'
        },
        meridiemParse: /Õ£Õ«Õ·Õ¥ÖÕ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥ÖÕ¥Õ¯Õ¾Õ¡|Õ¥ÖÕ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
        isPM: function (input) {
            return /^(ÖÕ¥ÖÕ¥Õ¯Õ¾Õ¡|Õ¥ÖÕ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'Õ£Õ«Õ·Õ¥ÖÕ¾Õ¡';
            } else if (hour < 12) {
                return 'Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡';
            } else if (hour < 17) {
                return 'ÖÕ¥ÖÕ¥Õ¯Õ¾Õ¡';
            } else {
                return 'Õ¥ÖÕ¥Õ¯Õ¸ÕµÕ¡Õ¶';
            }
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|ÖÕ¤)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                if (number === 1) {
                    return number + '-Õ«Õ¶';
                }
                return number + '-ÖÕ¤';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bahasa Indonesia (id)
    //! author : Mohammad Satrio Utomo : https://github.com/tyok
    //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

    var id = moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : icelandic (is)
    //! author : Hinrik Ãrn SigurÃ°sson : https://github.com/hinrik

    function is__plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function is__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekÃºndur' : 'nokkrum sekÃºndum';
        case 'm':
            return withoutSuffix ? 'mÃ­nÃºta' : 'mÃ­nÃºtu';
        case 'mm':
            if (is__plural(number)) {
                return result + (withoutSuffix || isFuture ? 'mÃ­nÃºtur' : 'mÃ­nÃºtum');
            } else if (withoutSuffix) {
                return result + 'mÃ­nÃºta';
            }
            return result + 'mÃ­nÃºtu';
        case 'hh':
            if (is__plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (is__plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'dÃ¶gum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'mÃ¡nuÃ°ur';
            }
            return isFuture ? 'mÃ¡nuÃ°' : 'mÃ¡nuÃ°i';
        case 'MM':
            if (is__plural(number)) {
                if (withoutSuffix) {
                    return result + 'mÃ¡nuÃ°ir';
                }
                return result + (isFuture ? 'mÃ¡nuÃ°i' : 'mÃ¡nuÃ°um');
            } else if (withoutSuffix) {
                return result + 'mÃ¡nuÃ°ur';
            }
            return result + (isFuture ? 'mÃ¡nuÃ°' : 'mÃ¡nuÃ°i');
        case 'y':
            return withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡ri';
        case 'yy':
            if (is__plural(number)) {
                return result + (withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡rum');
            }
            return result + (withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡ri');
        }
    }

    var is = moment.defineLocale('is', {
        months : 'janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des'.split('_'),
        weekdays : 'sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau'.split('_'),
        weekdaysMin : 'Su_MÃ¡_Ãr_Mi_Fi_FÃ¶_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[Ã­ dag kl.] LT',
            nextDay : '[Ã¡ morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Ã­ gÃ¦r kl.] LT',
            lastWeek : '[sÃ­Ã°asta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s sÃ­Ã°an',
            s : is__translate,
            m : is__translate,
            mm : is__translate,
            h : 'klukkustund',
            hh : is__translate,
            d : is__translate,
            dd : is__translate,
            M : is__translate,
            MM : is__translate,
            y : is__translate,
            yy : is__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : italian (it)
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz

    var it = moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato'.split('_'),
        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        ordinalParse : /\d{1,2}Âº/,
        ordinal: '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : japanese (ja)
    //! author : LI Long : https://github.com/baryon

    var ja = moment.defineLocale('ja', {
        months : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
        monthsShort : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
        weekdays : 'æ¥ææ¥_æææ¥_ç«ææ¥_æ°´ææ¥_æ¨ææ¥_éææ¥_åææ¥'.split('_'),
        weekdaysShort : 'æ¥_æ_ç«_æ°´_æ¨_é_å'.split('_'),
        weekdaysMin : 'æ¥_æ_ç«_æ°´_æ¨_é_å'.split('_'),
        longDateFormat : {
            LT : 'Ahæmå',
            LTS : 'Ahæmåsç§',
            L : 'YYYY/MM/DD',
            LL : 'YYYYå¹´MæDæ¥',
            LLL : 'YYYYå¹´MæDæ¥Ahæmå',
            LLLL : 'YYYYå¹´MæDæ¥Ahæmå dddd'
        },
        meridiemParse: /åå|åå¾/i,
        isPM : function (input) {
            return input === 'åå¾';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'åå';
            } else {
                return 'åå¾';
            }
        },
        calendar : {
            sameDay : '[ä»æ¥] LT',
            nextDay : '[ææ¥] LT',
            nextWeek : '[æ¥é±]dddd LT',
            lastDay : '[æ¨æ¥] LT',
            lastWeek : '[åé±]dddd LT',
            sameElse : 'L'
        },
        ordinalParse : /\d{1,2}æ¥/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + 'æ¥';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%så¾',
            past : '%så',
            s : 'æ°ç§',
            m : '1å',
            mm : '%då',
            h : '1æé',
            hh : '%dæé',
            d : '1æ¥',
            dd : '%dæ¥',
            M : '1ã¶æ',
            MM : '%dã¶æ',
            y : '1å¹´',
            yy : '%då¹´'
        }
    });

    //! moment.js locale configuration
    //! locale : Boso Jowo (jv)
    //! author : Rony Lantip : https://github.com/lantip
    //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

    var jv = moment.defineLocale('jv', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'enjing') {
                return hour;
            } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'enjing';
            } else if (hours < 15) {
                return 'siyang';
            } else if (hours < 19) {
                return 'sonten';
            } else {
                return 'ndalu';
            }
        },
        calendar : {
            sameDay : '[Dinten puniko pukul] LT',
            nextDay : '[Mbenjang pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kala wingi pukul] LT',
            lastWeek : 'dddd [kepengker pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'wonten ing %s',
            past : '%s ingkang kepengker',
            s : 'sawetawis detik',
            m : 'setunggal menit',
            mm : '%d menit',
            h : 'setunggal jam',
            hh : '%d jam',
            d : 'sedinten',
            dd : '%d dinten',
            M : 'sewulan',
            MM : '%d wulan',
            y : 'setaun',
            yy : '%d taun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Georgian (ka)
    //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

    var ka = moment.defineLocale('ka', {
        months : {
            standalone: 'áááááá á_ááááá áááá_ááá á¢á_ááá ááá_áááá¡á_ááááá¡á_ááááá¡á_ááááá¡á¢á_á¡áá¥á¢ááááá á_áá¥á¢ááááá á_ááááááá á_áááááááá á'.split('_'),
            format: 'áááááá á¡_ááááá áááá¡_ááá á¢á¡_ááá áááá¡_áááá¡á¡_ááááá¡á¡_ááááá¡á¡_ááááá¡á¢á¡_á¡áá¥á¢ááááá á¡_áá¥á¢ááááá á¡_ááááááá á¡_áááááááá á¡'.split('_')
        },
        monthsShort : 'ááá_ááá_ááá _ááá _ááá_ááá_ááá_ááá_á¡áá¥_áá¥á¢_ááá_ááá'.split('_'),
        weekdays : {
            standalone: 'áááá á_áá á¨ááááá_á¡ááá¨ááááá_ááá®á¨ááááá_á®á£áá¨ááááá_ááá áá¡áááá_á¨ááááá'.split('_'),
            format: 'áááá áá¡_áá á¨ááááá¡_á¡ááá¨ááááá¡_ááá®á¨ááááá¡_á®á£áá¨ááááá¡_ááá áá¡áááá¡_á¨ááááá¡'.split('_'),
            isFormat: /(á¬ááá|á¨ááááá)/
        },
        weekdaysShort : 'ááá_áá á¨_á¡áá_ááá®_á®á£á_ááá _á¨áá'.split('_'),
        weekdaysMin : 'áá_áá _á¡á_áá_á®á£_áá_á¨á'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[áá¦áá¡] LT[-áá]',
            nextDay : '[á®ááá] LT[-áá]',
            lastDay : '[áá£á¨áá] LT[-áá]',
            nextWeek : '[á¨ááááá] dddd LT[-áá]',
            lastWeek : '[á¬ááá] dddd LT-áá',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(á¬ááá|á¬á£áá|á¡áááá|á¬ááá)/).test(s) ?
                    s.replace(/á$/, 'á¨á') :
                    s + 'á¨á';
            },
            past : function (s) {
                if ((/(á¬ááá|á¬á£áá|á¡áááá|áá¦á|ááá)/).test(s)) {
                    return s.replace(/(á|á)$/, 'áá¡ á¬áá');
                }
                if ((/á¬ááá/).test(s)) {
                    return s.replace(/á¬ááá$/, 'á¬ááá¡ á¬áá');
                }
            },
            s : 'á áááááááá á¬ááá',
            m : 'á¬á£áá',
            mm : '%d á¬á£áá',
            h : 'á¡áááá',
            hh : '%d á¡áááá',
            d : 'áá¦á',
            dd : '%d áá¦á',
            M : 'ááá',
            MM : '%d ááá',
            y : 'á¬ááá',
            yy : '%d á¬ááá'
        },
        ordinalParse: /0|1-áá|áá-\d{1,2}|\d{1,2}-á/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-áá';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'áá-' + number;
            }
            return number + '-á';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    //! moment.js locale configuration
    //! locale : kazakh (kk)
    //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

    var kk__suffixes = {
        0: '-ÑÑ',
        1: '-ÑÑ',
        2: '-ÑÑ',
        3: '-ÑÑ',
        4: '-ÑÑ',
        5: '-ÑÑ',
        6: '-ÑÑ',
        7: '-ÑÑ',
        8: '-ÑÑ',
        9: '-ÑÑ',
        10: '-ÑÑ',
        20: '-ÑÑ',
        30: '-ÑÑ',
        40: '-ÑÑ',
        50: '-ÑÑ',
        60: '-ÑÑ',
        70: '-ÑÑ',
        80: '-ÑÑ',
        90: '-ÑÑ',
        100: '-ÑÑ'
    };

    var kk = moment.defineLocale('kk', {
        months : 'ÒÐ°Ò£ÑÐ°Ñ_Ð°ÒÐ¿Ð°Ð½_Ð½Ð°ÑÑÑÐ·_ÑÓÑÑÑ_Ð¼Ð°Ð¼ÑÑ_Ð¼Ð°ÑÑÑÐ¼_ÑÑÐ»Ð´Ðµ_ÑÐ°Ð¼ÑÐ·_ÒÑÑÐºÒ¯Ð¹ÐµÐº_ÒÐ°Ð·Ð°Ð½_ÒÐ°ÑÐ°ÑÐ°_Ð¶ÐµÐ»ÑÐ¾ÒÑÐ°Ð½'.split('_'),
        monthsShort : 'ÒÐ°Ò£_Ð°ÒÐ¿_Ð½Ð°Ñ_ÑÓÑ_Ð¼Ð°Ð¼_Ð¼Ð°Ñ_ÑÑÐ»_ÑÐ°Ð¼_ÒÑÑ_ÒÐ°Ð·_ÒÐ°Ñ_Ð¶ÐµÐ»'.split('_'),
        weekdays : 'Ð¶ÐµÐºÑÐµÐ½Ð±Ñ_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ_ÑÓÑÑÐµÐ½Ð±Ñ_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ'.split('_'),
        weekdaysShort : 'Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓÑ_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½'.split('_'),
        weekdaysMin : 'Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ_Ð±Ð¹_Ð¶Ð¼_ÑÐ½'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[ÐÒ¯Ð³ÑÐ½ ÑÐ°ÒÐ°Ñ] LT',
            nextDay : '[ÐÑÑÐµÒ£ ÑÐ°ÒÐ°Ñ] LT',
            nextWeek : 'dddd [ÑÐ°ÒÐ°Ñ] LT',
            lastDay : '[ÐÐµÑÐµ ÑÐ°ÒÐ°Ñ] LT',
            lastWeek : '[Ó¨ÑÐºÐµÐ½ Ð°Ð¿ÑÐ°Ð½ÑÒ£] dddd [ÑÐ°ÒÐ°Ñ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ÑÑÑÐ½Ð´Ðµ',
            past : '%s Ð±Ò±ÑÑÐ½',
            s : 'Ð±ÑÑÐ½ÐµÑÐµ ÑÐµÐºÑÐ½Ð´',
            m : 'Ð±ÑÑ Ð¼Ð¸Ð½ÑÑ',
            mm : '%d Ð¼Ð¸Ð½ÑÑ',
            h : 'Ð±ÑÑ ÑÐ°ÒÐ°Ñ',
            hh : '%d ÑÐ°ÒÐ°Ñ',
            d : 'Ð±ÑÑ ÐºÒ¯Ð½',
            dd : '%d ÐºÒ¯Ð½',
            M : 'Ð±ÑÑ Ð°Ð¹',
            MM : '%d Ð°Ð¹',
            y : 'Ð±ÑÑ Ð¶ÑÐ»',
            yy : '%d Ð¶ÑÐ»'
        },
        ordinalParse: /\d{1,2}-(ÑÑ|ÑÑ)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (kk__suffixes[number] || kk__suffixes[a] || kk__suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : khmer (km)
    //! author : Kruy Vanna : https://github.com/kruyvanna

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

    //! moment.js locale configuration
    //! locale : korean (ko)
    //!
    //! authors
    //!
    //! - Kyungwook, Park : https://github.com/kyungw00k
    //! - Jeeeyul Lee <jeeeyul@gmail.com>

    var ko = moment.defineLocale('ko', {
        months : '1ì_2ì_3ì_4ì_5ì_6ì_7ì_8ì_9ì_10ì_11ì_12ì'.split('_'),
        monthsShort : '1ì_2ì_3ì_4ì_5ì_6ì_7ì_8ì_9ì_10ì_11ì_12ì'.split('_'),
        weekdays : 'ì¼ìì¼_ììì¼_íìì¼_ììì¼_ëª©ìì¼_ê¸ìì¼_í ìì¼'.split('_'),
        weekdaysShort : 'ì¼_ì_í_ì_ëª©_ê¸_í '.split('_'),
        weekdaysMin : 'ì¼_ì_í_ì_ëª©_ê¸_í '.split('_'),
        longDateFormat : {
            LT : 'A hì më¶',
            LTS : 'A hì më¶ sì´',
            L : 'YYYY.MM.DD',
            LL : 'YYYYë MMMM Dì¼',
            LLL : 'YYYYë MMMM Dì¼ A hì më¶',
            LLLL : 'YYYYë MMMM Dì¼ dddd A hì më¶'
        },
        calendar : {
            sameDay : 'ì¤ë LT',
            nextDay : 'ë´ì¼ LT',
            nextWeek : 'dddd LT',
            lastDay : 'ì´ì  LT',
            lastWeek : 'ì§ëì£¼ dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s í',
            past : '%s ì ',
            s : 'ëª ì´',
            ss : '%dì´',
            m : 'ì¼ë¶',
            mm : '%dë¶',
            h : 'í ìê°',
            hh : '%dìê°',
            d : 'íë£¨',
            dd : '%dì¼',
            M : 'í ë¬',
            MM : '%dë¬',
            y : 'ì¼ ë',
            yy : '%dë'
        },
        ordinalParse : /\d{1,2}ì¼/,
        ordinal : '%dì¼',
        meridiemParse : /ì¤ì |ì¤í/,
        isPM : function (token) {
            return token === 'ì¤í';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? 'ì¤ì ' : 'ì¤í';
        }
    });

    //! moment.js locale configuration
    //! locale : kyrgyz (ky)
    //! author : Chyngyz Arystan uulu : https://github.com/chyngyz


    var ky__suffixes = {
        0: '-ÑÒ¯',
        1: '-ÑÐ¸',
        2: '-ÑÐ¸',
        3: '-ÑÒ¯',
        4: '-ÑÒ¯',
        5: '-ÑÐ¸',
        6: '-ÑÑ',
        7: '-ÑÐ¸',
        8: '-ÑÐ¸',
        9: '-ÑÑ',
        10: '-ÑÑ',
        20: '-ÑÑ',
        30: '-ÑÑ',
        40: '-ÑÑ',
        50: '-ÑÒ¯',
        60: '-ÑÑ',
        70: '-ÑÐ¸',
        80: '-ÑÐ¸',
        90: '-ÑÑ',
        100: '-ÑÒ¯'
    };

    var ky = moment.defineLocale('ky', {
        months : 'ÑÐ½Ð²Ð°ÑÑ_ÑÐµÐ²ÑÐ°Ð»Ñ_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐµÐ»Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ½ÑÑÐ±ÑÑ_Ð¾ÐºÑÑÐ±ÑÑ_Ð½Ð¾ÑÐ±ÑÑ_Ð´ÐµÐºÐ°Ð±ÑÑ'.split('_'),
        monthsShort : 'ÑÐ½Ð²_ÑÐµÐ²_Ð¼Ð°ÑÑ_Ð°Ð¿Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ_Ð½Ð¾Ñ_Ð´ÐµÐº'.split('_'),
        weekdays : 'ÐÐµÐºÑÐµÐ¼Ð±Ð¸_ÐÒ¯Ð¹ÑÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑÐµÐ¼Ð±Ð¸_Ð¨Ð°ÑÑÐµÐ¼Ð±Ð¸_ÐÐµÐ¹ÑÐµÐ¼Ð±Ð¸_ÐÑÐ¼Ð°_ÐÑÐµÐ¼Ð±Ð¸'.split('_'),
        weekdaysShort : 'ÐÐµÐº_ÐÒ¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ_ÐÐµÐ¹_ÐÑÐ¼_ÐÑÐµ'.split('_'),
        weekdaysMin : 'ÐÐº_ÐÐ¹_Ð¨Ð¹_Ð¨Ñ_ÐÐ¹_ÐÐ¼_ÐÑ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[ÐÒ¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ] LT',
            nextDay : '[Ð­ÑÑÐµÒ£ ÑÐ°Ð°Ñ] LT',
            nextWeek : 'dddd [ÑÐ°Ð°Ñ] LT',
            lastDay : '[ÐÐµÑÐµ ÑÐ°Ð°Ñ] LT',
            lastWeek : '[Ó¨ÑÐºÐµÐ½ Ð°Ð¿ÑÐ°Ð½ÑÐ½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s Ð¸ÑÐ¸Ð½Ð´Ðµ',
            past : '%s Ð¼ÑÑÑÐ½',
            s : 'Ð±Ð¸ÑÐ½ÐµÑÐµ ÑÐµÐºÑÐ½Ð´',
            m : 'Ð±Ð¸Ñ Ð¼Ò¯Ð½Ó©Ñ',
            mm : '%d Ð¼Ò¯Ð½Ó©Ñ',
            h : 'Ð±Ð¸Ñ ÑÐ°Ð°Ñ',
            hh : '%d ÑÐ°Ð°Ñ',
            d : 'Ð±Ð¸Ñ ÐºÒ¯Ð½',
            dd : '%d ÐºÒ¯Ð½',
            M : 'Ð±Ð¸Ñ Ð°Ð¹',
            MM : '%d Ð°Ð¹',
            y : 'Ð±Ð¸Ñ Ð¶ÑÐ»',
            yy : '%d Ð¶ÑÐ»'
        },
        ordinalParse: /\d{1,2}-(ÑÐ¸|ÑÑ|ÑÒ¯|ÑÑ)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (ky__suffixes[number] || ky__suffixes[a] || ky__suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Luxembourgish (lb)
    //! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

    function lb__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }
    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }
    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays: 'Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[GÃ«schter um] LT',
            lastWeek: function () {
                // Different date string for 'DÃ«nschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            m : lb__processRelativeTime,
            mm : '%d Minutten',
            h : lb__processRelativeTime,
            hh : '%d Stonnen',
            d : lb__processRelativeTime,
            dd : '%d Deeg',
            M : lb__processRelativeTime,
            MM : '%d MÃ©int',
            y : lb__processRelativeTime,
            yy : '%d Joer'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : lao (lo)
    //! author : Ryan Hart : https://github.com/ryanhart2

    var lo = moment.defineLocale('lo', {
        months : 'àº¡àº±àºàºàº­àº_àºàº¸àº¡àºàº²_àº¡àºµàºàº²_à»àº¡àºªàº²_àºàº¶àºàºªàº°àºàº²_àº¡àº´àºàº¸àºàº²_àºà»àº¥àº°àºàº»àº_àºªàº´àºàº«àº²_àºàº±àºàºàº²_àºàº¸àº¥àº²_àºàº°àºàº´àº_àºàº±àºàº§àº²'.split('_'),
        monthsShort : 'àº¡àº±àºàºàº­àº_àºàº¸àº¡àºàº²_àº¡àºµàºàº²_à»àº¡àºªàº²_àºàº¶àºàºªàº°àºàº²_àº¡àº´àºàº¸àºàº²_àºà»àº¥àº°àºàº»àº_àºªàº´àºàº«àº²_àºàº±àºàºàº²_àºàº¸àº¥àº²_àºàº°àºàº´àº_àºàº±àºàº§àº²'.split('_'),
        weekdays : 'àº­àº²àºàº´àº_àºàº±àº_àº­àº±àºàºàº²àº_àºàº¸àº_àºàº°àº«àº±àº_àºªàº¸àº_à»àºªàº»àº²'.split('_'),
        weekdaysShort : 'àºàº´àº_àºàº±àº_àº­àº±àºàºàº²àº_àºàº¸àº_àºàº°àº«àº±àº_àºªàº¸àº_à»àºªàº»àº²'.split('_'),
        weekdaysMin : 'àº_àº_àº­àº_àº_àºàº«_àºªàº_àºª'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'àº§àº±àºdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /àºàº­àºà»àºàº»à»àº²|àºàº­àºà»àº¥àº/,
        isPM: function (input) {
            return input === 'àºàº­àºà»àº¥àº';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'àºàº­àºà»àºàº»à»àº²';
            } else {
                return 'àºàº­àºà»àº¥àº';
            }
        },
        calendar : {
            sameDay : '[àº¡àº·à»àºàºµà»à»àº§àº¥àº²] LT',
            nextDay : '[àº¡àº·à»àº­àº·à»àºà»àº§àº¥àº²] LT',
            nextWeek : '[àº§àº±àº]dddd[à»à»àº²à»àº§àº¥àº²] LT',
            lastDay : '[àº¡àº·à»àº§àº²àºàºàºµà»à»àº§àº¥àº²] LT',
            lastWeek : '[àº§àº±àº]dddd[à»àº¥à»àº§àºàºµà»à»àº§àº¥àº²] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'àº­àºµàº %s',
            past : '%sàºà»àº²àºàº¡àº²',
            s : 'àºà»à»à»àºàº»à»àº²à»àºàº§àº´àºàº²àºàºµ',
            m : '1 àºàº²àºàºµ',
            mm : '%d àºàº²àºàºµ',
            h : '1 àºàº»à»àº§à»àº¡àº',
            hh : '%d àºàº»à»àº§à»àº¡àº',
            d : '1 àº¡àº·à»',
            dd : '%d àº¡àº·à»',
            M : '1 à»àºàº·àº­àº',
            MM : '%d à»àºàº·àº­àº',
            y : '1 àºàºµ',
            yy : '%d àºàºµ'
        },
        ordinalParse: /(àºàºµà»)\d{1,2}/,
        ordinal : function (number) {
            return 'àºàºµà»' + number;
        }
    });

    //! moment.js locale configuration
    //! locale : Lithuanian (lt)
    //! author : Mindaugas MozÅ«ras : https://github.com/mmozuras

    var lt__units = {
        'm' : 'minutÄ_minutÄs_minutÄ',
        'mm': 'minutÄs_minuÄiÅ³_minutes',
        'h' : 'valanda_valandos_valandÄ',
        'hh': 'valandos_valandÅ³_valandas',
        'd' : 'diena_dienos_dienÄ',
        'dd': 'dienos_dienÅ³_dienas',
        'M' : 'mÄnuo_mÄnesio_mÄnesÄ¯',
        'MM': 'mÄnesiai_mÄnesiÅ³_mÄnesius',
        'y' : 'metai_metÅ³_metus',
        'yy': 'metai_metÅ³_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundÄs';
        } else {
            return isFuture ? 'keliÅ³ sekundÅ¾iÅ³' : 'kelias sekundes';
        }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return lt__units[key].split('_');
    }
    function lt__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var lt = moment.defineLocale('lt', {
        months : {
            format: 'sausio_vasario_kovo_balandÅ¾io_geguÅ¾Äs_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄjo_spalio_lapkriÄio_gruodÅ¾io'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_geguÅ¾Ä_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄjis_spalis_lapkritis_gruodis'.split('_')
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Å '.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[Å iandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[PraÄjusÄ¯] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieÅ¡ %s',
            s : translateSeconds,
            m : translateSingular,
            mm : lt__translate,
            h : translateSingular,
            hh : lt__translate,
            d : translateSingular,
            dd : lt__translate,
            M : translateSingular,
            MM : lt__translate,
            y : translateSingular,
            yy : lt__translate
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : latvian (lv)
    //! author : Kristaps Karlsons : https://github.com/skakri
    //! author : JÄnis Elmeris : https://github.com/JanisE

    var lv__units = {
        'm': 'minÅ«tes_minÅ«tÄm_minÅ«te_minÅ«tes'.split('_'),
        'mm': 'minÅ«tes_minÅ«tÄm_minÅ«te_minÅ«tes'.split('_'),
        'h': 'stundas_stundÄm_stunda_stundas'.split('_'),
        'hh': 'stundas_stundÄm_stunda_stundas'.split('_'),
        'd': 'dienas_dienÄm_diena_dienas'.split('_'),
        'dd': 'dienas_dienÄm_diena_dienas'.split('_'),
        'M': 'mÄneÅ¡a_mÄneÅ¡iem_mÄnesis_mÄneÅ¡i'.split('_'),
        'MM': 'mÄneÅ¡a_mÄneÅ¡iem_mÄnesis_mÄneÅ¡i'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minÅ«te", "3 minÅ«tes".
            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minÅ«tes" as in "pÄc 21 minÅ«tes".
            // E.g. "3 minÅ«tÄm" as in "pÄc 3 minÅ«tÄm".
            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
        }
    }
    function lv__relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(lv__units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(lv__units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'daÅ¾as sekundes' : 'daÅ¾Äm sekundÄm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svÄtdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Å odien pulksten] LT',
            nextDay : '[RÄ«t pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[PagÄjuÅ¡Ä] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pÄc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            m : relativeTimeWithSingular,
            mm : lv__relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : lv__relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : lv__relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : lv__relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : lv__relativeTimeWithPlural
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Montenegrin (me)
    //! author : Miodrag NikaÄ <miodrag@restartit.me> : https://github.com/miodragnikac

    var me__translator = {
        words: { //Different grammatical cases
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = me__translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + me__translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var me = moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact : true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._Äet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_Äe_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juÄe u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[proÅ¡le] [nedjelje] [u] LT',
                    '[proÅ¡log] [ponedjeljka] [u] LT',
                    '[proÅ¡log] [utorka] [u] LT',
                    '[proÅ¡le] [srijede] [u] LT',
                    '[proÅ¡log] [Äetvrtka] [u] LT',
                    '[proÅ¡log] [petka] [u] LT',
                    '[proÅ¡le] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'nekoliko sekundi',
            m      : me__translator.translate,
            mm     : me__translator.translate,
            h      : me__translator.translate,
            hh     : me__translator.translate,
            d      : 'dan',
            dd     : me__translator.translate,
            M      : 'mjesec',
            MM     : me__translator.translate,
            y      : 'godinu',
            yy     : me__translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : macedonian (mk)
    //! author : Borislav Mickov : https://github.com/B0k0

    var mk = moment.defineLocale('mk', {
        months : 'ÑÐ°Ð½ÑÐ°ÑÐ¸_ÑÐµÐ²ÑÑÐ°ÑÐ¸_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐ¸Ð»_Ð¼Ð°Ñ_ÑÑÐ½Ð¸_ÑÑÐ»Ð¸_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ¿ÑÐµÐ¼Ð²ÑÐ¸_Ð¾ÐºÑÐ¾Ð¼Ð²ÑÐ¸_Ð½Ð¾ÐµÐ¼Ð²ÑÐ¸_Ð´ÐµÐºÐµÐ¼Ð²ÑÐ¸'.split('_'),
        monthsShort : 'ÑÐ°Ð½_ÑÐµÐ²_Ð¼Ð°Ñ_Ð°Ð¿Ñ_Ð¼Ð°Ñ_ÑÑÐ½_ÑÑÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ_Ð½Ð¾Ðµ_Ð´ÐµÐº'.split('_'),
        weekdays : 'Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²ÑÐ¾ÑÐ½Ð¸Ðº_ÑÑÐµÐ´Ð°_ÑÐµÑÐ²ÑÑÐ¾Ðº_Ð¿ÐµÑÐ¾Ðº_ÑÐ°Ð±Ð¾ÑÐ°'.split('_'),
        weekdaysShort : 'Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²ÑÐ¾_ÑÑÐµ_ÑÐµÑ_Ð¿ÐµÑ_ÑÐ°Ð±'.split('_'),
        weekdaysMin : 'Ð½e_Ð¿o_Ð²Ñ_ÑÑ_ÑÐµ_Ð¿Ðµ_Ña'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[ÐÐµÐ½ÐµÑ Ð²Ð¾] LT',
            nextDay : '[Ð£ÑÑÐµ Ð²Ð¾] LT',
            nextWeek : '[ÐÐ¾] dddd [Ð²Ð¾] LT',
            lastDay : '[ÐÑÐµÑÐ° Ð²Ð¾] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[ÐÐ·Ð¼Ð¸Ð½Ð°ÑÐ°ÑÐ°] dddd [Ð²Ð¾] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[ÐÐ·Ð¼Ð¸Ð½Ð°ÑÐ¸Ð¾Ñ] dddd [Ð²Ð¾] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ð¿Ð¾ÑÐ»Ðµ %s',
            past : 'Ð¿ÑÐµÐ´ %s',
            s : 'Ð½ÐµÐºÐ¾Ð»ÐºÑ ÑÐµÐºÑÐ½Ð´Ð¸',
            m : 'Ð¼Ð¸Ð½ÑÑÐ°',
            mm : '%d Ð¼Ð¸Ð½ÑÑÐ¸',
            h : 'ÑÐ°Ñ',
            hh : '%d ÑÐ°ÑÐ°',
            d : 'Ð´ÐµÐ½',
            dd : '%d Ð´ÐµÐ½Ð°',
            M : 'Ð¼ÐµÑÐµÑ',
            MM : '%d Ð¼ÐµÑÐµÑÐ¸',
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

    //! moment.js locale configuration
    //! locale : malayalam (ml)
    //! author : Floyd Pink : https://github.com/floydpink

    var ml = moment.defineLocale('ml', {
        months : 'à´à´¨àµà´µà´°à´¿_à´«àµà´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´àµà´àµ_à´à´ªàµà´°à´¿àµ½_à´®àµà´¯àµ_à´àµàµº_à´àµà´²àµ_à´à´à´¸àµà´±àµà´±àµ_à´¸àµà´ªàµà´±àµà´±à´à´¬àµ¼_à´à´àµà´àµà´¬àµ¼_à´¨à´µà´à´¬àµ¼_à´¡à´¿à´¸à´à´¬àµ¼'.split('_'),
        monthsShort : 'à´à´¨àµ._à´«àµà´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµà´¯àµ_à´àµàµº_à´àµà´²àµ._à´à´._à´¸àµà´ªàµà´±àµà´±._à´à´àµà´àµ._à´¨à´µà´._à´¡à´¿à´¸à´.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à´à´¾à´¯à´±à´¾à´´àµà´_à´¤à´¿à´àµà´à´³à´¾à´´àµà´_à´àµà´µàµà´µà´¾à´´àµà´_à´¬àµà´§à´¨à´¾à´´àµà´_à´µàµà´¯à´¾à´´à´¾à´´àµà´_à´µàµà´³àµà´³à´¿à´¯à´¾à´´àµà´_à´¶à´¨à´¿à´¯à´¾à´´àµà´'.split('_'),
        weekdaysShort : 'à´à´¾à´¯àµ¼_à´¤à´¿à´àµà´àµ¾_à´àµà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´_à´µàµà´³àµà´³à´¿_à´¶à´¨à´¿'.split('_'),
        weekdaysMin : 'à´à´¾_à´¤à´¿_à´àµ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ_à´¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -à´¨àµ',
            LTS : 'A h:mm:ss -à´¨àµ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -à´¨àµ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -à´¨àµ'
        },
        calendar : {
            sameDay : '[à´à´¨àµà´¨àµ] LT',
            nextDay : '[à´¨à´¾à´³àµ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à´à´¨àµà´¨à´²àµ] LT',
            lastWeek : '[à´à´´à´¿à´àµà´] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à´à´´à´¿à´àµà´àµ',
            past : '%s à´®àµàµ»à´ªàµ',
            s : 'à´àµ½à´ª à´¨à´¿à´®à´¿à´·à´àµà´àµ¾',
            m : 'à´à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ',
            mm : '%d à´®à´¿à´¨à´¿à´±àµà´±àµ',
            h : 'à´à´°àµ à´®à´£à´¿à´àµà´àµàµ¼',
            hh : '%d à´®à´£à´¿à´àµà´àµàµ¼',
            d : 'à´à´°àµ à´¦à´¿à´µà´¸à´',
            dd : '%d à´¦à´¿à´µà´¸à´',
            M : 'à´à´°àµ à´®à´¾à´¸à´',
            MM : '%d à´®à´¾à´¸à´',
            y : 'à´à´°àµ à´µàµ¼à´·à´',
            yy : '%d à´µàµ¼à´·à´'
        },
        meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ|à´à´àµà´ à´à´´à´¿à´àµà´àµ|à´µàµà´àµà´¨àµà´¨àµà´°à´|à´°à´¾à´¤àµà´°à´¿/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à´°à´¾à´¤àµà´°à´¿' && hour >= 4) ||
                    meridiem === 'à´à´àµà´ à´à´´à´¿à´àµà´àµ' ||
                    meridiem === 'à´µàµà´àµà´¨àµà´¨àµà´°à´') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à´°à´¾à´¤àµà´°à´¿';
            } else if (hour < 12) {
                return 'à´°à´¾à´µà´¿à´²àµ';
            } else if (hour < 17) {
                return 'à´à´àµà´ à´à´´à´¿à´àµà´àµ';
            } else if (hour < 20) {
                return 'à´µàµà´àµà´¨àµà´¨àµà´°à´';
            } else {
                return 'à´°à´¾à´¤àµà´°à´¿';
            }
        }
    });

    //! moment.js locale configuration
    //! locale : Marathi (mr)
    //! author : Harshad Kale : https://github.com/kalehv
    //! author : Vivek Athalye : https://github.com/vnathalye

    var mr__symbolMap = {
        '1': 'à¥§',
        '2': 'à¥¨',
        '3': 'à¥©',
        '4': 'à¥ª',
        '5': 'à¥«',
        '6': 'à¥¬',
        '7': 'à¥­',
        '8': 'à¥®',
        '9': 'à¥¯',
        '0': 'à¥¦'
    },
    mr__numberMap = {
        'à¥§': '1',
        'à¥¨': '2',
        'à¥©': '3',
        'à¥ª': '4',
        'à¥«': '5',
        'à¥¬': '6',
        'à¥­': '7',
        'à¥®': '8',
        'à¥¯': '9',
        'à¥¦': '0'
    };

    function relativeTimeMr(number, withoutSuffix, string, isFuture)
    {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's': output = 'à¤à¤¾à¤¹à¥ à¤¸à¥à¤à¤à¤¦'; break;
                case 'm': output = 'à¤à¤ à¤®à¤¿à¤¨à¤¿à¤'; break;
                case 'mm': output = '%d à¤®à¤¿à¤¨à¤¿à¤à¥'; break;
                case 'h': output = 'à¤à¤ à¤¤à¤¾à¤¸'; break;
                case 'hh': output = '%d à¤¤à¤¾à¤¸'; break;
                case 'd': output = 'à¤à¤ à¤¦à¤¿à¤µà¤¸'; break;
                case 'dd': output = '%d à¤¦à¤¿à¤µà¤¸'; break;
                case 'M': output = 'à¤à¤ à¤®à¤¹à¤¿à¤¨à¤¾'; break;
                case 'MM': output = '%d à¤®à¤¹à¤¿à¤¨à¥'; break;
                case 'y': output = 'à¤à¤ à¤µà¤°à¥à¤·'; break;
                case 'yy': output = '%d à¤µà¤°à¥à¤·à¥'; break;
            }
        }
        else {
            switch (string) {
                case 's': output = 'à¤à¤¾à¤¹à¥ à¤¸à¥à¤à¤à¤¦à¤¾à¤'; break;
                case 'm': output = 'à¤à¤à¤¾ à¤®à¤¿à¤¨à¤¿à¤à¤¾'; break;
                case 'mm': output = '%d à¤®à¤¿à¤¨à¤¿à¤à¤¾à¤'; break;
                case 'h': output = 'à¤à¤à¤¾ à¤¤à¤¾à¤¸à¤¾'; break;
                case 'hh': output = '%d à¤¤à¤¾à¤¸à¤¾à¤'; break;
                case 'd': output = 'à¤à¤à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾'; break;
                case 'dd': output = '%d à¤¦à¤¿à¤µà¤¸à¤¾à¤'; break;
                case 'M': output = 'à¤à¤à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾'; break;
                case 'MM': output = '%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤'; break;
                case 'y': output = 'à¤à¤à¤¾ à¤µà¤°à¥à¤·à¤¾'; break;
                case 'yy': output = '%d à¤µà¤°à¥à¤·à¤¾à¤'; break;
            }
        }
        return output.replace(/%d/i, number);
    }

    var mr = moment.defineLocale('mr', {
        months : 'à¤à¤¾à¤¨à¥à¤µà¤¾à¤°à¥_à¤«à¥à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥_à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥_à¤à¥à¤¨_à¤à¥à¤²à¥_à¤à¤à¤¸à¥à¤_à¤¸à¤ªà¥à¤à¥à¤à¤¬à¤°_à¤à¤à¥à¤à¥à¤¬à¤°_à¤¨à¥à¤µà¥à¤¹à¥à¤à¤¬à¤°_à¤¡à¤¿à¤¸à¥à¤à¤¬à¤°'.split('_'),
        monthsShort: 'à¤à¤¾à¤¨à¥._à¤«à¥à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤._à¤à¤ªà¥à¤°à¤¿._à¤®à¥._à¤à¥à¤¨._à¤à¥à¤²à¥._à¤à¤._à¤¸à¤ªà¥à¤à¥à¤._à¤à¤à¥à¤à¥._à¤¨à¥à¤µà¥à¤¹à¥à¤._à¤¡à¤¿à¤¸à¥à¤.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥à¤®à¤µà¤¾à¤°_à¤®à¤à¤à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤à¥à¤°à¥à¤µà¤¾à¤°_à¤¶à¥à¤à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°'.split('_'),
        weekdaysShort : 'à¤°à¤µà¤¿_à¤¸à¥à¤®_à¤®à¤à¤à¤³_à¤¬à¥à¤§_à¤à¥à¤°à¥_à¤¶à¥à¤à¥à¤°_à¤¶à¤¨à¤¿'.split('_'),
        weekdaysMin : 'à¤°_à¤¸à¥_à¤®à¤_à¤¬à¥_à¤à¥_à¤¶à¥_à¤¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¤µà¤¾à¤à¤¤à¤¾',
            LTS : 'A h:mm:ss à¤µà¤¾à¤à¤¤à¤¾',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¤µà¤¾à¤à¤¤à¤¾',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤à¤¤à¤¾'
        },
        calendar : {
            sameDay : '[à¤à¤] LT',
            nextDay : '[à¤à¤¦à¥à¤¯à¤¾] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¤à¤¾à¤²] LT',
            lastWeek: '[à¤®à¤¾à¤à¥à¤²] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future: '%sà¤®à¤§à¥à¤¯à¥',
            past: '%sà¤ªà¥à¤°à¥à¤µà¥',
            s: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr
        },
        preparse: function (string) {
            return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
                return mr__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return mr__symbolMap[match];
            });
        },
        meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥|à¤¸à¤à¤¾à¤³à¥|à¤¦à¥à¤ªà¤¾à¤°à¥|à¤¸à¤¾à¤¯à¤à¤à¤¾à¤³à¥/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¤°à¤¾à¤¤à¥à¤°à¥') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¤à¤¾à¤³à¥') {
                return hour;
            } else if (meridiem === 'à¤¦à¥à¤ªà¤¾à¤°à¥') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¤¾à¤¯à¤à¤à¤¾à¤³à¥') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¤°à¤¾à¤¤à¥à¤°à¥';
            } else if (hour < 10) {
                return 'à¤¸à¤à¤¾à¤³à¥';
            } else if (hour < 17) {
                return 'à¤¦à¥à¤ªà¤¾à¤°à¥';
            } else if (hour < 20) {
                return 'à¤¸à¤¾à¤¯à¤à¤à¤¾à¤³à¥';
            } else {
                return 'à¤°à¤¾à¤¤à¥à¤°à¥';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bahasa Malaysia (ms-MY)
    //! author : Weldan Jamili : https://github.com/weldan

    var ms_my = moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Bahasa Malaysia (ms-MY)
    //! author : Weldan Jamili : https://github.com/weldan

    var ms = moment.defineLocale('ms', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Burmese (my)
    //! author : Squar team, mysquar.com

    var my__symbolMap = {
        '1': 'á',
        '2': 'á',
        '3': 'á',
        '4': 'á',
        '5': 'á',
        '6': 'á',
        '7': 'á',
        '8': 'á',
        '9': 'á',
        '0': 'á'
    }, my__numberMap = {
        'á': '1',
        'á': '2',
        'á': '3',
        'á': '4',
        'á': '5',
        'á': '6',
        'á': '7',
        'á': '8',
        'á': '9',
        'á': '0'
    };

    var my = moment.defineLocale('my', {
        months: 'áááºááá«áá®_áá±áá±á¬áºáá«áá®_áááº_á§áá¼á®_áá±_áá½ááº_áá°áá­á¯ááº_áá¼áá¯ááº_áááºáááºáá¬_á¡á±á¬ááºáá­á¯áá¬_áá­á¯áááºáá¬_áá®áááºáá¬'.split('_'),
        monthsShort: 'áááº_áá±_áááº_áá¼á®_áá±_áá½ááº_áá­á¯ááº_áá¼_áááº_á¡á±á¬ááº_áá­á¯_áá®'.split('_'),
        weekdays: 'ááááºá¹ááá½á±_ááááºá¹áá¬_á¡ááºá¹áá«_áá¯áá¹ááá°á¸_áá¼á¬áááá±á¸_áá±á¬áá¼á¬_ááá±'.split('_'),
        weekdaysShort: 'áá½á±_áá¬_áá«_áá°á¸_áá¼á¬_áá±á¬_áá±'.split('_'),
        weekdaysMin: 'áá½á±_áá¬_áá«_áá°á¸_áá¼á¬_áá±á¬_áá±'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ááá±.] LT [áá¾á¬]',
            nextDay: '[ááááºáá¼ááº] LT [áá¾á¬]',
            nextWeek: 'dddd LT [áá¾á¬]',
            lastDay: '[ááá±.á] LT [áá¾á¬]',
            lastWeek: '[áá¼á®á¸áá²á·áá±á¬] dddd LT [áá¾á¬]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'áá¬áááºá· %s áá¾á¬',
            past: 'áá½ááºáá²á·áá±á¬ %s á',
            s: 'ááá¹áááº.á¡áááºá¸áááº',
            m: 'áááºáá­áááº',
            mm: '%d áá­áááº',
            h: 'áááºáá¬áá®',
            hh: '%d áá¬áá®',
            d: 'áááºáááº',
            dd: '%d áááº',
            M: 'áááºá',
            MM: '%d á',
            y: 'áááºáá¾ááº',
            yy: '%d áá¾ááº'
        },
        preparse: function (string) {
            return string.replace(/[áááááááááá]/g, function (match) {
                return my__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return my__symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : norwegian bokmÃ¥l (nb)
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga

    var nb = moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag'.split('_'),
        weekdaysShort : 'sÃ¸._ma._ti._on._to._fr._lÃ¸.'.split('_'),
        weekdaysMin : 'sÃ¸_ma_ti_on_to_fr_lÃ¸'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i gÃ¥r kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'noen sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en mÃ¥ned',
            MM : '%d mÃ¥neder',
            y : 'ett Ã¥r',
            yy : '%d Ã¥r'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : nepali/nepalese
    //! author : suvash : https://github.com/suvash

    var ne__symbolMap = {
        '1': 'à¥§',
        '2': 'à¥¨',
        '3': 'à¥©',
        '4': 'à¥ª',
        '5': 'à¥«',
        '6': 'à¥¬',
        '7': 'à¥­',
        '8': 'à¥®',
        '9': 'à¥¯',
        '0': 'à¥¦'
    },
    ne__numberMap = {
        'à¥§': '1',
        'à¥¨': '2',
        'à¥©': '3',
        'à¥ª': '4',
        'à¥«': '5',
        'à¥¬': '6',
        'à¥­': '7',
        'à¥®': '8',
        'à¥¯': '9',
        'à¥¦': '0'
    };

    var ne = moment.defineLocale('ne', {
        months : 'à¤à¤¨à¤µà¤°à¥_à¤«à¥à¤¬à¥à¤°à¥à¤µà¤°à¥_à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²à¤¾à¤_à¤à¤à¤·à¥à¤_à¤¸à¥à¤ªà¥à¤à¥à¤®à¥à¤¬à¤°_à¤à¤à¥à¤à¥à¤¬à¤°_à¤¨à¥à¤­à¥à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥à¤®à¥à¤¬à¤°'.split('_'),
        monthsShort : 'à¤à¤¨._à¤«à¥à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¤¿._à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²à¤¾à¤._à¤à¤._à¤¸à¥à¤ªà¥à¤._à¤à¤à¥à¤à¥._à¤¨à¥à¤­à¥._à¤¡à¤¿à¤¸à¥.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à¤à¤à¤¤à¤¬à¤¾à¤°_à¤¸à¥à¤®à¤¬à¤¾à¤°_à¤®à¤à¥à¤à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°'.split('_'),
        weekdaysShort : 'à¤à¤à¤¤._à¤¸à¥à¤®._à¤®à¤à¥à¤à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤à¥à¤°._à¤¶à¤¨à¤¿.'.split('_'),
        weekdaysMin : 'à¤._à¤¸à¥._à¤®à¤._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'Aà¤à¥ h:mm à¤¬à¤à¥',
            LTS : 'Aà¤à¥ h:mm:ss à¤¬à¤à¥',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aà¤à¥ h:mm à¤¬à¤à¥',
            LLLL : 'dddd, D MMMM YYYY, Aà¤à¥ h:mm à¤¬à¤à¥'
        },
        preparse: function (string) {
            return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
                return ne__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ne__symbolMap[match];
            });
        },
        meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤à¤à¤¸à¥|à¤¸à¤¾à¤à¤/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¤°à¤¾à¤¤à¤¿') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¤¬à¤¿à¤¹à¤¾à¤¨') {
                return hour;
            } else if (meridiem === 'à¤¦à¤¿à¤à¤à¤¸à¥') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¤¾à¤à¤') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'à¤°à¤¾à¤¤à¤¿';
            } else if (hour < 12) {
                return 'à¤¬à¤¿à¤¹à¤¾à¤¨';
            } else if (hour < 16) {
                return 'à¤¦à¤¿à¤à¤à¤¸à¥';
            } else if (hour < 20) {
                return 'à¤¸à¤¾à¤à¤';
            } else {
                return 'à¤°à¤¾à¤¤à¤¿';
            }
        },
        calendar : {
            sameDay : '[à¤à¤] LT',
            nextDay : '[à¤­à¥à¤²à¤¿] LT',
            nextWeek : '[à¤à¤à¤à¤¦à¥] dddd[,] LT',
            lastDay : '[à¤¹à¤¿à¤à¥] LT',
            lastWeek : '[à¤à¤à¤à¥] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sà¤®à¤¾',
            past : '%s à¤à¤à¤¾à¤¡à¤¿',
            s : 'à¤à¥à¤¹à¥ à¤à¥à¤·à¤£',
            m : 'à¤à¤ à¤®à¤¿à¤¨à¥à¤',
            mm : '%d à¤®à¤¿à¤¨à¥à¤',
            h : 'à¤à¤ à¤à¤£à¥à¤à¤¾',
            hh : '%d à¤à¤£à¥à¤à¤¾',
            d : 'à¤à¤ à¤¦à¤¿à¤¨',
            dd : '%d à¤¦à¤¿à¤¨',
            M : 'à¤à¤ à¤®à¤¹à¤¿à¤¨à¤¾',
            MM : '%d à¤®à¤¹à¤¿à¤¨à¤¾',
            y : 'à¤à¤ à¤¬à¤°à¥à¤·',
            yy : '%d à¤¬à¤°à¥à¤·'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : dutch (nl)
    //! author : Joris RÃ¶ling : https://github.com/jjupiter

    var nl__monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        nl__monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var nl = moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return nl__monthsShortWithoutDots[m.month()];
            } else {
                return nl__monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            m : 'Ã©Ã©n minuut',
            mm : '%d minuten',
            h : 'Ã©Ã©n uur',
            hh : '%d uur',
            d : 'Ã©Ã©n dag',
            dd : '%d dagen',
            M : 'Ã©Ã©n maand',
            MM : '%d maanden',
            y : 'Ã©Ã©n jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : norwegian nynorsk (nn)
    //! author : https://github.com/mechuwind

    var nn = moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mÃ¥n_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_mÃ¥_ty_on_to_fr_lÃ¸'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I gÃ¥r klokka] LT',
            lastWeek: '[FÃ¸regÃ¥ande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s sidan',
            s : 'nokre sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein mÃ¥nad',
            MM : '%d mÃ¥nader',
            y : 'eit Ã¥r',
            yy : '%d Ã¥r'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : punjabi india (pa-in)
    //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

    var pa_in__symbolMap = {
        '1': 'à©§',
        '2': 'à©¨',
        '3': 'à©©',
        '4': 'à©ª',
        '5': 'à©«',
        '6': 'à©¬',
        '7': 'à©­',
        '8': 'à©®',
        '9': 'à©¯',
        '0': 'à©¦'
    },
    pa_in__numberMap = {
        'à©§': '1',
        'à©¨': '2',
        'à©©': '3',
        'à©ª': '4',
        'à©«': '5',
        'à©¬': '6',
        'à©­': '7',
        'à©®': '8',
        'à©¯': '9',
        'à©¦': '0'
    };

    var pa_in = moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
        months : 'à¨à¨¨à¨µà¨°à©_à¨«à¨¼à¨°à¨µà¨°à©_à¨®à¨¾à¨°à¨_à¨à¨ªà©à¨°à©à¨²_à¨®à¨_à¨à©à¨¨_à¨à©à¨²à¨¾à¨_à¨à¨à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨à¨à¨¤à©à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°'.split('_'),
        monthsShort : 'à¨à¨¨à¨µà¨°à©_à¨«à¨¼à¨°à¨µà¨°à©_à¨®à¨¾à¨°à¨_à¨à¨ªà©à¨°à©à¨²_à¨®à¨_à¨à©à¨¨_à¨à©à¨²à¨¾à¨_à¨à¨à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨à¨à¨¤à©à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°'.split('_'),
        weekdays : 'à¨à¨¤à¨µà¨¾à¨°_à¨¸à©à¨®à¨µà¨¾à¨°_à¨®à©°à¨à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©à¨à¨°à¨µà¨¾à¨°'.split('_'),
        weekdaysShort : 'à¨à¨¤_à¨¸à©à¨®_à¨®à©°à¨à¨²_à¨¬à©à¨§_à¨µà©à¨°_à¨¸à¨¼à©à¨à¨°_à¨¸à¨¼à¨¨à©'.split('_'),
        weekdaysMin : 'à¨à¨¤_à¨¸à©à¨®_à¨®à©°à¨à¨²_à¨¬à©à¨§_à¨µà©à¨°_à¨¸à¨¼à©à¨à¨°_à¨¸à¨¼à¨¨à©'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¨µà¨à©',
            LTS : 'A h:mm:ss à¨µà¨à©',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¨µà¨à©',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¨µà¨à©'
        },
        calendar : {
            sameDay : '[à¨à¨] LT',
            nextDay : '[à¨à¨²] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¨à¨²] LT',
            lastWeek : '[à¨ªà¨¿à¨à¨²à©] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à¨µà¨¿à©±à¨',
            past : '%s à¨ªà¨¿à¨à¨²à©',
            s : 'à¨à©à¨ à¨¸à¨à¨¿à©°à¨',
            m : 'à¨à¨ à¨®à¨¿à©°à¨',
            mm : '%d à¨®à¨¿à©°à¨',
            h : 'à¨à©±à¨ à¨à©°à¨à¨¾',
            hh : '%d à¨à©°à¨à©',
            d : 'à¨à©±à¨ à¨¦à¨¿à¨¨',
            dd : '%d à¨¦à¨¿à¨¨',
            M : 'à¨à©±à¨ à¨®à¨¹à©à¨¨à¨¾',
            MM : '%d à¨®à¨¹à©à¨¨à©',
            y : 'à¨à©±à¨ à¨¸à¨¾à¨²',
            yy : '%d à¨¸à¨¾à¨²'
        },
        preparse: function (string) {
            return string.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function (match) {
                return pa_in__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return pa_in__symbolMap[match];
            });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¨°à¨¾à¨¤') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¨¸à¨µà©à¨°') {
                return hour;
            } else if (meridiem === 'à¨¦à©à¨ªà¨¹à¨¿à¨°') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¨¸à¨¼à¨¾à¨®') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¨°à¨¾à¨¤';
            } else if (hour < 10) {
                return 'à¨¸à¨µà©à¨°';
            } else if (hour < 17) {
                return 'à¨¦à©à¨ªà¨¹à¨¿à¨°';
            } else if (hour < 20) {
                return 'à¨¸à¨¼à¨¾à¨®';
            } else {
                return 'à¨°à¨¾à¨¤';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : polish (pl)
    //! author : Rafal Hirsz : https://github.com/evoL

    var monthsNominative = 'styczeÅ_luty_marzec_kwiecieÅ_maj_czerwiec_lipiec_sierpieÅ_wrzesieÅ_paÅºdziernik_listopad_grudzieÅ'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅnia_paÅºdziernika_listopada_grudnia'.split('_');
    function pl__plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function pl__translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutÄ';
        case 'mm':
            return result + (pl__plural(number) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix  ? 'godzina'  : 'godzinÄ';
        case 'hh':
            return result + (pl__plural(number) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (pl__plural(number) ? 'miesiÄce' : 'miesiÄcy');
        case 'yy':
            return result + (pl__plural(number) ? 'lata' : 'lat');
        }
    }

    var pl = moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziaÅek_wtorek_Åroda_czwartek_piÄtek_sobota'.split('_'),
        weekdaysShort : 'nie_pon_wt_År_czw_pt_sb'.split('_'),
        weekdaysMin : 'Nd_Pn_Wt_År_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[DziÅ o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: '[W] dddd [o] LT',
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[W zeszÅÄ niedzielÄ o] LT';
                case 3:
                    return '[W zeszÅÄ ÅrodÄ o] LT';
                case 6:
                    return '[W zeszÅÄ sobotÄ o] LT';
                default:
                    return '[W zeszÅy] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            m : pl__translate,
            mm : pl__translate,
            h : pl__translate,
            hh : pl__translate,
            d : '1 dzieÅ',
            dd : '%d dni',
            M : 'miesiÄc',
            MM : pl__translate,
            y : 'rok',
            yy : pl__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : brazilian portuguese (pt-br)
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

    var pt_br = moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b'.split('_'),
        weekdaysMin : 'Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [Ã s] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje Ã s] LT',
            nextDay: '[AmanhÃ£ Ã s] LT',
            nextWeek: 'dddd [Ã s] LT',
            lastDay: '[Ontem Ã s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Ãltimo] dddd [Ã s] LT' : // Saturday + Sunday
                    '[Ãltima] dddd [Ã s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atrÃ¡s',
            s : 'poucos segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mÃªs',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}Âº/,
        ordinal : '%dÂº'
    });

    //! moment.js locale configuration
    //! locale : portuguese (pt)
    //! author : Jefferson : https://github.com/jalex79

    var pt = moment.defineLocale('pt', {
        months : 'Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b'.split('_'),
        weekdaysMin : 'Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hoje Ã s] LT',
            nextDay: '[AmanhÃ£ Ã s] LT',
            nextWeek: 'dddd [Ã s] LT',
            lastDay: '[Ontem Ã s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Ãltimo] dddd [Ã s] LT' : // Saturday + Sunday
                    '[Ãltima] dddd [Ã s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'hÃ¡ %s',
            s : 'segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mÃªs',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}Âº/,
        ordinal : '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : romanian (ro)
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly

    function ro__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }
        return number + separator + format[key];
    }

    var ro = moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'duminicÄ_luni_marÈi_miercuri_joi_vineri_sÃ¢mbÄtÄ'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_SÃ¢'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[mÃ¢ine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s Ã®n urmÄ',
            s : 'cÃ¢teva secunde',
            m : 'un minut',
            mm : ro__relativeTimeWithPlural,
            h : 'o orÄ',
            hh : ro__relativeTimeWithPlural,
            d : 'o zi',
            dd : ro__relativeTimeWithPlural,
            M : 'o lunÄ',
            MM : ro__relativeTimeWithPlural,
            y : 'un an',
            yy : ro__relativeTimeWithPlural
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : russian (ru)
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion ElensÃºle : https://github.com/Oire
    //! author : ÐÐ¾ÑÐµÐ½Ð±ÐµÑÐ³ ÐÐ°ÑÐº : https://github.com/socketpair

    function ru__plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function ru__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? 'Ð¼Ð¸Ð½ÑÑÐ°_Ð¼Ð¸Ð½ÑÑÑ_Ð¼Ð¸Ð½ÑÑ' : 'Ð¼Ð¸Ð½ÑÑÑ_Ð¼Ð¸Ð½ÑÑÑ_Ð¼Ð¸Ð½ÑÑ',
            'hh': 'ÑÐ°Ñ_ÑÐ°ÑÐ°_ÑÐ°ÑÐ¾Ð²',
            'dd': 'Ð´ÐµÐ½Ñ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹',
            'MM': 'Ð¼ÐµÑÑÑ_Ð¼ÐµÑÑÑÐ°_Ð¼ÐµÑÑÑÐµÐ²',
            'yy': 'Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ'
        };
        if (key === 'm') {
            return withoutSuffix ? 'Ð¼Ð¸Ð½ÑÑÐ°' : 'Ð¼Ð¸Ð½ÑÑÑ';
        }
        else {
            return number + ' ' + ru__plural(format[key], +number);
        }
    }
    var monthsParse = [/^ÑÐ½Ð²/i, /^ÑÐµÐ²/i, /^Ð¼Ð°Ñ/i, /^Ð°Ð¿Ñ/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑÐ½/i, /^Ð¸ÑÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];

    // http://new.gramota.ru/spravka/rules/139-prop : Â§ 103
    // Ð¡Ð¾ÐºÑÐ°ÑÐµÐ½Ð¸Ñ Ð¼ÐµÑÑÑÐµÐ²: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var ru = moment.defineLocale('ru', {
        months : {
            format: 'ÑÐ½Ð²Ð°ÑÑ_ÑÐµÐ²ÑÐ°Ð»Ñ_Ð¼Ð°ÑÑÐ°_Ð°Ð¿ÑÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³ÑÑÑÐ°_ÑÐµÐ½ÑÑÐ±ÑÑ_Ð¾ÐºÑÑÐ±ÑÑ_Ð½Ð¾ÑÐ±ÑÑ_Ð´ÐµÐºÐ°Ð±ÑÑ'.split('_'),
            standalone: 'ÑÐ½Ð²Ð°ÑÑ_ÑÐµÐ²ÑÐ°Ð»Ñ_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐµÐ»Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ½ÑÑÐ±ÑÑ_Ð¾ÐºÑÑÐ±ÑÑ_Ð½Ð¾ÑÐ±ÑÑ_Ð´ÐµÐºÐ°Ð±ÑÑ'.split('_')
        },
        monthsShort : {
            // Ð¿Ð¾ CLDR Ð¸Ð¼ÐµÐ½Ð½Ð¾ "Ð¸ÑÐ»." Ð¸ "Ð¸ÑÐ½.", Ð½Ð¾ ÐºÐ°ÐºÐ¾Ð¹ ÑÐ¼ÑÑÐ» Ð¼ÐµÐ½ÑÑÑ Ð±ÑÐºÐ²Ñ Ð½Ð° ÑÐ¾ÑÐºÑ ?
            format: 'ÑÐ½Ð²._ÑÐµÐ²Ñ._Ð¼Ð°Ñ._Ð°Ð¿Ñ._Ð¼Ð°Ñ_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ._Ð¾ÐºÑ._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.'.split('_'),
            standalone: 'ÑÐ½Ð²._ÑÐµÐ²Ñ._Ð¼Ð°ÑÑ_Ð°Ð¿Ñ._Ð¼Ð°Ð¹_Ð¸ÑÐ½Ñ_Ð¸ÑÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ._Ð¾ÐºÑ._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.'.split('_')
        },
        weekdays : {
            standalone: 'Ð²Ð¾ÑÐºÑÐµÑÐµÐ½ÑÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº_Ð²ÑÐ¾ÑÐ½Ð¸Ðº_ÑÑÐµÐ´Ð°_ÑÐµÑÐ²ÐµÑÐ³_Ð¿ÑÑÐ½Ð¸ÑÐ°_ÑÑÐ±Ð±Ð¾ÑÐ°'.split('_'),
            format: 'Ð²Ð¾ÑÐºÑÐµÑÐµÐ½ÑÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑÐ½Ð¸Ðº_Ð²ÑÐ¾ÑÐ½Ð¸Ðº_ÑÑÐµÐ´Ñ_ÑÐµÑÐ²ÐµÑÐ³_Ð¿ÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð±Ð¾ÑÑ'.split('_'),
            isFormat: /\[ ?[ÐÐ²] ?(?:Ð¿ÑÐ¾ÑÐ»ÑÑ|ÑÐ»ÐµÐ´ÑÑÑÑÑ|ÑÑÑ)? ?\] ?dddd/
        },
        weekdaysShort : 'Ð²Ñ_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
        weekdaysMin : 'Ð²Ñ_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        monthsRegex: /^(ÑÐµÐ½ÑÑÐ±Ñ[ÑÑ]|Ð¾ÐºÑÑÐ±Ñ[ÑÑ]|Ð´ÐµÐºÐ°Ð±Ñ[ÑÑ]|ÑÐµÐ²ÑÐ°Ð»[ÑÑ]|ÑÐ½Ð²Ð°Ñ[ÑÑ]|Ð°Ð¿ÑÐµÐ»[ÑÑ]|Ð°Ð²Ð³ÑÑÑÐ°?|Ð½Ð¾ÑÐ±Ñ[ÑÑ]|ÑÐµÐ½Ñ\.|ÑÐµÐ²Ñ\.|Ð½Ð¾ÑÐ±\.|Ð¸ÑÐ½Ñ|ÑÐ½Ð².|Ð¸ÑÐ»Ñ|Ð´ÐµÐº.|Ð°Ð²Ð³.|Ð°Ð¿Ñ.|Ð¼Ð°ÑÑÐ°|Ð¼Ð°Ñ[.Ñ]|Ð¾ÐºÑ.|Ð¸ÑÐ½[ÑÑ]|Ð¸ÑÐ»[ÑÑ]|Ð¼Ð°[ÑÐ¹])/i,
        monthsShortRegex: /^(ÑÐµÐ½ÑÑÐ±Ñ[ÑÑ]|Ð¾ÐºÑÑÐ±Ñ[ÑÑ]|Ð´ÐµÐºÐ°Ð±Ñ[ÑÑ]|ÑÐµÐ²ÑÐ°Ð»[ÑÑ]|ÑÐ½Ð²Ð°Ñ[ÑÑ]|Ð°Ð¿ÑÐµÐ»[ÑÑ]|Ð°Ð²Ð³ÑÑÑÐ°?|Ð½Ð¾ÑÐ±Ñ[ÑÑ]|ÑÐµÐ½Ñ\.|ÑÐµÐ²Ñ\.|Ð½Ð¾ÑÐ±\.|Ð¸ÑÐ½Ñ|ÑÐ½Ð².|Ð¸ÑÐ»Ñ|Ð´ÐµÐº.|Ð°Ð²Ð³.|Ð°Ð¿Ñ.|Ð¼Ð°ÑÑÐ°|Ð¼Ð°Ñ[.Ñ]|Ð¾ÐºÑ.|Ð¸ÑÐ½[ÑÑ]|Ð¸ÑÐ»[ÑÑ]|Ð¼Ð°[ÑÐ¹])/i,
        monthsStrictRegex: /^(ÑÐµÐ½ÑÑÐ±Ñ[ÑÑ]|Ð¾ÐºÑÑÐ±Ñ[ÑÑ]|Ð´ÐµÐºÐ°Ð±Ñ[ÑÑ]|ÑÐµÐ²ÑÐ°Ð»[ÑÑ]|ÑÐ½Ð²Ð°Ñ[ÑÑ]|Ð°Ð¿ÑÐµÐ»[ÑÑ]|Ð°Ð²Ð³ÑÑÑÐ°?|Ð½Ð¾ÑÐ±Ñ[ÑÑ]|Ð¼Ð°ÑÑÐ°?|Ð¸ÑÐ½[ÑÑ]|Ð¸ÑÐ»[ÑÑ]|Ð¼Ð°[ÑÐ¹])/i,
        monthsShortStrictRegex: /^(Ð½Ð¾ÑÐ±\.|ÑÐµÐ²Ñ\.|ÑÐµÐ½Ñ\.|Ð¸ÑÐ»Ñ|ÑÐ½Ð²\.|Ð¸ÑÐ½[ÑÑ]|Ð¼Ð°Ñ[.Ñ]|Ð°Ð²Ð³\.|Ð°Ð¿Ñ\.|Ð¾ÐºÑ\.|Ð´ÐµÐº\.|Ð¼Ð°[ÑÐ¹])/i,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Ð³.',
            LLL : 'D MMMM YYYY Ð³., HH:mm',
            LLLL : 'dddd, D MMMM YYYY Ð³., HH:mm'
        },
        calendar : {
            sameDay: '[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT',
            nextDay: '[ÐÐ°Ð²ÑÑÐ° Ð²] LT',
            lastDay: '[ÐÑÐµÑÐ° Ð²] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                    case 0:
                        return '[Ð ÑÐ»ÐµÐ´ÑÑÑÐµÐµ] dddd [Ð²] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[Ð ÑÐ»ÐµÐ´ÑÑÑÐ¸Ð¹] dddd [Ð²] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[Ð ÑÐ»ÐµÐ´ÑÑÑÑÑ] dddd [Ð²] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[ÐÐ¾] dddd [Ð²] LT';
                    } else {
                        return '[Ð] dddd [Ð²] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                    case 0:
                        return '[Ð Ð¿ÑÐ¾ÑÐ»Ð¾Ðµ] dddd [Ð²] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[Ð Ð¿ÑÐ¾ÑÐ»ÑÐ¹] dddd [Ð²] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[Ð Ð¿ÑÐ¾ÑÐ»ÑÑ] dddd [Ð²] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[ÐÐ¾] dddd [Ð²] LT';
                    } else {
                        return '[Ð] dddd [Ð²] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÑÐµÑÐµÐ· %s',
            past : '%s Ð½Ð°Ð·Ð°Ð´',
            s : 'Ð½ÐµÑÐºÐ¾Ð»ÑÐºÐ¾ ÑÐµÐºÑÐ½Ð´',
            m : ru__relativeTimeWithPlural,
            mm : ru__relativeTimeWithPlural,
            h : 'ÑÐ°Ñ',
            hh : ru__relativeTimeWithPlural,
            d : 'Ð´ÐµÐ½Ñ',
            dd : ru__relativeTimeWithPlural,
            M : 'Ð¼ÐµÑÑÑ',
            MM : ru__relativeTimeWithPlural,
            y : 'Ð³Ð¾Ð´',
            yy : ru__relativeTimeWithPlural
        },
        meridiemParse: /Ð½Ð¾ÑÐ¸|ÑÑÑÐ°|Ð´Ð½Ñ|Ð²ÐµÑÐµÑÐ°/i,
        isPM : function (input) {
            return /^(Ð´Ð½Ñ|Ð²ÐµÑÐµÑÐ°)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'Ð½Ð¾ÑÐ¸';
            } else if (hour < 12) {
                return 'ÑÑÑÐ°';
            } else if (hour < 17) {
                return 'Ð´Ð½Ñ';
            } else {
                return 'Ð²ÐµÑÐµÑÐ°';
            }
        },
        ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-Ð¹';
            case 'D':
                return number + '-Ð³Ð¾';
            case 'w':
            case 'W':
                return number + '-Ñ';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Northern Sami (se)
    //! authors : BÃ¥rd Rolstad Henriksen : https://github.com/karamell


    var se = moment.defineLocale('se', {
        months : 'oÄÄajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅomÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu'.split('_'),
        monthsShort : 'oÄÄj_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuossÃ¡rga_maÅÅebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_maÅ_gask_duor_bear_lÃ¡v'.split('_'),
        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'MMMM D. [b.] YYYY',
            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar : {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s geaÅ¾es',
            past : 'maÅit %s',
            s : 'moadde sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta mÃ¡nnu',
            MM : '%d mÃ¡nut',
            y : 'okta jahki',
            yy : '%d jagit'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Sinhalese (si)
    //! author : Sampath Sitinamaluwa : https://github.com/sampathsris

    /*jshint -W100*/
    var si = moment.defineLocale('si', {
        months : 'à¶¢à¶±à·à·à¶»à·_à¶´à·à¶¶à¶»à·à·à¶»à·_à¶¸à·à¶»à·à¶­à·_à¶à¶´à·âà¶»à·à¶½à·_à¶¸à·à¶ºà·_à¶¢à·à¶±à·_à¶¢à·à¶½à·_à¶à¶à·à·à·à¶­à·_à·à·à¶´à·à¶­à·à¶¸à·à¶¶à¶»à·_à¶à¶à·à¶­à·à¶¶à¶»à·_à¶±à·à·à·à¶¸à·à¶¶à¶»à·_à¶¯à·à·à·à¶¸à·à¶¶à¶»à·'.split('_'),
        monthsShort : 'à¶¢à¶±_à¶´à·à¶¶_à¶¸à·à¶»à·_à¶à¶´à·_à¶¸à·à¶ºà·_à¶¢à·à¶±à·_à¶¢à·à¶½à·_à¶à¶à·_à·à·à¶´à·_à¶à¶à·_à¶±à·à·à·_à¶¯à·à·à·'.split('_'),
        weekdays : 'à¶à¶»à·à¶¯à·_à·à¶³à·à¶¯à·_à¶à¶à·à¶»à·à·à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·âà¶»à·à·à·à¶´à¶­à·à¶±à·à¶¯à·_à·à·à¶à·à¶»à·à¶¯à·_à·à·à¶±à·à·à¶»à·à¶¯à·'.split('_'),
        weekdaysShort : 'à¶à¶»à·_à·à¶³à·_à¶à¶_à¶¶à¶¯à·_à¶¶à·âà¶»à·_à·à·à¶à·_à·à·à¶±'.split('_'),
        weekdaysMin : 'à¶_à·_à¶_à¶¶_à¶¶à·âà¶»_à·à·_à·à·'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [à·à·à¶±à·] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[à¶à¶¯] LT[à¶§]',
            nextDay : '[à·à·à¶§] LT[à¶§]',
            nextWeek : 'dddd LT[à¶§]',
            lastDay : '[à¶à¶ºà·] LT[à¶§]',
            lastWeek : '[à¶´à·à·à¶à·à¶º] dddd LT[à¶§]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sà¶à·à¶±à·',
            past : '%sà¶à¶§ à¶´à·à¶»',
            s : 'à¶­à¶­à·à¶´à¶» à¶à·à·à·à¶´à¶º',
            m : 'à¶¸à·à¶±à·à¶­à·à¶­à·à·',
            mm : 'à¶¸à·à¶±à·à¶­à·à¶­à· %d',
            h : 'à¶´à·à¶º',
            hh : 'à¶´à·à¶º %d',
            d : 'à¶¯à·à¶±à¶º',
            dd : 'à¶¯à·à¶± %d',
            M : 'à¶¸à·à·à¶º',
            MM : 'à¶¸à·à· %d',
            y : 'à·à·à¶»',
            yy : 'à·à·à¶» %d'
        },
        ordinalParse: /\d{1,2} à·à·à¶±à·/,
        ordinal : function (number) {
            return number + ' à·à·à¶±à·';
        },
        meridiemParse : /à¶´à·à¶» à·à¶»à·|à¶´à·à· à·à¶»à·|à¶´à·.à·|à¶´.à·./,
        isPM : function (input) {
            return input === 'à¶´.à·.' || input === 'à¶´à·à· à·à¶»à·';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'à¶´.à·.' : 'à¶´à·à· à·à¶»à·';
            } else {
                return isLower ? 'à¶´à·.à·.' : 'à¶´à·à¶» à·à¶»à·';
            }
        }
    });

    //! moment.js locale configuration
    //! locale : slovak (sk)
    //! author : Martin Minka : https://github.com/k2s
    //! based on work of petrbela : https://github.com/petrbela

    var sk__months = 'januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december'.split('_'),
        sk__monthsShort = 'jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec'.split('_');
    function sk__plural(n) {
        return (n > 1) && (n < 5);
    }
    function sk__translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pÃ¡r sekÃºnd' : 'pÃ¡r sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minÃºta' : (isFuture ? 'minÃºtu' : 'minÃºtou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'minÃºty' : 'minÃºt');
            } else {
                return result + 'minÃºtami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'hodiny' : 'hodÃ­n');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deÅ' : 'dÅom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'dni' : 'dnÃ­');
            } else {
                return result + 'dÅami';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'mesiace' : 'mesiacov');
            } else {
                return result + 'mesiacmi';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (sk__plural(number) ? 'roky' : 'rokov');
            } else {
                return result + 'rokmi';
            }
            break;
        }
    }

    var sk = moment.defineLocale('sk', {
        months : sk__months,
        monthsShort : sk__monthsShort,
        weekdays : 'nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota'.split('_'),
        weekdaysShort : 'ne_po_ut_st_Å¡t_pi_so'.split('_'),
        weekdaysMin : 'ne_po_ut_st_Å¡t_pi_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v nedeÄ¾u o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo Å¡tvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
                }
            },
            lastDay: '[vÄera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulÃº nedeÄ¾u o] LT';
                case 1:
                case 2:
                    return '[minulÃ½] dddd [o] LT';
                case 3:
                    return '[minulÃº stredu o] LT';
                case 4:
                case 5:
                    return '[minulÃ½] dddd [o] LT';
                case 6:
                    return '[minulÃº sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pred %s',
            s : sk__translate,
            m : sk__translate,
            mm : sk__translate,
            h : sk__translate,
            hh : sk__translate,
            d : sk__translate,
            dd : sk__translate,
            M : sk__translate,
            MM : sk__translate,
            y : sk__translate,
            yy : sk__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : slovenian (sl)
    //! author : Robert SedovÅ¡ek : https://github.com/sedovsek

    function sl__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            } else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            } else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            } else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            } else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            } else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
        }
    }

    var sl = moment.defineLocale('sl', {
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota'.split('_'),
        weekdaysShort : 'ned._pon._tor._sre._Äet._pet._sob.'.split('_'),
        weekdaysMin : 'ne_po_to_sr_Äe_pe_so'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danes ob] LT',
            nextDay  : '[jutri ob] LT',

            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
                }
            },
            lastDay  : '[vÄeraj ob] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[prejÅ¡njo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejÅ¡njo] [sredo] [ob] LT';
                case 6:
                    return '[prejÅ¡njo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejÅ¡nji] dddd [ob] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Äez %s',
            past   : 'pred %s',
            s      : sl__processRelativeTime,
            m      : sl__processRelativeTime,
            mm     : sl__processRelativeTime,
            h      : sl__processRelativeTime,
            hh     : sl__processRelativeTime,
            d      : sl__processRelativeTime,
            dd     : sl__processRelativeTime,
            M      : sl__processRelativeTime,
            MM     : sl__processRelativeTime,
            y      : sl__processRelativeTime,
            yy     : sl__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Albanian (sq)
    //! author : FlakÃ«rim Ismani : https://github.com/flakerimi
    //! author: Menelion ElensÃºle: https://github.com/Oire (tests)
    //! author : Oerd Cukalla : https://github.com/oerd (fixes)

    var sq = moment.defineLocale('sq', {
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor'.split('_'),
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj'.split('_'),
        weekdays : 'E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«'.split('_'),
        weekdaysShort : 'Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht'.split('_'),
        weekdaysMin : 'D_H_Ma_MÃ«_E_P_Sh'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /PD|MD/,
        isPM: function (input) {
            return input.charAt(0) === 'M';
        },
        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Sot nÃ«] LT',
            nextDay : '[NesÃ«r nÃ«] LT',
            nextWeek : 'dddd [nÃ«] LT',
            lastDay : '[Dje nÃ«] LT',
            lastWeek : 'dddd [e kaluar nÃ«] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'nÃ« %s',
            past : '%s mÃ« parÃ«',
            s : 'disa sekonda',
            m : 'njÃ« minutÃ«',
            mm : '%d minuta',
            h : 'njÃ« orÃ«',
            hh : '%d orÃ«',
            d : 'njÃ« ditÃ«',
            dd : '%d ditÃ«',
            M : 'njÃ« muaj',
            MM : '%d muaj',
            y : 'njÃ« vit',
            yy : '%d vite'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Serbian-cyrillic (sr-cyrl)
    //! author : Milan JanaÄkoviÄ<milanjanackovic@gmail.com> : https://github.com/milan-j

    var sr_cyrl__translator = {
        words: { //Different grammatical cases
            m: ['ÑÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑÑ', 'ÑÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑÑÐµ'],
            mm: ['Ð¼Ð¸Ð½ÑÑ', 'Ð¼Ð¸Ð½ÑÑÐµ', 'Ð¼Ð¸Ð½ÑÑÐ°'],
            h: ['ÑÐµÐ´Ð°Ð½ ÑÐ°Ñ', 'ÑÐµÐ´Ð½Ð¾Ð³ ÑÐ°ÑÐ°'],
            hh: ['ÑÐ°Ñ', 'ÑÐ°ÑÐ°', 'ÑÐ°ÑÐ¸'],
            dd: ['Ð´Ð°Ð½', 'Ð´Ð°Ð½Ð°', 'Ð´Ð°Ð½Ð°'],
            MM: ['Ð¼ÐµÑÐµÑ', 'Ð¼ÐµÑÐµÑÐ°', 'Ð¼ÐµÑÐµÑÐ¸'],
            yy: ['Ð³Ð¾Ð´Ð¸Ð½Ð°', 'Ð³Ð¾Ð´Ð¸Ð½Ðµ', 'Ð³Ð¾Ð´Ð¸Ð½Ð°']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = sr_cyrl__translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + sr_cyrl__translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr_cyrl = moment.defineLocale('sr-cyrl', {
        months: 'ÑÐ°Ð½ÑÐ°Ñ_ÑÐµÐ±ÑÑÐ°Ñ_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐ¸Ð»_Ð¼Ð°Ñ_ÑÑÐ½_ÑÑÐ»_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ¿ÑÐµÐ¼Ð±Ð°Ñ_Ð¾ÐºÑÐ¾Ð±Ð°Ñ_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ_Ð´ÐµÑÐµÐ¼Ð±Ð°Ñ'.split('_'),
        monthsShort: 'ÑÐ°Ð½._ÑÐµÐ±._Ð¼Ð°Ñ._Ð°Ð¿Ñ._Ð¼Ð°Ñ_ÑÑÐ½_ÑÑÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ._Ð½Ð¾Ð²._Ð´ÐµÑ.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Ð½ÐµÐ´ÐµÑÐ°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑÐ°Ðº_ÑÑÐ¾ÑÐ°Ðº_ÑÑÐµÐ´Ð°_ÑÐµÑÐ²ÑÑÐ°Ðº_Ð¿ÐµÑÐ°Ðº_ÑÑÐ±Ð¾ÑÐ°'.split('_'),
        weekdaysShort: 'Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑÑÐ¾._ÑÑÐµ._ÑÐµÑ._Ð¿ÐµÑ._ÑÑÐ±.'.split('_'),
        weekdaysMin: 'Ð½Ðµ_Ð¿Ð¾_ÑÑ_ÑÑ_ÑÐµ_Ð¿Ðµ_ÑÑ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[Ð´Ð°Ð½Ð°Ñ Ñ] LT',
            nextDay: '[ÑÑÑÑÐ° Ñ] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[Ñ] [Ð½ÐµÐ´ÐµÑÑ] [Ñ] LT';
                case 3:
                    return '[Ñ] [ÑÑÐµÐ´Ñ] [Ñ] LT';
                case 6:
                    return '[Ñ] [ÑÑÐ±Ð¾ÑÑ] [Ñ] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[Ñ] dddd [Ñ] LT';
                }
            },
            lastDay  : '[ÑÑÑÐµ Ñ] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[Ð¿ÑÐ¾ÑÐ»Ðµ] [Ð½ÐµÐ´ÐµÑÐµ] [Ñ] LT',
                    '[Ð¿ÑÐ¾ÑÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑÐºÐ°] [Ñ] LT',
                    '[Ð¿ÑÐ¾ÑÐ»Ð¾Ð³] [ÑÑÐ¾ÑÐºÐ°] [Ñ] LT',
                    '[Ð¿ÑÐ¾ÑÐ»Ðµ] [ÑÑÐµÐ´Ðµ] [Ñ] LT',
                    '[Ð¿ÑÐ¾ÑÐ»Ð¾Ð³] [ÑÐµÑÐ²ÑÑÐºÐ°] [Ñ] LT',
                    '[Ð¿ÑÐ¾ÑÐ»Ð¾Ð³] [Ð¿ÐµÑÐºÐ°] [Ñ] LT',
                    '[Ð¿ÑÐ¾ÑÐ»Ðµ] [ÑÑÐ±Ð¾ÑÐµ] [Ñ] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ð·Ð° %s',
            past   : 'Ð¿ÑÐµ %s',
            s      : 'Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑÐ½Ð´Ð¸',
            m      : sr_cyrl__translator.translate,
            mm     : sr_cyrl__translator.translate,
            h      : sr_cyrl__translator.translate,
            hh     : sr_cyrl__translator.translate,
            d      : 'Ð´Ð°Ð½',
            dd     : sr_cyrl__translator.translate,
            M      : 'Ð¼ÐµÑÐµÑ',
            MM     : sr_cyrl__translator.translate,
            y      : 'Ð³Ð¾Ð´Ð¸Ð½Ñ',
            yy     : sr_cyrl__translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Serbian-latin (sr)
    //! author : Milan JanaÄkoviÄ<milanjanackovic@gmail.com> : https://github.com/milan-j

    var sr__translator = {
        words: { //Different grammatical cases
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = sr__translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + sr__translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr = moment.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._Äet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_Äe_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juÄe u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[proÅ¡le] [nedelje] [u] LT',
                    '[proÅ¡log] [ponedeljka] [u] LT',
                    '[proÅ¡log] [utorka] [u] LT',
                    '[proÅ¡le] [srede] [u] LT',
                    '[proÅ¡log] [Äetvrtka] [u] LT',
                    '[proÅ¡log] [petka] [u] LT',
                    '[proÅ¡le] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'pre %s',
            s      : 'nekoliko sekundi',
            m      : sr__translator.translate,
            mm     : sr__translator.translate,
            h      : sr__translator.translate,
            hh     : sr__translator.translate,
            d      : 'dan',
            dd     : sr__translator.translate,
            M      : 'mesec',
            MM     : sr__translator.translate,
            y      : 'godinu',
            yy     : sr__translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : siSwati (ss)
    //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies


    var ss = moment.defineLocale('ss', {
        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Namuhla nga] LT',
            nextDay : '[Kusasa nga] LT',
            nextWeek : 'dddd [nga] LT',
            lastDay : '[Itolo nga] LT',
            lastWeek : 'dddd [leliphelile] [nga] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'nga %s',
            past : 'wenteka nga %s',
            s : 'emizuzwana lomcane',
            m : 'umzuzu',
            mm : '%d emizuzu',
            h : 'lihora',
            hh : '%d emahora',
            d : 'lilanga',
            dd : '%d emalanga',
            M : 'inyanga',
            MM : '%d tinyanga',
            y : 'umnyaka',
            yy : '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'ekuseni';
            } else if (hours < 15) {
                return 'emini';
            } else if (hours < 19) {
                return 'entsambama';
            } else {
                return 'ebusuku';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ekuseni') {
                return hour;
            } else if (meridiem === 'emini') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
                if (hour === 0) {
                    return 0;
                }
                return hour + 12;
            }
        },
        ordinalParse: /\d{1,2}/,
        ordinal : '%d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : swedish (sv)
    //! author : Jens Alm : https://github.com/ulmus

    var sv = moment.defineLocale('sv', {
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag'.split('_'),
        weekdaysShort : 'sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r'.split('_'),
        weekdaysMin : 'sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[IgÃ¥r] LT',
            nextWeek: '[PÃ¥] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'fÃ¶r %s sedan',
            s : 'nÃ¥gra sekunder',
            m : 'en minut',
            mm : '%d minuter',
            h : 'en timme',
            hh : '%d timmar',
            d : 'en dag',
            dd : '%d dagar',
            M : 'en mÃ¥nad',
            MM : '%d mÃ¥nader',
            y : 'ett Ã¥r',
            yy : '%d Ã¥r'
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : swahili (sw)
    //! author : Fahad Kassim : https://github.com/fadsel

    var sw = moment.defineLocale('sw', {
        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[leo saa] LT',
            nextDay : '[kesho saa] LT',
            nextWeek : '[wiki ijayo] dddd [saat] LT',
            lastDay : '[jana] LT',
            lastWeek : '[wiki iliyopita] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s baadaye',
            past : 'tokea %s',
            s : 'hivi punde',
            m : 'dakika moja',
            mm : 'dakika %d',
            h : 'saa limoja',
            hh : 'masaa %d',
            d : 'siku moja',
            dd : 'masiku %d',
            M : 'mwezi mmoja',
            MM : 'miezi %d',
            y : 'mwaka mmoja',
            yy : 'miaka %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : tamil (ta)
    //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

    var ta__symbolMap = {
        '1': 'à¯§',
        '2': 'à¯¨',
        '3': 'à¯©',
        '4': 'à¯ª',
        '5': 'à¯«',
        '6': 'à¯¬',
        '7': 'à¯­',
        '8': 'à¯®',
        '9': 'à¯¯',
        '0': 'à¯¦'
    }, ta__numberMap = {
        'à¯§': '1',
        'à¯¨': '2',
        'à¯©': '3',
        'à¯ª': '4',
        'à¯«': '5',
        'à¯¬': '6',
        'à¯­': '7',
        'à¯®': '8',
        'à¯¯': '9',
        'à¯¦': '0'
    };

    var ta = moment.defineLocale('ta', {
        months : 'à®à®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®à¯_à®à®ªà¯à®°à®²à¯_à®®à¯_à®à¯à®©à¯_à®à¯à®²à¯_à®à®à®¸à¯à®à¯_à®à¯à®ªà¯à®à¯à®®à¯à®ªà®°à¯_à®à®à¯à®à¯à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®à®¿à®à®®à¯à®ªà®°à¯'.split('_'),
        monthsShort : 'à®à®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®à¯_à®à®ªà¯à®°à®²à¯_à®®à¯_à®à¯à®©à¯_à®à¯à®²à¯_à®à®à®¸à¯à®à¯_à®à¯à®ªà¯à®à¯à®®à¯à®ªà®°à¯_à®à®à¯à®à¯à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®à®¿à®à®®à¯à®ªà®°à¯'.split('_'),
        weekdays : 'à®à®¾à®¯à®¿à®±à¯à®±à¯à®à¯à®à®¿à®´à®®à¯_à®¤à®¿à®à¯à®à®à¯à®à®¿à®´à®®à¯_à®à¯à®µà¯à®µà®¾à®¯à¯à®à®¿à®´à®®à¯_à®ªà¯à®¤à®©à¯à®à®¿à®´à®®à¯_à®µà®¿à®¯à®¾à®´à®à¯à®à®¿à®´à®®à¯_à®µà¯à®³à¯à®³à®¿à®à¯à®à®¿à®´à®®à¯_à®à®©à®¿à®à¯à®à®¿à®´à®®à¯'.split('_'),
        weekdaysShort : 'à®à®¾à®¯à®¿à®±à¯_à®¤à®¿à®à¯à®à®³à¯_à®à¯à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯à®³à¯à®³à®¿_à®à®©à®¿'.split('_'),
        weekdaysMin : 'à®à®¾_à®¤à®¿_à®à¯_à®ªà¯_à®µà®¿_à®µà¯_à®'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, HH:mm',
            LLLL : 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar : {
            sameDay : '[à®à®©à¯à®±à¯] LT',
            nextDay : '[à®¨à®¾à®³à¯] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à®¨à¯à®±à¯à®±à¯] LT',
            lastWeek : '[à®à®à®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à®à®²à¯',
            past : '%s à®®à¯à®©à¯',
            s : 'à®à®°à¯ à®à®¿à®² à®µà®¿à®¨à®¾à®à®¿à®à®³à¯',
            m : 'à®à®°à¯ à®¨à®¿à®®à®¿à®à®®à¯',
            mm : '%d à®¨à®¿à®®à®¿à®à®à¯à®à®³à¯',
            h : 'à®à®°à¯ à®®à®£à®¿ à®¨à¯à®°à®®à¯',
            hh : '%d à®®à®£à®¿ à®¨à¯à®°à®®à¯',
            d : 'à®à®°à¯ à®¨à®¾à®³à¯',
            dd : '%d à®¨à®¾à®à¯à®à®³à¯',
            M : 'à®à®°à¯ à®®à®¾à®¤à®®à¯',
            MM : '%d à®®à®¾à®¤à®à¯à®à®³à¯',
            y : 'à®à®°à¯ à®µà®°à¯à®à®®à¯',
            yy : '%d à®à®£à¯à®à¯à®à®³à¯'
        },
        ordinalParse: /\d{1,2}à®µà®¤à¯/,
        ordinal : function (number) {
            return number + 'à®µà®¤à¯';
        },
        preparse: function (string) {
            return string.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function (match) {
                return ta__numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return ta__symbolMap[match];
            });
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯à®à®±à¯|à®à®¾à®²à¯|à®¨à®£à¯à®ªà®à®²à¯|à®à®±à¯à®ªà®¾à®à¯|à®®à®¾à®²à¯/,
        meridiem : function (hour, minute, isLower) {
            if (hour < 2) {
                return ' à®¯à®¾à®®à®®à¯';
            } else if (hour < 6) {
                return ' à®µà¯à®à®±à¯';  // à®µà¯à®à®±à¯
            } else if (hour < 10) {
                return ' à®à®¾à®²à¯'; // à®à®¾à®²à¯
            } else if (hour < 14) {
                return ' à®¨à®£à¯à®ªà®à®²à¯'; // à®¨à®£à¯à®ªà®à®²à¯
            } else if (hour < 18) {
                return ' à®à®±à¯à®ªà®¾à®à¯'; // à®à®±à¯à®ªà®¾à®à¯
            } else if (hour < 22) {
                return ' à®®à®¾à®²à¯'; // à®®à®¾à®²à¯
            } else {
                return ' à®¯à®¾à®®à®®à¯';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à®¯à®¾à®®à®®à¯') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'à®µà¯à®à®±à¯' || meridiem === 'à®à®¾à®²à¯') {
                return hour;
            } else if (meridiem === 'à®¨à®£à¯à®ªà®à®²à¯') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : telugu (te)
    //! author : Krishna Chaitanya Thota : https://github.com/kcthota

    var te = moment.defineLocale('te', {
        months : 'à°à°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°à°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±_à°à±à°¨à±_à°à±à°²à±à±_à°à°à°¸à±à°à±_à°¸à±à°ªà±à°à±à°à°¬à°°à±_à°à°à±à°à±à°¬à°°à±_à°¨à°µà°à°¬à°°à±_à°¡à°¿à°¸à±à°à°¬à°°à±'.split('_'),
        monthsShort : 'à°à°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°à°¿_à°à°ªà±à°°à°¿._à°®à±_à°à±à°¨à±_à°à±à°²à±à±_à°à°._à°¸à±à°ªà±._à°à°à±à°à±._à°¨à°µ._à°¡à°¿à°¸à±.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à°à°¦à°¿à°µà°¾à°°à°_à°¸à±à°®à°µà°¾à°°à°_à°®à°à°à°³à°µà°¾à°°à°_à°¬à±à°§à°µà°¾à°°à°_à°à±à°°à±à°µà°¾à°°à°_à°¶à±à°à±à°°à°µà°¾à°°à°_à°¶à°¨à°¿à°µà°¾à°°à°'.split('_'),
        weekdaysShort : 'à°à°¦à°¿_à°¸à±à°®_à°®à°à°à°³_à°¬à±à°§_à°à±à°°à±_à°¶à±à°à±à°°_à°¶à°¨à°¿'.split('_'),
        weekdaysMin : 'à°_à°¸à±_à°®à°_à°¬à±_à°à±_à°¶à±_à°¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[à°¨à±à°¡à±] LT',
            nextDay : '[à°°à±à°ªà±] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à°¨à°¿à°¨à±à°¨] LT',
            lastWeek : '[à°à°¤] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à°²à±',
            past : '%s à°à±à°°à°¿à°¤à°',
            s : 'à°à±à°¨à±à°¨à°¿ à°à±à°·à°£à°¾à°²à±',
            m : 'à°à° à°¨à°¿à°®à°¿à°·à°',
            mm : '%d à°¨à°¿à°®à°¿à°·à°¾à°²à±',
            h : 'à°à° à°à°à°',
            hh : '%d à°à°à°à°²à±',
            d : 'à°à° à°°à±à°à±',
            dd : '%d à°°à±à°à±à°²à±',
            M : 'à°à° à°¨à±à°²',
            MM : '%d à°¨à±à°²à°²à±',
            y : 'à°à° à°¸à°à°µà°¤à±à°¸à°°à°',
            yy : '%d à°¸à°à°µà°¤à±à°¸à°°à°¾à°²à±'
        },
        ordinalParse : /\d{1,2}à°µ/,
        ordinal : '%dà°µ',
        meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°à°¦à°¯à°|à°®à°§à±à°¯à°¾à°¹à±à°¨à°|à°¸à°¾à°¯à°à°¤à±à°°à°/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à°°à°¾à°¤à±à°°à°¿') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à°à°¦à°¯à°') {
                return hour;
            } else if (meridiem === 'à°®à°§à±à°¯à°¾à°¹à±à°¨à°') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à°¸à°¾à°¯à°à°¤à±à°°à°') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à°°à°¾à°¤à±à°°à°¿';
            } else if (hour < 10) {
                return 'à°à°¦à°¯à°';
            } else if (hour < 17) {
                return 'à°®à°§à±à°¯à°¾à°¹à±à°¨à°';
            } else if (hour < 20) {
                return 'à°¸à°¾à°¯à°à°¤à±à°°à°';
            } else {
                return 'à°°à°¾à°¤à±à°°à°¿';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : thai (th)
    //! author : Kridsada Thanabulpong : https://github.com/sirn

    var th = moment.defineLocale('th', {
        months : 'à¸¡à¸à¸£à¸²à¸à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸à¸±à¸à¸à¹_à¸¡à¸µà¸à¸²à¸à¸¡_à¹à¸¡à¸©à¸²à¸¢à¸_à¸à¸¤à¸©à¸ à¸²à¸à¸¡_à¸¡à¸´à¸à¸¸à¸à¸²à¸¢à¸_à¸à¸£à¸à¸à¸²à¸à¸¡_à¸ªà¸´à¸à¸«à¸²à¸à¸¡_à¸à¸±à¸à¸¢à¸²à¸¢à¸_à¸à¸¸à¸¥à¸²à¸à¸¡_à¸à¸¤à¸¨à¸à¸´à¸à¸²à¸¢à¸_à¸à¸±à¸à¸§à¸²à¸à¸¡'.split('_'),
        monthsShort : 'à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸à¸²_à¹à¸¡à¸©à¸²_à¸à¸¤à¸©à¸ à¸²_à¸¡à¸´à¸à¸¸à¸à¸²_à¸à¸£à¸à¸à¸²_à¸ªà¸´à¸à¸«à¸²_à¸à¸±à¸à¸¢à¸²_à¸à¸¸à¸¥à¸²_à¸à¸¤à¸¨à¸à¸´à¸à¸²_à¸à¸±à¸à¸§à¸²'.split('_'),
        monthsParseExact: true,
        weekdays : 'à¸­à¸²à¸à¸´à¸à¸¢à¹_à¸à¸±à¸à¸à¸£à¹_à¸­à¸±à¸à¸à¸²à¸£_à¸à¸¸à¸_à¸à¸¤à¸«à¸±à¸ªà¸à¸à¸µ_à¸¨à¸¸à¸à¸£à¹_à¹à¸ªà¸²à¸£à¹'.split('_'),
        weekdaysShort : 'à¸­à¸²à¸à¸´à¸à¸¢à¹_à¸à¸±à¸à¸à¸£à¹_à¸­à¸±à¸à¸à¸²à¸£_à¸à¸¸à¸_à¸à¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹_à¹à¸ªà¸²à¸£à¹'.split('_'), // yes, three characters difference
        weekdaysMin : 'à¸­à¸²._à¸._à¸­._à¸._à¸à¸¤._à¸¨._à¸ª.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H à¸à¸²à¸¬à¸´à¸à¸² m à¸à¸²à¸à¸µ',
            LTS : 'H à¸à¸²à¸¬à¸´à¸à¸² m à¸à¸²à¸à¸µ s à¸§à¸´à¸à¸²à¸à¸µ',
            L : 'YYYY/MM/DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY à¹à¸§à¸¥à¸² H à¸à¸²à¸¬à¸´à¸à¸² m à¸à¸²à¸à¸µ',
            LLLL : 'à¸§à¸±à¸ddddà¸à¸µà¹ D MMMM YYYY à¹à¸§à¸¥à¸² H à¸à¸²à¸¬à¸´à¸à¸² m à¸à¸²à¸à¸µ'
        },
        meridiemParse: /à¸à¹à¸­à¸à¹à¸à¸µà¹à¸¢à¸|à¸«à¸¥à¸±à¸à¹à¸à¸µà¹à¸¢à¸/,
        isPM: function (input) {
            return input === 'à¸«à¸¥à¸±à¸à¹à¸à¸µà¹à¸¢à¸';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'à¸à¹à¸­à¸à¹à¸à¸µà¹à¸¢à¸';
            } else {
                return 'à¸«à¸¥à¸±à¸à¹à¸à¸µà¹à¸¢à¸';
            }
        },
        calendar : {
            sameDay : '[à¸§à¸±à¸à¸à¸µà¹ à¹à¸§à¸¥à¸²] LT',
            nextDay : '[à¸à¸£à¸¸à¹à¸à¸à¸µà¹ à¹à¸§à¸¥à¸²] LT',
            nextWeek : 'dddd[à¸«à¸à¹à¸² à¹à¸§à¸¥à¸²] LT',
            lastDay : '[à¹à¸¡à¸·à¹à¸­à¸§à¸²à¸à¸à¸µà¹ à¹à¸§à¸¥à¸²] LT',
            lastWeek : '[à¸§à¸±à¸]dddd[à¸à¸µà¹à¹à¸¥à¹à¸§ à¹à¸§à¸¥à¸²] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'à¸­à¸µà¸ %s',
            past : '%sà¸à¸µà¹à¹à¸¥à¹à¸§',
            s : 'à¹à¸¡à¹à¸à¸µà¹à¸§à¸´à¸à¸²à¸à¸µ',
            m : '1 à¸à¸²à¸à¸µ',
            mm : '%d à¸à¸²à¸à¸µ',
            h : '1 à¸à¸±à¹à¸§à¹à¸¡à¸',
            hh : '%d à¸à¸±à¹à¸§à¹à¸¡à¸',
            d : '1 à¸§à¸±à¸',
            dd : '%d à¸§à¸±à¸',
            M : '1 à¹à¸à¸·à¸­à¸',
            MM : '%d à¹à¸à¸·à¸­à¸',
            y : '1 à¸à¸µ',
            yy : '%d à¸à¸µ'
        }
    });

    //! moment.js locale configuration
    //! locale : Tagalog/Filipino (tl-ph)
    //! author : Dan Hagman

    var tl_ph = moment.defineLocale('tl-ph', {
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'MM/D/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY HH:mm',
            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Ngayon sa] LT',
            nextDay: '[Bukas sa] LT',
            nextWeek: 'dddd [sa] LT',
            lastDay: '[Kahapon sa] LT',
            lastWeek: 'dddd [huling linggo] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'sa loob ng %s',
            past : '%s ang nakalipas',
            s : 'ilang segundo',
            m : 'isang minuto',
            mm : '%d minuto',
            h : 'isang oras',
            hh : '%d oras',
            d : 'isang araw',
            dd : '%d araw',
            M : 'isang buwan',
            MM : '%d buwan',
            y : 'isang taon',
            yy : '%d taon'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Klingon (tlh)
    //! author : Dominika Kruk : https://github.com/amaranthrose

    var numbersNouns = 'pagh_waâ_chaâ_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

    function translateFuture(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
    	time.slice(0, -3) + 'leS' :
    	(output.indexOf('jar') !== -1) ?
    	time.slice(0, -3) + 'waQ' :
    	(output.indexOf('DIS') !== -1) ?
    	time.slice(0, -3) + 'nem' :
    	time + ' pIq';
        return time;
    }

    function translatePast(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
    	time.slice(0, -3) + 'Huâ' :
    	(output.indexOf('jar') !== -1) ?
    	time.slice(0, -3) + 'wen' :
    	(output.indexOf('DIS') !== -1) ?
    	time.slice(0, -3) + 'ben' :
    	time + ' ret';
        return time;
    }

    function tlh__translate(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);
        switch (string) {
            case 'mm':
                return numberNoun + ' tup';
            case 'hh':
                return numberNoun + ' rep';
            case 'dd':
                return numberNoun + ' jaj';
            case 'MM':
                return numberNoun + ' jar';
            case 'yy':
                return numberNoun + ' DIS';
        }
    }

    function numberAsNoun(number) {
        var hundred = Math.floor((number % 1000) / 100),
    	ten = Math.floor((number % 100) / 10),
    	one = number % 10,
    	word = '';
        if (hundred > 0) {
            word += numbersNouns[hundred] + 'vatlh';
        }
        if (ten > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
        }
        if (one > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
        }
        return (word === '') ? 'pagh' : word;
    }

    var tlh = moment.defineLocale('tlh', {
        months : 'teraâ jar waâ_teraâ jar chaâ_teraâ jar wej_teraâ jar loS_teraâ jar vagh_teraâ jar jav_teraâ jar Soch_teraâ jar chorgh_teraâ jar Hut_teraâ jar waâmaH_teraâ jar waâmaH waâ_teraâ jar waâmaH chaâ'.split('_'),
        monthsShort : 'jar waâ_jar chaâ_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâmaH_jar waâmaH waâ_jar waâmaH chaâ'.split('_'),
        monthsParseExact : true,
        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[DaHjaj] LT',
            nextDay: '[waâleS] LT',
            nextWeek: 'LLL',
            lastDay: '[waâHuâ] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
        },
        relativeTime : {
            future : translateFuture,
            past : translatePast,
            s : 'puS lup',
            m : 'waâ tup',
            mm : tlh__translate,
            h : 'waâ rep',
            hh : tlh__translate,
            d : 'waâ jaj',
            dd : tlh__translate,
            M : 'waâ jar',
            MM : tlh__translate,
            y : 'waâ DIS',
            yy : tlh__translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : turkish (tr)
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak YiÄit Kaya: https://github.com/BYK

    var tr__suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'Ã¼ncÃ¼',
        4: '\'Ã¼ncÃ¼',
        100: '\'Ã¼ncÃ¼',
        6: '\'ncÄ±',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'Ä±ncÄ±',
        90: '\'Ä±ncÄ±'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_Åubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k'.split('_'),
        monthsShort : 'Oca_Åub_Mar_Nis_May_Haz_Tem_AÄu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_SalÄ±_ÃarÅamba_PerÅembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_Ãar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_Ãa_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugÃ¼n saat] LT',
            nextDay : '[yarÄ±n saat] LT',
            nextWeek : '[haftaya] dddd [saat] LT',
            lastDay : '[dÃ¼n] LT',
            lastWeek : '[geÃ§en hafta] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s Ã¶nce',
            s : 'birkaÃ§ saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gÃ¼n',
            dd : '%d gÃ¼n',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir yÄ±l',
            yy : '%d yÄ±l'
        },
        ordinalParse: /\d{1,2}'(inci|nci|Ã¼ncÃ¼|ncÄ±|uncu|Ä±ncÄ±)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '\'Ä±ncÄ±';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (tr__suffixes[a] || tr__suffixes[b] || tr__suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : talossan (tzl)
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of IustÃ¬ Canun


    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
    // This is currently too difficult (maybe even impossible) to add.
    var tzl = moment.defineLocale('tzl', {
        months : 'Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays : 'SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi'.split('_'),
        weekdaysShort : 'SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t'.split('_'),
        weekdaysMin : 'SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM [dallas] YYYY',
            LLL : 'D. MMMM [dallas] YYYY HH.mm',
            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM : function (input) {
            return 'd\'o' === input.toLowerCase();
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'd\'o' : 'D\'O';
            } else {
                return isLower ? 'd\'a' : 'D\'A';
            }
        },
        calendar : {
            sameDay : '[oxhi Ã ] LT',
            nextDay : '[demÃ  Ã ] LT',
            nextWeek : 'dddd [Ã ] LT',
            lastDay : '[ieiri Ã ] LT',
            lastWeek : '[sÃ¼r el] dddd [lasteu Ã ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'osprei %s',
            past : 'ja%s',
            s : tzl__processRelativeTime,
            m : tzl__processRelativeTime,
            mm : tzl__processRelativeTime,
            h : tzl__processRelativeTime,
            hh : tzl__processRelativeTime,
            d : tzl__processRelativeTime,
            dd : tzl__processRelativeTime,
            M : tzl__processRelativeTime,
            MM : tzl__processRelativeTime,
            y : tzl__processRelativeTime,
            yy : tzl__processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    function tzl__processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['viensas secunds', '\'iensas secunds'],
            'm': ['\'n mÃ­ut', '\'iens mÃ­ut'],
            'mm': [number + ' mÃ­uts', '' + number + ' mÃ­uts'],
            'h': ['\'n Ã¾ora', '\'iensa Ã¾ora'],
            'hh': [number + ' Ã¾oras', '' + number + ' Ã¾oras'],
            'd': ['\'n ziua', '\'iensa ziua'],
            'dd': [number + ' ziuas', '' + number + ' ziuas'],
            'M': ['\'n mes', '\'iens mes'],
            'MM': [number + ' mesen', '' + number + ' mesen'],
            'y': ['\'n ar', '\'iens ar'],
            'yy': [number + ' ars', '' + number + ' ars']
        };
        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
    }

    //! moment.js locale configuration
    //! locale : Morocco Central Atlas TamaziÉ£t in Latin (tzm-latn)
    //! author : Abdel Said : https://github.com/abdelsaid

    var tzm_latn = moment.defineLocale('tzm-latn', {
        months : 'innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir'.split('_'),
        monthsShort : 'innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas'.split('_'),
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas'.split('_'),
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dadkh s yan %s',
            past : 'yan %s',
            s : 'imik',
            m : 'minuá¸',
            mm : '%d minuá¸',
            h : 'saÉa',
            hh : '%d tassaÉin',
            d : 'ass',
            dd : '%d ossan',
            M : 'ayowr',
            MM : '%d iyyirn',
            y : 'asgas',
            yy : '%d isgasn'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : Morocco Central Atlas TamaziÉ£t (tzm)
    //! author : Abdel Said : https://github.com/abdelsaid

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

    //! moment.js locale configuration
    //! locale : ukrainian (uk)
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion ElensÃºle : https://github.com/Oire

    function uk__plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function uk__relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? 'ÑÐ²Ð¸Ð»Ð¸Ð½Ð°_ÑÐ²Ð¸Ð»Ð¸Ð½Ð¸_ÑÐ²Ð¸Ð»Ð¸Ð½' : 'ÑÐ²Ð¸Ð»Ð¸Ð½Ñ_ÑÐ²Ð¸Ð»Ð¸Ð½Ð¸_ÑÐ²Ð¸Ð»Ð¸Ð½',
            'hh': withoutSuffix ? 'Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½' : 'Ð³Ð¾Ð´Ð¸Ð½Ñ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½',
            'dd': 'Ð´ÐµÐ½Ñ_Ð´Ð½Ñ_Ð´Ð½ÑÐ²',
            'MM': 'Ð¼ÑÑÑÑÑ_Ð¼ÑÑÑÑÑ_Ð¼ÑÑÑÑÑÐ²',
            'yy': 'ÑÑÐº_ÑÐ¾ÐºÐ¸_ÑÐ¾ÐºÑÐ²'
        };
        if (key === 'm') {
            return withoutSuffix ? 'ÑÐ²Ð¸Ð»Ð¸Ð½Ð°' : 'ÑÐ²Ð¸Ð»Ð¸Ð½Ñ';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'Ð³Ð¾Ð´Ð¸Ð½Ð°' : 'Ð³Ð¾Ð´Ð¸Ð½Ñ';
        }
        else {
            return number + ' ' + uk__plural(format[key], +number);
        }
    }
    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'Ð½ÐµÐ´ÑÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº_Ð²ÑÐ²ÑÐ¾ÑÐ¾Ðº_ÑÐµÑÐµÐ´Ð°_ÑÐµÑÐ²ÐµÑ_Ð¿âÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð¾ÑÐ°'.split('_'),
            'accusative': 'Ð½ÐµÐ´ÑÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÑÐ»Ð¾Ðº_Ð²ÑÐ²ÑÐ¾ÑÐ¾Ðº_ÑÐµÑÐµÐ´Ñ_ÑÐµÑÐ²ÐµÑ_Ð¿âÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð¾ÑÑ'.split('_'),
            'genitive': 'Ð½ÐµÐ´ÑÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÑÐ»ÐºÐ°_Ð²ÑÐ²ÑÐ¾ÑÐºÐ°_ÑÐµÑÐµÐ´Ð¸_ÑÐµÑÐ²ÐµÑÐ³Ð°_Ð¿âÑÑÐ½Ð¸ÑÑ_ÑÑÐ±Ð¾ÑÐ¸'.split('_')
        },
        nounCase = (/(\[[ÐÐ²Ð£Ñ]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:Ð¼Ð¸Ð½ÑÐ»Ð¾Ñ|Ð½Ð°ÑÑÑÐ¿Ð½Ð¾Ñ)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
        return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
        return function () {
            return str + 'Ð¾' + (this.hours() === 11 ? 'Ð±' : '') + '] LT';
        };
    }

    var uk = moment.defineLocale('uk', {
        months : {
            'format': 'ÑÑÑÐ½Ñ_Ð»ÑÑÐ¾Ð³Ð¾_Ð±ÐµÑÐµÐ·Ð½Ñ_ÐºÐ²ÑÑÐ½Ñ_ÑÑÐ°Ð²Ð½Ñ_ÑÐµÑÐ²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑÐ¿Ð½Ñ_Ð²ÐµÑÐµÑÐ½Ñ_Ð¶Ð¾Ð²ÑÐ½Ñ_Ð»Ð¸ÑÑÐ¾Ð¿Ð°Ð´Ð°_Ð³ÑÑÐ´Ð½Ñ'.split('_'),
            'standalone': 'ÑÑÑÐµÐ½Ñ_Ð»ÑÑÐ¸Ð¹_Ð±ÐµÑÐµÐ·ÐµÐ½Ñ_ÐºÐ²ÑÑÐµÐ½Ñ_ÑÑÐ°Ð²ÐµÐ½Ñ_ÑÐµÑÐ²ÐµÐ½Ñ_Ð»Ð¸Ð¿ÐµÐ½Ñ_ÑÐµÑÐ¿ÐµÐ½Ñ_Ð²ÐµÑÐµÑÐµÐ½Ñ_Ð¶Ð¾Ð²ÑÐµÐ½Ñ_Ð»Ð¸ÑÑÐ¾Ð¿Ð°Ð´_Ð³ÑÑÐ´ÐµÐ½Ñ'.split('_')
        },
        monthsShort : 'ÑÑÑ_Ð»ÑÑ_Ð±ÐµÑ_ÐºÐ²ÑÑ_ÑÑÐ°Ð²_ÑÐµÑÐ²_Ð»Ð¸Ð¿_ÑÐµÑÐ¿_Ð²ÐµÑ_Ð¶Ð¾Ð²Ñ_Ð»Ð¸ÑÑ_Ð³ÑÑÐ´'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : 'Ð½Ð´_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
        weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð²Ñ_ÑÑ_ÑÑ_Ð¿Ñ_ÑÐ±'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Ñ.',
            LLL : 'D MMMM YYYY Ñ., HH:mm',
            LLLL : 'dddd, D MMMM YYYY Ñ., HH:mm'
        },
        calendar : {
            sameDay: processHoursFunction('[Ð¡ÑÐ¾Ð³Ð¾Ð´Ð½Ñ '),
            nextDay: processHoursFunction('[ÐÐ°Ð²ÑÑÐ° '),
            lastDay: processHoursFunction('[ÐÑÐ¾ÑÐ° '),
            nextWeek: processHoursFunction('[Ð£] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[ÐÐ¸Ð½ÑÐ»Ð¾Ñ] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[ÐÐ¸Ð½ÑÐ»Ð¾Ð³Ð¾] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ð·Ð° %s',
            past : '%s ÑÐ¾Ð¼Ñ',
            s : 'Ð´ÐµÐºÑÐ»ÑÐºÐ° ÑÐµÐºÑÐ½Ð´',
            m : uk__relativeTimeWithPlural,
            mm : uk__relativeTimeWithPlural,
            h : 'Ð³Ð¾Ð´Ð¸Ð½Ñ',
            hh : uk__relativeTimeWithPlural,
            d : 'Ð´ÐµÐ½Ñ',
            dd : uk__relativeTimeWithPlural,
            M : 'Ð¼ÑÑÑÑÑ',
            MM : uk__relativeTimeWithPlural,
            y : 'ÑÑÐº',
            yy : uk__relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /Ð½Ð¾ÑÑ|ÑÐ°Ð½ÐºÑ|Ð´Ð½Ñ|Ð²ÐµÑÐ¾ÑÐ°/,
        isPM: function (input) {
            return /^(Ð´Ð½Ñ|Ð²ÐµÑÐ¾ÑÐ°)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'Ð½Ð¾ÑÑ';
            } else if (hour < 12) {
                return 'ÑÐ°Ð½ÐºÑ';
            } else if (hour < 17) {
                return 'Ð´Ð½Ñ';
            } else {
                return 'Ð²ÐµÑÐ¾ÑÐ°';
            }
        },
        ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return number + '-Ð¹';
            case 'D':
                return number + '-Ð³Ð¾';
            default:
                return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : uzbek (uz)
    //! author : Sardor Muminov : https://github.com/muminoff

    var uz = moment.defineLocale('uz', {
        months : 'ÑÐ½Ð²Ð°Ñ_ÑÐµÐ²ÑÐ°Ð»_Ð¼Ð°ÑÑ_Ð°Ð¿ÑÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑÐ½_Ð¸ÑÐ»_Ð°Ð²Ð³ÑÑÑ_ÑÐµÐ½ÑÑÐ±Ñ_Ð¾ÐºÑÑÐ±Ñ_Ð½Ð¾ÑÐ±Ñ_Ð´ÐµÐºÐ°Ð±Ñ'.split('_'),
        monthsShort : 'ÑÐ½Ð²_ÑÐµÐ²_Ð¼Ð°Ñ_Ð°Ð¿Ñ_Ð¼Ð°Ð¹_Ð¸ÑÐ½_Ð¸ÑÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ_Ð½Ð¾Ñ_Ð´ÐµÐº'.split('_'),
        weekdays : 'Ð¯ÐºÑÐ°Ð½Ð±Ð°_ÐÑÑÐ°Ð½Ð±Ð°_Ð¡ÐµÑÐ°Ð½Ð±Ð°_Ð§Ð¾ÑÑÐ°Ð½Ð±Ð°_ÐÐ°Ð¹ÑÐ°Ð½Ð±Ð°_ÐÑÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°'.split('_'),
        weekdaysShort : 'Ð¯ÐºÑ_ÐÑÑ_Ð¡ÐµÑ_Ð§Ð¾Ñ_ÐÐ°Ð¹_ÐÑÐ¼_Ð¨Ð°Ð½'.split('_'),
        weekdaysMin : 'Ð¯Ðº_ÐÑ_Ð¡Ðµ_Ð§Ð¾_ÐÐ°_ÐÑ_Ð¨Ð°'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[ÐÑÐ³ÑÐ½ ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
            nextDay : '[Ð­ÑÑÐ°Ð³Ð°] LT [Ð´Ð°]',
            nextWeek : 'dddd [ÐºÑÐ½Ð¸ ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
            lastDay : '[ÐÐµÑÐ° ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
            lastWeek : '[Ð£ÑÐ³Ð°Ð½] dddd [ÐºÑÐ½Ð¸ ÑÐ¾Ð°Ñ] LT [Ð´Ð°]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ð¯ÐºÐ¸Ð½ %s Ð¸ÑÐ¸Ð´Ð°',
            past : 'ÐÐ¸Ñ Ð½ÐµÑÐ° %s Ð¾Ð»Ð´Ð¸Ð½',
            s : 'ÑÑÑÑÐ°Ñ',
            m : 'Ð±Ð¸Ñ Ð´Ð°ÐºÐ¸ÐºÐ°',
            mm : '%d Ð´Ð°ÐºÐ¸ÐºÐ°',
            h : 'Ð±Ð¸Ñ ÑÐ¾Ð°Ñ',
            hh : '%d ÑÐ¾Ð°Ñ',
            d : 'Ð±Ð¸Ñ ÐºÑÐ½',
            dd : '%d ÐºÑÐ½',
            M : 'Ð±Ð¸Ñ Ð¾Ð¹',
            MM : '%d Ð¾Ð¹',
            y : 'Ð±Ð¸Ñ Ð¹Ð¸Ð»',
            yy : '%d Ð¹Ð¸Ð»'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : vietnamese (vi)
    //! author : Bang Nguyen : https://github.com/bangnk

    var vi = moment.defineLocale('vi', {
        months : 'thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact : true,
        weekdays : 'chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄm_thá»© sÃ¡u_thá»© báº£y'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /sa|ch/i,
        isPM : function (input) {
            return /^ch$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'sa' : 'SA';
            } else {
                return isLower ? 'ch' : 'CH';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [nÄm] YYYY',
            LLL : 'D MMMM [nÄm] YYYY HH:mm',
            LLLL : 'dddd, D MMMM [nÄm] YYYY HH:mm',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[HÃ´m nay lÃºc] LT',
            nextDay: '[NgÃ y mai lÃºc] LT',
            nextWeek: 'dddd [tuáº§n tá»i lÃºc] LT',
            lastDay: '[HÃ´m qua lÃºc] LT',
            lastWeek: 'dddd [tuáº§n rá»i lÃºc] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s tá»i',
            past : '%s trÆ°á»c',
            s : 'vÃ i giÃ¢y',
            m : 'má»t phÃºt',
            mm : '%d phÃºt',
            h : 'má»t giá»',
            hh : '%d giá»',
            d : 'má»t ngÃ y',
            dd : '%d ngÃ y',
            M : 'má»t thÃ¡ng',
            MM : '%d thÃ¡ng',
            y : 'má»t nÄm',
            yy : '%d nÄm'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : pseudo (x-pseudo)
    //! author : Andrew Hood : https://github.com/andrewhood125

    var x_pseudo = moment.defineLocale('x-pseudo', {
        months : 'J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã~ctÃ³b~Ã©r_Ã~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r'.split('_'),
        monthsShort : 'J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ãct_~ÃÃ³v_~DÃ©c'.split('_'),
        monthsParseExact : true,
        weekdays : 'S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½'.split('_'),
        weekdaysShort : 'S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t'.split('_'),
        weekdaysMin : 'S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[T~Ã³dÃ¡~Ã½ Ã¡t] LT',
            nextDay : '[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT',
            nextWeek : 'dddd [Ã¡t] LT',
            lastDay : '[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT',
            lastWeek : '[L~Ã¡st] dddd [Ã¡t] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ã­~Ã± %s',
            past : '%s Ã¡~gÃ³',
            s : 'Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds',
            m : 'Ã¡ ~mÃ­Ã±~ÃºtÃ©',
            mm : '%d m~Ã­Ã±Ãº~tÃ©s',
            h : 'Ã¡~Ã± hÃ³~Ãºr',
            hh : '%d h~Ã³Ãºrs',
            d : 'Ã¡ ~dÃ¡Ã½',
            dd : '%d d~Ã¡Ã½s',
            M : 'Ã¡ ~mÃ³Ã±~th',
            MM : '%d m~Ã³Ã±t~hs',
            y : 'Ã¡ ~Ã½Ã©Ã¡r',
            yy : '%d Ã½~Ã©Ã¡rs'
        },
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : chinese (zh-cn)
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng

    var zh_cn = moment.defineLocale('zh-cn', {
        months : 'ä¸æ_äºæ_ä¸æ_åæ_äºæ_å­æ_ä¸æ_å«æ_ä¹æ_åæ_åä¸æ_åäºæ'.split('_'),
        monthsShort : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
        weekdays : 'æææ¥_ææä¸_ææäº_ææä¸_ææå_ææäº_ææå­'.split('_'),
        weekdaysShort : 'å¨æ¥_å¨ä¸_å¨äº_å¨ä¸_å¨å_å¨äº_å¨å­'.split('_'),
        weekdaysMin : 'æ¥_ä¸_äº_ä¸_å_äº_å­'.split('_'),
        longDateFormat : {
            LT : 'Ahç¹mmå',
            LTS : 'Ahç¹måsç§',
            L : 'YYYY-MM-DD',
            LL : 'YYYYå¹´MMMDæ¥',
            LLL : 'YYYYå¹´MMMDæ¥Ahç¹mmå',
            LLLL : 'YYYYå¹´MMMDæ¥ddddAhç¹mmå',
            l : 'YYYY-MM-DD',
            ll : 'YYYYå¹´MMMDæ¥',
            lll : 'YYYYå¹´MMMDæ¥Ahç¹mmå',
            llll : 'YYYYå¹´MMMDæ¥ddddAhç¹mmå'
        },
        meridiemParse: /åæ¨|æ©ä¸|ä¸å|ä¸­å|ä¸å|æä¸/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'åæ¨' || meridiem === 'æ©ä¸' ||
                    meridiem === 'ä¸å') {
                return hour;
            } else if (meridiem === 'ä¸å' || meridiem === 'æä¸') {
                return hour + 12;
            } else {
                // 'ä¸­å'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return 'åæ¨';
            } else if (hm < 900) {
                return 'æ©ä¸';
            } else if (hm < 1130) {
                return 'ä¸å';
            } else if (hm < 1230) {
                return 'ä¸­å';
            } else if (hm < 1800) {
                return 'ä¸å';
            } else {
                return 'æä¸';
            }
        },
        calendar : {
            sameDay : function () {
                return this.minutes() === 0 ? '[ä»å¤©]Ah[ç¹æ´]' : '[ä»å¤©]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[æå¤©]Ah[ç¹æ´]' : '[æå¤©]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[æ¨å¤©]Ah[ç¹æ´]' : '[æ¨å¤©]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[ä¸]' : '[æ¬]';
                return this.minutes() === 0 ? prefix + 'dddAhç¹æ´' : prefix + 'dddAhç¹mm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[ä¸]' : '[æ¬]';
                return this.minutes() === 0 ? prefix + 'dddAhç¹æ´' : prefix + 'dddAhç¹mm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(æ¥|æ|å¨)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + 'æ¥';
            case 'M':
                return number + 'æ';
            case 'w':
            case 'W':
                return number + 'å¨';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%så',
            past : '%så',
            s : 'å ç§',
            m : '1 åé',
            mm : '%d åé',
            h : '1 å°æ¶',
            hh : '%d å°æ¶',
            d : '1 å¤©',
            dd : '%d å¤©',
            M : '1 ä¸ªæ',
            MM : '%d ä¸ªæ',
            y : '1 å¹´',
            yy : '%d å¹´'
        },
        week : {
            // GB/T 7408-1994ãæ°æ®ååäº¤æ¢æ ¼å¼Â·ä¿¡æ¯äº¤æ¢Â·æ¥æåæ¶é´è¡¨ç¤ºæ³ãä¸ISO 8601:1988ç­æ
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration
    //! locale : traditional chinese (zh-tw)
    //! author : Ben : https://github.com/ben-lin

    var zh_tw = moment.defineLocale('zh-tw', {
        months : 'ä¸æ_äºæ_ä¸æ_åæ_äºæ_å­æ_ä¸æ_å«æ_ä¹æ_åæ_åä¸æ_åäºæ'.split('_'),
        monthsShort : '1æ_2æ_3æ_4æ_5æ_6æ_7æ_8æ_9æ_10æ_11æ_12æ'.split('_'),
        weekdays : 'æææ¥_ææä¸_ææäº_ææä¸_ææå_ææäº_ææå­'.split('_'),
        weekdaysShort : 'é±æ¥_é±ä¸_é±äº_é±ä¸_é±å_é±äº_é±å­'.split('_'),
        weekdaysMin : 'æ¥_ä¸_äº_ä¸_å_äº_å­'.split('_'),
        longDateFormat : {
            LT : 'Ahé»mmå',
            LTS : 'Ahé»måsç§',
            L : 'YYYYå¹´MMMDæ¥',
            LL : 'YYYYå¹´MMMDæ¥',
            LLL : 'YYYYå¹´MMMDæ¥Ahé»mmå',
            LLLL : 'YYYYå¹´MMMDæ¥ddddAhé»mmå',
            l : 'YYYYå¹´MMMDæ¥',
            ll : 'YYYYå¹´MMMDæ¥',
            lll : 'YYYYå¹´MMMDæ¥Ahé»mmå',
            llll : 'YYYYå¹´MMMDæ¥ddddAhé»mmå'
        },
        meridiemParse: /æ©ä¸|ä¸å|ä¸­å|ä¸å|æä¸/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'æ©ä¸' || meridiem === 'ä¸å') {
                return hour;
            } else if (meridiem === 'ä¸­å') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'ä¸å' || meridiem === 'æä¸') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 900) {
                return 'æ©ä¸';
            } else if (hm < 1130) {
                return 'ä¸å';
            } else if (hm < 1230) {
                return 'ä¸­å';
            } else if (hm < 1800) {
                return 'ä¸å';
            } else {
                return 'æä¸';
            }
        },
        calendar : {
            sameDay : '[ä»å¤©]LT',
            nextDay : '[æå¤©]LT',
            nextWeek : '[ä¸]ddddLT',
            lastDay : '[æ¨å¤©]LT',
            lastWeek : '[ä¸]ddddLT',
            sameElse : 'L'
        },
        ordinalParse: /\d{1,2}(æ¥|æ|é±)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + 'æ¥';
            case 'M' :
                return number + 'æ';
            case 'w' :
            case 'W' :
                return number + 'é±';
            default :
                return number;
            }
        },
        relativeTime : {
            future : '%så§',
            past : '%så',
            s : 'å¹¾ç§',
            m : '1åé',
            mm : '%dåé',
            h : '1å°æ',
            hh : '%då°æ',
            d : '1å¤©',
            dd : '%då¤©',
            M : '1åæ',
            MM : '%dåæ',
            y : '1å¹´',
            yy : '%då¹´'
        }
    });

    moment.locale('en');

}));