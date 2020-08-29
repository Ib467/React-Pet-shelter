const mongoose = require('mongoose');
//name, type, description , skillOne, skillTwo, skillThree, 

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Please enter name of the pet!'],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],

    },
    pet_type: {
        type: String,
        required: [ true, 'Please enter type of Pet!'],
        minlength: [3, "Pet type must be at least {MINLENGTH} characters."],

    },
    description: {
        type: String,
        required: [ true, 'Please enter description for the pet!'],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],

    },
    skillOne: {
        type: String,
        // minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],

    },
    skillTwo: {
        type: String,
        // minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],

    },
    skillThree: {
        type: String,
        // minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],

    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Pet', PetSchema)