window.addEventListener("load",bindEvents);
var isXorZero = false; 
var buttons;
var gameEnd = false;
function showTic(){
    console.log("show tic call");
    if(!gameEnd){
    if(this.innerText.trim().length==0){
    this.innerText = isXorZero?"X":"0";
    isGameOver();
    console.log("hi");
    isXorZero =!isXorZero; 
    }  
}
}

function isRowSame(first,second,third){
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])){
    return buttons[first].innerText==buttons[second].innerText && buttons[first].innerText==buttons[third].innerText;
    }
    return false;
}
function isColSame(first,second,third){
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])){
    return buttons[first].innerText==buttons[second].innerText && buttons[first].innerText==buttons[third].innerText;
    }
    return false;
}
function isDaiSame(first,second,third){
    if(isNotBlank(buttons[first]) && isNotBlank(buttons[second]) && isNotBlank(buttons[third])){
    return buttons[first].innerText==buttons[second].innerText && buttons[first].innerText==buttons[third].innerText;
    }
    return false;
}
function isNotBlank(button){
    return button.innerText.trim().length==0?false:true;
}



function isGameOver(){
    var gameover="";
    if(isRowSame(0,1,2)){
       gameover ="GAME OVER";
       gameEnd= true;
    }
    else
    if(isRowSame(3,4,5)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
    
    else
    if(isRowSame(6,7,8)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
    else
    if(isColSame(0,3,6)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
    else
    if(isColSame(1,4,7)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
    else
    if(isColSame(2,5,8)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
    else
    if(isDaiSame(0,4,8)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
    else
    if(isDaiSame(2,4,6)){
        gameover ="GAME OVER";
        gameEnd= true;
        }
        document.querySelector("#result").innerText = gameover;
    }
    
      


function bindEvents(){
  buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",showTic);   //event add kr re h vo sunega isiliye event listner naam h
}
}

