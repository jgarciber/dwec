function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function charDNI(dni) {
    var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
    var pos = dni % 23;
    var letter = chain.substring(pos, pos + 1);
    return letter;
}

export function getRandomDNI() {
    let num = Math.floor((Math.random() * 100000000));
    let sNum = formatNumberLength(num, 8);
    return sNum + charDNI(sNum);
}