
function encryption() {  // english to morse code
    let code = document.getElementById('inputCode').value;
    var regExp = /[a-zA-Z0-9]/g;
    if (!regExp.test(code)) {
        document.getElementById('outputCode').value = 'Text Already Encrypted...Enter in English to Encrypt!'
    } else {
        code = code.toUpperCase();
        let result = '';
        for (let i = 0; i < code.length; i++) {
            let letter = code[i];
            if (letter !== ' ') {
                result = result + toMorse.get(letter) + ' ';
            } else {
                result = result + ' ';
            }
        }
        document.getElementById('outputCode').value = result;
    }
}

function decryption() {  // morse code to english
    let code = document.getElementById('inputCode').value;
    var regExp = /[a-zA-Z0-9]/g;
    if (regExp.test(code)) {
        document.getElementById('outputCode').value = 'Text Already Decrypted...Enter in Morse Code to Decrypt!'
    } else {
        let result = '';
        let spaceCount = 0;
        codeAr = code.split(" ");
        
        for (let i = 0; i < codeAr.length; i++) {
            letter = codeAr[i];
            if (letter !== '') {
                result = result + toEng.get(letter);
            } else {
                result = result + ' ';
            }
        }
        document.getElementById('outputCode').value = result;
    }
}