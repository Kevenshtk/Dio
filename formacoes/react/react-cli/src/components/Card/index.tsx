import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src="https://media.licdn.com/dms/image/v2/D4D16AQGQhJJ4BrcGTw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1733505413222?e=1751500800&v=beta&t=ayMpzeiRiqUXP3eIsid53BiFJe_6ARvGpBj3Fy0y5so"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/102769882?v=4"/>
                    <div>
                        <h4>Keven Camargo</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio Global avante...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };