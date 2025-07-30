

const conteudoDiv = document.getElementById('conteudo');


fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const user = data.results[0];
        const userHTML = `
                            <div>
                                <img src="${user.picture.large}" alt="User Photo">
                                <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                                <p><strong>Email:</strong> ${user.email}</p>
                                <p><strong>Telefone:</strong> ${user.phone}</p>
                            </div>
                        `;
        conteudoDiv.innerHTML = userHTML;
    })
    .catch(error => 
    {
        conteudoDiv.innerHTML = `<p>Erro ao carregar dados: ${error.message}</p>`;
    }
);



