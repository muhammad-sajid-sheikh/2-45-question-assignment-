//2.	Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

/*let myname:string="Eric";
let message:string="would you like to learn some Python today?";
console.log(`Hello ${myname}, ${message}`);*/


//3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//lowercase
/*let personName:string = "MUHAMMAD SAJID"
console.log(personName.toLowerCase());

//uppercase
let personName1:string = "muhammad sajid";
console.log(personName1.toUpperCase());

//titlecase
let personName2:string = "sajid";
console.log(personName2.charAt(1).toUpperCase() + personName2.slice(2));*/

//4.	Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.	Martin Luther King

/*let famousPerson:string = "Martin Luther King";

console.log(`${famousPerson} once said, "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."`);*/

//5.	Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

//I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.	Martin Luther King

// let famousPerson1:string = "Martin Luther King";
// let quote:string = "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.";

// console.log(`${famousPerson1} once said, ${quote}`);

//6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

/*let personName3:string = "\tMuhammad Sajid\t";
console.log(personName3);

let personName11:string = "\nMuhammad Sajid\n";
console.log(personName11);

let personName22:string = "\n\tMuhammad Sajid\t\n";
console.log(personName22);

let stipped= personName22.trim();
console.log(stipped);*/

//7.	Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results

/*let addition:number = 4 + 4;
console.log("addition",addition);

let subtraction:number = 16 - 8;
console.log("subtraction",subtraction);

let multiplication:number = 4 * 2;
console.log("multiplication",multiplication);

let division:number = 16 / 2;
console.log("division",division);*/

//8.	You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

//addition
/*console.log(4+4);
//subtraction
console.log(12-4);
//multiplication
console.log(4*2);
//division
console.log(16/2);*/






//9.	Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

/*let myFavouritenumber:number = 6;
let message1:string = "my favourite number is " + myFavouritenumber;
console.log(message1);*/






//10.	Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//My name is Muhammad Sajid
//Current date is 9/3/2024
//simple print "Hello World"
//console.log("Hello World");






//11.	Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

/*let names:string[]= ["Sajid","Zubair","Asad","Manawar","Tayyab"];
for(let i:number=0; i<names.length; i++){
    console.log(names[i]);
}*/

//12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

/*let personName:string[]=["Sajid","Zubair","Asad","Manawar","Tayyab"];
for(let i:number=0; i<personName.length; i++){
    console.log(`Hello ${personName[i]} would you like to some eat today?`);
}*/




/*13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle*/

/*let transports:string[]=["Honda","Motorcycle","Bicycle","tesla car"];
for(let trans:number=0; trans<transports.length; trans++){
    console.log("i would like to own a " + transports[trans]);
}*/





/*14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

// let Guest_list:string[]=["Hammad","Hamza","Sumbul"];
// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }



/*15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

// let Guest_list:string[]=["Hammad","Hamza","Sumbul"];
// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }
// let absentGuest:string = "Hammad"
// let newguest:string = "Dara"

// Guest_list[0] = newguest

// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }

// console.log(`Mr/Miss ${absentGuest} is not comming to the party.`);



/*16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

// let Guest_list:string[]=["Hammad","Hamza","Sumbul"];
// // for(let i:number=0; i<Guest_list.length; i++){
// //     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// // }
// let absentGuest:string = "Hammad"
// let newguest:string = "Dara"

// Guest_list[0] = newguest

// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }

// console.log(`Mr/Miss ${absentGuest} is not comming to the party.`);

// console.log("good news! we found big tabel for dinner so i will invite 3 more guests.");

// Guest_list.unshift("Sana");
// Guest_list.splice(2 , 0, "Rimsha");
// Guest_list.push("Sidra");
// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }



/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program*/


