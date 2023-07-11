const {pool} = require("../database")

// PRUEBA
const getUsers = async (request, response) => {
    try {let sql = "SELECT * FROM usuario";
        let [result] = await pool.query(sql);
        response.send(result);} 
    catch (error) {console.log(error);}
};

//========================REGISTER=============================

const postUser = async (request, response) => 
{
  try 
  {
    let sql = "INSERT INTO usuario (nombre, apellidos, edad, email, password) " +
            "VALUES ('" + request.body.nombre + "', '" +
                        request.body.apellidos + "', '" +
                        request.body.edad + "', '" +
                        request.body.email + "', '" +
                        request.body.password + "')";

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result);

    if (result.insertId) 
    {
      response.send(String(result.insertId));
    } 
    else 
    {
      response.send("-1");
    }
  } 
  catch (error) 
  {
    console.log(error);
  }
};

//========================LOGIN=============================

const verify = async (request, response) => {
  try {
    const { email, password } = request.body;
    const sql = "SELECT id_usuario, nombre, apellidos, edad, email FROM usuario WHERE email = ? AND password = ?";
    const [result] = await pool.query(sql, [email, password]);

    if (result.length > 0) {
      response.send({ error: false, message: "Datos correctos", data: result });
    } else {
      response.send({ error: true, message: "Datos incorrectos", data: result });
    }
  } catch (error) {
    console.log(error);
  }
};
  
  


module.exports = {getUsers, postUser, verify}