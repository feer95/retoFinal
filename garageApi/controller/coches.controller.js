const {pool} = require("../database");
const Coches = require("../models/coches");

async function getAll(request, response) 
{
    try 
    {
        let coche = request.params.id_usuario;
        if (coche != null) 
        {
            let sql = 'SELECT * FROM coches WHERE id_usuario = ?';
            let [result] = await pool.query(sql, [coche]);
            if (result.length > 0) 
            {
                let respuesta = { error: false, message: "Encontrado!", data: result };
                response.send(respuesta);
            } 
            else 
            {
                let respuesta = { error: false, message: 'No existe!', data: [] };
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

async function createCar(request, response) 
{
    const newCar = new Coches(request.body.id_usuario,request.body.marca,request.body.modelo,request.body.matricula,request.body.anoFabricacion,request.body.kilometraje,request.body.color,request.body.combustible,request.body.cv);
  
    if (newCar != null) 
    {
      const sql = 'INSERT INTO coches (id_usuario, marca, modelo, matricula, anoFabricacion, kilometraje, color, combustible, cv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [
        newCar.id_coches,
        newCar.id_usuario,
        newCar.marca,
        newCar.modelo,
        newCar.matricula,
        newCar.anoFabricacion,
        newCar.kilometraje,        
        newCar.color,
        newCar.combustible,
        newCar.cv];
  
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

async function updateCar(request, response) 
{
    let id_coches = request.body.id_coches;
    let id_usuario = request.body.id_usuario;
    let marca = request.body.marca;
    let modelo = request.body.modelo;
    let matricula = request.body.matricula;
    let anoFabricacion = request.body.anoFabricacion;
    let kilometraje = request.body.kilometraje;
    let color = request.body.color;
    let combustible = request.body.combustible;
    let cv = request.body.cv;

    if (matricula != null) 
    {
        let sql = 'UPDATE coches SET id_usuario = ?,marca = ?, modelo = ?, matricula = ?, anoFabricacion = ?, kilometraje = ?, color = ?, combustible = ?, cv = ?  WHERE id_coches = ?';
        let values = [id_coches, id_usuario, marca, modelo, matricula, anoFabricacion, kilometraje, color, combustible, cv];

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

//================================================================================== 

async function deleteCar(request, response) 
{
    let cocheDel = request.body.matricula;

    if (cocheDel != null) 
    {
    let sql = 'DELETE FROM coches WHERE matricula = ?';
    let values = [cocheDel];

        try 
        {
            await pool.query(sql, values);
            console.log('Delete ok');
            const respuesta = { error: false, message: 'Eliminado!', data: [] };
            response.send(respuesta);
        } 
        catch (error) 
        {
            console.log(error);
            const respuesta = { error: true, message: 'No eliminado!', data: [] };
            response.send(respuesta);
        }
    } 
    else 
    {
        respuesta = { error: false, message: 'No lo encontramos!', data: [] };
        response.send(respuesta);
    }
}
    
module.exports = { getAll, createCar, updateCar, deleteCar};
  