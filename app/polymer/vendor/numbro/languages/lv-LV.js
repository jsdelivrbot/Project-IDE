/*!
 * numbro.js language configuration
 * language : Latvian
 * locale: Latvia
 * author : Lauris BukÅ¡is-Haberkorns : https://github.com/Lafriks
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'lv-LV',
        cultureCode: 'lv-LV',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tÅ«kst.',
            million: ' milj.',
            billion: ' mljrd.',
            trillion: ' trilj.'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â¬',
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
