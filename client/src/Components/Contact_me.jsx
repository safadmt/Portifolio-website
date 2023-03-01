import axios from 'axios';
import React , {useState}from 'react'

class Contact_me extends React.Component {
    
    handleSubmit = (e)=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value

        console.log(name,email,message)
        if(!name || !email || !message) {
            return document.getElementById('message').innerHTML = 'Please fill up all the field'
        }
        
        const newformdata = new FormData();
        newformdata.append('name',name);
        newformdata.append('email', email);
        newformdata.append('message', message)
        console.log(newformdata)

        axios({
            method: 'post',
            url: 'http://localhost:5000/insertone',
            data: newformdata,
            headers: {'Content-Type':'application/json'}
        }).then(response=> {
            console.log('inserted successfuly')
            console.log(response.data);
            document.getElementById('message').innerHTML = 'Submtitted successfully'
        }).catch(err=> {
            console.log(err)
        })
    }


  render () {
  return (
    <>
   
        <section id="contact_me">
        <div className="container-fluid">

            <div className="row col-lg-6 offset-lg-3 contactme_form">
                <h3 className="text-center">CONTACT ME</h3>
                <p id="message"></p>
                
                <form onSubmit={this.handleSubmit} method="POST">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control form-control-sm" name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"  className="form-control form-control-sm" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" id="message" className="form-control" cols="16" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm  submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    </>
  )
  }
}

export default Contact_me