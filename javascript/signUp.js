//  document.getElementById("form1").addEventListener('submit', function(event){event.preventDefault();});
function getValue() {
     const firstName=document.getElementById("fname").value;

     const lastName =document.getElementById("lname").value;

     const Email =document.getElementById("email").value;
     
    sessionStorage.setItem("fname", firstName);
    sessionStorage.setItem("lname", lastName);
    sessionStorage.setItem("mail", Email);

     ;}

    function check(){
     const a1=document.getElementById("password").value;
     const a2= document.getElementById("repassword").value;
     if(a1!=a2){
        document.getElementById("p1").style.display="block";
          document.getElementById("p1").innerHTML="Password not matched";
          document.getElementById("p1").style.color="red";
     }
     else{
        document.getElementById("p1").style.display="none";
        return true;
     }
     
   }

   function warn2(){
            var em=document.getElementById("email").value;
            var pe=/^[A-Za-z_0-9_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
            var res3=pe.test(em);
            if(!res3){
                document.getElementById("e1").style.display="block";
                document.getElementById("e1").innerHTML="Incorrect";
                 document.getElementById("e1").style.color="red";
            }
            else{
                document.getElementById("e1").style.display="none";
                return true;
            }
        }

        function warn3(){
            var pass=document.getElementById("password").value;
            var pp=/(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#\@$%&\*?]).{8,}/
            var res4=pp.test(pass);
            
            if(res4){
                document.getElementById("p2").style.display="none";
                 return true;
            }
            else{
                document.getElementById("p2").style.display="block";
                document.getElementById("p2").innerHTML="Password must contain atleast 1 uppercase, lowercase, digit and a special character and minimum of 8 characters";
                 document.getElementById("p2").style.color="red";
        }
    }

    function valid(){
        if(check() && warn2() && warn3()){
        window.open('../htmlpages/welcomePage.html');
    }
    }