import React, {useState,useEffect} from 'react';
import axios from 'axios';
import project from './upload/project.jpg';
function Project() {
    const [item, setItem] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5000/projects').then(response=> {
            console.log(response.data)
            setItem(response.data)
        }).catch(err=> {
            document.getElementById('error').innerHTML = 'err'
            console.log(err)
        })
    })
  return (
    <>
        <div id="error" className='my-5 m-auto'></div>
        <section id="projects">
        <div className="row projectcontent">
            <h3 className="text-dark">PROJECTS</h3>
            <p>Github link :</p>
            {item.map((item,index)=> {
                return (
                    <div className="card col-lg-4 card-title" style={{width:"18rem"}}>
                <a href={item.github_link} target="_blank"><img src={project} className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <a href="" className="card-title">{item.project}</a>
                </div>
            </div>
                )
            })}
            
            
        </div>


    </section>
    </>
  )
}

export default Project