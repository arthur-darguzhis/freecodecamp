function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if(str === alphabet){
        return undefined;
    }

    const indexOfFirstLetterInAlphabet = alphabet.indexOf(str[0])
    let startIndexOfLostRange;
    let endIndexOfLostRange;

    for(let i = 0; i < str.length; i++){
        if(str[i] !== alphabet[indexOfFirstLetterInAlphabet+i]){
            startIndexOfLostRange = indexOfFirstLetterInAlphabet+i;
            endIndexOfLostRange = alphabet.indexOf(str[i]);
            break;
        }
    }
    return alphabet.slice(startIndexOfLostRange, endIndexOfLostRange);
}

fearNotLetter("cdegh");
