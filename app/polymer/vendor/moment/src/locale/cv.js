//! moment.js locale configuration
//! locale : Chuvash [cv]
//! author : Anatoly Mironov : https://github.com/mirontoli

import moment from '../moment';

export default moment.defineLocale('cv', {
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
