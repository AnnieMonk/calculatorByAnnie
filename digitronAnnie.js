
function prikaziNaekran(sta){
   document.getElementById("output").value +=sta;
}
function izbrisi(){
    document.getElementById("output").value ="";
}
function nazad(){
    var exp= document.getElementById("output").value;
    document.getElementById("output").value=exp.substring(0,exp.length-1);
}
function postotak(){
    var numNew=document.getElementById("output").value /100;
    document.getElementById("output").value = numNew;
}