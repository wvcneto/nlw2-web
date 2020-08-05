import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeachersForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a Aula</legend>

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Física', label: 'Física'},
              {value: 'Geográfia', label: 'Geográfia'},
              {value: 'História', label: 'História'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Português', label: 'Português'},
              {value: 'Química', label: 'Química'},
              {value: 'Redação', label: 'Redação'}
            ]}
          />
          <Input name="cost" label="Valor da hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button">
              + Novo horário
            </button>
          </legend>

          <div className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da semana" 
              options={[
                {value: '0', label: 'Domingo'},
                {value: '1', label: 'Segunda-feira'},
                {value: '2', label: 'Terça-feira'},
                {value: '3', label: 'Quarta-feira'},
                {value: '4', label: 'Quinta-feira'},
                {value: '5', label: 'Sexta-feira'},
                {value: '6', label: 'Sábado'},
              ]}
            />
            <Input type="time" name="from" label="Das" />
            <Input type="time" name="to" label="Até" />
          </div>
          
        </fieldset>

        <footer>
          <p>
            <img src={ warningIcon } alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados.
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeachersForm;
