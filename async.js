// asynchronous whiteboard practice

// 1 removing spaces in a string 
function removeSpaces(sentence){
    if(typeof sentence !== "string"){
        return ""
    }
        return  sentence.replace(/ /g, "");

}
let greeting = "Hello! My name is Jaz";
console.log(removeSpaces(greeting));



// 2 return a bolgna t or f if number is divisible by 10 

function isDivisibleBy(number,divisibleNumber){
    return number % divisibleNumber === 0      // % is remainder , === is it valid valid??
}
console.log(isDivisibleBy(70,10));



// 3 return the number of vowels in a string=

function countOfVowels(string){
let lowerString = string.toLowerCase();
const vowelMap = new Map();
vowelMap.set("a",true)
vowelMap.set("e",true)
vowelMap.set("i",true)
vowelMap.set("o",true)         
vowelMap.set("u",true)
let counts=0;
for (let i = 0; i <lowerString.length; i++){       //i is index, i++ increase incriments of index
    if (vowelMap.has(lowerString[i])){           //
        counts++;
    }
    
}
return counts;
}
console.log(countOfVowels("YesTUHdayayayay"));