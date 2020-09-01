import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import avisoIcon from '../../assets/img/aviso.svg'

import './styles.css'

function MusicForm () {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to:'' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to:'' }
        ]);
    }

    return (
        <div id="page-music-form" className="container">
            <PageHeader 
               title="Que incrível que você quer se conectar"
               description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="subject" 
                        label="Instrumento"
                        options={[
                            {value: 'Canto', label: 'Cantor'},
                            {value: 'Guitar', label: 'Guitarrista'},
                            {value: 'Bass', label: 'Baixista'},
                            {value: 'Drums', label: 'Baterista'},
                            {value: 'Keyboard', label: 'Tecladista'},
                        ]}
                    />
                    
                    <Input name="cost" label="Custa da sua hora por aula"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem} >
                        + Novo horário
                        </button>
                    </legend>
                    
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                       
                    <Select 
                        name="week_day" 
                        label="Dia da semena"
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
                   
                    <Input name="from" label="Das" type="time" />
                    <Input name="to" label="Até" type="time" />
                    </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={avisoIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default MusicForm;