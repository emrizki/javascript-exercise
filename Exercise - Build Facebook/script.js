var database = [
  {
    username: "emrizki",
    password: "supersecret"
  }
]

var newsFeed = [
  {
    username: "khtnisa",
    timeline: "good morningggggg"
  },
  {
    username: "atikah",
    timeline: "good morning tooooo"
  }
]

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
  if(username === database[0].username && password === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(usernamePrompt, passwordPrompt)