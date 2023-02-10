import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing project....");
    }

    async getHTML() {
        console.log(this.params.id);
        return `      
            <h1>ahhh this porject</h1>
        `;
    }
}