import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'


import './style.css';

// Aqui criamos as propriedades que nosso componente pode ter
interface PageHeaderProps {
    title: string;
}

//  FC quer dizer FunctionComponent(Componente react em formato de função)
//  Esse parâmetro props são todas as propriedades que o componente recebe
//  No nosso caso ele recebe title, pois o title da pg TeacherList tem que ser dif da TeacherForm
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                {/* Link faz parte do react-router-dom, é como se fosse a tag a do html */}
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
                <img src={logoImg} alt="logo-proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                {/* Propriedade automatica do react que recebe o conteúdo que passamos dentro
                da tag do componente */}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;