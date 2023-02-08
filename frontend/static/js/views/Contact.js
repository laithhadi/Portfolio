import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHTML() {
        return `      
            <h1>Contact me!!</h1>
            <p>
                here
            </p>
        `;
    }
}