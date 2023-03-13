import { css } from "lit"

export const SidebarStyles = css`
    :host{
        grid-row-start: span 3;
        background-color: var(--morty-color);
    }
    .characters-container{
        height: 90%;
        padding: .5rem;
        display: flex;
        flex-direction: column;
    }

    .characters-container h2{
        font-family: var(--creep-font);
        font-size: 35px;
        color: #10AFBD;
        width: 100%;
        text-align:  center;
        margin: .8rem 0 0 0;
        animation: show 3s; 
    }

    .characters-list{
        height: 100%;
        overflow: auto;
        margin: auto;
    }

    .characters-list>p {
        margin: 15px 0 15px 0 ;
        cursor: pointer;
        animation: show 1.5s
    }

    .characters-list>p:hover{
        color: var(--summer-color);
    }

    .characters-list>p:focus {
        border-bottom: 2px solid var(--portal-color);
        border-top: 2px solid var(--portal-color);
        color: var(--summer-color);
    }

    .pagination-container{
        display: flex;
        justify-content: center;
        align-items: center;
        animation: show 1.5s
    }

    .pagination-container>button{
        margin: 0 .5rem 0 .5rem;
        padding: .5rem 1rem .5rem 1rem;
        border: none ;
        border-radius: 10px;
        background-color: var(--rick-color);
        cursor: pointer;
    }
    
    .pagination-container>button:hover{
        background-color: var(--rick-color-dark);
    }

    .active{
        display: flex;
    }
    .no-active{
        display: none;
    }

    @keyframes show {
        0%{
            opacity:.1
        }
        50%{
            opacity: .5
        }
        100%{
            opacity: 1
        }
    }
`