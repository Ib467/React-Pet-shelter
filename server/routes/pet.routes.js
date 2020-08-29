const petCtl = require('../controllers/pets.controller')

module.exports = app => {
    app.get('/api/pets', petCtl.getAll)
    app.post('/api/pets', petCtl.create) //creating a pet 
    app.get('/api/pets/:id', petCtl.getOne) //get one pet to view 
    app.put('/api/pets/:id', petCtl.update) //edit and update
    app.delete('/api/pets/:id', petCtl.delete) //delete route

}