import { css } from "lit"

export const AppStyles = css`
        :host{
            position: relative;
            min-height: 100vh;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }

        .not-found {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    `