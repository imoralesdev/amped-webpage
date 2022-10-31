import styled from "styled-components"

const Header = styled.header`
    background: #FFF;
`

const HeaderFlag = styled.div`
    position: relative;
    height: 60px;
`

const HeaderContainer = styled.div`
    color: #000;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background: #000;
    font-size: 0;

    & > div {
        max-width: 1140px;
        display: block;
        margin: auto;
    }
`

const HeaderLogo = styled.a`
    display: inline-block;
    vertical-align: middle;

    & > span {
        background: url(https://secureservercdn.net/198.71.233.178/t76.0f4.myftpupload.com/wp-content/uploads/2020/01/Amped.png);
        width: 160px;
        height: 80px;
        text-indent: -9999px;
        background-repeat: no-repeat;
        background-size: contain;
        display: inline-block;
    }
`

const MainMenu = styled.div`
    display: inline-block;
    vertical-align: top;
    display: inline-block;
    vertical-align: middle;
    padding: 38px 0;
`

const MainMenuNavigation = styled.ul`
    list-style-type: none;
    display: inline-block;
`

const MainMenuItem = styled.li`
    color: #FFF;
    display: inline-block;
    font-size: 22px;
    padding: 0 20px;
    text-transform: uppercase;
`

export {
    Header,
    HeaderFlag,
    HeaderContainer,
    HeaderLogo,
    MainMenu,
    MainMenuNavigation,
    MainMenuItem
}