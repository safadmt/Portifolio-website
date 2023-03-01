import React from 'react';
import './style/index.css';
import {Outlet,Link} from 'react-router-dom';
import Footer from './Footer';
function Layout() {
    return (
        <>
            <section id="title">
        <div className="container-fluid">

            <nav className="navbar navbar-expand-lg">
                <a href="" className="navbar-brand"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div id="navbarTogglerDemo01" className="collapse navbar-collapse">

                    <ul className="navbar-nav offset-lg-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutme" className="nav-link">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link ">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link ">Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link ">Contact me</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            
        </div>
    </section>
    <Outlet/>
    <Footer/>
        </>
    )
}

export default Layout;