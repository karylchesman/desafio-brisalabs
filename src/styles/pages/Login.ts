import styled from 'styled-components';

export const Content = styled.div`

    min-height: 100vh;
    background-image: url(${props => props.theme.login.banner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center right;
    background-attachment: fixed;

    .login-form{

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        max-width: 365px;
        width: 100%;
        min-height: 100vh;

        margin-left: 138px;

        #poke-logo{
            position: absolute;
            width: 206px;
            height: 76px;
            left: 138px;
            top: 33px;
        }

        p{
            font-family: Poppins;
            font-size: 36px;
            font-style: normal;
            font-weight: 700;
            line-height: 54px;
            letter-spacing: 0em;
            text-align: left;
            color: ${props => props.theme.login.titleColor};
        }

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;

            #user{
                margin-bottom: 15px;
            }

            #pass{
                margin-bottom: 33px;
            }
        }
    }
`;
