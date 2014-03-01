//need to fix password function    
var passwor = function(){
    right = "Kunle";
    wrong = "";
    wrong = true;
    var passAsk = prompt("What is the password");
    while (wrong){
        passAsk();    
    } if (passAsk == right){
        alert("You may proceed"); 
        wrong = false;
    } 
    wrong = false;
};    
password();
