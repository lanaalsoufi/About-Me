'use strict';
let sum =0;

alert('Welcome To Lana Alsoufi Page')

let userName = prompt('Enter Your Name Please ?').toLowerCase();
//console.log('Your name is: '+userName);
alert('Hello'+ userName);

let questions = prompt('There is a set of questions about me that you should answer with Yes/ No, \n Are you ready? ');
alert('Lets start')

let quesOne = prompt('Is my major is English literature?').toLowerCase();
//console.log(quesOne);

if(quesOne === 'yes'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}
 
let quesTwo = prompt('Do I study at Al-Isra university?').toLowerCase();
//console.log(quesTwo);

if(quesTwo === 'yes'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

let quesThree = prompt('Do I study at ASAC?').toLowerCase();
//console.log(thirdQuestion);

if(quesThree === 'yes'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

let quesFour = prompt('Do I like reading?').toLowerCase();
//console.log(fourthQuestion);

if(quesFour=== 'yes'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

let quesFive = prompt('Do I love the winter season').toLowerCase();
//console.log(fifthQuestion);

if(quesFive === 'no'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else{
    alert('Unfortunately, Your answer is wrong');
}

for(let i=0 ; i<4 ; i++){

    let age  = prompt('Guess how old am I ?\n'+'The answer between 20-30\n'+'You have just 4 chances');

    if(age <22){
        alert('No, its too low \n'+' try it again');
    }
    else if(age >23){

        alert('No its too high \n'+'try again');
    }
    else if(age ==23){

        alert('Yes this is a correct answer');
        sum++;
        break;}    
        
        if (i==3){
            alert('the correct answer is 23');
        }
    }

    
    
        let countriesArray = ['Palestine','France','Spain','Turkey','Italy',''];
        let myChoice = ''
        for (let y = 0; y < 6; y++){ 
               myChoice = prompt('Give me the name of the country I want to travel to ?');
              for (let i = 0; i < countriesArray.length ; i++) {
        
            if (myChoice == countriesArray[i]) {
               alert( 'correct');
              y=6;
              sum++;
              break;
            }
            
        }
        if (y==5){
            alert ('No more chances \n'+'the right answers are = '+ countriesArray)
          }else if(y<6){
             alert('Your answer is uncorrect \nplease Try again');
        }
        
        }
    
        alert('you have got a score '+sum+' of 7');

alert('Thank you for answering the questions '+userName +'\n Have a nice day');
