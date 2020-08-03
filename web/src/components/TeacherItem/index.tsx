import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars1.githubusercontent.com/u/48697941?s=460&u=7808eed83d255f74123e01b5278084be228c4bab&v=4" 
          alt="Walter Neto"
        />
        <div>
          <strong>Walter Neto</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Apaixonado por números.
        <br/><br/>
        Vê números em todo lugar, parece um cientista maluco.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
