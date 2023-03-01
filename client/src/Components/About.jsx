import React from "react";
import './style/index.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
function About() {
    const [state,setState] = useState({});
    useEffect(()=> {
        axios.get('http://localhost:5000/').then(response=> {
            console.log(response.data)
            setState(response.data)
        })
    })
    return (
        <>
             <section id="about_me">
        <div className="container-fluid">
            <div className="row aboutme_content text-center">
                <h3 className="mb-3 ">ABOUT ME</h3>
                <p>{state.about}</p>
            </div>
        </div>
    </section>
        </>
    ) 
}

export default About;