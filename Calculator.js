
// first label selction from our document.
let label1 = document.querySelector("#label");
let subLabel = document.querySelector("#label2");
let lableForOn = document

// radio buttons selection from our document
let radioOn = document.querySelector("#on");
let radioOff = document.querySelector("#off");

// selection of all buttons
let C = document.querySelector("#C");
let backspace = document.querySelector("#backspace");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn_plus = document.querySelector("#btn_plus");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn_min = document.querySelector("#btn_min");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn_x = document.querySelector("#btn_x");
let zero = document.querySelector("#zero");
let btn_div = document.querySelector("#btn_div");
let btn_dot = document.querySelector("#btn_dot");
let equls_sign = document.querySelector("#equls_sign");

// all buttons and labels are selected


// let's create a varaible to hold opratting sign
let sign; 



// seting for C button
C.onclick = function(){
    label1.innerHTML = "";
    subLabel.innerHTML = "";
}

// setting for backspace button
backspace.onclick = function(){
label1.innerHTML = label1.innerHTML.slice(0,-1);
}

// setting for button 1
btn1.onclick = function(){
    if (label1.innerHTML == "0"){
    label1.innerHTML ="1";
    }
    else if (label1.innerHTML.length > 10){
        label1.innerHTML = label1.innerHTML + "";
    }
    else{
        label1.innerHTML = label1.innerHTML + "1";
    }
}

// setting for button 2
btn2.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="2";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "2";
        }
}

// setting for button 3
btn3.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="3";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "3";
        }
}
// setting for button plus sign
btn_plus.onclick = function(){
    sign = "+";
    if(label2.innerHTML == ""){
    label2.innerHTML = label1.innerHTML;
    label1.innerHTML = "";
    }
    else{
        label2.innerHTML = label2.innerHTML + sign + label1.innerHTML;
        label1.innerHTML = "";
    }
    
}

// setting for button 4
btn4.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="4";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "4";
        }
}

// setting for button 5
btn5.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="5";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "5";
        }
}

// setting for button 6
btn6.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="6";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "6";
        }
}
// setting for button min sign
btn_min.onclick = function(){
    sign = "-";
    if(label2.innerHTML == ""){
    label2.innerHTML = label1.innerHTML;
    label1.innerHTML = "";
    }
    else{
        label2.innerHTML = label2.innerHTML + sign + label1.innerHTML;
        label1.innerHTML = "";
    }
}
// setting for button 7
btn7.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="7";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "7";
        }
}

// setting for button 8
btn8.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="8";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "8";
        }
}

// setting for button 9
btn9.onclick = function(){
    if (label1.innerHTML == "0"){
        label1.innerHTML ="9";
        }
        else if (label1.innerHTML.length > 10){
            label1.innerHTML = label1.innerHTML + "";
        }
        else{
            label1.innerHTML = label1.innerHTML + "9";
        }
}
// setting for button multiplecation sign
btn_x.onclick = function(){
    sign = "*";
    if(label2.innerHTML == ""){
    label2.innerHTML = label1.innerHTML;
    label1.innerHTML = "";
    }
    else{
        label2.innerHTML = label2.innerHTML + sign + label1.innerHTML;
        label1.innerHTML = "";
    }
}

// setting for button zero
zero.onclick = function(){
    if(label1.innerHTML == "" || label1.innerHTML == "0"){
    label1.innerHTML = "0";
    }
    else if (label1.innerHTML.length > 10){
        label1.innerHTML = label1.innerHTML + "";
    }
    else{
        label1.innerHTML =label1.innerHTML+"0";
   }
}

// setting for button divesion
btn_div.onclick = function(){
    sign = "/";
    if(label2.innerHTML == ""){
    label2.innerHTML = label1.innerHTML;
    label1.innerHTML = "";
    }
    else{
        label2.innerHTML = label2.innerHTML + sign + label1.innerHTML;
        label1.innerHTML = "";
    }
}


// setting for button dot
btn_dot.onclick = function(){
    if (label1.innerHTML.length > 10){
        label1.innerHTML = label1.innerHTML + "";
    }
    else {
    label1.innerHTML = label1.innerHTML + ".";
    }
}
// setting for button equls sign
equls_sign.onclick = function(){
   
    var result =eval(label2.innerHTML + sign + label1.innerHTML);
    result = result.toFixed(2);
    result = Number(result);
        label1.innerHTML = result;
        label2.innerHTML = "";
  
}

// when we click the on radio button it will enable all the button
radioOn.onclick = function (){
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
    btn_plus.disabled = false;
    btn5.disabled = false;
    btn6.disabled = false;
    btn_min.disabled = false;
    btn7.disabled = false;
    btn8.disabled = false;
    btn9.disabled = false;
    zero.disabled = false;
    btn_div.disabled = false;
    btn_x.disabled = false;
    btn_dot.disabled = false;
    equls_sign.disabled = false;
    C.disabled = false;
    backspace.disabled = false;
    radioOff.disabled = false;
    radioOn.disabled = true;
}

// when we click on the off radio button it will disable all the button
radioOff.onclick = function (){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn_plus.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn_min.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    zero.disabled = true;
    btn_div.disabled = true;
    btn_x.disabled = true;
    btn_dot.disabled = true;
    equls_sign.disabled = true;
    C.disabled = true;
    backspace.disabled = true;
    radioOff.disabled = true;
    radioOn.disabled = false
}

// we set all the button disable when we run our calculator
// it will be disalbe until we clikc the on button 
radioOff.checked = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn_plus.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn_min.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
    zero.disabled = true;
    btn_div.disabled = true;
    btn_x.disabled = true;
    btn_dot.disabled = true;
    equls_sign.disabled = true;
    C.disabled = true;
    backspace.disabled = true;
    radioOff.disabled = true;





