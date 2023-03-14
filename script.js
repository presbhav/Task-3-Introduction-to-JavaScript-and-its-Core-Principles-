function login(){
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    if(uname=="bhav" && pass=="bhav")
    {
        location.assign("C:/Users/jhabh/OneDrive/Desktop/content.html");
    }
    else
    {
        window.alert("Login Failed");
    }
}
