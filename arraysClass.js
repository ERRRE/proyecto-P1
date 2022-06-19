class Reserva {
    constructor(id, user, local, cupos, status, calificacion, Image) {

        this.id = id;
        this.user = user;
        this.local = local;
        this.cupos = cupos;
        this.status = status;
        this.calificacion = calificacion;
        this.Image = Image;
    }
}

class User {
    constructor(id, nombre, userNombre, password, type, reservas) {
        this.id = id;
        this.nombre = nombre;
        this.userNombre = userNombre;
        this.password = password;
        this.type = type;
        this.reservas = [];
    }
}

class Local {
    constructor(id, nombre, address, cupos, Image, type, reservas, owner, password) {

        this.id = id;
        this.nombre = nombre;
        this.address = address;
        this.cupos = cupos;
        this.Image = Image;
        this.type = type;
        this.reservas = [];
        this.owner = owner;
        this.password = password;
    }
}

let arrLocal =
    [new Local(1, "Mapi", "25 de Mayo 259", 50, "./imagenes/Mapi.png", "Museo", [], "", "Mapi123"),
    new Local(2, "H.Charrua", "Colon esq. Zabala", 100, "./imagenes/H.Charrua.jpg", "Museo", [], "HCharrua123"),
    new Local(3, "Burger", "Sarandi", 50, "./imagenes/Burger.jpg", "Restaurante", [], "Renan", "Burger123"),
    new Local(4, "PepeBurger", "18 de Julio y Ejido", 70, "./imagenes/pepe burger.avif", "Restaurante", [], "Christian", "PepeBurger123"),
    new Local(5, "McDonald", "Punta Carretas", 180, "./imagenes/mcdonalds-2.webp", "Restaurante", [], "Martin Luz", "McDonald123"),
    new Local(6, "Solis", "Reaconquista y B. Mitre", 100, "./imagenes/Solis.jpg", "teatro", [], "Artigas", "Solis123"),
    new Local(7, "Sodre", "Calle Andes esquina Mercedes", 200, "./imagenes/Sodre.jpg", "teatro", [], "Pedro", "Sodre123"),];

let arrUser = [
    //new User("Martin", "Martin", "Martin123");
    { id: 1, nombre: "Christian", userNombre: "Christian", password: "Christian123", type: "persona", reservas: [{id: 1, user: "Christian", loca: "burger", cupos: 3, status: "finalizada", Image: "./imagenes/Burger.jpg"}]},
    { id: 2, nombre: "Renan", userNombre: "Renan", password: "Renan123", type: "persona", reservas: []},
    { id: 3, nombre: "Pepe", userNombre: "Pepe", password: "Pepe123", type: "persona", reservas: []},
    { id: 4, nombre: "Jose", userNombre: "Jose", password: "Jose123", type: "persona", reservas: []}];
    
/* ARRAY USUARIO
▪ 3 con reservas pendientes
▪ 2 con finalizadas y pendientes
▪ 2 sin reservas*/


