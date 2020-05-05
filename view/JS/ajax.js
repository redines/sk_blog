console.log("lets hope this stays");

document.getElementById("submit").addEventListener("click", submit_form); 

function submit_form(){
  console.log("working?")

  const myBody = {
    title:"test",
    post:"testing",
    username:"yeahTwo"
  }

    fetch('http://localhost:3000/addpost', {
      method: 'POST',
      body: JSON.stringify(myBody), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });

}