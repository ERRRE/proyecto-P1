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
        this.reservas = reservas;
    }
}

class Local {
    constructor(id, nombre, address, cupos, Image, type, reservas, owner, password, status, calificacion) {

        this.id = id;
        this.nombre = nombre;
        this.address = address;
        this.cupos = cupos;
        this.Image = Image;
        this.type = type;
        this.reservas = reservas;
        this.owner = owner;
        this.password = password;
        this.status = status;
        this.calificacion = calificacion;
    }
}

let arrLocal =
    [new Local(1, "Mapi", "25 de Mayo 259", 48, "./imagenes/Mapi.png", "Museo", [{id: 1, user: "Renan", local: "Mapi", cupos: 1, status: "pendiente", calificacion: 0, Image: "./imagenes/Mapi.png"}, {id: 1, user: "Christian", local: "Mapi", cupos: 1, status: "pendiente", calificacion: 0, Image: "./imagenes/Mapi.png"}], "Diego", "Mapi123", "habilitado", 3),
    new Local(2, "H.Charrua", "Colon esq. Zabala", 100, "./imagenes/H.Charrua.jpg", "Museo", [{id: 2, user: "Ana", local: "H.Charrua", cupos: 2, status: "finalizada", calificacion: 0, Image: "./imagenes/H.Charrua.jpg"}], "Leandro", "HCharrua123", "habilitado", 3),
    new Local(3, "Burger", "Sarandi", 50, "./imagenes/Burger.jpg", "Restaurante", [{id: 3, user: "Christian", local: "Burger", cupos: 3, status: "finalizada", calificacion: 0, Image: "./imagenes/Burger.jpg"}, {id: 3, user: "Renan", local: "Burger", cupos: 3, status: "finalizada", calificacion: 0, Image: "./imagenes/Burger.jpg"}], "Renan", "Burger123", "habilitado", 2),
    new Local(4, "PepeBurger", "18 de Julio y Ejido", 68, "./imagenes/pepe.burger.avif", "Restaurante", [{id: 4, user: "Santiago", local: "PepeBurger", cupos: 2, status: "pendiente", calificacion: 0, Image: "./imagenes/pepe.burger.avif"}, {id: 4, user: "Joaquin", local: "PepeBurger", cupos: 4, status: "pendiente", calificacion: 0, Image: "./imagenes/pepe.burger.avif"}], "Christian", "PepeBurger123", "habilitado", 5),
    new Local(5, "McDonald", "Punta Carretas", 180, "./imagenes/mcdonalds-2.webp", "Restaurante", [], "Martin Luz", "McDonald123", "habilitado", 4),
    new Local(6, "Solis", "Reaconquista y B. Mitre", 99, "./imagenes/Solis.jpg", "teatro", [{id: 6, user: "Ana", local: "Solis", cupos: 2, status: "pendiente", calificacion: 0, Image: "./imagenes/Solis.jpg"}], "Federico", "Solis123", "habilitado", 2),
    new Local(7, "Sodre", "Calle Andes esquina Mercedes", 199, "./imagenes/Sodre.jpg", "teatro", [{id: 7, user: "Lucia", local: "Sodre", cupos: 2, status: "pendiente", calificacion: 0, Image: "./imagenes/Sodre.jpg"}], "Agustin", "Sodre123", "habilitado", 3),];

let arrUser = [
    //new User("Martin", "Martin", "Martin123");
    { id: 1, nombre: "Christian", userNombre: "Christian", password: "Christian123", type: "persona", reservas: [{id: 3, user: "Christian", local: "Burger", cupos: 3, status: "finalizada", calificacion: 0, Image: "./imagenes/Burger.jpg"}, {id: 1, user: "Christian", local: "Mapi", cupos: 1, status: "pendiente", calificacion: 0, Image: "./imagenes/Mapi.png"}]},
    { id: 2, nombre: "Renan", userNombre: "Renan", password: "Renan123", type: "persona", reservas: [{id: 1, user: "Renan", local: "Mapi", cupos: 1, status: "pendiente", calificacion: 0, Image: "./imagenes/Mapi.png"}, {id: 3, user: "Renan", local: "Burger", cupos: 3, status: "finalizada", calificacion: 0, Image: "./imagenes/Burger.jpg"}]},
    { id: 3, nombre: "Pepe", userNombre: "Pepe", password: "Pepe123", type: "persona", reservas: []},
    { id: 4, nombre: "Jose", userNombre: "Jose", password: "Jose123", type: "persona", reservas: []},
    { id: 5, nombre: "Santiago", userNombre: "Santiago", password: "Santiago123", type: "persona", reservas: [{id: 4, user: "Santiago", local: "PepeBurger", cupos: 2, status: "pendiente", calificacion: 0, Image: "./imagenes/pepe.burger.avif"}]},
    { id: 6, nombre: "Joaquin", userNombre: "Joaquin", password: "Joaquin123", type: "persona", reservas: [{id: 4, user: "Joaquin", local: "PepeBurger", cupos: 4, status: "pendiente", calificacion: 0, Image: "./imagenes/pepe.burger.avif"}]},
    { id: 7, nombre: "Pedro", userNombre: "Pedro", password: "Pedro123", type: "persona", reservas: []},
    { id: 8, nombre: "Lucia", userNombre: "Lucia", password: "Lucia123", type: "persona", reservas: [{id: 7, user: "Lucia", local: "Sodre", cupos: 2, status: "pendiente", calificacion: 0, Image: "./imagenes/Sodre.jpg"}]},
    { id: 9, nombre: "Ana", userNombre: "Ana", password: "Ana123", type: "persona", reservas: [{id: 6, user: "Ana", local: "Solis", cupos: 2, status: "pendiente", calificacion: 0, Image: "./imagenes/Solis.jpg"}, {id: 2, user: "Ana", local: "H.Charrua", cupos: 2, status: "finalizada", calificacion: 0, Image: "./imagenes/H.Charrua.jpg"}]},
];
    
/* ARRAY USUARIO
   3 con reservas pendientes
 ▪ 2 con finalizadas y pendientes
 ▪ 2 sin reservas*/



