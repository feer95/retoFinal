const {pool} = require("../database");
const Mantenimientos = require("../models/mantenimiento");

async function getAllMant(request, response) 
{
    try 
    {
        let mant = request.params.id_coches;
        if (mant != null) 
        {
            let sql = 'SELECT * FROM mantenimiento WHERE id_coches = ?';
            let [result] = await pool.query(sql, [mant]);
            if (result.length > 0) 
            {
                let respuesta = { error: false, message: "Encontrado!", data: result };
                response.send(respuesta);
            } 
            else 
            {
                let respuesta = { error: false, message: 'No hay datos!', data: [] };
                response.send(respuesta);
            }
        }
        else 
        {
            let respuesta = { error: false, message: 'No existe!', data: [] };
            response.send(respuesta);
        }
    } 
    catch (error) 
    {
        console.log(error);
        let respuesta = { codigo: 500, error: 'Error al obtener el coche' };
        response.send(respuesta);
    }
}

//==================================================================================

async function createMant(request, response) 
{
    const newMant = new Mantenimientos(request.body.id_coches,request.body.titulo,request.body.fecha,request.body.descripcion);
  
    if (newMant != null) 
    {
      const sql = 'INSERT INTO mantenimiento (id_coches, titulo, fecha, descripcion) VALUES (?, ?, ?, ?)';
      const values = [
        newMant.id_mantenimiento,
        newMant.id_coches,
        newMant.titulo,
        newMant.fecha,
        newMant.descripcion,
        ];
  
      try 
        {
            await pool.query(sql, values);
            console.log('Insert ok');
            const respuesta = { error: false, message: 'Añadido!', data: [] };
            response.send(respuesta);
        } 
        catch (error) 
        {
        console.log(error);
        const respuesta = { error: true, message: 'No añadido!', data: [] };
        response.send(respuesta);
        }
    } 
    else 
    {
      const respuesta = { error: false, message: 'No añadido!', data: [] };
      response.send(respuesta);
    }
}

//==================================================================================

async function getMantId(request, response) 
{
    try 
    {
        let mant = request.body.fecha;
        if (mant != null) 
        {
            let sql = 'SELECT * FROM mantenimiento WHERE fecha = ?';
            let [result] = await pool.query(sql, [mant]);
            if (result.length > 0) 
            {
                let respuesta = { error: false, message: "Encontrado!", data: result };
                response.send(respuesta);
            } 
            else 
            {
                let respuesta = { error: false, message: 'No hay datos!', data: [] };
                response.send(respuesta);
            }
        }
        else 
        {
            let respuesta = { error: false, message: 'No existe!', data: [] };
            response.send(respuesta);
        }
    } 
    catch (error) 
    {
        console.log(error);
        let respuesta = { codigo: 500, error: 'Error al obtener el coche' };
        response.send(respuesta);
    }
}















module.exports = { getAllMant, createMant, getMantId };
 