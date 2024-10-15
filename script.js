// new function and i pass an array into it
const newAvg = (Array) => {

    let sum = 0 //i initialize sum to 0 because im going to add more number to it, it has to be a number and not an object so that i can use +=
    for(let i=0 ; i<Array.length;i++){ // start with i = 0 , start at the "first index" , then im saying for as long as i is less than the length of the array, keep iterating
        sum += Array[i]; // im saying the index of the array will be whats added to the sum( currently 0)
    }
      // the above will get me the sum of all numbers in the array 
 return sum / Array.length }; // im saying you need  to then give me the value of whatever is the sum divided by the length of the array
 const numbers = [23,45,10023,456] // i gave the program some numbers to go off of in this array.
 console.log(newAvg(numbers));// i tell the program(newAvg) to run and then "print"(in the console) and i told it the numbers it will go off of are in the variable const numbers i made.