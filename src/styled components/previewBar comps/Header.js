import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fSize+"px" || "64px"};
    color: ${props => props.fColor || "white"};
    text-align: center;
`;