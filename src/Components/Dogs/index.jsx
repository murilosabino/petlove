import React, {useState, useEffect} from 'react'
import * as S from './dogs.styles'

const Dogs = () => {

    const [dadosApi, setDadosApi] = useState([])
    const [apiChegou, setApiChegou] = useState(false)

    useEffect(() => {
        fetch('https://salty-harbor-83280.herokuapp.com/pets/dogs')
        .then((resposta) => resposta.json())
        .then((dados)=> {
            setDadosApi(dados.results) 
            setApiChegou(true)    
        }
        )
    }, [])

    return (
        <S.Container>
            {!!dadosApi && apiChegou ? (
                dadosApi.map((item) => {
                    console.log(item.nome)
                })
            ): (<p>Carregando</p>)}
        </S.Container>
    )
}

export default Dogs
