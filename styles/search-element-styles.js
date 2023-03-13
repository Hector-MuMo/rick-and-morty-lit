import { css } from "lit"

export const SearchStyles = css`
    :host {
        grid-row: 1 / span 3;
        grid-column: 2 / span 2;
        background-color: var(--rick-color);
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    img {
        width: 100%;
        height: 100%;
        animation: show 3s; 
    }

    .search-container{
        margin: 0 0 1rem 0;
    }

    .search-container input {
        width: 250px;
        outline: 2px solid var(--summer-color-light) ;
        border: none;
        border-radius: 5px;
        padding: 8px;
        font-family: 'Kanit', sans-serif;
    }
    
    .search-container input:focus {
        outline: 2px solid var(--summer-color-dark) ;
        
    }

    .logo {
        max-width: 400px;
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