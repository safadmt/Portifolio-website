const express = require('express');
const router = express.Router();
const Person = require('../model/person');
const personController =require('../controllers/personCotntroller');
const Projects = require('../model/project');
const Client = require('../model/client');
const nodemailer = require('nodemailer');


router.get('/',(req, res)=> {
    personController.getPersons().then(response=> {
        
        res.status(200).json(response)
    }).catch(err=> {
        res.status(400).json(err)
        console.log(err)
    })
});

router.get('/projects', (req,res)=> {
    Projects.find().then(response=> {
        res.status(200).json(response)
    }).catch(err=> {
        res.status(401).json(err)
        console.log(err)
    })
})


router.post('/insertone', (req,res)=> {
    console.log(req.body)
    const {name, email, message} = req.body;
    if(!name || !email || !message) {
        return res.status(401).json({error: 'Please fill up all the field'})
    }
    const newclient = new Client({
        name: name,
        email: email,
        message: message
    }).save()
    .then(response=> {
        console.log(response)
        
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "49a29a07cfdd00",
              pass: "a1d8e3363c131b"
            }
          });
        let mailOptions = {
                from : response.email,
                to: 'mtshafad@gmail.com',
                subject: 'Sending Email using Node.js',
                text: response.message
            }
            transport.sendMail(mailOptions, (err, mail)=> {
                    if(err) {
                        console.log(err)
                    }else{
                        console.log('Email send:' + mail.response)
                    }
                })
        
            res.status(200).json(response)
    }).catch(err=> {
        res.status(500).json(err)
        console.log(err)
    })

});




module.exports = router;

// function send() {
//     Projects.insertMany([
//         {project:'Shopping Cart',github_link: 'https://github.com/safadmt/shopping-cart', image: 'project.jpg'},
//         {project:'Node Rest Api',github_link: 'https://github.com/safadmt/node-rest-api', image: 'project.jpg'},
//         {project:'User Management System',github_link: 'https://github.com/safadmt/User-mangement-system', image: 'project.jpg'}
//     ]).then(response=> {
//         console.log(response)
//     }).catch(err=> {y
//         console.log(err)
//     }) 
// }



// function upload() {
//     const newperson = new Person({
//         person_name: "Safad MT",
//         course: 'WEB DEVELOPMENT',
//         about: `Hi !, I am Safad Mt. I completed B.com degree from University Of Calicut.Currently learning MERN stack (Mongodb,Express Framework, React.js, Node.js)Web Developemnt.`,
//         mobile_number: '8281760431',
//         image: 'safad.jpg',
//         email: 'mtshafad@gmail.com',
//         twitter_link: 'https://twitter.com/313bddb9ea704df',
//         linkedin_link: 'https://www.linkedin.com/in/safad-mt-9121721b8'

//     }).save()
//     .then(response=> {
//         console.log(response)
//     }).catch(err=> {
//         console.log(err)
//     })
// }





