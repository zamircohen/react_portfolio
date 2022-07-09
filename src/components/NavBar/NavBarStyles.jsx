import styled from "styled-components"


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    gap: 2rem;
    padding: 1rem;
    max-width: 100%;
`;

export const Span = styled.span`
    font-size: 2rem;
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    align-content: center;
    justify-content: center;
    list-style: none;
`;

export const Div2 = styled.div`
    grid-area: 1 / 2 / 1 / 4;
    display: flex;
    align-content: space-around;
    justify-content: center;
    list-style: none;
`;

export const Div3 = styled.div`
    grid-area: 1 / 5 / 1 / 6;
    display: flex;
    flex-direction: row;
    align-content: space-around;
    justify-content: center;
    list-style: none;
`;

export const NavLink = styled.a`
    font-size: 2rem;
    display: inline-block;
    line-height: 32px;
    padding: 100px;
    padding-top: 3rem;
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
    padding-top: 2rem;
    
    &:hover {
        transform: scale(1.2);
        cursor: pointer;   
    }
`
