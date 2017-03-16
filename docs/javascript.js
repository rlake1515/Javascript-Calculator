var stored = '0';
var operator = '+';
var display = document.getElementById("displayText").innerHTML;

// Button press functions
function b1(){
    display += "1" ;
    document.getElementById("displayText").innerHTML = display;
}
function b2(){
    display += "2" ;
    document.getElementById("displayText").innerHTML = display;
}
function b3(){
    display += "3" ;
    document.getElementById("displayText").innerHTML = display;
}
function b4(){
    console.log('foo');
}
function b5(){
    console.log('foo');
}
function b6(){
    console.log('foo');
}
function b7(){
    console.log('foo');
}
function b8(){
    console.log('foo');
}
function b9(){
    console.log('foo');
}
function b0(){
    console.log('foo');
}
function bCE(){
    console.log('foo');
}
function bAC(){
    console.log('foo');
}
function bBack(){
    console.log('foo');
}
function bTimes(){
    operator = '*';
    display = '0';
}
function bDivide(){
    operator = '/';
    display = '0';
}
function bPlus(){
    operator = '+';
    display = '0';
}
function bMinus(){
    operator = '-';
    display = '0';
}
function bDot(){
    console.log('.');
}
function bEquals(){
    if (operator !== ''){
        stored = eval(parseInt(stored, 10) + operator +  parseInt(display, 10)); /* performs the calculation */
        display = stored;
    } else {
        stored = display;
    }
    document.getElementById("displayText").innerHTML = stored; /* updated display screen */
    operator = '';
    console.log(stored);
}

