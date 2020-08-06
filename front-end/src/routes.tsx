import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){
    return(
        // Ver documentação react-router-dom
        <BrowserRouter>
        {/* Path - endereço que usúario vai acessar
            Component -  o componente que vai aparecer
            exact - verificar se a rota for exatemente igual ao que está no path */}
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;