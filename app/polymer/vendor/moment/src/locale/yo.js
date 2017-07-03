//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

import moment from '../moment';

export default moment.defineLocale('yo', {
    months : 'Sáº¹Ìráº¹Ì_EÌreÌleÌ_áº¸ráº¹ÌnaÌ_IÌgbeÌ_EÌbibi_OÌkuÌdu_Agáº¹mo_OÌguÌn_Owewe_á»ÌwaÌraÌ_BeÌluÌ_á»Ìpáº¹ÌÌ'.split('_'),
    monthsShort : 'Sáº¹Ìr_EÌrl_áº¸rn_IÌgb_EÌbi_OÌkuÌ_Agáº¹_OÌguÌ_Owe_á»ÌwaÌ_BeÌl_á»Ìpáº¹ÌÌ'.split('_'),
    weekdays : 'AÌiÌkuÌ_AjeÌ_IÌsáº¹Ìgun_á»já»ÌruÌ_á»já»Ìbá»_áº¸tiÌ_AÌbaÌmáº¹Ìta'.split('_'),
    weekdaysShort : 'AÌiÌk_AjeÌ_IÌsáº¹Ì_á»jr_á»jb_áº¸tiÌ_AÌbaÌ'.split('_'),
    weekdaysMin : 'AÌiÌ_Aj_IÌs_á»r_á»b_áº¸t_AÌb'.split('_'),
    longDateFormat : {
        LT : 'h:mm A',
        LTS : 'h:mm:ss A',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY h:mm A',
        LLLL : 'dddd, D MMMM YYYY h:mm A'
    },
    calendar : {
        sameDay : '[OÌniÌ ni] LT',
        nextDay : '[á»Ìla ni] LT',
        nextWeek : 'dddd [á»sáº¹Ì toÌn\'bá»] [ni] LT',
        lastDay : '[AÌna ni] LT',
        lastWeek : 'dddd [á»sáº¹Ì toÌlá»Ì] [ni] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'niÌ %s',
        past : '%s ká»jaÌ',
        s : 'iÌsáº¹juÌ aayaÌ die',
        m : 'iÌsáº¹juÌ kan',
        mm : 'iÌsáº¹juÌ %d',
        h : 'waÌkati kan',
        hh : 'waÌkati %d',
        d : 'á»já»Ì kan',
        dd : 'á»já»Ì %d',
        M : 'osuÌ kan',
        MM : 'osuÌ %d',
        y : 'á»duÌn kan',
        yy : 'á»duÌn %d'
    },
    ordinalParse : /á»já»Ì\s\d{1,2}/,
    ordinal : 'á»já»Ì %d',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4 // The week that contains Jan 4th is the first week of the year.
    }
});
