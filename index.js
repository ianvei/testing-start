function cypher(string, shift){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let shiftedString = '';
    for(let i = 0; i < string.length; i++){
        let cypherIndex = alphabet.indexOf(string[i])+shift
        console.log(cypherIndex)
        
        if(cypherIndex => alphabet.length){
            cypherIndex = cypherIndex - alphabet.length;
            console.log(`inside of if ${cypherIndex}`)
        }
        shiftedString += alphabet[cypherIndex]
    }
    console.log(shiftedString)
    console.log(alphabet.length)
    return shiftedString;
}

cypher('wxyz', 10);