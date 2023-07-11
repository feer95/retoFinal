class Usuario {
  constructor(id_usuario, nombre, apellidos, edad, email, password) 
  {
    this.id_usuario = id_usuario;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.email = email;
    this.password = password;
  }
}
module.exports = Usuario;