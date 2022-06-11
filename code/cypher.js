export default function cypher(string, shift){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let shiftedString = '';
    for(let i = 0; i < string.length; i++){
        if(!(RegExp(/^\p{L}/,'u').test(string[i]))){
            shiftedString += string[i]
            continue // skip this index.
        }
        let cypherIndex = alphabet.indexOf(string[i])+shift
        if(cypherIndex >= alphabet.length){
            cypherIndex = cypherIndex - alphabet.length;
        }
        shiftedString += alphabet[cypherIndex];
    }
    return shiftedString;
}