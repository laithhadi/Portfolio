export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    //Abstract methods
    async getHTML() {
        return "";
    }
}