var xhr = new XMLHttpRequest();

var userName = document.getElementById('username');
var password = document.getElementById('password');
var submit = document.getElementById('submit');
var login_info = {username, password};

console.log("Read ajax file");
submit.addEventListener("click",submit_form);

function submit_form(){
    console.log("in function");
    let url = "api/user/login.php"
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(login_info)
    }

    fetch(url,options);
}

    /*
    console.log(url);
    let input_name = userName.value;
    let input_pwd = password.value;

    xhr.open('POST',url,true);

    let formdata = new FormData();
    formdata.append('username',input_name);
    formdata.append('password',input_pwd);

    xhr.onload = function() {
        if(xhr.status == 200) {
            console.log(xhr.responseText);
        }else if(xhr.status == 400){
            console.log("Incorrect info: user do not exist or wrong password");
        }
    }

    xhr.send(formdata);*/