//! moment.js locale configuration
//! locale : Greek [el]
//! author : Aggelos Karalias : https://github.com/mehiel

import moment from '../moment';
import isFunction from '../lib/utils/is-function';

export default moment.defineLocale('el', {
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

