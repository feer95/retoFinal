const {Router} = require ("express")
const router = Router();
const usuarioCtrl = require("../controller/usuario.controller")
const cochesCtrl = require("../controller/coches.controller")
const mantenimientoCtrl = require("../controller/mantenimiento.controller")


router.use((req, res, next) => 
{
    console.log('Petición recibida del cliente:');
    console.log('URL: "' + req.url + '"');
    console.log('METHOD: "' + req.method + '"');
    console.log('USER: "' + req.headers['user-agent'] + '"');
    next();
});

// Usuarios
router.get("/users", usuarioCtrl.getUsers); 
router.post("/register", usuarioCtrl.postUser); 
router.post("/login", usuarioCtrl.verify); 
router.put('/users', usuarioCtrl.updateUser); 


// Coches
router.get('/cars/:id_usuario', cochesCtrl.getAll); 
router.post('/cars', cochesCtrl.createCar); 
router.put('/cars', cochesCtrl.updateCar); 
router.delete('/cars', cochesCtrl.deleteCar); 

// // Mantenimientos
router.get('/mantenimientos/:id_coches', mantenimientoCtrl.getAllMant); // OK
router.post('/mantenimiento', mantenimientoCtrl.createMant); // OK 
router.get('/mantenimiento/:fecha', mantenimientoCtrl.getMantId); // OK


module.exports = router;