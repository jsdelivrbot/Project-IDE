/*!
 * numbro.js language configuration
 * language : Czech
 * locale: Czech Republic
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'cs-CZ',
        cultureCode: 'cs-CZ',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'KÄ',
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

/*!
 * numbro.js language configuration
 * language : Danish
 * locale: Denmark
 * author : Michael Storgaard : https://github.com/mstorgaard
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'da-DK',
        cultureCode: 'da-DK',
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mio',
            billion: 'mia',
            trillion: 'b'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'kr',
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

/*!
 * numbro.js language configuration
 * language : German
 * locale: Switzerland
 * author : Michael Piefel : https://github.com/piefel (based on work from Marco Krage : https://github.com/sinky)
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'de-CH',
        cultureCode: 'de-CH',
        delimiters: {
            thousands: '\'',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'CHF',
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

/*!
 * numbro.js language configuration
 * language : German
 * locale: Germany
 * author : Marco Krage : https://github.com/sinky
 *
 * Generally useful in Germany, Austria, Luxembourg, Belgium
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'de-DE',
        cultureCode: 'de-DE',
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â¬',
            position: 'postfix',
            spaceSeparated: true
        },
        defaults: {
            currencyFormat: ',4'
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

/*!
 * numbro.js language configuration
 * language : English
 * locale: Australia
 * author : Benedikt Huss : https://github.com/ben305
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'en-AU',
        cultureCode: 'en-AU',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : English
 * locale: United Kingdom of Great Britain and Northern Ireland
 * author : Dan Ristic : https://github.com/dristic
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'en-GB',
        cultureCode: 'en-GB',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: 'Â£',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : English
 * locale: New Zealand
 * author : Benedikt Huss : https://github.com/ben305
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'en-NZ',
        cultureCode: 'en-NZ',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : English
 * locale: South Africa
 * author : Stewart Scott https://github.com/stewart42
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'en-ZA',
        cultureCode: 'en-ZA',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: 'R',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : Spanish
 * locale: Argentina
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'es-AR',
        cultureCode: 'es-AR',
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                (b === 2) ? 'do' :
                (b === 7 || b === 0) ? 'mo' :
        (b === 8) ? 'vo' :
        (b === 9) ? 'no' : 'to';
        },
        currency: {
            symbol: '$',
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

/*!
 * numbro.js language configuration
 * language : Spanish
 * locale: Spain
 * author : Hernan Garcia : https://github.com/hgarcia
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'es-ES',
        cultureCode: 'es-ES',
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'mm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (b === 1 || b === 3) ? 'er' :
                (b === 2) ? 'do' :
                    (b === 7 || b === 0) ? 'mo' :
                        (b === 8) ? 'vo' :
                            (b === 9) ? 'no' : 'to';
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

/*!
 * numbro.js language configuration
 * language : Estonian
 * locale: Estonia
 * author : Illimar Tambek : https://github.com/ragulka
 *
 * Note: in Estonian, abbreviations are always separated
 * from numbers with a space
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'et-EE',
        cultureCode: 'et-EE',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: ' tuh',
            million: ' mln',
            billion: ' mld',
            trillion: ' trl'
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

/*!
 * numbro.js language configuration
 * language : Farsi
 * locale: Iran
 * author : neo13 : https://github.com/neo13
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fa-IR',
        cultureCode: 'fa-IR',
        delimiters: {
            thousands: 'Ø',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'ÙØ²Ø§Ø±',
            million: 'ÙÛÙÛÙÙ',
            billion: 'ÙÛÙÛØ§Ø±Ø¯',
            trillion: 'ØªØ±ÛÙÛÙÙ'
        },
        ordinal: function () {
            return 'Ø§Ù';
        },
        currency: {
            symbol: 'ï·¼'
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

/*!
 * numbro.js language configuration
 * language : Finnish
 * locale: Finland
 * author : Sami Saada : https://github.com/samitheberber
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fi-FI',
        cultureCode: 'fi-FI',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
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

/*!
 * numbro.js language configuration
 * language : Filipino (Pilipino)
 * locale: Philippines
 * author : Michael Abadilla : https://github.com/mjmaix
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fil-PH',
        cultureCode: 'fil-PH',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: 'â±'
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

/*!
 * numbro.js language configuration
 * language : French
 * locale: Canada
 * author : LÃ©o Renaud-Allaire : https://github.com/renaudleo
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fr-CA',
        cultureCode: 'fr-CA',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'G',
            trillion: 'T'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'Ã¨me';
        },
        currency: {
            symbol: '$',
            position: 'postfix',
            spaceSeparated : true
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : French
 * locale: Switzerland
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fr-CH',
        cultureCode: 'fr-CH',
        delimiters: {
            thousands: '\'',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'Ã¨me';
        },
        currency: {
            symbol: 'CHF',
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

/*!
 * numbro.js language configuration
 * language : French
 * locale: France
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'fr-FR',
        cultureCode: 'fr-FR',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'Ã¨me';
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

/*!
 * numbro.js language configuration
 * language : Hebrew
 * locale : IL
 * author : Eli Zehavi : https://github.com/eli-zehavi
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'he-IL',
        cultureCode: 'he-IL',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '×××£',
            million: '×××××',
            billion: '×××××',
            trillion: '××¨×××××'
        },
        currency: {
            symbol: 'âª',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: 'âª ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: 'âª ,0'
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


/*!
 * numbro.js language configuration
 * language : Hungarian
 * locale: Hungary
 * author : Peter Bakondy : https://github.com/pbakondy
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'hu-HU',
        cultureCode: 'hu-HU',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'E',  // ezer
            million: 'M',   // milliÃ³
            billion: 'Mrd', // milliÃ¡rd
            trillion: 'T'   // trilliÃ³
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: ' Ft',
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

/*!
 * numbro.js language configuration
 * language : Italian
 * locale: Italy
 * author : Giacomo Trombi : http://cinquepunti.it
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'it-IT',
        cultureCode: 'it-IT',
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mila',
            million: 'mil',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return 'Âº';
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

/*!
 * numbro.js language configuration
 * language : Japanese
 * locale: Japan
 * author : teppeis : https://github.com/teppeis
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'ja-JP',
        cultureCode: 'ja-JP',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'å',
            million: 'ç¾ä¸',
            billion: 'åå',
            trillion: 'å'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'Â¥',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : Korean
 * author (numbro.js Version): Randy Wilander : https://github.com/rocketedaway
 * author (numeral.js Version) : Rich Daley : https://github.com/pedantic-git
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'ko-KR',
        cultureCode: 'ko-KR',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'ì²',
            million: 'ë°±ë§',
            billion: 'ì­ìµ',
            trillion: 'ì¼ì¡°'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'â©'
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

/*!
 * numbro.js language configuration
 * language: Norwegian BokmÃ¥l
 * locale: Norway
 * author : Benjamin Van Ryseghem
 */
