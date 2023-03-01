const Person = require('../model/person');

module.exports = {
    getPersons : async()=> {
        try{
            const person = await Person.findOne({email: 'mtshafad@gmail.com'})
            
            return person
        }catch(err) {
            console.log(err)
        }
        
    }
}