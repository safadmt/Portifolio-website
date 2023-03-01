import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
function Skills() {
    
  return (
    <>

        
         <section id="skill_set">
        <div className="row skillset_content">
            <h3 className="mb-5 text-center">MY SKILLS</h3>
            <div className="col skilldiv">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask full">
                            <div className="fill"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill"></div>
                        </div>
                        <div className="inside-circle">65% </div>
                    </div>
                </div>
                <h4 className="skilldescription">HTML&CSS</h4>
            </div>
            <div className="col skilldiv">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask full-2">
                            <div className="fill-2"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill-2"></div>
                        </div>
                        <div className="inside-circle"> 60% </div>
                    </div>
                </div>
                <h4 className="skilldescription">Bootstrap</h4>
            </div>
            <div className="col skilldiv">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask full-3">
                            <div className="fill-3"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill-3"></div>
                        </div>
                        <div className="inside-circle"> 50% </div>
                    </div>
                </div>
                <h4 className="skilldescription">Javascript</h4>
            </div>
            <div className="col skilldiv">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask full-4">
                            <div className="fill-4"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill-4"></div>
                        </div>
                        <div className="inside-circle"> 40% </div>
                    </div>
                </div>
                <h4 className="skilldescription">Node.js&Express Framework</h4>
            </div>
            <div className="col skilldiv">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask full-4">
                            <div className="fill-4"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill-4"></div>
                        </div>
                        <div className="inside-circle"> 40% </div>  
                    </div>
                </div>
                <h4 className="skilldescription">Mongodb</h4>
            </div>
        </div>

    </section>
    </>
  )
}

export default Skills