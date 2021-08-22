import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobaStyles } from './Styles/GlobalStyles'
import { Ligth } from './Styles/Themes/Ligth'
import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Pets from './Pages/Pets'
import Header from './Components/Header'
import Quem from './Pages/Quem somos'
import * as S from './Styles/App.styles'

const App = () => {
    return (
        <ThemeProvider theme={Ligth}>
            <GlobaStyles/>
            <S.Container >
                <BrowserRouter>
                    <Header/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Pets path='/Pets' component={Pets}/>
                            <Contato path='/Contato' component={Contato}/>  
                            <Quem path='/Quem' component={Quem}/>    
                        </Switch> 
                </BrowserRouter>         
            </S.Container>
        </ThemeProvider>
    )
}

export default App
