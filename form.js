function confirmation() {
    var value = confirm("Do you want to submit");
    if( value == true ) {
           alert ("Saved Successfully!");
       return true;
       } 
    else {
       location.reload();
       return false;
    }
 }