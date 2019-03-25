function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  

  let content = ['Welcome, Lets Bank', 'Bank Anywhere', 'Make Every Moment Count'];
  let update = document.getElementById('words');
  let add = document.getElementById('advert');
  
  
  setInterval(()=>{
   let random = Math.floor(Math.random()*content.length);
   update.innerHTML = content[random];
  },3000);


//   Managing your account is easy. You get more than you expect from a bank with excellent services designed just for you.

// , we bring you ease of financial transactions.



// You're going to love banking with us. We created accounts tailored to suit your individual needs as a valued custome