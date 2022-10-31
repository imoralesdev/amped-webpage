import { 
    Header,
    HeaderFlag,
    HeaderContainer,
    HeaderLogo,
    MainMenu,
    MainMenuNavigation,
    MainMenuItem 
} from '../styles/Header'

import {
    ButtonJoin
} from '../styles/Buttons'

export default function() {
    return (
        <Header>
            <HeaderFlag>
                <ButtonJoin>Join Now</ButtonJoin>
            </HeaderFlag>
            <HeaderContainer>
                <div>
                    <HeaderLogo>
                        <span />
                    </HeaderLogo>
                    <MainMenu>
                        <MainMenuNavigation>
                            <MainMenuItem>Locations</MainMenuItem>
                            <MainMenuItem>Classes</MainMenuItem>
                            <MainMenuItem>Personal Training</MainMenuItem>
                            <MainMenuItem>Recovery</MainMenuItem>
                            <MainMenuItem>Contact</MainMenuItem>
                        </MainMenuNavigation>
                    </MainMenu>
                </div>
            </HeaderContainer>
        </Header>
    )
}