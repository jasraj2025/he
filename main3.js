function wrong(){
    window.location="rong3.html"
}
function right(){

    window.location="lick3.html"
    Score3 = localStorage.getItem("Score2");
    Score3 = Score2 + 1;
    localStorage.setItem("score2",Score2);
}
function finish(){
    window.location="finish.html"
}

