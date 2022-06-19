window.addEventListener("load", onLoad)
function onLoad() {
    // aca oculto el form de ingreso de locales
    document.querySelector("#ingresoLocal").style.display = "none";
    // aca oculto la pagina de inicio (mientras aun no ingreso)
    document.querySelector("#inicio").style.display = "none";
    // aca oculto el form de registro
    document.querySelector("#register").style.display = "none";
    // aca oculto el ingreso de usuarios
    document.querySelector("#ingresoUsuario").style.display = "none";
    // creo boton con funcion para visualizar las reservas de usuario persona
    const buttonVisualize = document.querySelector("#visualizar");
    buttonVisualize.addEventListener("click", onClickVisualize);
    // creo boton con funcion para que el usuario comience a reservar
    const buttonReservas = document.querySelector("#comenzarReserva");
    buttonReservas.addEventListener("click", onClickReservas);
    // creo boton con funcion para que los locales puedan ingresar 
    const buttonLL = document.querySelector("#loginLocal");
    buttonLL.addEventListener("click", onClickLogLocal);
    // creo boton asociado a select, con funcion para seleccionar si eres usuario local o persona
    const button = document.querySelector("#tipo");
    button.addEventListener("click", onClickSelect);
    // creo boton con funcion para que los usuarios persona puedan ingresar
    const buttonL = document.querySelector("#login");
    buttonL.addEventListener("click", onClickLog);
    //Boton correspondiente al link/URL para registrarse
    const buttonR = document.querySelector("#registerLink");
    buttonR.addEventListener("click", onClickInicioReg);
    //Boton para registrar nuevo usuario
    const buttonRegistrar = document.querySelector("#confirmar");
    buttonRegistrar.addEventListener("click", registrarse)
    // creo boton con funcion para buscar informacion de locales para reservar
    document.querySelectorAll(".btnSearch").forEach(function (btn) {
        btn.addEventListener("click", onSearch)
    })
}
// aca se guardara el local al cual reserven
let local = {};
// aca se guardara el usuario una vez ingrese
let logedUser = {};

// funcion para buscar locales para reservar
function onSearch() {
    changeVisibility("datos", "block")
    const type = this.getAttribute("data-type")
    switch (type) {
        case "teatros":
            const teatroSelected = document.querySelector("#selectTeatros").value
            arrLocal.forEach(function (value) {
                if (value.nombre == teatroSelected) {
                    mostrar("datos").innerHTML = `
                    <div class="showContenido">
                        <h2>${teatroSelected}</h2>
                        <img id="imagen" src="${value.Image}">
                        <p>Donec dapibus arcu a diam commodo, vel vehicula orci volutpat. Vestibulum convallis tempor
                            mattis.
                            Donec molestie semper leo vel luctus. Curabitur quis nisi maximus, luctus lorem quis,
                            dignissim
                            augue.</p>
                        <label>Cantidad de cupos<label/>
                        <input type="number" id="cant"/>
                        <input type="button" value="reservar" class="reservation">
                        <p class="alertReservas"><p/>
                    </div>
                        <hr>`
                    local = value;
                }
            })
            break;
        case "museos":
            const museoSelected = document.querySelector("#selectMuseos").value
            arrLocal.forEach(function (value) {
                if (value.nombre == museoSelected) {
                    mostrar("datos").innerHTML = `
                    <div class="showContenido">
                        <h2>${museoSelected}</h2>
                        <img id="imagen" src="${value.Image}">
                        <p>Donec dapibus arcu a diam commodo, vel vehicula orci volutpat. Vestibulum convallis tempor
                            mattis.
                            Donec molestie semper leo vel luctus. Curabitur quis nisi maximus, luctus lorem quis,
                            dignissim
                            augue.</p>
                        <label>Cantidad de cupos<label/>
                        <input type="number" id="cant"/>
                        <input type="button" value="reservar" class="reservation">
                        <p class="alertReservas"><p/>
                    </div>
                        <hr>`
                    local = value;
                }
            })

            break;
        case "restaurantes":
            const restauranteSelected = document.querySelector("#selectRestaurantes").value
            arrLocal.forEach(function (value) {
                if (value.nombre == restauranteSelected) {
                    mostrar("datos").innerHTML = `
                    <div class="showContenido">
                        <h2>${restauranteSelected}</h2>
                        <img id="imagen" src="${value.Image}">
                        <p>Donec dapibus arcu a diam commodo, vel vehicula orci volutpat. Vestibulum convallis tempor
                            mattis.
                            Donec molestie semper leo vel luctus. Curabitur quis nisi maximus, luctus lorem quis,
                            dignissim
                            augue.</p>
                        <label>Cantidad de cupos<label/>
                        <input type="number" id="cant"/>
                        <input type="button" value="reservar" class="reservation">
                        <p class="alertReservas"><p/>
                    </div>
                        <hr>`
                    local = value;
                }
            })
            break;
    }
    // creo boton con funcion para confirmar la reserva
    document.querySelectorAll(".reservation").forEach(function (btn) {
        btn.addEventListener("click", reserva);
    })
}

// funcion click correspondiente al select con caracteristica de boton
function onClickSelect() {
    let tipo = document.querySelector("#tipo").value;
    switch (tipo) {
        case "L":
            // si elige la opcion Local muestro el form de ingreso y oculto el link de registro y el select 
            changeVisibility("ingresoLocal", "block");
            changeVisibility("tipo", "none");
            break
        case "U":
            // si elige la opcion Usuario muestro el form de ingreso y oculto el select
            changeVisibility("ingresoUsuario", "block");
            changeVisibility("tipo", "none");
            break
    }
}

