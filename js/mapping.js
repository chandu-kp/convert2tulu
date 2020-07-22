/* 
    Mappings from Unicode.org 
        - Kannada Mapping: https://unicode.org/charts/PDF/U0C80.pdf
        - Malayalam Mapping: https://unicode.org/charts/PDF/U0D00.pdf 
 */

const k_m_signs_mapping = {
    'ಀ': '',
    'ಁ': 'ഁ',
    'ಂ': 'ം',
    'ಃ': 'ഃ',
    '಼': '',
    'ಽ': 'ഽ'
};

const k_m_independent_vowels_mapping = {
    'ಅ': 'അ',
    'ಆ': 'ആ',
    'ಇ': 'ഇ',
    'ಈ': 'ഈ',
    'ಉ': 'ഉ',
    'ಊ': 'ഊ',
    'ಋ': 'ഋ',
    'ಌ': 'ഌ',
    'ಎ': 'എ',
    'ಏ': 'ഏ',
    'ಐ': 'ഐ',
    'ಒ': 'ഒ',
    'ಓ': 'ഓ',
    'ಔ': 'ഔ'
};

const k_m_consonants_mapping = {
    'ಕ': 'ക',
    'ಖ': 'ഖ',
    'ಗ': 'ഗ',
    'ಘ': 'ഘ',
    'ಙ': 'ങ',
    'ಚ': 'ച',
    'ಛ': 'ഛ',
    'ಜ': 'ജ',
    'ಝ': 'ഝ',
    'ಞ': 'ഞ',
    'ಟ': 'ട',
    'ಠ': 'ഠ',
    'ಡ': 'ഡ',
    'ಢ': 'ഢ',
    'ಣ': 'ണ',
    'ತ': 'ത',
    'ಥ': 'ഥ',
    'ದ': 'ദ',
    'ಧ': 'ധ',
    'ನ': 'ന',
    'ಪ': 'പ',
    'ಫ': 'ഫ',
    'ಬ': 'ബ',
    'ಭ': 'ഭ',
    'ಮ': 'മ',
    'ಯ': 'യ',
    'ರ': 'ര',
    'ಱ': 'റ',
    'ಲ': 'ല',
    'ಳ': 'ള',
    'ವ': 'വ',
    'ಶ': 'ശ',
    'ಷ': 'ഷ',
    'ಸ': 'സ',
    'ಹ': 'ഹ'
};

const k_m_dependent_vowel_signs_mapping = {
    'ಾ': 'ാ',
    'ಿ': 'ി',
    'ೀ': 'ീ',
    'ು': 'ു',
    'ೂ': 'ൂ',
    'ೃ': 'ൃ',
    'ೄ': 'ൄ',
    'ೆ': 'െ',
    'ೇ': 'േ',
    'ೈ': 'ൈ',
    'ೊ': 'ൊ',
    'ೋ': 'ോ',
    'ೌ': 'ൌ'
};

const k_m_virama_mapping = {
    '್': '്'
};

const k_m_additional_vowels_mapping = {
    'ೠ': 'ൠ',
    'ೡ': 'ൡ'
};

const k_m_dependent_vowels_mapping = {
    'ೢ': 'ൢ',
    'ೣ': 'ൣ'
};

const k_m_chillu_latters_mapping = {
    'ರ': 'ർ'
}

const k_m_digits_mapping = {
    '೦': '൦',
    '೧': '൧',
    '೨': '൨',
    '೩': '൩',
    '೪': '൪',
    '೫': '൫',
    '೬': '൬',
    '೭': '൭',
    '೮': '൮',
    '೯': '൯'
};

const k_m_mapping = {
    ...k_m_signs_mapping,
    ...k_m_independent_vowels_mapping,
    ...k_m_consonants_mapping,
    ...k_m_dependent_vowel_signs_mapping,
    ...k_m_virama_mapping,
    ...k_m_additional_vowels_mapping,
    ...k_m_dependent_vowels_mapping,
    ...k_m_digits_mapping
}

const mapping = {
    ...k_m_mapping
}