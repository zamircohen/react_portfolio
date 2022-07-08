import styled from "styled-components"


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grip-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;
    background-color: pink;
`;

export const Span = styled.span`
    font-size: 2rem;
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
    list-style: none;
    background-color: gray;
`;

export const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    align-content: space-around;
    list-style: none;
    background-color: green;
`;

export const Div3 = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    flex-direction: row;
    align-content: space-around;
    list-style: none;
    background-color: green;
`;

export const NavLink = styled.a`
    font-size: 2rem;
    line-height: 32px;
    padding-right: 70px;
    padding-left: 70px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    
    &:hover {
    color: rgba(255, 255, 255, 255);
    opacity: 1;
    cursor: pointer;
    }
`

export const SocialIcons = styled.a`
    transition: 0.3s ease-in-out;
    color: white;
    border-radius: 50px;
    padding: 2rem;
    padding-top: 0;
    
    &:hover {
        transform: scale(1.2);
        cursor: pointer;   
    }
`
