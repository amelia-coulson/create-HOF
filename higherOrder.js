// create array
let wordArray = [`barbie`, `ken`, `milk`, `pirate`, `book`, `chess`, `crayon`, `steve`, `mike`, `cookies`];

// create higher order function
// arr is parameter followed by => fn being the function
let myFilterFunction = (arr) => (fn) => {
    // create new empty array
    let newArray = [];
    // iterate through all words in array (arr)
    for (let word of arr) {
        // checks each word if it meets requirements (fn)
        if (fn(word)) {
            // if true then add to new array
            newArray.push(word);
        }
    }
    // return new array
    return newArray;
}

// create variable using higher order function
let outputArray = myFilterFunction(wordArray)((item) => item.length === 6);

// output the new array
console.log(`Words with 6 letters: ${outputArray.join(`, `)}`);