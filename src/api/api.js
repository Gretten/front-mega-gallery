import axios from 'axios';

class ImagesAPI {
    constructor(apiKey = '', link = '') {
        this.link = link;
        this.apiKey = apiKey;
    }

    create(entity) {
        return new Promise((resolve, reject) => {
            axios
                .post(`${this.link}`, entity)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    retrieve() {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.link}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    update(entity) {
        return new Promise((resolve, reject) => {
            axios
                .put(`${this.link}`, entity)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`${this.link}/${id}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

}

const apiInstance = new ImagesAPI(null, 'http://localhost:3000/api/retrieve');

export default apiInstance;