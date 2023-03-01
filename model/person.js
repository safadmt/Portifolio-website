const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    person_name : {type: String},
    course : {type: String},
    about : {type: String},
    mobile_number: {type:String},
    image: {type:String},
    email: {type:String},
    twitter_link: {type:String},
    linkedin_link: {type:String},
    date: {type:Date, default: Date.now()}
})


module.exports = mongoose.model('Person', personSchema);