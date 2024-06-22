var cal=[]
var equalto

document.addEventListener("keydown",e=>{
    if(e.key=='Backspace'){
        backspace()
    }else{
        if(e.code.length>4 && e.key!=='Enter'){
            keyPressed(e.key)
        }else if(e.key=='Enter'){
            var equalto=eval(cal.join(""))
            document.querySelector(".display").value=equalto;
            cal=[]
            cal.push(equalto);
        }
    }
})

function clean(){
    cal=[]
    document.querySelector(".display").value="";
}
function backspace(){
    if(cal.length>0){
        cal.pop()
        document.querySelector(".display").value=cal.join("")
    }else{
        document.querySelector(".display").value=""
    }
}
function keyPressed(a){
    if(a=='='){
        var equalto=eval(cal.join(""))
        document.querySelector(".display").value=equalto;
        cal=[]
        cal.push(equalto);
    }else{
        cal.push(a)
        document.querySelector(".display").value=cal.join("");
    }
}
