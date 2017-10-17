const app = "I don't do much.";

const token = 'c481a65484839ae5de3cd2f974b1670de6fb2ec3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
