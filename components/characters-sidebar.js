import { LitElement, html } from 'lit';
import { SidebarStyles } from '../styles/character-sidebar-styles';

export class CharactersSidebar extends LitElement {
    static get styles() {
        return [SidebarStyles]
    }

    static get properties() {
        return {
            characters: { type: Array, attribute: false },
            pagination: { type: Object, attribute: false, },
            currentPage: { type: Number, attribute: false },
        };
    }

    constructor() {
        super();
        this.characters = [];
        this.pagination = {};
        this.currentPage = 1;
    }

    async handleSelectCharacter(id) {
        let getCharacter = new CustomEvent("char-id", {
            detail: id,
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(getCharacter)
    }

    charactersList() {
        if (this.characters) {
            const list = this.characters.map(character => {
                return html`
                    <p 
                        @click="${() => this.handleSelectCharacter(character.id)}"
                        tabindex="-1"
                        >
                        ${character.name}
                    </p>
                `
            })

            return list
        }

        return []
    }

    prevPage() {
        let prevPag = new CustomEvent("page-type", {
            detail: "prev",
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(prevPag)

        if (this.pagination.prev) {
            this.currentPage -= 1
        }
    }

    nextPage() {
        let nextPag = new CustomEvent("page-type", {
            detail: "next",
            bubbles: true,
            composed: true
        })
        this.dispatchEvent(nextPag)

        if (this.pagination.next) {
            this.currentPage += 1
        }
    }

    handleResetPagination() {
        this.currentPage = 1
    }


    render() {
        return html`
                    <div class="characters-container">
                        <h2>Characters</h2>
                        <div class="characters-list">
                            ${this.charactersList()}
                        </div>
                    </div >
                    <hr>
                    <div class="pagination-container ${this.pagination.next || this.pagination.prev ? "active" : "no-active"}">
                        <button 
                            class="${this.pagination.prev ? "active" : "no-active"}" 
                            @click="${this.prevPage}"
                            >
                            Prev
                        </button>
                       <span>${this.currentPage} de ${this.pagination.pages}</span>
                        <button 
                        class="${this.pagination.next ? "active" : "no-active"}"
                        @click="${this.nextPage}"
                        >
                            Next
                        </button>
                    </div>
        `;
    }
}
customElements.define('characters-sidebar', CharactersSidebar);
