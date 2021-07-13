// Code your solutions in this file

const name = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(name){
    let message=[];
for(let i=0;i<name.length;i++){
    message.push( `Thank you, ${name[i]}, for the wonderful surprise gift!`);
}
return message;
}

function countDown(positiveNumber){
    
    while(positiveNumber>=0){
        console.log(positiveNumber);
        positiveNumber--;
}
    }