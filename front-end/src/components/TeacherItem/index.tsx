import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFB3IGvHXHd1w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=HRe5En4LHXpLX-yGbrpUTTRPPCWAcBetmafSOWVVv4I" alt="Gabriel Nunes" />
                <div>
                    <strong>Gabriel Nunes</strong>
                    <span>Warzone</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de Warzone avançado
                <br /><br />
                Apaixonado por Warzone, explodir carros e por mudar a vida das pessoas através de muitas kills. Mais de 200.00 pessoas ja passaram pelos tiros das minhas armas.
            </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;