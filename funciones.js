function changeVisibility(id, display) {
    document.querySelector("#" + id).style.display = display
}

function validateUser(a, b) {
    myuser = null;
    if (a == "" || b == "") {
        document.querySelector("#alertaInicioUsuario").innerHTML = `*Complete los campos`
    } else {
        arrUser.forEach(function (value) {
            if (value.userNombre.toLowerCase() == a.toLowerCase() && value.password == b) {
                myuser = value;
            }
        })
        if (myuser) {
            //alert("bienvenido")
            return true
        } else {
            document.querySelector("#alertaInicioUsuario").innerHTML = `*La contraseña o el nombre de usuario es incorrecto`
        }
    }
}

function mostrar(a) {
    return document.querySelector("#" + a);
}

function validateLocal(a, b) {
    myuser = null;
    if (a == "" || b == "") {
        document.querySelector("#alertaInicioLocal").innerHTML = `*Complete los campos`
    } else {
        arrLocal.forEach(function (value) {
            if (value.nombre.toLowerCase() == a.toLowerCase() && value.password == b) {
                myuser = value;
            }
        })
        if (myuser) {
            //alert("bienvenido")
            return true
        } else {
            document.querySelector("#alertaInicioLocal").innerHTML = `*La contraseña o el nombre de usuario es incorrecto`
        }
    }
}

function searchForUsername(a) {
    validar = false;
    arrUser.forEach(function (user) {
        if (a == user.userNombre) {
            validar = true;
        }
    })
    return validar;
}

function validatePass(pass) {
    newPass = ""
    validar = false;
    for (let i = 0; i <= pass.length; i++) {
        if ((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) || (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57)) {
            newPass += pass.charAt(i);
        }
    }
    if (newPass == pass) {
        validar = true;
    }
    return validar;
}

function generateId(id) {
    let mayor = Number.MIN_VALUE
    arrUser.forEach(function (user) {
        if (mayor < user.id) {
            mayor = user.id
        }
    })
    return mayor + 1
}

function search(key, value, arr) {
    itemFound = null;
    arr.forEach(function (item) {
        if (local[key] == value) {
            itemFound = item;
        }
    })
}

function generateTable(array, id) {
    mostrar(id).innerHTML = "";
    array.reservas.forEach(function (reserva) {
        if (reserva.status == "pendiente") {
            mostrar(id).innerHTML += `
                <tr>
                    <td>
                        <img src=${reserva.Image}>
                    </td>
                    <td>
                        <p>${reserva.local}</p>
                    </td>
                    <td>
                        <p>${reserva.cupos}</p>
                    </td>
                    <td>
                        <p>${reserva.status}</p>
                    </td>
                    <td>
                        <input type="button" value="cancelar" data-id="${reserva.id}" class="btnCancel"/>
                    </td>
                </tr>`
        } else {
            mostrar(id).innerHTML += `
                <tr>
                    <td>
                        <img src=${reserva.Image}>
                    </td>
                    <td>
                        <p>${reserva.local}</p>
                    </td>
                    <td>
                        <p>${reserva.cupos}</p>
                    </td>
                    <td>
                        <p>${reserva.status}</p>
                    </td>
                    <td>
                        <ul id="rating"></ul>
                    </td>
                </tr>`
        }
    })
    drawStars(1);
    document.querySelectorAll(".btnCancel").forEach(function (btn) {
        btn.addEventListener("click", onCancel);
    })
}

function generateTableLocal(array, id) {
    mostrar(id).innerHTML = "";
    array.forEach(function (reserva) {
        if (reserva.status == "pendiente") {
            mostrar(id).innerHTML += `
            <tr>
                <td>
                    <p>${reserva.user}</p>
                </td>
                <td>
                    <p>${reserva.cupos}</p>
                </td>
                <td>
                    <p>${reserva.status}</p>
                </td>
                <td>
                    <input type="button" value="finalizar" data-id="${reserva.user}" class="btnFinalizar"/>
                </td>
            </tr>`}
    })
    document.querySelectorAll(".btnFinalizar").forEach(function (btn) {
        btn.addEventListener("click", onFinish);
    })
}

function searchRes(user) {
    let validar = false;
    user.reservas.forEach(function (reserva) {
        if (reserva.local == local.nombre && reserva.status == "pendiente") {
            validar = true;
        }
    })
    return validar;
}

function isSubString(str, subStr) {
    let i = 0;
    let j = 0;
    let matches = 0;
    let isSubString = false;

    while (!isSubString && i <= str.length - 1) {
        if (str.charAt(i) == subStr.charAt(j)) {
            j++;
            matches++;
        } else {
            j = 0;
            matches = 0;
        }
        if (matches == subStr.length) {
            isSubString = true;
        }
        console.log('iterando');
        i++;
    }
    return isSubString;
}

function drawStars(rating) {
    const ratingUl = document.querySelector("#rating");
    ratingUl.innerHTML = '';

    // Recorro hasta 5 porque si o si tengo que crear 5 estrellas
    for (let i = 1; i <= 5; i++) {
        let img = '';
        // Si la posición de iteración es menor o igual al raiting, el src de la imagen a mostrar
        // es el de la imagen pintada, en caso contrario, es el de la imagen solo con borde
        if (i <= rating) {
            img = './rar/rating/rating/img/star.webp';
        } else {
            img = './rar/rating/rating/img/star-empty.png';
        }
        ratingUl.innerHTML += `
      <li>
        <img src="${img}" class="star" data-index="${i}"/>
      </li>
      `;
    }
    // Asigno evento click a las estrellas
    document.querySelectorAll('.star').forEach(function (star) {
        star.addEventListener('click', onStarClick);
    });
}

/**
* Este método crea las 5 estrellas y "pintando" la cantidad de estrellas basadas en el raiting recibido
* @param {Number} rating
*/