export default function cypher(string, shift){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let shiftedString = '';
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < alphabet.length; j++){
            
            let cypherIndex = alphabet.indexOf(string[i+shift])
            console.log(alphabet[cypherIndex])
            // shiftedString += alphabet.indexOf()
            shiftedString += alphabet[cypherIndex]
        }
    }
    // console.log(shiftedString)
    return shiftedString;
}