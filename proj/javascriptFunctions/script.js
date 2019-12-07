var lunch = prompt('Would you like a steak sandwich? ');
var birthyear = prompt('What is your year yyyy? ');
var pronouns= prompt('What are your pronouns? she, he, or them? ');

var title = '';

if (pronouns === 'she') {
    title = "ma'am"
}

if (pronouns === 'he') {
    title = "sir"
}

if (pronouns === 'them') {
    title = "friend"
}

//var b =
//var c = prompt(a == true);

//console.log ('a:', a , typeof a);
//console.log ('c:', c , typeof c);

if (lunch === 'yes') {
    console.log('Here is your steak sandwich ');
        alert('Here is your steak sandwich ' + title + '!');
} 
if (lunch === 'no') {
    console.log('Here\s a Tofu Stir-Fry! ');
        alert('Here\s a Tofu Stir-Fry ' + title + '!');
}


if (birthyear <= 1998) {
          console.log('Here is your hot sake ' + title + '!');
            alert('Here is your hot sake ' + title + '!');
 } else {
          console.log('No sake for you ' + title + '!' );
            alert('No sake for you ' + title + '!' );
 };

     console.log('done')