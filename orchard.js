///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

//Assigns totalAcres a value of 0
let totalAcres = 0

//Loops through the indices of each array and adds the value of each index to the totalAcres assigned value
for(i = 0; i < 7; i++){
    totalAcres = totalAcres + fujiAcres[i]
    totalAcres = totalAcres + galaAcres[i]
    totalAcres = totalAcres + pinkAcres[i]
}

//Logs the total amount of acres picked to the console. 
console.log(totalAcres)



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//Takes the total acres and divides by the amount of days of collected data.
averageDailyAcres = totalAcres / 7

//Logs the average daily acres picked to the console.
console.log(averageDailyAcres)



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

//Loops for as long as the variable acresLeft has a value that is greater than 0 
while(acresLeft > 0){
//Increments the value of the days variable by 1 each loop
    days++
//Decrements the value of acresLeft by the averageDailyAcres value and reassigns the new value to the acresLeft variable on each loop.
    acresLeft = acresLeft - averageDailyAcres
} console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//Creates new arrays to store the results from multiplying the acres picked per day by the known yield per acre (6.5).
let fujiTons = []
let galaTons = []
let pinkTons = []

//Assigns the yield per acre value to a constant variable.
const yieldPerAcre = 6.5

//Loops through the original daily acres picked variable.
for(let i = 0; i < 7; i++){
    
    //Multiplies the value of daily acres picked by the yield per acre variable and assigns it to a variable.
    const multipliedValue = fujiAcres[i] * yieldPerAcre
    const multipliedValue2 = galaAcres[i] * yieldPerAcre
    const multipliedValue3 = pinkAcres[i] * yieldPerAcre

    //Adds the multiplied value to their respective new array.
    fujiTons.push(multipliedValue)
    galaTons.push(multipliedValue2)
    pinkTons.push(multipliedValue3)
}

//Logs the values stored within the new set of arrays for daily tons picked to the console.
console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//Assigns the the value of pounds in a ton to the lbs variable.
const lbs = 2000

//Creates new arrays that store the value of pounds picked per day.
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

//Loops through the daily tons picked arrays.
for(let j = 0; j < 7; j++){

    //Multiplies value of tons array indices by te lbs array indices and stores them in an new array.
    const tonsToLbs = fujiTons[j] * lbs
    const tonsToLbs2 = galaTons[j] * lbs
    const tonsToLbs3 = pinkTons[j] * lbs

    //Adds the pounds picked daily from the tonsToLbs array together.
    fujiPounds = fujiPounds + tonsToLbs
    galaPounds = galaPounds + tonsToLbs2
    pinkPounds = pinkPounds + tonsToLbs3    
}

//Logs the total pounds picked per variety to the console.
console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

//Creates a variable to store the total profit per variety.
let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0

//Multiplies the total pounds per variety and assigns that value to the 3 variety's profit variable.
fujiProfit = fujiPounds * fujiPrice
galaProfit = galaPounds * galaPrice
pinkProfit = pinkPounds * pinkPrice

//Logs a message plus the calculated total profit per variety to the console.
console.log("The total weekly fuji apples profit is $" + fujiProfit)
console.log("The total weekly gala apples profit is $" + galaProfit)
console.log("The total weekly pink apples profit is $" + pinkProfit)


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//Creates a variable to store the combined total weekly profit for all varieties.
let totalProfit = 0

//Adds all of the variety's total profits and assigns the combined weekly total to the totalProfits variable.
totalProfit = fujiProfit + galaProfit + pinkProfit

console.log("The weekly total profit for the orchard is $" + totalProfit)