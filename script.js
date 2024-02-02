var email = document.getElementById('email');
var pwd = document.getElementById('pwd');

function change(){
      email.style.backgroundColor="yellow";
}

function hide(){
    email.style.backgroundColor="white";

}

pwd.addEventListener('keyup', function display(e){
    console.log(e.target.value);
})