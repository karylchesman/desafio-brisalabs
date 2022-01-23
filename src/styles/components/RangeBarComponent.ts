import styled from 'styled-components';

interface ContainerProps {
    width: string;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: 244px;
    height: 9px;

    background-color: ${props => props.theme.colors.grey_100};
    box-sizing: border-box;
    border-radius: 8px;

    display: flex;
    justify-content: flex-start;

    #bar{
        background-color: ${props => props.theme.colors.primary};
        width: ${props => props.width} !important;
        height: 100%;

        box-sizing: border-box;
        border-radius: 8px;
    }
`;
