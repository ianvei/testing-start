function cypher(string, shift){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let shiftedString = '';
    for(let i = 0; i < string.length; i++){
        if(!(RegExp(/^\p{L}/,'u').test(string[i]))){
            console.log(string[i])
            shiftedString += string[i]
            continue // skip this index.
        }
        let cypherIndex = alphabet.indexOf(string[i])+shift
        console.log(cypherIndex)

       
        
        if(cypherIndex >= alphabet.length){
            cypherIndex = cypherIndex - alphabet.length;
            console.log(`inside of if ${cypherIndex}`)
        }
        console.log(string[i])
        shiftedString += alphabet[cypherIndex]
    }
    console.log(shiftedString)
    console.log(alphabet.length)
    return shiftedString;
}

cypher('gonk droid', 20);

// for some reason its adding a 't' when it adds

// find out why gonk droid isn't working. potentially something to do with indexing
//    I think I fixed this

