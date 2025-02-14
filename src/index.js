const { isElo } = require("./helper/check-elo");

function getCardBrand(cardNumber) {
    const cardPatterns = {
        "VISA": /^4[0-9]{12}(?:[0-9]{3})?$/,
        "MasterCard": /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720[0-9]{2})[0-9]{12})$/,
        "American Express": /^3[47][0-9]{13}$/,
        "Discover": /^(6011|65|64[4-9])[0-9]{12,15}$/,
        "Hipercard": /^606282[0-9]{10}$/
    };

    if (isElo(cardNumber)) return "ELO";

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) return brand;
    }

    return "Unknown";
}

const cardNumber = "3452 095354 01252".replace(/\s/g, "");
console.log(getCardBrand(cardNumber)); // Output: American Express