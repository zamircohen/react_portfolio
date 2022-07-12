import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    grid-template-columns: repeat(1, 1fr);
    grid-column: 1 / span 2;
    grid-template-rows: 1fr;
    grip-column-gap: 1rem;
    padding: 1rem;
    padding-top: 15rem;
    float: ${(props) => props.right ? "right" : "left" };
    height: 80vh;
`;

export const Section = styled.div`
    margin: 0 10rem 0 10rem;
    max-width: 1040px;
    width: 100%;
    color: white;
    text-align: ${(props) => props.left ? "left" : "right" };
    vertical-align: middle;
    padding-${(props) => props.right ? "right" : "left" }: 7rem;
    float: ${(props) => props.right ? "right" : "left" };
    img {
        object-fit: cover;
        object-position: auto;
    }
`;

export const Block = styled.div`
    width: 75%;
    position: relative;
    margin: 0 auto;
    height: 100%;
`;

export const BlockTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '102px' : '48px'};
  line-height: ${(props) => props.main ? '140px' : '60px'};
  width: max-content;
  margin: 0 auto;
  background: ${(props) => props.color ? 'linear-gradient(121.57deg, #61B9E9 18.77%, #CD7DFF 60.15%)' : 'white'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`
export const BlockText = styled.p`
  max-width: 800px;
  font-size: 36px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 auto;
  text-align: center;
`

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

export const SectionDivider = styled.div`
  width: 100%;
  height: 6px;
  background: linear-gradient(270deg, #61B9E9 0%, #CD7DFF 100%);
`
