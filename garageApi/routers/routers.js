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
router.get('/cars/:id_usuario', cochesCtrl.getAll); // OK
router.post('/cars', cochesCtrl.createCar); // OK
router.put('/cars', cochesCtrl.updateCar); // OK 
router.delete('/cars', cochesCtrl.deleteCar); // OK

// // Mantenimientos
router.get('/mantenimiento/:id_coches', mantenimientoCtrl.getAllMant); // OK
router.post('/mantenimiento', mantenimientoCtrl.createMant); // OK ?? Where id_coches
router.get('/mantenimiento', mantenimientoCtrl.getMantId); // OK


module.exports = router;