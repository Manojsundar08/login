function sample()
{
 var x= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
/*  if( document.login.log.value == "")
 {
 
   document.getElementById("invalid").innerHTML= "Enter the valid email id or phone";
 } 
 else if(!x.test(document.login.log.value))
 {
 document.getElementById("invalid").innerHTML="Incorrect email or phone";
 }
 else {
 document.getElementById("invalid").innerHTML=" ";
 }      */
 if(document.login.pass.value == "mango" && x.test(document.login.log.value))
   {
    window.location.href = "form.html";
    document.getElementById("error").innerHTML= " ";
   }
 else
   {
    document.getElementById("error").innerHTML= "Wrong:password(mango)";
    document.getElementById("invalid").innerHTML="Incorrect email or phone";
   }
  } 
 