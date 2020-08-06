import React from 'react';
import {Link} from 'react-router-dom'


import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


// Sempre que fomos importar um caminho criado por nos é necessário ultilizar o ./
import './style.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    {/* Não é possivel importar a imagem como fazemos no html
                    por isso devemos importar a imagem e usar como
                    variavel JS */}
                    <img src={logoImg} alt="logo-proffy" />
                    <h2>A sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="darAula">
                        <img src={giveClassesIcon} alt="Dar-aulas" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões ja realizadas <img src={purpleHeartIcon} alt="coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;