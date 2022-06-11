export default function analyzeArray(array){
    let sum = array.reduce((prev, curr) => prev + curr, 0);
    let avg = (sum / array.length);
    let minimum = Math.min.apply(Math, array);
    let maximum = Math.max.apply(Math, array);
    
    console.log(avg)
    console.log(minimum)
    console.log(maximum)



    return {
        average: avg,
        min: minimum,
        max: maximum,
        length: array.length,
        
    };
}