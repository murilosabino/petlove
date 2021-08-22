import React from 'react'
import * as S from './header.styles'
import logo from '../../Assets/paw.png'
import { Link } from './header.styles'

const Header = () => {
    return (
        <S.Container>
            <S.Logo>
                <img src={logo} alt=""/>
                <S.Link href="/">
                    <h1>Pet Love</h1>
                </S.Link>
            </S.Logo>

            <S.Nav>
                <S.Link href="/Pets">Pets</S.Link>
                <S.Link href="/Quem">Quem Somos</S.Link>
                <S.Link href="/Contato">Contato</S.Link>
            </S.Nav>
        </S.Container>
    )
}

export default Header
