document.getElementById("submit").addEventListener("click", submit_form);
const user = "pontus";
let blogtitle = document.getElementById("myText").value;
let blogpost = document.getElementById("blogpost").value;

function submit_form(){
  console.log("working?")

  const myBody = {
    title:blogtitle,
    post:blogpost,
    username:user
  }

  console.log(myBody);

    fetch('http://localhost:3000/addpost', {
      method: 'POST',
      body: JSON.stringify(myBody), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
}


function getBlogPosts(){
  fetch('http://localhost:3000/getpost')
  .then(response => response.json())
  .then(gotJson => console.log(gotJson))
  .catch(error => console.error("Error:" + error));
}