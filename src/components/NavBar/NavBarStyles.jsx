import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    position: fixed; 
    top: 0; 
    background-color: black;
    z-index: 1000;
    scroll-padding-top: 5rem;
    grid-template-columns: 1fr 4fr 2fr;
    gap: 2rem;
    padding: 1rem 0rem 1rem 0rem;
    width: 100%;
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
    padding-top: 3rem;
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
    padding: 0 100px 0 100px;
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
    text-decoration: none;
    
    &:hover {
        transform: scale(1.2);
        cursor: pointer;   
    }
`
