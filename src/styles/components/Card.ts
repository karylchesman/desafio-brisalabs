import styled from 'styled-components';

export const Container = styled.div`
    width: 165px;
    height: 236px;

    background: ${props => props.theme.card.background};
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-right: 35px;
    margin-bottom: 28px;

    #fav-icon{
        position: relative;
        top: 6px;
        right: 10px;

        align-self: flex-end;

        border: none;
        background-color: transparent;
    }

    #fav-icon:hover{
        cursor: pointer;
    }

    #poke-img{
        margin-top: -20px;
    }

    .name{
        font-size: 18px;
        font-weight: 600;

        width: 100%;
        padding: 0 10px;
    }

    .poke-id{
        font-size: 13px;
        font-weight: 500;
        color: ${props => props.theme.global.secondaryTextColor};

        width: 100%;
        padding: 0 10px;

        margin-bottom: 5px;
    } 

    .types{
        width: 100%;
        padding: 0 10px;
        margin-bottom: 10px;

        display: flex;
        flex-wrap: wrap;

        .badge-fire, .badge-eletric, .badge-water {
            padding: 4px;
            font-size: 8px;
            font-weight: 500;
            border-radius: 8px;

            width: 50px;
            text-align: center;
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

    #ver-detalhes{
        width: 100%;
        padding: 0 10px;

        button{
            font-size: 10px !important;
            font-weight: 500;
        }
    }
`;