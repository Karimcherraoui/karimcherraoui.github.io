function cal(){
    var x = Number(document.getElementById("Number-One").value);
    var y = Number(document.getElementById("Number-Two").value);
    if (document.getElementById("box1").checked){
        z = x + y;
    }
    else if(document.getElementById("box2").checked){
        z = x - y;
    }
    else if(document.getElementById("box3").checked){
        z = x * y;
    }
    else if(document.getElementById("box4").checked){
        if(y==0){
            alert("error");   
            if  (y!=0)
            z = x / y;
        }
        
        
    }
    

    document.getElementById("resultat").innerHTML = "Resultat : "+String(z);

}
    