var xhr = new XMLHttpRequest();

var userName = document.getElementById('username').value;
var password = document.getElementById('password').value;
var submit = document.getElementById('submit');
var login_info = {userName, password};

console.log("Read ajax file");
submit.addEventListener("click",submit_form);

function submit_form(e){
    e.preventDefault();

    let url = "http://localhost/sk_blog/api/user/login.php"
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(login_info)
    }

    fetch(url,options).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

console.log("lets hope this stays");