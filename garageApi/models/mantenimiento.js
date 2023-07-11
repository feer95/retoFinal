class Mantenimientos {
  constructor(id_mantenimiento, id_coches, titulo, fecha, descripcion) 
  {
    this.id_mantenimiento = id_mantenimiento
    this.id_coches = id_coches;
    this.titulo = titulo;
    this.fecha = fecha;
    this.descripcion = descripcion;
  }
}
module.exports = Mantenimientos;