import React from 'react';
import { Link } from 'react-router-dom'

import backIcon from '../../assets/img/back.svg'
import logoImg from '../../assets/img/Estroooo.svg'

import './styles.css'

/*Paga minha paginha ler meu componente tenho que definir a tipagem -- transformar funcao em const*/
interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props)  => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/"> 
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Estro"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
            { props.description && <p>{props.description}</p>}
           
            {props.children}
        </div>
    </header>
  );
}

export default PageHeader;