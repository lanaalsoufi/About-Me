'use strict';
let sum = 0;

alert('Welcome To Lana Alsoufi Page');

let userName = prompt('Enter Your Name Please ?').toLowerCase();
//console.log('Your name is: '+userName);
alert('Hello ' + userName);

// eslint-disable-next-line no-unused-vars
// let questions = prompt('There is a set of questions about me that you should answer with yes/y or no/n, \n Are you ready? ');
alert('There is a set of questions about me that you should answer with yes/y or no/n\nLets start');

function major(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    quesOne = prompt('Is my major is English literature?').toLowerCase();
  }
  if (ans === 'yes' || ans === 'y') {
    alert('Your answer is correct ');
    console.log(ans);
    sum++;
  } else {
    alert('Unfortunately, Your answer is wrong');
  }
  return ans;
}

function university(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    quesTwo = prompt('Do I study at Al-Isra university?').toLowerCase;
  }
  if (ans === 'yes' || ans === 'y') {
    alert('Your answer is correct ');
    sum++;
    console.log('Your answer is correct');
  } else {
    alert('Unfortunately, Your answer is wrong');
  }
  return ans;
}

function asac(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    quesThree = prompt('Do I study at ASAC?').toLowerCase;
  }
  if (ans === 'yes' || ans === 'y') {
    alert('Your answer is correct ');
    sum++;
    console.log('Your answer is correct');
  } else {
    alert('Unfortunately, Your answer is wrong');
  }
  return ans;
}
function reading(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    quesFour = prompt('Do I like reading?').toLowerCase;
  }
  if (ans === 'yes' || ans === 'y') {
    alert('Your answer is correct ');
    sum++;
    console.log('Your answer is correct');
  } else {
    alert('Unfortunately, Your answer is wrong');
  }
  return ans;
}

function season(ans){
  while (ans !== 'yes' && ans !== 'no' && ans !== 'y' && ans !== 'n') {
    quesFive = prompt('Do I love the winter season?').toLowerCase;
  }
  if (ans === 'no' || ans === 'n') {
    alert('Your answer is correct ');
    sum++;
    console.log('Your answer is correct');
  } else {
    alert('Unfortunately, Your answer is wrong');
  }
  return ans;
}
function myAge(){
  for (let i = 0; i < 4; i++) {
    let age = prompt('Guess how old am I ?\n' + 'The answer between 20-30\n' + 'You have just 4 chances');
    if (age == 23) {
      alert('Yes this is a correct answer');
      sum++;
      break;
    }else if(age < 22){
      alert('No, its too low \n' + ' try it again');
    }else if (age > 23) {
      alert('No its too high \n' + 'try again');
    }
    if (i === 4) {
      alert('the correct answer is 23');
    }
  }
}

function country(place){
  for (let y = 0; y < 6; y++) {
    myChoice = prompt('Give me the name of the country I want to travel to ?');
    for (let i = 0; i < countriesArray.length; i++) {

      if (myChoice === countriesArray[i]) {
        alert('correct');
        y = 6;
        sum++;
        break;
      }

    }
    if (y === 5) {
      alert('No more chances \n' + 'the right answers are = ' + countriesArray);
    } else if (y < 6) {
      alert('Your answer is uncorrect \nplease Try again');
    }

  }
  return place;
}
let quesOne = prompt('Is my major is English literature?').toLowerCase();
major(quesOne);
let quesTwo = prompt('Do I study at Al-Isra university?').toLowerCase();
university(quesTwo);
let quesThree = prompt('Do I study at ASAC?').toLowerCase();
asac(quesThree);
let quesFour = prompt('Do I like reading?').toLowerCase();
reading(quesFour);
let quesFive = prompt('Do I love the winter season').toLowerCase();
season(quesFive);
myAge();

let countriesArray = ['Palestine', 'France', 'Spain', 'Turkey', 'Italy'];
let myChoice = '';
country(myChoice);
alert('you have got a score ' + sum + ' of 7');
alert('Thank you for answering the questions ' + userName + '\n Have a nice day');
