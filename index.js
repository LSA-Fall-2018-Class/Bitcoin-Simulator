'use strict';

// create
var bchain = new Array;

bchain.push({ from: "123", to: "345", amount: 5, timeStamp: Date.now()});
bchain.push({ from: "987", to: "222", amount: 6, timeStamp: Date.now()});
bchain.push({ from: "123", to: "345", amount: 4, timeStamp: Date.now()});
bchain.push({ from: "345", to: "999", amount: 1, timeStamp: Date.now()});
bchain.push({ from: "345", to: "567", amount: 4, timeStamp: Date.now()});


console.log(bchain);    // retrieve

// R - Retrieve - Net value of my bitcoin
// assume I am id 345, show all my bitcoin - loop through the blockchain and calc my bitcoin

// Sending bitcoin from 1 user to another
// I am address 345, I sent 4 bitcoin to address 567

var i;
var temp = 0; // all the bitcoin I received
var myAddress = "345";

for(i=0; i<bchain.length; i++)
{
    if(bchain[i].to == myAddress)
    {
        temp += bchain[i].amount
    }

    if(bchain[i].from == myAddress)
    {
        temp -= bchain[i].amount
    }

}

alert ("My total bitcoin is " + temp);



// console.log(bchain[1].amount);

// console.log(Date.now());
