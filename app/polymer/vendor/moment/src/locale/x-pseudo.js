//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

import moment from '../moment';

export default moment.defineLocale('x-pseudo', {
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
