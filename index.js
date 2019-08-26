//***  Para ejecutar NODEMON:
// npx nodemon index.js

const express = require("express");
const morgan = require("morgan");
const app = express();

//************** MIDDLEWARES **********************
//Todas las rutas user pasaran por aquí primero

app.all("/user", (req, res, next) => {
  // console.log("por aquí pasó");
  //Next() para que continue a la ruta a la que iba
  next();
});

//Morgan ayuda a ver las peticiones al server
app.use(morgan("dev"));

//Para que express pueda leer json que son recividos
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Bienvenido</h1>");
});

app.get("/user", (req, res) => {
  res.json({
    username: "Jose",
    contraseña: "123"
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("POST RECIVIDO");
});

app.use(express.static("public"));

//Creamos servidor

app.listen(3000, () => {
  console.log("server");
});
