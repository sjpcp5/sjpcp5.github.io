var repsonse = confirm('Are you feeling confident? ')
var name;
var age;
var hometown;
var favoritefood;
var adulttshow = 'DragonBall GT'
var kidtvshow = 'Baby Shark'



name = prompt('What is your name?')
age = prompt('What is your age?')
hometown = prompt('What is your hometown?')
favoritefood = prompt('What is your favorite food?')

if(Response) {
    console.log('the user is confident');
} else {console.log('the user needs help and should find an adult')}

console.log('value of age is' + age);

if (age > 17) {
    console.log('age is greater than or equal to 18');
        alert('Watch some ' + adulttshow);
} else { 
    console.log('age is less than 18');
        alert('Watch some ' + kidtvshow);
}
alert('Hey there ' + name + ' (' + age + ') from ' + hometown + '!')
alert('Person\'s age is \n' + age);