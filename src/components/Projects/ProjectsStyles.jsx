import styled from "styled-components";


export const ProjectBox = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    grid-auto-rows: repeat(300px, auto);
    gap: 10px;
    background-color: #fff;
    max-grid-columns: 2;
    max-grid-rows: 2;
`