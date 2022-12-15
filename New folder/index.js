//1. Big-o notation(O-notation) lookout this

// function summation(n) {
//     let sum = 0 //----------> 1
//     for (let i = 1; i <= n; i++)
//     {
//         sum += i; //-------> 4
//     }
//     return sum; //------> 1
// }

//n+2
//4+2 = 6

//overhere we have use only one loop
//O(n) linear
//O(n^2) quadratic
// function after5secs() {
//   setTimeout(function () {
//     console.log('2');
//   }, 5000);
// }
// function after4Secs() {
//   setTimeout(function () {
//     console.log('4');
//   }, 4000);
// }
// function after2Secs() {
//   setTimeout(function () {
//     console.log('5');
//   }, 2000);
// }
// after2Secs();
// after5secs();
// after4Secs(); // 2 4 5 -> 5 4 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------
// LEANER SEARCH
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] === target)
//         {
//             return [i]
//         }
//     }
//     return -1
// }
// console.log(linearSearch([1, 2, 3, 5, 4, 36, 23], 5));
// console.log(linearSearch([1, 2, 3, 5, 4, 36, 23], 3));
// console.log(linearSearch([1, 2, 3, 5, 4, 36, 23], 36));
//------------------------------------------------------------------------------------------------------------------------------------------------------

//PROMISE WITH SETTIME OUT, then(), catch()

// let p1 = new Promise((resolve, reject) => {
//   console.log("promise is pending")
//   setTimeout(() => {
//     // console.log("5");
//     reject(new Error("classified"))
//   }, 5000)
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("4");
//   }, 4000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2");
//   }, 2000);
// });
// p2.then((value) => {
//   console.log(value);
// })
// p3.then((value) => {
//   console.log(value);
// });
// p1.catch((error) => {
//   console.log("classified");
// });
//--------------------------------------------------------------------------------------------------------------------------------------

//TIME WITH SET INTERVAL

// let timeIndia = function () {
//   console.log("Indian Standard time");
//   let time = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata', timeStyle: 'medium', hourCycle: 'h24' });
//   return(time);
// }
// setInterval(() => {
//  console.log(timeIndia());
// }, 1000)
 
// let timeEurope = function () {
//   console.log("Europe");
//   let time = new Date().toLocaleString("en-US", {
//     timeZone: "Europe/London",
//     timeStyle: "medium",
//     hourCycle: "h24",
//   });
//   return time;
// };
// setInterval(() => {
//   console.log(timeEurope());
// }, 1000);

// let timeAmerica = function () {
//   console.log("America");
//   let time = new Date().toLocaleString("en-US", {
//     timeZone: "America/New_York",
//     timeStyle: "medium",
//     hourCycle: "h24",
//   });
//   return time;
// };
// setInterval(() => {
//   console.log(timeAmerica());
// }, 1000);

//---------------------------------------------------------------------


// const  today = new Date();
// let date = today.getDate() - 15;
// let month = today.getMonth() - 08;
// let year = today.getFullYear() - 1947;
// let age = 'age: ' + year + 'years';
// console.log(age)
//------------------------------------------------------------------------------------

//REST PATTERN AND PARAMRTERS
//SPREAD(UNPACK), because on RHS
//ARRAY
// const arr = [1, 2, ...[3, 4]];
// //REST(PACK), because on LHS
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// const x = [a, b, ...others];
// console.log(x) 
//THIS CAN BE DONE FOR OBJECT ALSO
//.......................................................................................

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

 //1. DESTRCTURING(creating 2 sets of array from 1)
const [players1, players2] = game.players;
console.log(players1, players2);

//2. REST SYNTAX(differentiate between goalkeeper and field player)
const [gk, ...fieldPlayers] = players1;
console.log(gk, ...fieldPlayers);

//3. SPREAD OPERATOR(to make 2 arry into 1)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.TO ADD 3 MORE PLAYERS IN ARRAY
const players1Final = [...players1, 'Thiago', 'Coutiniho', 'Pericic'];
console.log(players1Final); 

//5.CREATING THREE VARIABLE WITH ODD OBJECT (NESTED DESTRCTURING)
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6. creating printgoal function
const printgoal = function (...players) {
    console.log(players);
    console.log(`${players.length} goal was scored`);
}
// printgoal("Davies", "Kimmich", "Goretzka", "Coman");
// printgoal("Hummels", "Akanji", "Hakimi", "Weigl");//function should work same for both
printgoal(...game.score);

//7. logical oprator
team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');
//................................................................................................................

// NEW WAYS OF LOOPING OVER ARRAYS
// ENHANCE OBJECT LITERALS