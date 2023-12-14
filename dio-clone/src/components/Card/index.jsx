import React from "react";

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
    return (
        <>
            <CardContainer>
                <ImageBackground src="https://apexensino.com.br/wp-content/uploads/2017/11/html-css-javascript.jpg" />
                <Content>
                    <UserInfo>
                        <UserPicture src="https://pbs.twimg.com/profile_images/1301991223008391173/V01yXRGq_400x400.jpg" />
                        <div>
                            <h4>Pablo Henrique</h4>
                            <p>Há 8 minutos</p>
                        </div>
                    </UserInfo>
                    <PostInfo>
                        <h4>Projeto para curso ed HTML e CSS</h4>
                        <p>Projeto feito com o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba mais</strong></p>
                    </PostInfo>
                    <HasInfo>
                        <h4>#HTML #CSS #JavaScript</h4>
                        <p>
                            <FiThumbsUp /> 16
                        </p>
                    </HasInfo>
                </Content>
            </CardContainer>
        </>
    )
}

export { Card };