import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    async getHTML() {
        // TODO: make calls to server
        return `      
            <h1>Projects</h1>
            <p>
                Projects here
            </p>
        `;
    }
}