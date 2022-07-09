import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 100%);
    grid-template-rows: 1fr;
    grip-column-gap: 1rem;
    padding: 1rem;
    padding-top: 2rem;
    width: 45%;
    float: ${(props) => props.right ? "right" : "left" };
    color: white;
    // background-color: pink;
`;