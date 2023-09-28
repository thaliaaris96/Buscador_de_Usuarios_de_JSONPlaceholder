const btnB = document.getElementById("btnBusqueda");
const resultado = document.getElementsByClassName("contenedorResultado");
const inp = document.getElementsByClassName("inputNombre"); 
const api = "https://jsonplaceholder.typicode.com/users";
const user = inp.value;

async function buscarUsuario(user) {
    fetch(api)
    .then((response) => response.json())
    .then((data) => mostrar(data.name)) 
    .catch((error) => {
        console.error('Error al buscar imágenes: ', error);
        resultado.innerHTML = "Ocurrió un error al buscar las imágenes.";
    });
}

btnB.addEventListener('click', function(){
    buscarUsuario(user);
})

function mostrar(items){
    resultado.innerHTML = "";
    if (items === '')
    {
        resultado.innerHTML = "No se encontró un usuario con ese nombre";
    }
    /* */
    let btnInfoExtra = document.createElement('button');
    btnInfoExtra.textContent = 'MoreInfo';
    btnInfoExtra.classList.add("botonInfoExtra");
    btnInfoExtra.setAttribute("id", "btnInfoExtra");
    /* */

        const newDiv = document.createElement("div");
        newDiv.className = "divResultado";

        const name = items;
        const username = items.username;
        const email = items.email; 
        const adress = items.address;
        
        newDiv.innerHTML = `
        <section id="contName">
            <p>${name}</p>
        </section>
        <section id="contUsername">
            <p>${username}</p>
        </section>
        <section id="contEmail">
            <p>${email}</p>
        </section>      
        <section id="contAddress">
            <p>${adress}</p>
        </section> 
    `;
    newDiv.appendChild(btnInfoExtra);

    btnInfoExtra.addEventListener('click', function(){
        
    })

    resultado.appendChild(newDiv);
    };