import React from "react";

import { Header } from '../../components/Header'
import { Container, Column, Row, Title, TitleCreate, SubtitleCreate, Wrapper, PolicyText, JaTenhoText, LoginLink } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

import { MdPerson, MdEmail, MdLock } from 'react-icons/md'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
    password: yup.string().min(3, "A senha deve ter pelo menos 3 caracteres").required('Campo obrigatório'),
}).required();

const Create = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    console.log(errors);

    let nextId = 3

    const onSubmit = async formData => {
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCreate>Comece agora grátis</TitleCreate>
                        <SubtitleCreate>Crie sua conta e make the change._</SubtitleCreate>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input leftIcon={<MdPerson />} placeholder="Nome completo" control={control} name="nome" />
                            <Input leftIcon={<MdEmail />} placeholder="E-mail" control={control} name="email" type="email" errorMessage={errors?.email?.message} />
                            <Input leftIcon={<MdLock />} placeholder="Password" control={control} name="password" type="password" errorMessage={errors?.password?.message} />
                            <Button title="Criar minha conta" variant="secondary" />
                        </form>
                        <PolicyText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PolicyText>
                        <Row>
                            <JaTenhoText>Já tenho conta. </JaTenhoText>
                            <LoginLink> Fazer login</LoginLink>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Create };