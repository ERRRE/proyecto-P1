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
    document.querySelector("#searchResLocal").addEventListener("keyup", onSearchKeyup);
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
    const buttonDatos = document.querySelector("#mostrarDatos");
    buttonDatos.addEventListener("click", visDatos)
    const buttonRes = document.querySelector("#misReservas");
    buttonRes.addEventListener("click", visMisRes)
    const buttonDisable = document.querySelector("#disable");
    buttonDisable.addEventListener("click", onDisable);
    const buttonStadistics = document.querySelector("#stats");
    buttonStadistics.addEventListener("click", onStats);
    const buttonStadisticsLocal = document.querySelector("#statsLocal");
    buttonStadisticsLocal.addEventListener("click", onStatsLocal);

    document.querySelectorAll(".cerrar").forEach(function (btnClose) {
        btnClose.addEventListener("click", onClickCerrar);
    })

    // creo boton con funcion para buscar informacion de locales para reservar
    document.querySelectorAll(".btnSearch").forEach(function (btn) {
        btn.addEventListener("click", onSearch)
    })
}
// aca se guardara el local al cual reserven
let local = {};
// aca se guardara el usuario una vez ingrese
let logedUser = {};



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
        changeVisibility("contenedor", "none")
        changeVisibility("greetings", "none");
        changeVisibility("bloque", "none");
        changeVisibility("contenido", "none");
        changeVisibility("contenidoLocal", "none");
        changeVisibility("tablaLocal", "none");
        changeVisibility("visResLocal", "none");
        changeVisibility("contenedorLocal", "block");
        changeVisibility("entradaLocal", "block");
        changeVisibility("grafica2", "none");
        changeVisibility("estadisticaLocal", "none");
        arrLocal.forEach(function (user) {
            if (user.nombre == usuario) {
                local = user;
            }
        })
        console.log(local)
        document.querySelector("#greetings2Local").innerHTML = `Bienvenido`
    }
}

// funcion para ingresar con usuario
function onClickLog(e) {
    e.preventDefault();
    let usuario = document.querySelector("#nameUsuario").value;
    let password = document.querySelector("#passUsuario").value;
    if (validateUser(usuario, password) == true) {
        //changeVisibility("contenedor", "block");
        changeVisibility("ingresoUsuario", "none");
        changeVisibility("inicio", "block");
        changeVisibility("greetings", "none");
        changeVisibility("bloque", "none");
        changeVisibility("contenido", "none");
        changeVisibility("contenedorLocal", "none");
        changeVisibility("contenedor", "block");
        changeVisibility("grafica2", "none");
        arrUser.forEach(function (user) {
            if (usuario == user.userNombre) {
                logedUser = user;
            }
        })
        document.querySelector("#greetings2").innerHTML = `Bienvenido ${usuario.toUpperCase()}`
        console.log(logedUser);
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
        const newUser = new User(newUserId, newUserName, newUserUname, newUserPassword, "persona", []);
        logedUser = newUser;
        arrUser.push(newUser);
        changeVisibility("ingresoUsuario", "none");
        changeVisibility("inicio", "block");
        changeVisibility("greetings", "none");
        changeVisibility("bloque", "none");
        changeVisibility("contenido", "none");
        changeVisibility("contenedorLocal", "none")
        document.querySelector("#greetings2").innerHTML = `Bienvenido ${newUserName}`
    }
}

