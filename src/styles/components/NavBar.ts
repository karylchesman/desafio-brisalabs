import styled from 'styled-components';

export const Container = styled.div`
    height: ${props => props.theme.navBar.height};
    background: ${props => props.theme.navBar.background};
    width: 100%;

    #grid{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;

        .logo, .menus, .exit-button{
            flex: 1;
            text-align: center;
        }

        .exit-button{
            display: flex;
            justify-content:center;
            align-items: center;

            button{
                border: 1px solid ${props => props.theme.navBar.exitButtonBorderColor};
                color: ${props => props.theme.global.textColor};
                background-color: transparent;
                box-sizing: border-box;
                border-radius: 8px;

                width: 100%;
                max-width: 89px;
                height: 28px;

                                    
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                #logout-icon{
                    height: 13px;
                    width: 13px;

                    margin-left: 7px;
                }
            }

            button:hover{
                cursor: pointer;
            }
        }

        .menus{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 100%;
            
            div{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                a{
                    text-decoration: none;
                    color: ${props => props.theme.global.textColor};
                }
            }

            .favoritos, .procurar, .todos{
                flex: 1;
            }

            .badge-amount{
                color: ${props => props.theme.navBar.badgeTextColor};
                background-color: ${props => props.theme.navBar.badgeColor};
                border-radius: 50%;

                width: 17px;
                height: 17px;

                font-size: 10px;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .menu-active{
            border-bottom: 2px solid ${props => props.theme.navBar.menuActiveColor};
            a{
                color: ${props => props.theme.navBar.menuActiveColor} !important;
            }
            font-weight: 600;
        }
    }
`;