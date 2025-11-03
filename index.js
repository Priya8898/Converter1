
function convert(){
    let inches=document.getElementById('inches').value;
    let mm=inches*25.4;
    let result=document.getElementById('result')
    result.innerText=mm+'mm';    
    }