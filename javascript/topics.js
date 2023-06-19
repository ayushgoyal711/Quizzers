// taking value of name with seccsion storage

window.addEventListener("load",()=>{
    var firstname=sessionStorage.getItem('fname')
    var firstname=firstname[0].toUpperCase() +firstname.substring(1);

        document.getElementById('headerName').innerHTML="Welcome " +firstname;
    });