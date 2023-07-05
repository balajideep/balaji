      function validate(){
        // name
        var x=document.getElementById("name").value;
        var proof;
        if(x==""){
          
            proof="not valid"
        
          }
          else{
            proof=""
          }
        document.getElementById("p1").innerHTML=proof;
           
        // date of birth
        var date=document.getElementById("date1").value
        if(date==""){
          document.getElementById("p8").innerHTML="please select the date "
        }

        
        // mobile number
       var app=document.getElementById("mobile number").value
      if(app.length==10){
      document.getElementById("p2").innerHTML=""
      }
      else{
        document.getElementById("p2").innerHTML ="error"
      }


      // mail id
      var next=document.getElementById("mail id").value
       var reg1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!reg1.test(next)){
        document.getElementById("p3").innerHTML="please enter mail id"
      }
      else{
        document.getElementById("p3").innerHTML=""
      }


      // regular expression for password
      var ready=document.getElementById("password").value
      reg=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
       if(!reg.test(ready)){
            document.getElementById("p4").innerHTML="please enter password"
      }else{
            document.getElementById("p4").innerHTML=""
      }
      

      // confirm password
      var ready1=document.getElementById("password").value
      var ready2=document.getElementById("confirm password").value
      if(ready1!==ready2){
        document.getElementById("p5").innerHTML="password does not matched";
      }
      else if(ready2===""){
        document.getElementById("p5").innerHTML="not valid";
      }
      else{
        document.getElementById("p5").innerHTML="";
      }
    
      //  used to radio box
var radiobox1=document.getElementById("male")
var radiobox2=document.getElementById("female")
if(!radiobox1.checked & !radiobox2.checked){
 document.getElementById("p7").innerHTML="enter your gender"
}
else{
  
}

// used to check box
var checkbox1=document.getElementById("tamil")
var checkbox2=document.getElementById("english")
var checkbox3=document.getElementById("hindi")
var checkbox4=document.getElementById("malayalam")
if(!checkbox1.checked &!checkbox2.checked &!checkbox3.checked &!checkbox4.checked){
  document.getElementById("p6").innerHTML="please select"
}
else{
   document.getElementById("p6").innerHTML=" "
}
  }
     
      
    
   
    