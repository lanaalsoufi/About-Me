'use strict';

alert('Welcome To Lana Alsoufi Page')

let userName = prompt('Enter Your Name Please ?').toLowerCase();
//console.log('Your name is: '+userName);
alert('Hello'+ userName);

let questions = prompt('There is a set of questions about me that you should answer with Yes/ No, \n Are you ready? ');
alert('Lets start')

let firstQuistion = prompt('Is my major is English literature?').toLowerCase();
//console.log(firstQuistion);

if(firstQuistion === 'yes'){
    alert('Your answer is correct ');
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}
 
let secondQuestion = prompt('Do I study at Al-Isra university?').toLowerCase();
//console.log(secondQuistion);

if(secondQuestion === 'yes'){
    alert('Your answer is correct ');
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

let thirdQuestion = prompt('Do I study at ASAC?').toLowerCase();
//console.log(thirdQuestion);

if(thirdQuestion === 'yes'){
    alert('Your answer is correct ');
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

let fourthQuestion = prompt('Do I like reading?').toLowerCase();
//console.log(fourthQuestion);

if(fourthQuestion=== 'yes'){
    alert('Your answer is correct ');
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

let fifthQuestion = prompt('Do I love the winter season').toLowerCase();
//console.log(fifthQuestion);

if(fifthQuestion === 'no'){
    alert('Your answer is correct ');
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

alert('Thank you '+userName +'\n Have a nice day');
