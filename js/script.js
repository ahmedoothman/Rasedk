
function calcc(){
    var wantedCredit= 0;
    wantedCredit=document.getElementById("wcredit").value;
    var currentCredit=0;
    currentCredit=document.getElementById("ccredit").value;
    var temp=((Number(wantedCredit)-Number(currentCredit))*10)/7;
   
        if(temp==0){
         document.getElementById("fcredit").innerHTML=temp.toFixed(0);   
        }else{
        var edit=Number(temp.toFixed(0))+1;
        document.getElementById("fcredit").innerHTML=edit;}
    
//    else{
//        document.getElementById("fcredit").innerHTML=temp.toFixed(0);
//    }
   
        
     // window.alert(checkf);  
    
    setTimeout( function() {
        calcc();  
      }, 100);
}

calcc();