import styled from 'styled-components';


export const OuterWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
`;
export const TestDiv = styled.div`
  height: 80vh;
  width:  ${props => props.vwWidth || "40vw"};
  background-color:${props => props.backgroundColor || "#121212"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
    &.shadowed{
        box-shadow: 10px 5px 5px #BB86FC;
    }
`;

