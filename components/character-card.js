import { LitElement, html } from 'lit';
import { CharacterStyles } from '../styles/character-card-styles';

export class CharacterCard extends LitElement {
    static get styles() {
        return [CharacterStyles]
    }

    static get properties() {
        return {
            character: { type: String, attribute: false }
        }
    }

    constructor() {
        super();
        this.character = {}
    }

    render() {
        return html`
            <picture class="character-img">
                <img src="${this.character.image}" alt="rick">
            </picture>
            <div class="character-info">
                <div>
                    <p>ID: <span>${this.character.id}</span></p>
                    <p>Name: <span>${this.character.name}</span></p>
                    <p>Status: <span>${this.character.status}</span></p>
                    <p>Species: <span>${this.character.species}</span></p>
                </div>
                <div>
                    <p>Gender: <span>${this.character.gender}</span></p>
                    <p>Type: <span>${this.character.type}</span></p>
                    <p>Origin: <span>${this.character.origin}</span></p>
                    <p>Location: <span>${this.character.location}</span></p>
                </div>
            </div>
        `;
    }
}
customElements.define('character-card', CharacterCard);
