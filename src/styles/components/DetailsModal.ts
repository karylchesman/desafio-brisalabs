import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.1);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    #modal-content{
        width: 378px;
        height: 639px;
        
        background: ${props => props.theme.detailsModal.background};
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        padding: 24px;

        #close-button{
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            border-bottom: 1px solid ${props => props.theme.colors.grey_200};

            font-size: 16px;
            font-weight: 400;

            span,a{
                margin-bottom: 9px;
            }

            a{
                cursor: pointer;
            }
        }

        .name{
            width: 100%;
            padding: 0;

            font-size: 24px;
        }

        .images{
            width: 100%;

            img{
                width: 80px;
                height: 70px;

                background-color: ${props => props.theme.detailsModal.imageBgColor};
                border-radius: 8px;
                margin-right: 4.5px;
            }
        }

        .properties{
            width: 100%;

            display: flex;
            justify-content: flex-start;

            font-weight: 500;
            font-size: 18px;
            line-height: 27px;

            div{
                margin-right: 18px;
            }
        }

        .modal-types{
            width: 100%;
            margin-bottom: 10px;

            display: flex;
            flex-wrap: wrap;

            .badge-fire, .badge-eletric, .badge-water {
                display: flex;
                align-items: center;
                justify-content: center;

                padding: 4px;
                font-size: 12px;
                font-weight: 500;
                border-radius: 8px;

                width: 90px;
                height: 30px;
                margin-right: 4px;
            }

            .badge-fire{
                background-color: ${props => props.theme.colors.alert_danger};
                color: ${props => props.theme.colors.white};
            }
            .badge-eletric{
                background-color: ${props => props.theme.colors.primary};
                color: ${props => props.theme.colors.grey_500};
            }
            .badge-water{
                background-color: ${props => props.theme.colors.secondary};
                color: ${props => props.theme.colors.white};
            }
        }

        .stats{
            width: 100%;
            height: 100%;
            max-height: 200px;

            font-weight: 500;
            font-size: 12px;
            line-height: 18px;

            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;

            .estatisticas{
                color: ${props => props.theme.colors.grey_200};
            }

            div{
                width: 100%;

                display: flex;
                align-items: center;

                span{
                    width: auto;
                    flex: 1;
                }

                .range-bar{ 
                    flex: 4;
                }

                .stat-number{
                    text-align: end;
                    color: ${props => props.theme.detailsModal.statsTextColor};
                }

                .stat-number-fav{
                    text-align: end;
                    color: ${props => props.theme.detailsModal.statsFavTextColor};
                }
            }
        }

        .fav-button{
            width: 100%;
            button{
                font-size: 12px !important;
            }
        }
    }
`;