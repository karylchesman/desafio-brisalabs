import styled from 'styled-components';

import banner from '../../assets/Astronaut-pana1.png'

export const Content = styled.div`

    --nav-height: ${props => props.theme.navBar.height};

    width: 100%;
    min-height: calc(100vh - var(--nav-height));

    #no-content{
        width: 100%;
        min-height: calc(100vh - var(--nav-height));

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span{
            font-size: 24px;
            text-align: center;
            font-weight: 600;
            color: ${props => props.theme.global.textColor};

            margin-bottom: 10px;
        }

        p{
            font-size: 14px;
            text-align: center;
            color: ${props => props.theme.global.secondaryTextColor};

            max-width: 366px;

            margin-bottom: 39px;
        }
    }

    #content{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        #content-header{
            min-height: 97px;
            align-items: center;
            font-size: 24px;
            font-weight: 600;
        }

        #pokemon-list, #content-header{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            width: 80%;
        }
    }

    #banner-no-fav{
        background-image: url(${banner});
        background-repeat: no-repeat;
        background-size: cover;

        width: 516px;
        height: 344px;

        margin-bottom: 45px;
    }

`;
