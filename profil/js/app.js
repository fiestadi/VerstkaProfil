let serverURL = 'http://65.109.13.139:9191/';
let token = " ";
token = localStorage.getItem("jwt");
fetch('http://65.109.13.139:9191/me', {
   headers: {
      'x-access-token': token
   }
})
   .then((res) => {
      return res.json();
   })
   .then((data) => console.log(data));