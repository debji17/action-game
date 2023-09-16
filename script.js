score = 0;
cross = true;
level = 1;

audioGo = new Audio("sounds/game-over.mp3");
audio = new Audio("sounds/music.mp3");
setTimeout(() => {
    audio.play();
},1000);

document.onkeydown = function(e){
    console.log("key code is : ",e.keyCode);
    if(e.keyCode==32){
        man = document.querySelector(".man");
        man.classList.add("animateMan");
        setTimeout(()=>{
            man.classList.remove("animateMan");
        },700);
    }
    if(e.keyCode==39){
        man = document.querySelector(".man");
        manx = parseInt(window.getComputedStyle(man,null).getPropertyValue("left"));
        man.style.left = manx + 112 + "px";
    }
    if(e.keyCode==37){
        man = document.querySelector(".man");
        manx = parseInt(window.getComputedStyle(man,null).getPropertyValue("left"));
        man.style.left = manx - 112 + "px";
    }
}
setInterval(() =>{
    man = document.querySelector(".man");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");
    mx = parseInt(window.getComputedStyle(man,null).getPropertyValue("left"));
    my = parseInt(window.getComputedStyle(man,null).getPropertyValue("top"));

    dx = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    offsetX = Math.abs(mx-dx);
    offsetY = Math.abs(my-dy);
    console.log(offsetX,offsetY);
    if(offsetX<91 && offsetY<30){
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("obstacleDino");
        audio.pause();
        audioGo.play();
        setTimeout(()=>{
            audioGo.pause();
        },1000);
    }
    else if(offsetX<95 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);
        setTimeout(()=>{
            if(score===10){
                level++;
                updateLevel(level);
                obstacle.style.animationDuration = 2.3 + "s";
            }
            if(score ===20){
                level++;
                updateLevel(level);
                obstacle.style.animationDuration = 2.1 + "s";
            }
            if(score===30){
                level++;
                updateLevel(level);
                obstacle.style.animationDuration = 1.9 + "s";
            }
            if(score ===40){
                level++;
                updateLevel(level);
                obstacle.style.animationDuration = 1.7 + "s";
            }
            if(score >=50){
                level++;
                updateLevel(level);
                obstacle.style.animationDuration = 1.5 + "s";
            }
        },600);
    }
},100);
function updateScore(score){
    scoreCont.innerHTML = "Your Score : "+ score;
}
function updateLevel(level){
    levelCont.innerHTML = "Your Level : "+ level;
}