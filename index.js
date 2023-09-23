// Add your code here
function submitData(name, email) {
        return fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ name, email })
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          const userId = data.id;
            const userIdElement = document.createElement('p');
            userIdElement.textContent = `User ID: ${userId}`;
            document.body.appendChild(userIdElement);
  })
        
  .catch(function (error) {
    const errorMessageElement = document.createElement('p');
    errorMessageElement.textContent = `Error: ${error}`;
    document.body.appendChild(errorMessageElement);
    });
 }