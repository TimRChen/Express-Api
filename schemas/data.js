let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dataSchema = new Schema({
    ok: Boolean,
    status: Number,
    body: String
});



module.exports = dataSchema;