import { css } from "lit"

export const CharacterStyles = css`
    :host{
        width: 600px;
        height: 600px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: 300px  150px 150px;
        background-image: url(../images/portal.png) ;
        background-color: #000;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        border-radius:200px;
        animation: show 1.5s
    }

    img {
        width: 100%;
        height: 100%;
    }

    .character-img{
        grid-column-start: span 3;
        align-self: center;
        justify-self: center;
        width: 190px;
        height: 190px;
        border-radius: 100px;
        overflow: hidden;
        transition: all .3s;
    }

    .character-img:hover {
        width:230px;
        height:230px;
    }

    .character-info{
        width: 300px;
        padding: 1rem;
        grid-row: 2 / span 3;
        grid-column: 1 / span 3;
        align-self: center;
        justify-self: center;
        display:flex;
        justify-content: space-between;
        background-color: #000;
        opacity: .8;
        color: var(--white-color);
        border-radius:  10px;
        
    }

    p {
        text-align:center;
        color: var(--morty-color-dark);
    }

    span {
        color: var(--rick-color-dark);
    }

    @keyframes show {
        0% {
            opacity: 0
        }

        50% {
            opacity: .5
        }

        50% {
            opacity: 1
        }
    }
`