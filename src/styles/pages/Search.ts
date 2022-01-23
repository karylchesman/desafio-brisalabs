import styled from 'styled-components';

export const Content = styled.div`

    --nav-height: ${props => props.theme.navBar.height};

    width: 100%;
    min-height: calc(100vh - var(--nav-height));

    display: flex;
    align-items: center;
    flex-direction: column;

    #search{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 29px;
        margin-bottom: 39px;

        width: 100%;
        max-width: 765px;
        height: 54px;

        border: 1px solid ${props => props.theme.colors.grey_200};
        box-sizing: border-box;
        border-radius: 8px;

        font-size: 12px;
        line-height: 18px;
        font-family: Poppins;
        
        input, button{
            height: 100%;
            border: none;
        }

        input{
            width: 100%;
            padding-left: 20px;
            border-radius: 8px 0 0 8px;

            font-weight: 600px !important;
        }

        button{
            width: 54px;
            border-radius: 0 8px 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: ${props => props.theme.colors.white};
        }

        button:hover{
            cursor: pointer;
        }
    }

    #result{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        width: 100%;
        max-width: 765px;
    }
`;
