const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    project: {type:String, required: true},
    github_link : {type:String, required: true},
    image: {type:String , required: true}
})

module.exports = mongoose.model('Projects', projectSchema);