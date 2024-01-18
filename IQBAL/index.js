function Operator(char){
    const Operator = ['%','/','+','-','*','.']
    return Operator.includes(char);
}

function AppendToDisplay(value){
     const display =document.getElementById('display');
     const lastchar=display.value.slice(-1);
     
     if(Operator(lastchar) && Operator(value)){
         display.value = display.value.slice(0,-1) + value;
        }else{
            display.value += value;
        }
    }
    
function allclear(){
    const display =document.getElementById('display');
    display.value = '';    
}
function deletee(){
    const display =document.getElementById('display');
    display.value = display.value.slice(0,-1);    
}

function Calculate(){
    const display =document.getElementById('display').value;

    if(!/\d/.test(display) || !/[+\-%\/\*]+/.test(display)){
        document.getElementById('display').value = "ERROR🗿";
        return;
    }
    
    try {
        const hasil =eval(display);
        document.getElementById('display').value = hasil;
    } catch (error) {
       "";
    }
}