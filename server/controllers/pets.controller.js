const Pet = require('../models/pet.model')
const { model } = require('mongoose')

//get all pet here 
module.exports.getAll = (req, res) => {
    Pet.find()
      .then(pet => res.json(pet))     //pet 
      .catch(err => res.json(err));
}

//create a pet here 
module.exports.create = (req, res) =>{
    Pet.create(req.body)
    .then(pet => res.json(pet))
    //.catch(err => res.json(err))
    .catch((err) => {
      res.status(400).json(err);
    });
}


//updating a pet info here 
module.exports.update = (req, res) => {
  Pet.findByIdAndUpdate(
      req.params.id,
      {
          name: req.body.name,
          pet_type:req.body.pet_type,
          description: req.body.description,
          skillOne : req.body.skillOne,
          skillTwo : req.body.skillTwo,
          skillThree : req.body.skillThree
          
      },
      {
           new: true,
           runValidators: true
      }
  )
      .then(pet => res.json(pet))
       //.catch(err => res.json(err))
      .catch((err) => {
          res.status(400).json(err);
        });      
}


//get one product Pet in shelter
module.exports.getOne = (req, res) => {
  Pet.findById(req.params.id)
    .then(pet => res.json(pet))
    .catch(err => res.json(err))
}



//delete a pet from shelter 
module.exports.delete = (req, res) => {
  Pet.findByIdAndDelete(req.params.id)
    .then(() => req.json({message: "Success"}))
    .catch(err => res.json(err))
}
