const express = require('express');
const userRoutes = require('./routes/users.routes');
const categoriesRoutes = require('./routes/categories.routes');
const coursesRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');
const usersCoursesRoute = require('./routes/usersCourses.routes')
const morgan = require ('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const app = express();
const PORT = process.env.PORT || 8000;

initModels();

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

db.authenticate()
  .then(() => console.log('autenticacion exitosa') )
  .catch((error) => console.log(error));

  db.sync({force : false})
  .then(()=>{console.log('DB sincronizada')})
  .catch((error)=> {console.log(error)});


app.use('/api/v1', usersCoursesRoute);
app.use('/api/v1', userRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', videosRoutes);

app.listen(PORT, ()=> {
  console.log("server on port " + PORT);
})

module.exports = app;


