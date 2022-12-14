//De acuerdo a lo que hemos instalado
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");
 
app.use(express.json());
app.use(cors());
//Añadir el api
app.use(express.static(__dirname + '/'));

var conexion = mysql.createConnection({
  host: "localhost",
  user: "gabriel",
  password: "root",
  database: "db_landing_page",
});

conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });


  const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

app.post("/landing-page-iensa/index.html", (req, res) => {
	let data = {
    	nomcon: req.body.NOMCON,
    	corrcon: req.body.CORRCON,
     	celucon: req.body.CELUCON,
    	asucon: req.body.ASUCON,
    	descon: req.body.DESCON
	};
	let sql = "INSERT INTO pedido SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });