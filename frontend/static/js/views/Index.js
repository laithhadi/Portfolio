import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Index");
    }

    async getHTML() {
        return `      
            <h1>Welcome back, LAith</h1>
            <p>
                <a href="/projects" data-link>View recent projects</a>.
            </p>
        `;
    }
}