import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 100%);
    grid-template-rows: 1fr;
    grip-column-gap: 1rem;
    padding: 1rem;
    padding-top: 2rem;
    width: 45%;
    float: ${(props) => props.right ? "right" : "left" };
    // background-color: pink;

    
`;

export const Section = styled.section`
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
    box-sizing: content-box;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;
    color: white;
    background-color: #1a1a1a;
    padding: 1rem;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '72px' : '48px'};
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.color ? 'linear-gradient(121.57deg, #61B9E9 18.77%, #CD7DFF 60.15%)' : 'white'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.75);
`

export const SectionDivider = styled.div`
  width: 100%;
  height: 6px;
  margin-bottom: 25px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  margin: 4rem;
`