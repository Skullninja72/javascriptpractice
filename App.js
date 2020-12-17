var num1ref = document.querySelector("#getnum1");
var num2ref = document.querySelector("#getnum2");
var num3ref = document.querySelector("#getnum3");
var para = document.querySelector(".para");

var outputDiv = document.querySelector("#output");

var btnprod = document.querySelector("#prod");

btnprod.addEventListener("click",checkproduct);


function checkproduct(){
     var num1=parseInt(num1ref.value);
     var num2=parseInt(num2ref.value);
     var num3=parseInt(num3ref.value);

     var prodofnum = num1*num2*num3;
     //alert("The product of three numbers is" + prodofnum);
     outputDiv.innerText=prodofnum;
     para.innerText = prodofnum;
}

var btnAdd = document.querySelector("#add");

btnAdd.addEventListener("click" , checkSum);


function checkSum(){
     var num1 = parseInt(num1ref.value);
     var num2= parseInt(num2ref.value); 
     var num3=parseInt(num3ref.value);
     var sumofnum=num1+num2+num3;
   //alert(" sum of numbers is :"+sumofnum);
   outputDiv.innerText=sumofnum;
   para.innerText=sumofnum;


}


var btnMinus = document.querySelector("#diff");

btnMinus.addEventListener("click", checksubtraction);

function checksubtraction(){

  var num1 = parseInt(num1ref.value);
 var num2 = parseInt(num2ref.value);
 var num3=parseInt(num3ref.value);
 var diffofnum = num1-num2-num3;
 //alert("the difference of numbers is:" +diffofnum  )
 outputDiv.innerText=diffofnum;
 para.innerText = diffofnum;
}



