import styled from "styled-components"

const Location = styled.section`
    text-align: center;
    background: #f1f0f0;
`

const LocationIcon = styled.svg`
    width: 100px;
`

const LocationHeader = styled.h2`
    color: #000;
    font-size: 64px;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
    transform: scale(1,1.3);
    padding: 1em 0 0.5em;
`

const LocationSubHeader = styled.h2`
    color: #FFF;
    -webkit-text-stroke: 3px #FFF;
    font-size: 64px;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
    background: linear-gradient(to right,#3eb2fe,#45a4ff,#7c8fff,#bb6cff,#F222F5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1,1.3);
    padding: 0.5em 0 1em;
`

export {
    Location,
    LocationHeader,
    LocationIcon,
    LocationSubHeader
}