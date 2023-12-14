import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-botton: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCreate = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom:: 20px;
`

export const SubtitleCreate = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 50px;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const PolicyText = styled.p`
    font-size: 15px;
    font-weight: 400;
    margin: 20px 0 10px 0;
`

export const JaTenhoText = styled.p`
    font-size: 12px;
    font-weight: 700;
    margin-right: 5px;
`

export const LoginLink = styled.a`
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: #23DD7A;
`