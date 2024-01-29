function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}



let numA="";
let operator="";
let numB="";

const buttons=document.querySelectorAll('.keys');
const displayDiv=document.querySelector('.display-box');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('number'))
        {
            if(numA==="")
            {
                displayDiv.innerHTML="";
            }
       if(numA===""||operator=="")
       {
        numA=numA+button.innerHTML;
        displayDiv.innerHTML=displayDiv.innerHTML+button.innerHTML;
       }
       else if(numB===""||operator!==""){
       numB=numB+button.innerHTML;
       displayDiv.innerHTML=displayDiv.innerHTML+button.innerHTML;
       }
    }

    if(button.classList.contains('operation')){
            operator=button.innerHTML;
            numA=parseInt(numA);
            displayDiv.innerHTML=displayDiv.innerHTML+button.innerHTML;
    }

    if(button.id==="equal")
    {
        numB=parseInt(numB);
        console.log(numB);
        if(numA==="")
        {
            numA=0;
        }
     const answer=operate(numA,operator,numB);
     displayDiv.innerHTML=answer;
    }

   
})});

const clearButton=document.querySelector('#clear');
clearButton.addEventListener('click',()=>{
    displayDiv.innerHTML="";
    numA="";
    numB="";
    operator="";
})

function operate(numA,userOperator,numB){
    switch (userOperator){
        case '+':
            return add(numA,numB);
        case '-':
            return subtract(numA,numB);
        case '*':
            return multiply(numA,numB);
       case '/':
        return divide(numA,numB);
    }
}