// funcion para mostrar opciones de reservas
function onClickReservas() {
    changeVisibility("visualRes", "none");
    changeVisibility("tablaReservar", "table");
    changeVisibility("contenido", "block");
    changeVisibility("entrada", "none");
    changeVisibility("saludos", "block");
    changeVisibility("estadistica", "none")
    document.querySelector(".showContenido").innerHTML = ``;
    document.querySelector("#selectTeatros").value = ``;
    document.querySelector("#selectMuseos").value = ``;
    document.querySelector("#selectRestaurantes").value = ``;
}

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
                        <p>El ${value.type} ${value.nombre} esta ubicado en ${value.address}</p>
                        <label class="pedido">Cantidad de cupos<label/>
                        <input type="number" id="cant"/>
                        <br/>
                        <p class="cuposMax">${value.cupos}</p>
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
                        <p>El ${value.type} ${value.nombre} esta ubicado en ${value.address}</p>
                        <label class="pedido">Cantidad de cupos<label/>
                        <input type="number" id="cant"/>
                        <br/>
                        <p class="cuposMax">${value.cupos}</p>
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
                        <p>El ${value.type} ${value.nombre} esta ubicado en ${value.address}</p>
                        <label class="pedido">Cantidad de cupos<label/>
                        <input type="number" id="cant"/>
                        <br/>
                        <p class="cuposMax">${value.cupos}</p>
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

// funcion para reservar
function reserva() {
    let encontrado = searchRes(logedUser);
    let cant = document.querySelector("#cant").value
    let res = new Reserva(local.id, logedUser.userNombre, local.nombre, Number(cant), "pendiente", 0, local.Image)
    if (encontrado == false) {
        arrLocal.forEach(function (value) {
            if (value.status == "habilitado") {
                if (value.nombre == local.nombre) {
                    if (value.cupos >= cant && cant > 0) {
                        logedUser.reservas.push(res);
                        value.reservas.push(res);
                        value.cupos = value.cupos - Number(cant);
                        local.cupos = value.cupos
                        document.querySelector(".alertReservas").innerHTML = `Su reserva se a realizado con exito`
                        if (value.cupos == 0) {
                            value.status = "deshabilitado";
                        }
                    } else if (value.cupos < cant) {
                        document.querySelector(".alertReservas").innerHTML = `*Su reserva excede la cantidad de cupos restantes`;
                    } else {
                        document.querySelector(".alertReservas").innerHTML = `*Ingrese cupos deseados`;
                    }
                }
            } else {
                document.querySelector(".reservation").setAttribute("disabled", "disabled");
                document.querySelector(".alertReservas").innerHTML = `*El local ha deshabilitado las reservas temporalmente`
            }
        })
        console.log(logedUser.reservas)
    } else {
        document.querySelector(".alertReservas").innerHTML = `Usted ya tiene una reserva pendiente en este local`
    }
    document.querySelector(".cuposMax").innerHTML = `${local.cupos}`
}

// funcion para visualizar las reservas del usuario
function onClickVisualize() {
    changeVisibility("datos", "none");
    changeVisibility("visualRes", "block");
    changeVisibility("saludos", "none");
    changeVisibility("contenido", "block");
    changeVisibility("tablaReservar", "none");
    changeVisibility("entrada", "none");
    changeVisibility("estadistica", "none")
    generateTable(logedUser, "reservas");
}

function onStarClick(e) {
    console.log("entro");
    let idOfStar = e.target.parentNode.parentNode.id
    const rating = Number(this.getAttribute("data-index"));
    drawStars(rating, idOfStar);
    logedUser.reservas.forEach(function (reserva) {
        if (reserva.status == "finalizada") {
            arrLocal.forEach(function (value) {
                value.reservas.forEach(function (reservaLocal) {
                    if (reservaLocal.id == reserva.id && (reservaLocal.status == "finalizada" && reserva.status == "finalizada")) {
                        reservaLocal.calificacion = rating;
                        reserva.calificacion = rating;
                        console.log(reservaLocal.calificacion);
                    }
                })
            })
        }
    })
}

function onCancel() {
    const reservaId = this.getAttribute("data-id");
    let newReservasUsuario = [];
    let newReservasLocal = [];
    let oldReserva = {};
    let cantCupos = 0;
    logedUser.reservas.forEach(function (reserva) {
        if (reserva.id != reservaId || reserva.status == "finalizada") {
            newReservasUsuario.push(reserva);
        } else {
            cantCupos += reserva.cupos;
            oldReserva = reserva;
        }
    })
    arrLocal.forEach(function (value) {
        value.reservas.forEach(function (reserva) {
            if (oldReserva != reserva) {
                newReservasLocal.push(reserva);
                reserva = newReservasLocal;
            }
        })
    })
    arrLocal.forEach(function (value) {
        if (value.id == reservaId) {
            value.cupos = value.cupos + cantCupos;
            console.log(value);
        }
    })
    logedUser.reservas = newReservasUsuario
    mostrar("reservas").innerHTML = ``;
    generateTable(logedUser, "reservas");
}

