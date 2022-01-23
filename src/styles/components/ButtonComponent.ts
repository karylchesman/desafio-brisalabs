import styled from 'styled-components';

interface ButtonProps {
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
}

export const BaseButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.width !== undefined ? props.width : "100%"};
    height: ${props => props.height !== undefined ? props.height : "54px"};

    ${props => props.maxWidth !== undefined && `max-width: ${props.maxWidth};` }
    ${props => props.maxHeight !== undefined && `max-height: ${props.maxHeight};`}

    background-color: ${props => props.theme.colors.primary};
    box-sizing: border-box;
    border: none;
    border-radius: 8px;

    font-size: 16px;
    line-height: 18px;
    font-family: Poppins;

    text-align: center;

    :hover{
        cursor: pointer;
    }
`;

export const Button = styled(BaseButton)`
    background-color: ${props => props.theme.colors.primary};
`;

export const ButtonSecondary = styled(BaseButton)`
    border: 1px solid ${props => props.theme.global.buttonSeconday};
    background-color: transparent;
    font-weight: 500;
    color: ${props => props.theme.global.buttonSeconday};
`;

export const ButtonDanger = styled(BaseButton)`
    background-color: ${props => props.theme.colors.alert_danger};
    color: ${props => props.theme.colors.white};
`;
