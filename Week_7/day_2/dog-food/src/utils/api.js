import { config } from './config';

class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getProducts() {
        return fetch(`${this._url}/products`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        })
    }

    // getPosts() {
    //     return fetch(`${this._url}/posts`);
    // }
}

export default new Api(config);
