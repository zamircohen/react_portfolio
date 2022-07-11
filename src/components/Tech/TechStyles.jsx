import styled from 'styled-components'

export const MarqueeBlock = styled.div`
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    background-color: transparent;
    border-right: 5px solid;
    border-left: 5px solid;
    border-image: linear-gradient(to bottom, black, #61B9E9, #CD7DFF, black) 1;
`
