import styled from "styled-components"

const ButtonJoin = styled.button`
    color: #FFF;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #0034F7;
    padding: 0.3em 1em;
    border-radius: 25px;
    border: solid #000 2px;
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
`

const ButtonPrimary = styled.a`
    text-align: center;
    background: #31bcff;
    color: #FFF;
    padding: 0.4em 1em;
    font-weight: 800;
    text-transform: uppercase;
    margin: auto;
    display: inline-block;
    font-size: 28px;
    transform: scale(1,1);
`

export {
    ButtonJoin,
    ButtonPrimary
}