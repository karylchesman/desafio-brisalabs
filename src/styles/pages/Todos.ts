import styled from 'styled-components';

export const Content = styled.div`

    --nav-height: ${props => props.theme.navBar.height};

    width: 100%;
    min-height: calc(100vh - var(--nav-height));

    display: flex;
    align-items: center;
    flex-direction: column;

    #filter{
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        min-height: 120px;

        button{
            margin-right: 12px;
        }
    }   

    #pokemon-list{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        width: 80%;
    }
`;
