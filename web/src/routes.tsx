import React from 'react';
// Navegacao de paginas instalar router dom
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import MusicForm from './pages/MusicForm';
import MusicList from './pages/MusicList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} /> {/* exact comparar pg*/}
            <Route path="/music" component={MusicList} />
            <Route path="/listaMusic" component={MusicForm} />
        </BrowserRouter>
    )
}

export default Routes;