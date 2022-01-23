import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 54px;

    border: 1px solid ${props => props.theme.global.input.borderColor};
    background-color: ${props => props.theme.global.input.backgroundColor};
    color: ${props => props.theme.global.textColor} !important;
    box-sizing: border-box;
    border-radius: 8px;

    font-size: 12px;
    line-height: 18px;
    font-family: Poppins;

    padding-left: 20px;
`;
