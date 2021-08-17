function wrong(){
    window.location="rong2.html"
}
function right(){
    window.location="lick2.html"
	Score2 = localStorage.getItem("Score");
    Score2 = Score1 + 1;
    localStorage.setItem("score1",Score2);
}
function next(){
    window.location="index3.html"
}