/*let Guest_list:string[]=["Hammad","Hamza","Sumbul"];
// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }
let absentGuest:string = "Hammad"
let newguest:string = "Dara"

Guest_list[0] = newguest

// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }

console.log(`Mr/Miss ${absentGuest} is not comming to the party.`);

console.log("good news! we found big tabel for dinner so i will invite 3 more guests.");

// 3 new guests add
Guest_list.unshift("Sana");
Guest_list.splice(2 , 0, "Rimsha");
Guest_list.push("Sidra");
for(let i:number=0; i<Guest_list.length; i++){
    console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
}
console.log("\nSorry we can't arrange big talbe, only two peoples will be invited");

while(Guest_list.length>2){
    let Remove_guest = Guest_list.pop()
    console.log(`Sorry Mr/Miss, ${Remove_guest}, you are not invited for dinner`);
}

for(let i:number=0; i<Guest_list.length; i++){
    console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nyou are stil invited. \n\nThank you.\n\n");
}

//remove guest from array
Guest_list.splice(0, 2);
console.log(Guest_list);*/

/*18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/



/*//• Store the locations in a array. Make sure the array is not in alphabetical order.
let places:string[]=["Italy","Germany","Agra","Eifel Tower","Times Square"];

//• Print your array in its original order.
console.log("original " + places);

//Print your array in alphabetical order without modifying the actual list.
console.log("copy " + [...places].sort())

