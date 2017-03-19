var stored = '';
var operator = '';
var toExecute = '';
var display = '';

// Button press functions
function b1(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "1" ;
    toExecute += "1";
    document.getElementById("displayText").innerHTML = display;
}
function b2(){
    if(toExecute.length < 1){
        stored = '';
    }    
    display += "2" ;
    toExecute += "2";
    document.getElementById("displayText").innerHTML = display;
}
function b3(){
    if(toExecute.length < 1){
        stored = '';
    }    
    display += "3" ;
    toExecute += "3";
    document.getElementById("displayText").innerHTML = display;
}
function b4(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "4" ;
    toExecute += "4";
    document.getElementById("displayText").innerHTML = display;}
function b5(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "5" ;
    toExecute += "5";
    document.getElementById("displayText").innerHTML = display;}
function b6(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "6" ;
    toExecute += "6";
    document.getElementById("displayText").innerHTML = display;}
function b7(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "7" ;
    toExecute += "7";
    document.getElementById("displayText").innerHTML = display;}
function b8(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "8" ;
    toExecute += "8";
    document.getElementById("displayText").innerHTML = display;}
function b9(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "9" ;
    toExecute += "9";
    document.getElementById("displayText").innerHTML = display;}
function b0(){
    if(toExecute.length < 1){
        stored = '';
    }
    display += "0" ;
    toExecute += "0";
    document.getElementById("displayText").innerHTML = display;}
function bCE(){
    display = '';
    toExecute = '';
    document.getElementById("displayText").innerHTML = display;    
}
function bAC(){
    display = '';
    stored = '';
    toExecute = '';
    document.getElementById("displayText").innerHTML = display; }
function bBack(){
    display = display.slice(0,-1);
    document.getElementById("displayText").innerHTML = display;    
}
function bTimes(){
    operator = '*';
    if(toExecute == '' || /[^-*+/]/.test(toExecute.slice(-1))){
    toExecute += '*';}
    display = '';
    document.getElementById("displayText").innerHTML = '';
}
function bDivide(){
    operator = '/';
    if(toExecute == '' || /[^-*+/]/.test(toExecute.slice(-1))){
    toExecute += '/';}
    display = '';
    document.getElementById("displayText").innerHTML = '';
}
function bPlus(){
    operator = '+';
    if(toExecute == '' || /[^-*+/]/.test(toExecute.slice(-1))){
    toExecute += '+';}
    display = '';
    document.getElementById("displayText").innerHTML = '';
}
function bMinus(){
    operator = '-';
    if(toExecute == '' || /[^-*+/]/.test(toExecute.slice(-1))){
    toExecute += '-';}
    display = '';
    document.getElementById("displayText").innerHTML = '';
}
function bDot(){
    display += "." ;
    document.getElementById("displayText").innerHTML = display;}
/* function bEquals(){
    if (operator !== ''){
        //stored = (stored).valueOf();
        //toExecute = toExecute.valueOf();
        console.log(stored);
        console.log(toExecute);
        document.getElementById("displayText").innerHTML = '';
        stored = eval(stored + toExecute);
        //stored = eval(+stored + operator +  +display); // performs the calculation 
        display = '';
    } else { // needs to be corrected so clearing entries don't erase memory 
       if(display !== ''){
        stored = display;
    }
        display = '';
    }
    document.getElementById("displayText").innerHTML = stored; // updated display screen 
    operator = '';
    toExecute = '';
} */
function bEquals() {
    if(operator !== '' & /[0-9]/.test(toExecute)){
    var result = eval(stored.valueOf() + toExecute.valueOf());
    document.getElementById("displayText").innerHTML = result ;
    stored = result;
    display = '';
    toExecute = '';
    operator = '';
    } else {
        stored = toExecute;
        toExecute = '';
        display = '';
        operator = '';
    }

}