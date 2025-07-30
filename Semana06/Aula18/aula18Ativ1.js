
// Exemplo GET
function teste() 
{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
}

teste();