//• Show that your array is still in its original order by printing it.
console.log("original " + places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("copy " + [...places].sort().reverse())

//Show that your array is still in its original order by printing it again.
console.log("original " + places);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("original " + places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original " + places.reverse());

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("original " + places.sort());

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("original " + places.sort().reverse());*/


//19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


/*let Guest_list:string[]=["Hammad","Hamza","Sumbul"];
// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }
let absentGuest:string = "Hammad"
let newguest:string = "Dara"

Guest_list[0] = newguest

// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }

// console.log(`Mr/Miss ${absentGuest} is not comming to the party.`);

// console.log("good news! we found big tabel for dinner so i will invite 3 more guests.");

// 3 new guests add
Guest_list.unshift("Sana");
Guest_list.splice(2 , 0, "Rimsha");
Guest_list.push("Sidra");
// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nIt is our pleasure to invite you for delicious dinner. \n\nThank you.\n\n");
// }
// console.log("\nSorry we can't arrange big talbe, only two peoples will be invited");

while(Guest_list.length>2){
    let Remove_guest = Guest_list.pop()
    // console.log(`Sorry Mr/Miss, ${Remove_guest}, you are not invited for dinner`);
}

// for(let i:number=0; i<Guest_list.length; i++){
//     console.log("Dear Mr/Miss " + Guest_list[i] + " \n\nyou are stil invited. \n\nThank you.\n\n");
// }

//remove guest from array
Guest_list.splice(0, 2);
console.log(Guest_list);

console.log(`Total no of guest are: ${Guest_list.length}`)*/

//20.	Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//1st method
/*let cities : string[] = ["Karachi","Lahore","Islamabad","Multan"];
console.log(cities);

//second method
let cities2:string[] = [];
cities2.push("Karachi");
cities2.push("Lahore");
cities2.push("Islamabad");
cities2.push("Multan");
console.log(cities2);*/


//21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
/*interface person  {
    name: string,

    age: number,
    nationality: string,
    student: boolean
}

let person:person = {
    name: "muhammad Sajid",
    age: 32,
    nationality: "Pakistani",
    student: true
}
console.log(person)*/

//22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// let newArray:string[] = ['Book','Pen','pencil','copy'];

// console.log(newArray[4]);

// console.log(newArray)

// // 23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';

// //test 1
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// // • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// //test 2
// console.log("Is car === 'subaru'? I predict True.")
// console.log(car === 'subaru')

// //test 3
// console.log("Is car != 'honda'? I predict True.")
// console.log(car != 'honda')

// //test 4
// console.log("Is car !== 'Suzuki'? I predict True.")
// console.log(car !== 'Suzuki')

// //test 5
// console.log("Is car != 'suzuki'? I predict true.")
// console.log(car != 'SUZUKI')

// //test 6
// console.log("Is car == 'suzuki'? I predict false.")
// console.log(car == 'suzuki')


// //test 7
// console.log("Is car === 'suzuki'? I predict false.")
// console.log(car === 'suzuki')

// //test 8
// console.log("Is car === 'ford'? I predict false.")
// console.log(car === 'ford')

// //test 9
// console.log("Is car == 'ford'? I predict false.")
// console.log(car == 'ford')

// //test 10
// console.log("Is car.upper case == 'subaru'? I predict false.")
// console.log(car.toUpperCase() == 'subaru')



// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

/*//  equality test with strings
console.log("equality test with strings: " , "Orange" === "Orange")

//  inequality test with strings
console.log("equality test with strings: " , ("Orange" as string) != "apple")

// • Tests using the lower case function
console.log("lower case function: ", "Hello".toLowerCase() === "hello")

// • Numerical tests involving equality
console.log("numarical equality test: ", 45 === 45)

// • Numerical tests involving inequality
console.log("numarical inequality test: ", (45 as number) != 46)

//greater than test
console.log("greater than test: ", 10 > 5)

//less than test
console.log("less than test: ", 5 < 10)

//greater than or equal to test
console.log("greater than or equal to test: ", 21 >= 20)

//less than or equal to test
console.log("less than or equal to test: ", 19 <= 20)

//Tests using "and" operators
console.log("and operator test: ", 5===5 && 6 > 5)

//Tests using "or" operators
console.log("and operator test: ", 5===5 || 6 > 5)

//Test whether an item is in a array
let items:string[]=["apple","orange","banana","dates"];
console.log("item is in a array: ", items.includes("banana"));

//Test whether an item is not in a array
console.log("item is not in a array: ", items.includes("flower"));*/


// 25.	Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// let alienColor :string = "green"
// if(alienColor === "green"){
//     console.log("the player just earned 5 points")
// }else{
//     console.log("fails")   
// }


// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// let alienColor :string = "green"
//  if(alienColor === "green"){
//      console.log("the player just earned 5 points")
//  }else{
//      console.log("the player just earned 10 points")   
//  }


// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// let alienColor :string = "red"
//   if(alienColor === "green"){
//       console.log("the player just earned 5 points")
//   }else if(alienColor === "yellow"){
//       console.log("the player just earned 10 points")   
// }else if(alienColor === "red"){
//     console.log("the player just earned 15 points")
// }


// 28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.


// let age:number = 70

// if(age <=2){
//     console.log("the person is a baby")
// }else if(age >= 2 && age < 4){
//     console.log("the person is a toddler")
// }else if(age >= 4 && age < 13){
//     console.log("the person is a kid")
// }else if(age >= 13&& age <20){
//     console.log("the person is a teenager")
// }else if(age >= 20 && age < 65){
//     console.log("the person is an adult")
// }else{
//     console.log("the person is an elder")
// }


// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


// let favorite_fruits:string[]=["Apple","Orange","Mango"]

// if(favorite_fruits.includes("Apple")){
//     console.log("I really like Apple!")
// }

// if(favorite_fruits.includes("Orange")){
//     console.log("I really like Orange!")
// }

// if(favorite_fruits.includes("Mango")){
//     console.log("I really like Mango!")
// }

// if(favorite_fruits.includes("kiwi")){
//     console.log("I really like kiwi!")
// }

// if(favorite_fruits.includes("gava")){
//     console.log("I really like gava!")
// }

// 30.	Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// let usernames:string[] = ["admin","sajid","sana","dara","bisma"];


// usernames.forEach(username =>{
//     if(username === "admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }else{
//         console.log(`Hello ${username} thank you for logging in again.`)
//     }
// })

// 31.	No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


// let usernames:string[] = ["admin","sajid","sana","dara","bisma"];

// if(usernames.length === 0){
//     console.log("We need to find some users!")
// }else{
//     usernames = []
//     console.log("All user name have been removed: " + usernames.length)
// }

// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// let current_users:string[] = ["sajid","Sana","dara","bisma","Aqsa"];

// let new_users:string[] = ["furqan","Sana","rida","rimsha","Aqsa"];

// new_users.forEach(n_user =>{
//     let lowercase = n_user.toLowerCase();
//     if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
// console.log(`need to enter a new username ${n_user}`)
//     }else{
//         console.log(` the username is available ${n_user}`)   
//     }
// })

// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// let numbers:number[] = [1,2,3,4,5,6,7,8,9,10]

// for(let num of numbers){
//     let odinalNumbers:string;

//     if(num === 1){
//         odinalNumbers = "st"
//     }else if(num === 2){
//         odinalNumbers = "nd"
//     }else if(num === 3){
//         odinalNumbers = "rd"
//     }else{
//         odinalNumbers = "th"
//     }
//     console.log(`${num}${odinalNumbers}`)
// }


// 34.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


// let Pizzas:string[]=["Pepperoni","Cuban","BBQ Chicken"];


// for(let piz of Pizzas){
//     console.log(`I like ${piz} pizza`)
// }
// console.log("I really love pizza!")


// 35.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let animals:string[] = ["Goat","Cow","Beffalo","Dog"];

// for(let ani of animals){
//     console.log(`A ${ani} would make a great pet`)
// }
// console.log("Any of these animals would make a great pet!")

// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


// function make_shirt(size:string,text:string){
//     console.log(`creating a ${size} shirt with the message ${text}`)
// }
// make_shirt('large','love')

// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size:string = "large",text:string = "i love typeScript"){
//     console.log(`creating a ${size} shirt with the message ${text}`)
//  }
//  make_shirt()

//  make_shirt("medium")

//  make_shirt("small","i love Pythone")

// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function describe_city(city:string = "Karachi",country:string = "Pakistan"){
//         console.log(`${city} is in ${country}`)
// }
// describe_city()

// describe_city("Lahore")

// describe_city("Islamabad")



// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


// function city_country(city:string = "Lahore", country:string = "Pakistan"){
//             return `${city} is in ${country}`
// }
// let city = city_country("punjab","pakistan")
// console.log(city)



// 40.	Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// function make_album(artist:string,title:string,tracks?:number){
//     let album: {
//         artist:string,
//         title:string,
//         tracks?:number
//     } = {
//         artist:artist,
//         title:title
//     }
// if(album !== undefined){
//     album.tracks = tracks
// }
//     return album

// }
// let album1 = make_album("artist1","title1",45)
// console.log(album1)

// let album2 = make_album("artist2","title2",55)
// console.log(album2)



// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// let magicianName:string[] = ["David Copperfield", "Penn and Teller", "Criss Angel","David Blaine","Derren Brown"]

// function show_magicians(magicianNames:string[]){
//     magicianNames.forEach(element =>{
//         console.log(element)
//     })
// }
// show_magicians(magicianName)


// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// let magicianName:string[] = ["David Copperfield", "Penn and Teller", "Criss Angel","David Blaine","Derren Brown"]

// function make_great(magicianNameNew:string[]){
//         for(let i=0; i<magicianNameNew.length; i++){
//             magicianName[i]= "The Great " + magicianNameNew[i]
//         }
// }


// function show_magicians(magicianNames:string[]){
//     magicianNames.forEach(element =>{
//         console.log(element)
//     })
// }
// make_great(magicianName)
// show_magicians(magicianName)


// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// let magicianName:string[] = ["David Copperfield", "Penn and Teller", "Criss Angel","David Blaine","Derren Brown"]

// function magicianNewArray(arr:string[]){
//     return [...arr]
// }


// function make_great(magicianNameNew:string[]){
//         for(let i=0; i<magicianNameNew.length; i++){
//             magicianNameNew[i]= "The Great " + magicianNameNew[i]
//         }
// }


// function show_magicians(magicianNames:string[]){
//     magicianNames.forEach(element =>{
//         console.log(element)
//     })
// }

// let copyMagicianarry = magicianNewArray(magicianName)

// make_great(copyMagicianarry)
// console.log("\n\nthis is my original array")
// show_magicians(magicianName)

// console.log("\n\nthis is my copy array")
// show_magicians(copyMagicianarry)



// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function Sandwiches(items:string[]){
//             console.log("making your sandwich with: ")
//         items.forEach(sandwch => console.log("-" + sandwch))
//     console.log("engoy your meal")
// }
// Sandwiches(["bread","egg","tomattos"])


// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// function storeCarInfo(manufacturer:string,modelName:string, ...extraOption:{ [key : string ]: any}[]){
//     let carInfo = {
//         manufacturer,
//         modelName,
//         ...Object.assign({},...extraOption)
//     }
//     return carInfo
// }
// let answer = storeCarInfo("Honda","Civic",{color:"black"},{features: ["navigation","powerwindow"]})
// console.log(answer)


















