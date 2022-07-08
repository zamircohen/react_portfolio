import styled from "styled-components"


export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grip-column-gap: 2rem;
    padding: 1rem;
    padding-top: 2rem;
`;

export const Span = styled.span`
    font-size: 2rem;
`;

export const Div1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: row;
    align-content: center;
`;

export const Div2 = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    display: flex;
    flex-direction: row;
    align-content: space-around;
`;

export const Div3 = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    flex-direction: row;
    align-content: space-around;
`;

export const NavLink = styled.a`
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 0.5rem;
    color: white;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #f5f5f5;
        background: #2f2f2f;
        cursor: pointer;
    }
`;