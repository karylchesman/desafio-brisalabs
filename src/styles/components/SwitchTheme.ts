import styled from 'styled-components';

export const Container = styled.div`

    color: ${props => props.theme.global.textColor} !important;

    button{
        position: fixed;
        left: 139px;
        bottom: 29px;

        border: 1px solid ${props => props.theme.colors.grey_400};
        box-sizing: border-box;
        border-radius: 22px;

        background-color: ${props => props.theme.global.background};

        width: 139px;
        height: 31px;

        font-size: 12px;

        display: flex;
        justify-content: center;
        align-items: center;

        :hover{
            cursor: pointer;
        }

        span{
            color: ${props => props.theme.global.textColor} !important;
        }

        #theme-icon{
            height: 13px;
            width: 13px;

            margin-right: 7px;
        }
    }
`;