// funcion para ingresar con local
function onClickLogLocal(e) {
    e.preventDefault();
    let usuario = document.querySelector("#nameLocal").value;
    let password = document.querySelector("#passLocal").value;
    if (validateLocal(usuario, password) == true) {
        changeVisibility("ingresoLocal", "none");
        changeVisibility("inicio", "block");
        changeVisibility("greetings", "none");
        changeVisibility("bloque", "none");
        changeVisibility("contenido", "none");
        document.querySelector("#greetings2").innerHTML = `Bienvenido`
        changeVisibility("grafica1", "block");

    }
}

// funcion para ingresar con usuario
function onClickLog(e) {
    e.preventDefault();
    let usuario = document.querySelector("#nameUsuario").value;
    let password = document.querySelector("#passUsuario").value;
    if (validateUser(usuario, password) == true) {
        changeVisibility("ingresoUsuario", "none");
        changeVisibility("inicio", "block");
        changeVisibility("greetings", "none");
        changeVisibility("bloque", "none");
        changeVisibility("contenido", "none");
        arrUser.forEach(function (user) {
            if (usuario == user.userNombre) {
                logedUser = user;
            }
        })
        document.querySelector("#greetings2").innerHTML = `Bienvenido ${usuario.toUpperCase()}`
        console.log(logedUser);
        changeVisibility("grafica1", "none");
    }
}

// funcion para iniciar registro
function onClickInicioReg(e) {
    e.preventDefault()
    changeVisibility("register", "block");
    changeVisibility("ingresoUsuario", "none");
}

//accion que se llevara a cabo cuando confirme el registro
function registrarse(e) {
    e.preventDefault();
    let newUserName = document.querySelector("#nombre").value;
    let newUserUname = document.querySelector("#userNombre").value;
    let newUserPassword = document.querySelector("#password").value;
    let newUserVerPassword = document.querySelector("#verPassword").value;
    let newUserId = generateId();
    if (newUserName == "" || newUserUname == "" || newUserPassword == "" || newUserVerPassword == "") {
        document.querySelector("#alertaReg").innerHTML = `*Complete los campos`;
    } else if (validatePass(newUserPassword) == false || newUserPassword.length < 6) {
        document.querySelector("#alertaReg").innerHTML = `*Las contraseñas debe ser alfanumerica con al menos una mayuscula y minimo 6 caracteres y no puede contener espacios, simbolos o tildes`;
    } else if (newUserPassword != newUserVerPassword) {
        document.querySelector("#alertaReg").innerHTML = `*Las contraseñas no coinciden`;
    } else if (searchForUsername(newUserUname) == true) {
        document.querySelector("#alertaReg").innerHTML = `*Nombre de usuario no disponible`;
    } else {
        const newUser = new User(newUserId, newUserName, newUserUname, newUserPassword, "persona");
        arrUser.push(newUser);
        changeVisibility("ingresoUsuario", "none");
        changeVisibility("inicio", "block");
        changeVisibility("greetings", "none");
        changeVisibility("bloque", "none");
        changeVisibility("contenido", "none");
        document.querySelector("#greetings2").innerHTML = `Bienvenido ${newUserName}`
    }
}

// funcion para mostrar opciones de reservas
function onClickReservas() {
    changeVisibility("visualRes", "none");
    changeVisibility("tablaReservar", "block");
    changeVisibility("contenido", "block");
    changeVisibility("entrada", "none");
}

// funcion para reservar
function reserva() {
    let cant = document.querySelector("#cant").value
    let res = new Reserva(logedUser.id, logedUser.userNombre, local.nombre, cant, "pendiente", null, local.Image)
    arrLocal.forEach(function (value) {
        if (value.nombre == local.nombre) {
            if (value.cupos >= cant && cant > 0) {
                logedUser.reservas.push(res);
                value.reservas.push(res);
                document.querySelector(".alertReservas").innerHTML = `Su reserva se a realizado con exito`
            } else if (value.cupos < cant) {
                document.querySelector(".alertReservas").innerHTML = `*Su reserva excede la cantidad de cupos restantes`;
            } else {
                document.querySelector(".alertReservas").innerHTML = `*Ingrese cupos deseados`;
            }
        }
    })
}

// funcion para visualizar las reservas del usuario
function onClickVisualize() {
    document.querySelector("#datos").style.display = "none";
    changeVisibility("visualRes", "block");
    changeVisibility("saludos", "none");
    changeVisibility("contenido", "block");
    changeVisibility("tablaReservar", "none");
    changeVisibility("entrada", "none");
    arrUser.forEach(function (user) {
        if (user.nombre == logedUser.nombre) {
            generateTable(user, "visualRes");
            drawStars(1);
        }
    })
}


function onStarClick() {
    const rating = Number(this.getAttribute('data-index'));
    drawStars(rating);
    arrLocal.forEach(function(value) {

    })
}


/*function drawStar(rating) {
    const ratingUl = document.querySelector("#rating");
    ratingUl.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        let img = "";
        if (i < rating) {
            img = `img/rating star.png`
        } else {
            img = `img/Plain_Yellow_Star.png`
        }
        /* ratingUl.innerHTML += `
        <lil>
            <img src="${img}" height`
    }
} */


