window.addEventListener("load",()=>{
    var firstname=sessionStorage.getItem('fname')
    var lastname=sessionStorage.getItem('lname')
    var eamil=sessionStorage.getItem('mail')
    var firstname=firstname[0].toUpperCase() +firstname.substring(1);
    var lastname=lastname[0].toUpperCase()+lastname.substring(1);

    document.getElementById('headerName').innerHTML="Welcome " +firstname;
    document.getElementById('showfname').innerHTML=firstname;
    document.getElementById('showlname').innerHTML=lastname;
    document.getElementById('showemail').innerHTML=eamil;
});