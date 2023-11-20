
let cards=[];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message;
let messageEl=document.getElementById("element1");
let sumEl=document.getElementById("sum_el");
let cardEl=document.getElementById("card");
let newCrd=document.getElementById("new");
let reStart=document.getElementById("restart");
function reset(){
     cardEl.textContent="Cards:";
     sumEl.textContent ="Sum:";
     hasBlackjack = false;
     isAlive = false;
     player.chips=0;
     playerEl.textContent=player.name+" "+player.chips+"$";

}
let player={
    name:"per",
    chips:150
}
let playerEl=document.getElementById("per");


function startgame(){
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    isAlive=true;
    cards=[firstCard,secondCard]  
    sum=firstCard+secondCard;

    rendergame();
    if(sum===21){
        player.chips=30;
        playerEl.textContent=player.name+" "+player.chips+"$";

    } else if(sum>21){
        player.chips=0;
        playerEl.textContent=player.name+" "+player.chips+"$";
    
    
    }else if(sum>16){
        player.chips=20;
        playerEl.textContent=player.name+" "+player.chips+"$";
    }
   
    else {
        player.chips=10;
        playerEl.textContent=player.name+" "+player.chips+"$";
    }
}
function rendergame(){
    cardEl.textContent="Cards:";
    for(i=0;i<cards.length;i+=1){
        cardEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent = "Sum:" + sum;
    
    if(sum<=20){
        message="Do you want to draw a card?";
        isAlive=true;
        
    } else if(sum===21){
        message="Wow you got BlackJack!";
        hasBlackjack=true;
        
    } else{
        message="You are out of the game!";
        isAlive = false;
    }
messageEl.textContent=message;

}
function newcard(){
    if(isAlive===true&&hasBlackjack===false){
    let Newcard=getRandomCard() ;
    sum+=Newcard;
    cards.push(Newcard);
    
    rendergame();
    if(sum===21){
        player.chips+=30;
        playerEl.textContent=player.name+" "+player.chips+"$";

    } else if(sum>21){
        player.chips=0;
        playerEl.textContent=player.name+" "+player.chips+"$";
    
    
    }else if(sum>16){
        player.chips+=20;
        playerEl.textContent=player.name+" "+player.chips+"$";
    }
   
    else {
        player.chips+=10;
        playerEl.textContent=player.name+" "+player.chips+"$";
    }
    }
}
for(let i=0;i<cards.length;i+=1){
    console.log(cards[i]);
}
let arr = ["hello","my","name","is","Chinu"];
function getRandomCard(){
    let ret = Math.floor(Math.random()*13)+1;
    if (ret===1){
        return 11;
    }else if(ret>10){
        return 10;
    }else{
        return ret;
    }



}
