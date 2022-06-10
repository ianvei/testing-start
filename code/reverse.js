export default function reverseString(string){
    let splitString = string.split('');
    let reversedString = '';
    for(let i = splitString.length-1; i >= 0; i--){
        reversedString += splitString[i];
    }

    return reversedString;
}