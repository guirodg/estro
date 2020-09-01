import React from 'react';

import whatsappIcon from '../../assets/img/whatsapp.svg';

import './styles.css';

function MusicItem() {
    return (
        <article className="music-item">
        <header>
            <img src="https://scontent.fcgh27-1.fna.fbcdn.net/v/t1.0-9/96360482_2979970688789432_7377878113646018560_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=UuI2rTU6hpwAX9jswCS&_nc_ht=scontent.fcgh27-1.fna&oh=36a4e45e55c3370365ce512d26f19199&oe=5F583C95" alt="Guilherme Rodrigues"/>
            <div>
                <strong>Thomas Borges</strong>
                <span>Guitarrista</span>
            </div>
        </header>
        <p>
            Estusiasta das melhores tecnologias de musica avançada.
            <br/> <br/>
            Apaixonado por quebrar cordas em todos os lugarem que toca e se apresenta.
        </p>

        <footer>
            <p>
                Preço/hora 
                <strong> R$50,00</strong>
            </p>
            <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default MusicItem;