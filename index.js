'use strict';

// create
var bchain = new Array;   // our global blockchain
var addresses = new Array;

var loggedIn = false;     // boolean to store whether or not user is logged in

var id;                   // variables to store data entered on the screen
var fromAdd;
var toAdd;
var amount;

// create a list of addresses that match our initial blockchain
addresses = ["123","987","345","777"];

//  put some dummy data in our block chain
bchain.push({ from: "123", to: "345", amount: 5, timeStamp: Date.now()});
bchain.push({ from: "987", to: "777", amount: 6, timeStamp: Date.now()});
bchain.push({ from: "123", to: "987", amount: 4, timeStamp: Date.now()});
bchain.push({ from: "777", to: "345", amount: 1, timeStamp: Date.now()});
bchain.push({ from: "345", to: "123", amount: 4, timeStamp: Date.now()});

console.log(bchain);    // retrieve

// alert ("My total bitcoin is " + temp);

// ----------------------------------------------------------

sendButton.addEventListener('click', function (e)
{
    // if I am logged in, use the address I logged in with
    if (loggedIn == true)
    {
      fromAdd = id;
    }
    else // not logged in, use the From field from the screen
    {
      fromAdd = document.getElementById("fromAddress").value;
    }

    toAdd = document.getElementById("toAddress").value;
    amount = Number(document.getElementById("amount").value);

    bchain.push({ from: fromAdd, to: toAdd, amount: amount, timeStamp: Date.now()});

    console.log(bchain);
});

// -------------------------------

generateButton.addEventListener('click', function (e)
{

    generateBitcoin();

});

// -----------------------------------------------------------------

function generateBitcoin()
{

  // create a temp variable between 0 and 3 inclusive
  var tempUser = Math.floor(Math.random() * 4);

  switch (tempUser) {

    case 0:
        bchain.push({ from: "345", to: addresses[0], amount: 1, timeStamp: Date.now()});
      break;

    case 1:
        bchain.push({ from: "345", to: addresses[1], amount: 1, timeStamp: Date.now()});
      break;

    case 2:
        bchain.push({ from: "345", to: addresses[2], amount: 1, timeStamp: Date.now()});
      break;

    case 3:
        bchain.push({ from: "345", to: addresses[3], amount: 1, timeStamp: Date.now()});
      break;

    default:

  }

  console.log(bchain);
}


// -----------------------------------------------------------------

logInButton.addEventListener('click', function (e)
{

    // setTimeout(testTimer, 10000);

    // start the interval - execute the generateBitcoin function every 3 seconds
    setInterval(generateBitcoin,3000);

    id = document.getElementById("idInputBox").value;
    loggedIn = true;

    var myTotalBitcoin;

    // calculate my total bitcoin
    myTotalBitcoin = calculateMyTotal(id);

    console.log("Address " + id + " has " + myTotalBitcoin + " bitcoin");

    // show results on the screen
    document.getElementById("totalBitcoin").innerHTML = myTotalBitcoin;

});

// -----------------------------

function testTimer()
{
  alert("Timer called");
}

// -----------------------------------------------------

function calculateMyTotal(myId)
{
  var i;
  var temp = 0; // all the bitcoin I received

  console.log("Calculate called, address passed in is " + myId);

  // loop through the blockchain looking for entries with my address

  for(i=0; i<bchain.length; i++)
  {
      if(bchain[i].to == myId)
      {
          temp += bchain[i].amount;   // found a positive entry, add
      }

      if(bchain[i].from == myId)
      {
          temp -= bchain[i].amount    // found a negative entry, subtract
      }
  }

  return temp;  // return the final calculation

}
