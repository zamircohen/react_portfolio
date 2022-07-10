import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    background: transparent;

    input {
        border: 1px solid #grey;
        background: transparent;
        border-radius: 5px;
        font-size: 1.5rem;
        color: white;
        width: 100%;
        height: 4rem;
    }

    textarea {
        grid-column: 1 / span 2;
        border: 1px solid #grey;
        background: transparent;
        border-radius: 15px;
        font-size: 1.5rem;
        color: white;
        width: 100%;
        height: 10rem;
    }

    button {
        grid-column: 1 / span 2;
        border: 1px solid #grey;
        background: transparent;
        border-radius: 5px;
        padding: .5rem;
        font-size: 1rem;
        color: white;
        font-weight: bold;
        background: linear-gradient(121.57deg, #61B9E9 18.77%, #CD7DFF 60.15%);
        cursor: pointer;
    }

`;