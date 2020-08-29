const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pet_project', {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

