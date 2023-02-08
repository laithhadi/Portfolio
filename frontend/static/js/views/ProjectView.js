import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("View project");
    }

    async getHTML() {
        console.log(this.params.id);
        return `      
            <h1>ahhh this porject</h1>
        `;
    }
}