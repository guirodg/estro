import React from 'react';
import { Link } from 'react-router-dom' /*Sobrescrever <a> por link && href por to*/ 

import logoImg from '../../assets/img/Estroooo.svg'
import arteImg from '../../assets/img/arte1.svg'
import buscarIcon from '../../assets/img/buscar.svg';
import giveIcon from '../../assets/img/give.svg' ;
import heartIcon from '../../assets/img/heart1.svg';

import './styles.css';

function Home() {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="hero"/>
                    <h2>O studio que conecta músicos.</h2>
                </div>

                <img 
                    src={arteImg} 
                    alt="Arte Musicos" 
                    className="arte-image"
                />
            

            <div className="buttons-container">
                <Link to="/music" className="buscar">
                    <img src={buscarIcon} alt="Buscar-img"/>
                    Buscar
                </Link>

                <Link to="/listaMusic" className="give">
                    <img src={giveIcon} alt="Cadastrar"/>
                    Cadastrar
                </Link>
            </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas  <img src={heartIcon} alt="Coração"/>
                </span>
            </div>
        </div>
    );
}

export default Home;