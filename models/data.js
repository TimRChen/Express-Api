let mongoose = require('mongoose');
let dataSchema = require('../schemas/data');

let dataModel = mongoose.model('dataModel', dataSchema);



module.exports = dataModel;