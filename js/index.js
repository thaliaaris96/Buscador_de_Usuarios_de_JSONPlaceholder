// Obtener referencias a los elementos del DOM
const btnB = document.getElementById("btnBusqueda");
const resultado = document.querySelector(".contenedorResultado");
const inp = document.querySelector(".inputNombre");
const api = "https://jsonplaceholder.typicode.com/users";

// Función para buscar un usuario
async function buscarUsuario(userName) {
    try {
        // Realizar una solicitud a la API
        const response = await fetch(api);
        const data = await response.json();

        // Buscar al usuario por nombre
        const usuarioEncontrado = data.find(user => user.name === userName);

        if (usuarioEncontrado) {
            // Mostrar la información del usuario encontrado
            mostrar(usuarioEncontrado);
        } else {
             // Mostrar un mensaje si el usuario no fue encontrado
            resultado.innerHTML = "No se encontró un usuario con ese nombre";
        }
    } catch (error) {
        // Manejar errores en caso de problemas con la solicitud a la API
        console.error('Error al buscar usuario: ', error);
        resultado.innerHTML = "Ocurrió un error al buscar el usuario.";
    } finally {
        // Limpiar el campo de búsqueda después de realizar la búsqueda
        inp.value = '';
    }
}

// Evento click para el botón de búsqueda
btnB.addEventListener('click', function () {
    const user = inp.value.trim(); // Obtener el valor del campo de búsqueda
    if (user) {
        // Realizar la búsqueda si se proporciona un nombre de usuario
        buscarUsuario(user);
    } else {
        // Mostrar un mensaje si no se proporciona un nombre de usuario válido
        resultado.innerHTML = "Ingresa un nombre de usuario válido";
    }
});


// Función para mostrar la información del usuario
function mostrar(item) {
    // Limpiar el contenido existente en el contenedor de resultados
    resultado.innerHTML = "";

    // Crear un botón "MoreInfo"
    const btnInfoExtra = document.createElement('button');
    btnInfoExtra.textContent = 'MoreInfo';
    btnInfoExtra.classList.add("botonInfoExtra");
    btnInfoExtra.setAttribute("id", "btnInfoExtra");

    // Crear un nuevo div para mostrar la información del usuario
    const newDiv = document.createElement("div");
    newDiv.className = "divResultado";

    // Obtener propiedades del usuario
    const name = item.name;
    const username = item.username;
    const email = item.email;
    const address = item.address.street;
    const phone = item.phone;
    const website = item.website;

    // Agregar información al nuevo div
    newDiv.innerHTML = `
        <section id="contName">
        <p> <b> Nombre:</b> ${name}</p>
        </section>
        <section id="contUsername">
            <p> <b> Username:</b> ${username}</p>
        </section>
        <section id="contEmail">
            <p> <b> Email:</b> ${email}</p>
        </section>      
        <section id="contAddress">
            <p> <b> Direción:</b> ${address}</p>
        </section>
        <section id="contPhone">
             <p> <b> Teléfono:</b> ${phone}</p>
        </section>
        <section id="contWebsite">
            <p> <b> Sitio web:</b> ${website}</p>
        </section>
    `;

    // Clonar y agregar el botón "MoreInfo" al nuevo div
    newDiv.appendChild(btnInfoExtra.cloneNode(true));

    // Agregar el nuevo div al contenedor de resultados
    resultado.appendChild(newDiv);

    // Configurar un evento click para el botón "MoreInfo"
    const button = document.querySelector('.botonInfoExtra');
    button.addEventListener('click', function () {
        console.log('MoreInfo clicked for user:', item);
    });
    
}