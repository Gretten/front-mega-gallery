import axios from 'axios'

class ImagesAPI {
    constructor(apiKey = '', link = '') {
        this.link = link;
        this.apiKey = apiKey;
    }

    getApiUrl() {
        return '';
    }

    create() {

    }

    retrieve() {
        return axios.get(this.getApiUrl())
            .then(res => {
                return res;
            })
            .catch(err => {
                return err
            })
    }

    update() {

    }

    delete() {

    }
}

const apiInstance = new ImagesAPI();

export default apiInstance;