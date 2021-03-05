import styled from 'styled-components';


export const OuterWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
`;
export const PreviewBarContainer = styled.div`
  height: 396px;
  width:  1584px;
  margin-top: 20px;
  background-color:${props => props.backgroundColor || "#121212"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
    &.shadowed{
        box-shadow: 10px 5px 5px #BB86FC;
    }
`;

