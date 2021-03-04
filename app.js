const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democrat = presidents.filter(function (president) {
  if (president.party === "D") {
    return true;
  }
});
console.table(democrat);

/* SOLUTIONS
- Split them up: function get dems, function that creates presidential html/css

const democrats = presidents.filter((presidents) => presidents.party === "D");
console.table(democrats); 
*/

//2) Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneTermRepublicans = presidents.filter(function (president) {
  if (president.party === "R" && president.terms === 1) {
    return true;
  }
});
console.table(oneTermRepublicans);

/* SOLUTIONS 
const republicansOne = presidents.filter((president) => {
  if (president.party === "R" && president.terms === 1) {
    return true;
  }
});

const oneRepublican = presidents.filter(
  (president) => oneRepublican.party === "R" && president.terms === 1
);
console.log(oneRepublican);
*/

//3) return only the last three presidents
/* const presidentsReversed = [...presidents].reverse();
console.log(presidentsReversed); realized that original order was already from new to old */
const lastThree = presidents.slice(0, 3);
console.table(lastThree);
//console.table(presidents.slice(9,12));
// HOWEVER, THESE ARE NOT SCALABLE
console.table(presidents.slice(-3));
//Slice vs Map vs Splice

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTermDems = presidents.filter(function (president) {
  if (president.party === "D" && president.terms === 2) {
    return true;
  }
});
console.log(twoTermDems);

const demsTwo = presidents
  .filter((el) => el.party === "D")
  .filter((el) => el.terms === 2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
console.log(presidents);
presidents.filter(function (president) {
  if (president.name === "Lyndon Johnson" && president.terms === 2) {
    console.log("LBJ served two terms.");
  } else {
    console.log("LBJ was one and done.");
  }
});

/*SOLUTION: IT RUNS FOR EACH PRESIDENT
Jake and Eve
*/

/*
When I run this, it says this:

(10) LBJ was one and done
LBJ served two terms
LBJ was one and done

However, when I change his terms in the original array from 2 to 1, it says this:

(12) LBJ was one and done.

*/
