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


/*
const btnB = document.getElementById("btnBusqueda");
const resultado = document.querySelector(".contenedorResultado"); // Usar querySelector para obtener un elemento
const inp = document.querySelector(".inputNombre"); // Usar querySelector para obtener un elemento
const api = "https://jsonplaceholder.typicode.com/users";

async function buscarUsuario(input) {
    try {
        const response = await fetch(api);
        const data = await response.json(); // Convertir la respuesta a JSON
        mostrar(data, input);
    } catch (error) {
        console.error("Error:", error);
    }
}

btnB.addEventListener('click', function(){
    const user = inp.value;
    buscarUsuario(user);
})

function mostrar(items, nombreUsuario) {
    resultado.innerHTML = "";
    const usuarioEncontrado = items.find(item => item.username === nombreUsuario);

    if (!usuarioEncontrado) {
        resultado.innerHTML = "No se encontró un usuario con ese nombre";
        return;
    }

    const newDiv = document.createElement("div");
    newDiv.className = "divResultado";

    const name = usuarioEncontrado.name;
    const username = usuarioEncontrado.username;
    const email = usuarioEncontrado.email;
    const address = usuarioEncontrado.address.street; // Modificar aquí para obtener la dirección correcta

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
            <p>${address}</p>
        </section> 
    `;

    resultado.appendChild(newDiv);
}

*/