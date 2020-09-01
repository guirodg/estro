import React from 'react';

import PageHeader from '../../components/PageHeader';

import MusicItem from '../../components/MusicItem';

import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'

function MusicList () {
    return (
        <div id="page-music-list" className="container">
            <PageHeader title="Estes são os músicos disponíveis."> 
                <form id="search-music">
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
                  
                  <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
               <MusicItem />
               <MusicItem />
               <MusicItem />
               
            </main>
        </div>
    )
}

export default MusicList;