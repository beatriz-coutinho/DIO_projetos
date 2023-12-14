import React from "react";

import LogoDIO from '../../assets/logo.png'

import { Button } from '../Button';
import { Container, BuscarInputContainer, Input, Menu, MenuRight, Row, Wrapper, UserPicture } from './styles';

const Header = ({autenticado}) => {
    return (
        <>
            <Wrapper>
                <Container>
                    <Row>
                        <img src={LogoDIO} alt="Logo da DIO" />
                        {autenticado ? (
                            <>
                                <BuscarInputContainer>
                                    <Input placeholder="Buscar..." />
                                </BuscarInputContainer>
                                <Menu>Live Code</Menu>
                                <Menu>Global</Menu>
                            </>
                        ) : null}
                    </Row>
                    <Row>
                        {autenticado ? (
                            <>
                                <UserPicture src="https://blog.domidona.com.br/wp-content/uploads/2022/12/Egirl-capa.jpg" />
                            </>
                        ) : (
                            <>
                                <MenuRight href="#">Home</MenuRight>
                                <Button title="Entrar" />
                                <Button title="Cadastrar" />
                            </>
                        )}
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export { Header };