function visDatos() {
    changeVisibility("contenidoLocal", "block");
    changeVisibility("entradaLocal", "none");
    changeVisibility("visResLocal", "none");
    changeVisibility("tablaLocal", "block");
    changeVisibility("grafica2", "block");
    changeVisibility("estadisticaLocal", "none");
    mostrar("tablaDeDatos").innerHTML = `<tr>
    <td>
        <input type="text" id="address" placeholder="${local.address}"/>
    </td>
    <td>
        <input type="number" id="cuposMaximo" placeholder="${local.cupos}"/>
    </td>
    <td>
        <input type="text" id="nuevaImagen" placeholder="${local.Image}"/>
    </td>
    <td>
        <input type="text" id="nuevoDueño" placeholder="${local.owner}"/>
    </td>
    <td>
        <input type="button" value="guardar" data-id="${local.id}" class="btnSave" />
    </td>
    </tr>`
    document.querySelectorAll(".btnSave").forEach(function (btn) {
        btn.addEventListener("click", onSave)
    })
    if (local.status == "deshabilitado") {
        document.querySelector("#disable").value = "HABILITAR"
    } else {
        document.querySelector("#disable").value = "DESHABILITAR"
    }
    let cal = 0;
    let encontradas = 0;
    local.reservas.forEach(function(value){
        if (value.status == "finalizada") {
            cal += value.calificacion;
            encontradas++
        }
    })
    cal = cal / encontradas;
    if (cal > 0) {
        local.calificacion = cal;
    }
    console.log(local.calificacion);
    document.querySelector("#calificacionLocal").innerHTML = `La calificacion de su local es de`
    drawStars(local.calificacion, "ratingLocal");
    mostrar("myfirstchart2").innerHTML = ``;
    generarGraficoOcupacion(local)
}

function onSave() {
    //const saveId = this.getAttribute("data-id");
    let encontradas = 0;
    const newAddress = document.querySelector("#address").value;
    const newCupos = document.querySelector("#cuposMaximo").value;
    const newImage = document.querySelector("#nuevaImagen").value;
    const newOwner = document.querySelector("#nuevoDueño").value;
    if (local.reservas.length > 0) {
        local.reservas.forEach(function (reserva) {
            if (reserva.status == "finalizada") {
                encontradas++;
            }
        })
    }
    if (encontradas == local.reservas.length) {
        arrLocal.forEach(function (valores) {
            if (valores.id == local.id) {
                valores.address = newAddress;
                valores.cupos = newCupos;
                valores.Image = newImage;
                valores.owner = newOwner;
                console.log(valores);
            }
        })
    }
}

function visMisRes() {
    changeVisibility("contenidoLocal", "none");
    changeVisibility("entradaLocal", "none");
    changeVisibility("tablaLocal", "none");
    changeVisibility("visResLocal", "block");
    changeVisibility("grafica2", "none");
    changeVisibility("estadisticaLocal", "none");
    generateTableLocal(local.reservas, "reservasLocal");
}

function onFinish() {
    const reservaId = this.getAttribute("data-id");
    local.reservas.forEach(function (reserva) {
        if (reserva.user == reservaId) {
            reserva.status = "finalizada"
        }
    })
    arrUser.forEach(function (user) {
        user.reservas.forEach(function (reserva) {
            if (reserva.user == reservaId && reserva.id == local.id) {
                reserva.status = "finalizada";
            }
        })
    })
    mostrar("reservasLocal").innerHTML = ``;
    generateTableLocal(local.reservas, "reservasLocal");
}

