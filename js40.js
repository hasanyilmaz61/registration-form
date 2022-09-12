let forms=document.getElementsByClassName("form");
let schritt=document.getElementById("schritt");
let kreis=document.getElementById("kreis").getElementsByTagName("div");
let fullen=document.getElementById("linefullen");

let aktuell=0;
let leste=aktuell;




function nav(n) {


    if (aktuell==forms.length-1 && n==1) {
        return
    }
    if(aktuell==0 && n==-1){
        return
    }
    

 let aktuelinput=forms[aktuell].getElementsByTagName("input");

    for ( i = 0; i < aktuelinput.length; i++) {
       
        if(aktuelinput[i].value==""){
alert("fullen sie alles")
            return

        }
        
        
    }

forms[aktuell].style.display="none";
kreis[leste].style.backgroundColor="rgb(231, 186, 133)";
aktuell+=n;
leste+=n;

 
if(aktuell==0){
    fullen.style. width="5%";
}

else if(aktuell==1){
    fullen.style. width="25%";
}


else if(aktuell==2)
{
    fullen.style. width="50%";
}

else if(aktuell==3)
{
    fullen.style. width="75%";
}


if (aktuell==0) {
    document.getElementById("zrck").style.opacity="0";
   
    
} else {
    document.getElementById("zrck").style.opacity="1";
   
}

if (aktuell==forms.length-1) {
    document.getElementById("weiter").innerHTML="senden";
    
} else {
    document.getElementById("weiter").innerHTML="weiter";  
}

forms[aktuell].style.display="flex";
kreis[leste].style.backgroundColor="darkorange";

    
}