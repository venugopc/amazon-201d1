var number;
var counter = 1;

while (number !== 20) {
    number = parseInt(prompt('guess my favorite number'));

    if (number < 20) {
        alert('sorry you guessed too low');
        counter++;
    } else if (number > 20) {
        alert('you guessed too high');
        counter++;
    } else if (isNaN(number) || number === null) {
        alert('please enter an actual number');
        counter++;
    }
}

console.log('total guesses until i got it:', counter);