const names = ["Guadalupe", "Ollie", "Aki"];
const message = [];
function writeCards(names,event) {
    for (let i=0; i < names.length; i++) {
            message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }
        return message;
    }
    console.log(writeCards(names, surprise));

    
    function countDown() {
        let i = 0;
        while (i < 11) {
            console.log(i++)
        }
    }