(function() {
    'use strict';

    var language = {
        langLocaleCode: 'nb-NO',
        cultureCode: 'nb-NO',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 't',
            million: 'M',
            billion: 'md',
            trillion: 't'
        },
        currency: {
            symbol: 'kr',
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

/*!
 * numbro.js language configuration
 * language : Dutch
 * locale: Belgium
 * author : Dieter Luypaert : https://github.com/moeriki
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'nl-BE',
        cultureCode: 'nl-BE',
        delimiters: {
            thousands: ' ',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mld',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
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

/*!
 * numbro.js language configuration
 * language : Dutch
 * locale: Netherlands
 * author : Dave Clayton : https://github.com/davedx
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'nl-NL',
        cultureCode: 'nl-NL',
        delimiters: {
            thousands: '.',
            decimal  : ','
        },
        abbreviations: {
            thousand : 'k',
            million  : 'mln',
            billion  : 'mrd',
            trillion : 'bln'
        },
        ordinal : function (number) {
            var remainder = number % 100;
            return (number !== 0 && remainder <= 1 || remainder === 8 || remainder >= 20) ? 'ste' : 'de';
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

/*!
 * numbro.js language configuration
 * language : Polish
 * locale : Poland
 * author : Dominik Bulaj : https://github.com/dominikbulaj
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'pl-PL',
        cultureCode: 'pl-PL',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tys.',
            million: 'mln',
            billion: 'mld',
            trillion: 'bln'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: ' zÅ',
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

/*!
 * numbro.js language configuration
 * language : Portuguese
 * locale : Brazil
 * author : Ramiro Varandas Jr : https://github.com/ramirovjr
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'pt-BR',
        cultureCode: 'pt-BR',
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'mil',
            million: 'milhÃµes',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            return 'Âº';
        },
        currency: {
            symbol: 'R$',
            position: 'prefix'
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

/*!
 * numbro.js language configuration
 * language : Portuguese
 * locale : Portugal
 * author : Diogo Resende : https://github.com/dresende
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'pt-PT',
        cultureCode: 'pt-PT',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function () {
            return 'Âº';
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

/*!
 * numbro.js language configuration
 * language : Russian
 * locale : Russsia
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'ru-RU',
        cultureCode: 'ru-RU',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'ÑÑÑ.',
            million: 'Ð¼Ð»Ð½',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.';
        },
        currency: {
            symbol: 'ÑÑÐ±.',
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

/*!
 * numbro.js language configuration
 * language : Russian
 * locale : Ukraine
 * author : Anatoli Papirovski : https://github.com/apapirovski
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'ru-UA',
        cultureCode: 'ru-UA',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'ÑÑÑ.',
            million: 'Ð¼Ð»Ð½',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function () {
            // not ideal, but since in Russian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '.';
        },
        currency: {
            symbol: '\u20B4',
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

/*!
 * numbro.js language configuration
 * language : Slovak
 * locale : Slovakia
 * author : Ahmed Al Hafoudh : http://www.freevision.sk
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'sk-SK',
        cultureCode: 'sk-SK',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'tis.',
            million: 'mil.',
            billion: 'b',
            trillion: 't'
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

/*!
 * numbro.js language configuration
 * language : Swedish
 * locale : Sweden
 * author : Benjamin Van Ryseghem (benjamin.vanryseghem.com)
 */
(function() {
    'use strict';

    var language = {
        langLocaleCode: 'sv-SE',
        cultureCode: 'sv-SE',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 't',
            million: 'M',
            billion: 'md',
            trillion: 'tmd'
        },
        currency: {
            symbol: 'kr',
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

/*!
 * numbro.js language configuration
 * language : Turkish
 * locale : Turkey
 * author : Ecmel Ercan : https://github.com/ecmel,
 *          Erhan Gundogan : https://github.com/erhangundogan,
 *          Burak YiÄit Kaya: https://github.com/BYK
 */
(function() {
    'use strict';

    var suffixes = {
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
        },
        language = {
            langLocaleCode: 'tr-TR',
            cultureCode: 'tr-TR',
            delimiters: {
                thousands: '.',
                decimal: ','
            },
            abbreviations: {
                thousand: 'bin',
                million: 'milyon',
                billion: 'milyar',
                trillion: 'trilyon'
            },
            ordinal: function(number) {
                if (number === 0) {  // special case for zero
                    return '\'Ä±ncÄ±';
                }

                var a = number % 10,
                    b = number % 100 - a,
                    c = number >= 100 ? 100 : null;

                return suffixes[a] || suffixes[b] || suffixes[c];
            },
            currency: {
                symbol: '\u20BA',
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

/*!
 * numbro.js language configuration
 * language : Ukrainian
 * locale : Ukraine
 * author : Michael Piefel : https://github.com/piefel (with help from Tetyana Kuzmenko)
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'uk-UA',
        cultureCode: 'uk-UA',
        delimiters: {
            thousands: ' ',
            decimal: ','
        },
        abbreviations: {
            thousand: 'ÑÐ¸Ñ.',
            million: 'Ð¼Ð»Ð½',
            billion: 'Ð¼Ð»ÑÐ´',
            trillion: 'Ð±Ð»Ð½'
        },
        ordinal: function () {
            // not ideal, but since in Ukrainian it can taken on
            // different forms (masculine, feminine, neuter)
            // this is all we can do
            return '';
        },
        currency: {
            symbol: '\u20B4',
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

/*!
 * numbro.js language configuration
 * language : simplified chinese
 * locale : China
 * author : badplum : https://github.com/badplum
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'zh-CN',
        cultureCode: 'zh-CN',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'å',
            million: 'ç¾ä¸',
            billion: 'åäº¿',
            trillion: 'å'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'Â¥',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
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

/*!
 * numbro.js language configuration
 * language : Chinese (Taiwan)
 * author (numbro.js Version): Randy Wilander : https://github.com/rocketedaway
 * author (numeral.js Version) : Rich Daley : https://github.com/pedantic-git
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'zh-TW',
        cultureCode: 'zh-TW',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'å',
            million: 'ç¾è¬',
            billion: 'åå',
            trillion: 'å'
        },
        ordinal: function () {
            return 'ç¬¬';
        },
        currency: {
            symbol: 'NT$'
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
