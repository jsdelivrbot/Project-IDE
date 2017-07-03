//! moment.js locale configuration
//! locale : Serbian-cyrillic (sr-cyrl)
//! author : Milan JanaÄkoviÄ<milanjanackovic@gmail.com> : https://github.com/milan-j

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var translator = {
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
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
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
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'Ð´Ð°Ð½',
            dd     : translator.translate,
            M      : 'Ð¼ÐµÑÐµÑ',
            MM     : translator.translate,
            y      : 'Ð³Ð¾Ð´Ð¸Ð½Ñ',
            yy     : translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return sr_cyrl;

}));