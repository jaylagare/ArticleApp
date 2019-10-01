export class User {
    _id: string;
    username: string;
    password: string;
    token: string;
    dateCreate: string;
    userCreate: string;

    constructor() {
        // this._id = _id;
        this.username = '';
        this.password = '';
        this.token = '';
        this.dateCreate = '';
        this.userCreate = '';
    }
}