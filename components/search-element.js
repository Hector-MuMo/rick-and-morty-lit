import { LitElement, html } from 'lit';
import { SearchStyles } from '../styles/search-element-styles';
import "./character-card"

export class SearchElement extends LitElement {
    static get styles() {
        return [SearchStyles]
    }

    static get properties() {
        return {
            character: { type: Object, attribute: false },
            placeholder: { type: String },
        }
    }

    constructor() {
        super();
        this.character = null;
        this.placeholder = "Search a character and press Enter";
    }


    async handleSearch(character) {
        let stringCharacter = new CustomEvent("input-char", {
            detail: character,
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(stringCharacter)
    }


    render() {
        return html`
        <div class="logo">
            <img src="../images/logo.png" alt="">
        </div>
        <div class="search-container">
            <input type="search" .placeholder="${this.placeholder}" @change="${(e) => this.handleSearch(e.target.value)}"/>
        </div>
        ${this.character ? html`<character-card .character="${this.character}"></character-card>` : null}
        
        `;
    }
}
customElements.define('search-element', SearchElement);
