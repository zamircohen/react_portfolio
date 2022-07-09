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
    height: 70vh;
`;

export const Section = styled.div`
    margin: 0 10rem 0 10rem;
    max-width: 1040px;
    width: 100%;
    color: white;
    text-align: ${(props) => props.left ? "left" : "right" };
    vertical-align: middle;
    padding-left: 5rem;
    float: ${(props) => props.right ? "right" : "left" };
    img {
        object-fit: cover;
        object-position: auto;
    }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '102px' : '48px'};
  line-height: ${(props) => props.main ? '108px' : '60px'};
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.color ? 'linear-gradient(121.57deg, #61B9E9 18.77%, #CD7DFF 60.15%)' : 'white'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 36px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.75);
`