// Add your code here
function submitData(name, email) {
    const data = {
        name: name,
        email: email
    };
    
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }    
    
    return fetch("http://localhost:3000/users", requestOptions)
    .then(function(response) {
        return response.json();  
    })
    .then(function(data){
        const newId = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = 'New ID: ' +newId;
        document.body.appendChild(idElement);
        return data;
    })
    .catch(function(error) {
        const errorElement = document.createElement('p');
        errorElement.textContent = 'Error: ' + error.message;
        document.body.appendChild(errorElement);
    });

}