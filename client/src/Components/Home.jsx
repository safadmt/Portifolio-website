import React, {useState, useEffect} from "react";
import './style/index.css';
import axios from "axios";
import safad from './upload/safad.jpg'
function Home() {
    const [state,setState] = useState({});
    const [file,setFile] = useState({})
    useEffect(()=> {
        axios.get('http://localhost:5000/').then(response=> {
            console.log(response.data)
            setState(response.data)
        }).catch(err=> {
            console.log(err)
        })
        
    })
    return (
        <>
        
        <section id="title">
        <div className="container-fluid">   

            <div className="row titlehead">
                <div className="col-lg-6 col-md-12 titleheading">
                    <h5>Hello, My name is Safad MT</h5>
                    <h2 id="mainheading"><span>Learning</span> {state.course}</h2>
                </div>
                <div className="col-lg-6 text-center titleimagediv">
                    <img id="titleimage" src={safad} alt=""/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Home;