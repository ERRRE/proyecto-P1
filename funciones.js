function changeVisibility(id, display) {
    document.querySelector("#" + id).style.display = display
}

function validateUser(a, b) {
    myuser = null;
    if (a == "" || b == "") {
        document.querySelector("#alertaInicioUsuario").innerHTML = `*Complete los campos`
    } else {
        arrUser.forEach(function(value){
            if(value.userNombre.toLowerCase() == a.toLowerCase() && value.password == b) {
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

function mostrar(a){
    return document.querySelector("#" + a);
}

function validateLocal(a, b) {
    myuser = null;
    if (a == "" || b == "") {
        document.querySelector("#alertaInicioLocal").innerHTML = `*Complete los campos`
    } else {
        arrLocal.forEach(function(value){
            if(value.nombre.toLowerCase() == a.toLowerCase() && value.password == b) {
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
    arrUser.forEach(function(user){
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
    arr.forEach(function(item){
        if (local[key] == value) {
            itemFound = item;
        }
    })
}

function generateTable(array,id){
    array.reservas.forEach(function (reserva) {
        if (reserva.status == "pendiente") {
            mostrar(id).innerHTML += `
            <table class="visual">
                <thead>
                    <tr>
                        <th></th>
                        <th>Local</th>
                        <th>Cupos</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
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
                            <input type="button" value="cancelar" data-type="" class="btnCancel"/>
                        </td>
                    </tr>
                </tbody>
            <table/>
            <br/>`
        } else {
            mostrar(id).innerHTML += `
            <table class="visual">
                <thead>
                    <tr>
                        <th></th>
                        <th>Local</th>
                        <th>Cupos</th>
                        <th>Estado</th>
                        <th>Calificar</th>
                    </tr>
                </thead>
                <tbody>
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
                    </tr>
                </tbody>
            <table/>
            <br/>`
        }
    })
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