class Coches {
  constructor(id_coches, id_usuario, marca, modelo, matricula, anoFabricacion, kilometraje, color, combustible, cv) 
  {
    this.id_coches = id_coches
    this.id_usuario = id_usuario;
    this.marca = marca;
    this.modelo = modelo;
    this.matricula = matricula;
    this.anoFabricacion = anoFabricacion;
    this.kilometraje = kilometraje;
    this.color = color;
    this.combustible = combustible;
    this.cv = cv;
  }
}
module.exports = Coches;