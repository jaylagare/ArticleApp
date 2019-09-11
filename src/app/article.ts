export class Article {
    _id: string;
    title: string;
    image: string; // url
    description: string;
    publishDate: string;

    constructor() {
        // this._id = _id;
        this.title = '';
        this.image = '';
        this.description = '';
        this.publishDate = '';
    }
}