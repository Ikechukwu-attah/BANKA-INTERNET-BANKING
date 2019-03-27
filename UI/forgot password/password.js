function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


 let check =()=>{
  
    alert('Email successfully sent, check your mail to reset your password')
    setTimeout(()=>{
      document.getElementById('show').value='';
    },1000)
    
 
 }
 