function onSearchKeyup() {
    const searchedUser = document.querySelector("#searchResLocal").value;
    let esSub = false;
    const newRes = [];
    local.reservas.forEach(function (reserva) {
        let myUser = reserva.user.toLowerCase();
        if (searchedUser != "") {
            esSub = isSubString(myUser, searchedUser);
        } else {
            generateTableLocal(local.reservas, "reservasLocal");
        }
        if (esSub == true) {
            newRes.push(reserva)
        }
    })
    if (newRes.length == 0 && searchedUser != "") {
        mostrar("alertSearch").innerHTML = `*No se encontraron reservas a ese nombre`
    } else if (newRes.length == 0 && searchedUser == "") {
        mostrar("alertSearch").innerHTML = ``;
        generateTableLocal(local.reservas, "reservasLocal");
    } else if (newRes.length > 0) {
        generateTableLocal(newRes, "reservasLocal");
    }
}

//funcion cerrar seccion
function onClickCerrar(e) {
    e.preventDefault()
    document.querySelector("#tipo").value = "D";
    changeVisibility("inicio", "none");
    changeVisibility("bloque", "block");
    changeVisibility("greetings", "block");
    //changeVisibility("cabezal", "block");
    changeVisibility("entrada", "block");
    changeVisibility("tipo", "inline");
    //changeVisibility("contenedor", "none");
    //changeVisibility("grafica1", "none");
    changeVisibility("ingresoUsuario", "none");
    changeVisibility("ingresoLocal", "none");
    changeVisibility("register", "none");
}

function onDisable() {
    console.log("entro");
    let encontradas = 0;
    arrLocal.forEach(function (value) {
        if (value.id == local.id) {
            if (value.reservas.length > 0) {
                value.reservas.forEach(function (reserva) {
                    if (reserva.status == "finalizada") {
                        encontradas++;
                    }
                })
            }
            if (value.status == "habilitado") {
                if (encontradas == value.reservas.length) {
                    value.status = "deshabilitado";
                    local.status = value.status;
                    document.querySelector("#disable").value = "HABILITAR"
                    mostrar("alertDatosLocal").innerHTML = `Sus reservas han sido deshabilitadas con exito`
                } else {
                    mostrar("alertDatosLocal").innerHTML = `*Aun tiene reservas pendientes`
                }
            } else {
                if (encontradas == value.reservas.length) {
                    value.status = "habilitado";
                    local.status = value.status;
                    document.querySelector("#disable").value = "DESHABILITAR"
                    mostrar("alertDatosLocal").innerHTML = `Sus reservas han sido habilitadas con exito`
                } else {
                    mostrar("alertDatosLocal").innerHTML = `*Aun tiene reservas pendientes`
                }
            }
        }
    })
}

function onStats() {
    console.log("entre")
    changeVisibility("datos", "none");
    changeVisibility("visualRes", "none");
    changeVisibility("saludos", "none");
    changeVisibility("contenido", "block");
    changeVisibility("tablaReservar", "none");
    changeVisibility("entrada", "none");
    changeVisibility("estadistica", "block ")
    changeVisibility("tablaEstadistica", "block");
    let maximo = Number.MIN_VALUE;
    let cant = 0;
    let newArr = logedUser.reservas;
    let masReservas = null;
    logedUser.reservas.forEach(function (reserva) {
        cant = 0;
        newArr.forEach(function (newRes) {
            if (newRes.local == reserva.local && (newRes.status != "pendiente" || reserva.status != "pendiente")) {
                cant++
                if (maximo < cant) {
                    maximo = cant;
                    masReservas = newRes.local;
                }
            }
        })
    })
    console.log(masReservas)
    mostrar("miFavorito").innerHTML = `Tu local favorito es ${masReservas}`
    generateTableEstadisticasUsuario(logedUser, "tablaEstadisticaUsuario")
}

function onStatsLocal() {
    changeVisibility("contenidoLocal", "none");
    changeVisibility("entradaLocal", "none");
    changeVisibility("tablaLocal", "none");
    changeVisibility("visResLocal", "none");
    changeVisibility("grafica2", "none");
    changeVisibility("estadisticaLocal", "block");
    generateTableEstadisticas(arrLocal, "tablaEstadistica");
}




