const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const initModels = require("../models/initModels");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const db = require('../utils/database');

initModels();

const users = [
    {
        firstName: "Lucero",
        lastName: "Gonzalez",
        email: "lcg@gmail.com",
        password: "shalala"
    },
    {
        firstName: "Steven",
        lastName: "Alvarado",
        email: "salvarado@gmail.com",
        password: "shalalala"
    },
    {
        firstName: "Jhorman",
        lastName: "Nueve",
        email: "shosmi@gmail.com",
        password: "shalalin"
    },
];

const categories = [
    {name: "Frontend"},
    {name: "Backend"},
    {name: "Styles"},
    {name: "Database"}
];

const courses = [
    {
        title: "Fundamentos",
        description: "Aprende el lenguaje basico desde 0 para iniciar tu carrera en la programacion",
        instructor: "Gabriel chaves",
        categoryId: 2,
    },
    {
        title: "React",
        description: "Ayuda a crear interfaces de usuario interactivas de forma sencilla ",
        instructor: "Guiovanny Rios",
        categoryId: 1,
    },
    {
        title: "Node js",
        description: "Node de cero a experto crea sitios web dinamicos y muy eficientes",
        instructor: "Yolanda Ramirez",
        categoryId: 4,
    },
    {
        title: "css",
        description: "Crea y dale estilo a tu pagina en este curso corto ",
        instructor: "Esmeralda vargas",
        categoryId: 3,
    }
];

const videos = [
    {
    title: "que es http",
    url: "www.http.com",
    courseId: 3,
    },
    {
    title: "como instalar npm,",
    url: "www.node.com",
    courseId: 1,
    },
    {
    title: "como exportar",
    url: "www.node.com",
    courseId: 2,
    },
    {
    title: "crea una aplicacion desde 0",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Dale estilo a tu pagina",
    url: "www.css.com",
    courseId: 4,
    },
];

const userCourses = [
    {user_id:1 , course_id:1},
    {user_id:3 , course_id:4},
    {user_id:3 , course_id:1},
    {user_id:2 , course_id:3},
    {user_id:1 , course_id:2}  
];

db.sync({force: true})
    .then(async ()=> {
        console.log('iniciando plantacion de datos')
    
    users.forEach(user => Users.create(user));

    setTimeout(()=>{
        categories.forEach(category => Categories.create(category))
    }, 100);
    setTimeout(()=>{
        courses.forEach(course => Courses.create(course))
    }, 200);
    setTimeout(()=>{
        videos.forEach(video => Videos.create(video))
    }, 300);
    setTimeout(()=>{
        userCourses.forEach(userCourse => UserCourses .create(userCourse))
    }, 400); 
})

.catch((error) => console.log(error));


