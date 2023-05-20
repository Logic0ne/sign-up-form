document.getElementById('submit').disabled = true;
function checkpw(){
    console.log(document.getElementById('confirm-password').value)
    let pw = document.getElementById('password').value
    let pwc = document.getElementById('confirm-password').value
    if (pw===pwc){
        console.log("yes",document.getElementById('confirm-password').value)
        document.getElementById('submit').disabled = false;
        document.getElementById('confirm-password').removeAttribute('class','invalid');
        document.getElementById('confirm-password').setAttribute('class','valid');
        document.getElementById('password').removeAttribute('class','invalid');
        document.getElementById('password').setAttribute('class','valid');
    }
    else{
        console.log("no",document.getElementById('confirm-password').value)
        document.getElementById('submit').disabled = true;
        document.getElementById('confirm-password').removeAttribute('class','valid');
        document.getElementById('confirm-password').setAttribute('class','invalid');
        document.getElementById('password').removeAttribute('class','valid');
        document.getElementById('password').setAttribute('class','invalid');
    }
}
