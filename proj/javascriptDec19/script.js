var name;
var age;
var hometown;
var favoritefood;
var adulttshow = 'DragonBall GT'
var kidtvshow = 'Baby Shark'



name = prompt('What is your name?')
age = prompt('What is your name?')
hometown = prompt('What is your hometown?')
favoritefood = prompt('What is your favorite food?')

if (age > 18) {
     alert('Watch some' +adulttshow);
} else { 
    alert('Watch some' + kidtvshow);
}
alert('Hey there ' + name + ' ('+ age +') from'+ hometown +'!')