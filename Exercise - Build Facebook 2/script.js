var database = [
  {
    username: "emrizki",
    password: "supersecret"
  },
  {
    username: "mamat",
    password: "password"
  },
  {
    username: "denny",
    password: "database"
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

function isValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if(database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if(isValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(usernamePrompt, passwordPrompt)