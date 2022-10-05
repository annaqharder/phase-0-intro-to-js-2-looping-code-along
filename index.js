// Code your solutions in this file

function writeCards(name, event) {
    const messages = []; 
    for (let count = 0; count < name.length; count++) {
        const message = (`Thank you, ${name[count]}, for the wonderful ${event} gift!`); 
        messages.push(message); 
    }; 
    return messages; 
}
console.log(messages); 

function countDown() {
    let i = 10; 
    while (i >= 0 ) { 
        console.log(i--); 
     } 
    }
