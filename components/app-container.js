import { LitElement, html } from 'lit';
import { AppStyles } from '../styles/app-container-styles';
import "./characters-sidebar"
import "./search-element"
import { getCharacterById, getNewPageCharacters, searchCharacter } from '../utils/fetchData';

export class AppContainer extends LitElement {
    static get styles() {
        return [AppStyles]
    }

    static get properties() {
        return {
            charactersList: { type: Array, attribute: false },
            paginationInfo: { type: Object, attribute: false },
            character: { type: Object, attribute: false },
            notFound: { type: Boolean },
            reset: { type: String }
        }
    }

    constructor() {
        super();
        this.charactersList = [];
        this.paginationInfo = {};
        this.character = null;
        this.notFound = false;
    }

    async _getCharacters(e) {
        const charactersList = await searchCharacter(e.detail)

        if (charactersList && charactersList.info && charactersList.results.length > 0) {
            let character = await getCharacterById(charactersList.results[0].id);
            this.character = character;
            this.charactersList = charactersList.results;
            this.paginationInfo = charactersList.info;
        } else {
            this.notFound = true;
            setTimeout(() => {
                this.notFound = false;
            }, 3500);
        }

        let sidebar = this.shadowRoot.getElementById('sidebar');
        sidebar.handleResetPagination();
    }

    async _getCharacter(e) {
        let character = await getCharacterById(e.detail);
        this.character = character
    }

    async _getNewCharacters(e) {
        if (e.detail === "next") {
            const newList = await getNewPageCharacters(this.paginationInfo.next)
            this.charactersList = newList.results;
            this.paginationInfo = newList.info
        } else {
            const newList = await getNewPageCharacters(this.paginationInfo.prev)
            this.charactersList = newList.results;
            this.paginationInfo = newList.info
        }
    }

    render() {
        return html`
            <characters-sidebar 
                id="sidebar"
                .characters="${this.charactersList}" 
                .pagination="${this.paginationInfo}"
                @char-id="${(e) => this._getCharacter(e)}"
                @page-type="${(e) => this._getNewCharacters(e)}"
                >
            </characters-sidebar>
            <search-element 
                @input-char="${(e) => this._getCharacters(e)}"
                .character="${this.character}"
                >
            </search-element>
            ${this.notFound ? html`
                <p class="not-found">❌ The character doesn't exist ❌</p>
            ` : null}
        `;
    }
}
customElements.define('app-container', AppContainer);
