
function getMapping(letter) {
    if (letter in mapping) {
        return mapping[letter];
    }
    return letter;
}

function convert(txt) {
    return convertWithEscape(txt);
}

function convertWithEscape(txt, escapeChar) {
    let doMap = true;
    let convertedWord = [];

    for (let i = 0; i < txt.length; i++) {
        let letterToConvert = txt[i];

        if (letterToConvert === escapeChar) {
            doMap = !doMap;
            continue;
        }

        // fix for chillu letters between kannada and malayalam letters
        if ((letterToConvert in k_m_virama_mapping) && doMap === true) {
            if (txt[i - 1] in k_m_chillu_latters_mapping) {
                //remove the letter and replace with corresponding chillu letter 
                convertedWord.pop();
                letterToConvert = k_m_chillu_latters_mapping[txt[i - 1]];
            }
        }

        if (doMap === true) {
            convertedWord.push(getMapping(letterToConvert));
        } else {
            convertedWord.push(letterToConvert);
        }
    }
    return convertedWord.join('');
}