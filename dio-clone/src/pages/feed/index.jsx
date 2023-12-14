import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Container, Column, Title, TitleHighLight } from './styles';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percentual={35} nome="Libelle Beatriz" image="https://blog.domidona.com.br/wp-content/uploads/2022/12/Egirl-capa.jpg" />
                    <UserInfo percentual={35} nome="Libelle Beatriz" image="https://blog.domidona.com.br/wp-content/uploads/2022/12/Egirl-capa.jpg" />
                    <UserInfo percentual={35} nome="Libelle Beatriz" image="https://blog.domidona.com.br/wp-content/uploads/2022/12/Egirl-capa.jpg" />
                    <UserInfo percentual={35} nome="Libelle Beatriz" image="https://blog.domidona.com.br/wp-content/uploads/2022/12/Egirl-capa.jpg" />
                    <UserInfo percentual={35} nome="Libelle Beatriz" image="https://blog.domidona.com.br/wp-content/uploads/2022/12/Egirl-capa.jpg" />
                </Column>
            </Container>
        </>
    )
}

export { Feed };