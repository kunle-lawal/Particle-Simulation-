//need to fix password function    
function password(){
    right = ["Kunle"];
    wrong = true;
    while (wrong){
    var passAsk = prompt("What is the password?");
        var patt1 = new RegExp(passAsk);
    if (patt1.test(right) && passAsk !== null && passAsk !== ""){
        alert("You may proceed"); 
        wrong = false;
    } else {
        var addNew = confirm("Do you want to make a new password");
        
        if(addNew) {
            var toNew = prompt("What do you want this new password to be called?");
            right.push(toNew);
        }
    }
} 
}
password();
