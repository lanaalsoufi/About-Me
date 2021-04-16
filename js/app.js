'use strict';
let sum =0;

alert('Welcome To Lana Alsoufi Page')

let userName = prompt('Enter Your Name Please ?').toLowerCase();
//console.log('Your name is: '+userName);
alert('Hello '+ userName);

let questions = prompt('There is a set of questions about me that you should answer with yes/y or no/n, \n Are you ready? ');
alert('Lets start');



let quesOne = prompt('Is my major is English literature?').toLowerCase();
//console.log(quesOne);

while (quesOne !== 'yes' && quesOne !== 'no' && quesOne !== 'y' && quesOne !== 'n'){
    quesOne = prompt('Is my major is English literature?').toLowerCase();
}
if(quesOne === 'yes' || quesOne === 'y'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else {
    alert('Unfortunately, Your answer is wrong');
}
 



let quesTwo = prompt('Do I study at Al-Isra university?').toLowerCase();
//console.log(quesTwo);

while (quesTwo !== 'yes' && quesTwo !== 'no' && quesTwo !== 'y' && quesTwo !== 'n'){
    quesTwo = prompt('Do I study at Al-Isra university?').toLowerCase;
}
if(quesTwo === 'yes' || quesTwo === 'y'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else {
    alert('Unfortunately, Your answer is wrong');
}



let quesThree = prompt('Do I study at ASAC?').toLowerCase();
//console.log(quesThree);

while (quesThree !== 'yes' && quesThree !== 'no' && quesThree !== 'y' && quesThree !== 'n'){
    quesThree = prompt('Do I study at ASAC?').toLowerCase();
}
if(quesThree === 'yes' || quesThree === 'y'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else {
    alert('Unfortunately, Your answer is wrong');
}




let quesFour = prompt('Do I like reading?').toLowerCase();
//console.log(quesFour);

while (quesFour !== 'yes' && quesFour !== 'no' && quesFour !== 'y' && quesFour !== 'n'){
    quesFour = prompt('Do I like reading?').toLowerCase();
}
if(quesFour === 'yes' || quesFour === 'y'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else {
    alert('Unfortunately, Your answer is wrong');
}




let quesFive = prompt('Do I love the winter season').toLowerCase();
//console.log(quesFive);

while (quesFive !== 'yes' && quesFive !== 'no' && quesFive !== 'y' && quesFive !== 'n'){
    quesFive = prompt('Do I love the winter season?').toLowerCase();
}
if(quesFive === 'no' || quesFive === 'n'){
    alert('Your answer is correct ');
    sum++;
    //console.log('Your answer is correct');
}else {
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

    
    
        let countriesArray = ['Palestine','France','Spain','Turkey','Italy'];
        let myChoice = '';
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




