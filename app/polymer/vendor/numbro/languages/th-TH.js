/*!
 * numbro.js language configuration
 * language : Thai
 * locale : Thailand
 * author : Sathit Jittanupat : https://github.com/jojosati
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'th-TH',
        cultureCode: 'th-TH',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'à¸à¸±à¸',
            million: 'à¸¥à¹à¸²à¸',
            billion: 'à¸à¸±à¸à¸¥à¹à¸²à¸',
            trillion: 'à¸¥à¹à¸²à¸à¸¥à¹à¸²à¸'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'à¸¿',
            position: 'postfix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: ',0.00 $',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: ',0 $'
        }
    };

    // CommonJS
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && window.numbro && window.numbro.culture) {
        window.numbro.culture(language.cultureCode, language);
    }
}.call(typeof window === 'undefined' ? this : window));
