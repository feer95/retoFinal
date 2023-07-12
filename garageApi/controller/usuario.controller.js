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

//========================EDITAR USUARIO=============================

async function updateUser(request, response) 
{
    let idUser = request.body.id_usuario;
    let nombre = request.body.nombre;
    let apellidos = request.body.apellidos;
    let edad = request.body.edad;
    let email = request.body.email;
    let password = request.body.password;
  
    if (idUser != null) 
    {
      let sql = 'UPDATE usuario SET nombre = ?, apellidos = ?, edad = ?, email = ?, password = ? WHERE id_usuario = ?';
      let values = [nombre, apellidos, edad, email, password, idUser];
  
        try 
        {
            await pool.query(sql, values);
            console.log('Update ok');
            const respuesta = { error: false, message: 'Editado!', data: [] };
            response.send(respuesta);
        } 
        catch (error) 
        {
            console.log(error);
            const respuesta = { error: true, message: 'No editado!', data: [] };
            response.send(respuesta);
        }
    } 
    else 
    {
      respuesta = { error: false, message: 'No lo encontramos!', data: [] };
      response.send(respuesta);
    }
}

module.exports = {getUsers, postUser, verify, updateUser}