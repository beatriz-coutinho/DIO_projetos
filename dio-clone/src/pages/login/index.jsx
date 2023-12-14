import { Header } from '../../components/Header';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';

const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'Mínimo de 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
      })

      const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('E-mail ou senha inválidos')
            }
        } catch {
            alert('Houve um erro, tente novamente!')
        }
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input errorMessage={errors?.email?.message} name="email" control={control} placeholder="e-mail" type="email" leftIcon={<MdEmail />} />
                            <Input errorMessage={errors?.password?.message} name="password" control={control} placeholder="senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login };