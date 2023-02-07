function togglemenu(){
    document.getElementById("openmenu").style.display='block';
}
function closemenu(){
    document.getElementById("openmenu").style.display='none';
}
let slideindex = 0;
showslides();
function showslides(){
    var i;
    let slides = document.getElementsByClassName("myslides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display='none';
    }
    slideindex++;
    if (slideindex > slides.length){
        slideindex = 1;
    }
    slides[slideindex-1].style.display = 'block';
    setTimeout(showslides, 10000);
}
function expandabout(){
    document.getElementById("about").style.display='block';
    document.getElementById("academics").style.display='none';
    document.getElementById("admissions").style.display='none';
    document.getElementById("support").style.display='none';
}
function expandacademics(){
    document.getElementById("about").style.display='none';
    document.getElementById("academics").style.display='block';
    document.getElementById("admissions").style.display='none';
    document.getElementById("support").style.display='none';
}
function expandadmissions(){
    document.getElementById("about").style.display='none';
    document.getElementById("academics").style.display='none';
    document.getElementById("admissions").style.display='block';
    document.getElementById("support").style.display='none';
}
function expandsupport(){
    document.getElementById("about").style.display='none';
    document.getElementById("academics").style.display='none';
    document.getElementById("admissions").style.display='none';
    document.getElementById("support").style.display='block';
}
function toggleevent(){
    document.getElementById("notice").style.display='block';
    document.getElementById("notice2").style.display='none';
    document.getElementById("notice3").style.display='none';
}
function toggleevent2(){
    document.getElementById("notice").style.display='none';
    document.getElementById("notice2").style.display='block';
    document.getElementById("notice3").style.display='none';
}
function toggleevent3(){
    document.getElementById("notice").style.display='none';
    document.getElementById("notice2").style.display='none';
    document.getElementById("notice3").style.display='block';
}