import styled from "styled-components"

const Hero = styled.section`
    height: calc(100vh - 163px);
    background: url(https://ampedfitness.s3.amazonaws.com/ampedfitness-group--opt.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    text-align: center;
`

const HeroHeader = styled.h1`
    color: transparent;
    -webkit-text-stroke: 4px #FFF;
    font-size: 120px;
    transform: scale(1,1.3);
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    padding: 1.3em 0 0;
`

const HeroSubHeader = styled.h2`
    width: 100%;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    padding: 2em;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 0.1em;
`

const HeroBottomFlag = styled.div`
    width: 100%;
    min-height: 20px;
    bottom: 0;
    position: absolute;

    & > span {
        background-image: linear-gradient(to right, #3eb2fe, #45a4ff, #7c8fff, #bb6cff, #f520f5);
        width: 100%;
        height: 20px;
        font-size: 10px;
        display: block;
    }

    & > span:nth-child(1) {
        opacity: .6;
    }

    & > span:nth-child(2) {
        opacity: .8;
    }

    & > span:nth-child(3) {
        opacity: 1;
    }
`

export {
    Hero,
    HeroHeader,
    HeroSubHeader,
    HeroBottomFlag
}