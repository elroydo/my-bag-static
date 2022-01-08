function checkData(){
    if (document.signup.NAME.value == "" || document.signup.EMAIL.value == "" || document.signup.MESSAGE.value == ""){
        alert("Please fill in the name, email, and/or message text fields");
        return false;
    }else{
        alert("Thank you, we will get back to you soon");
        doument.signup.Nam.focus()
        return true;
    }
}