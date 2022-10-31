import styled from "styled-components"

const FreeDay = styled.div`
    height: 32em;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

const FreeDayHeader = styled.h2`
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(1,1.3);
`

export {
    FreeDay,
    FreeDayHeader
}