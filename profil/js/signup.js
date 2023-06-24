function singUp(e) {
   e.preventDefault();
   console.log('All work');
   let data = {
      "username": document.getElementById('name').value,
      "password": document.getElementById('psw').value,
      "confirm_password": document.getElementById('psw-repeat').value

   };
   console.log('Data :', data);

   fetch(serverURL + 'signup', {
      "headers": {
         "content-type": "application/json",
      },
      "body": JSON.stringify(data),
      "method": "POST",
   })
      .then(response => {
         return response.json();
      })

      .then((data) => {
         localStorage.setItem('id', data.id)
         localStorage.setItem('jwt', data.jwt);
         console.log(data);

      });
}