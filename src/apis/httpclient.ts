import axios, { AxiosRequestConfig } from 'axios'

export function get(url: string, config: AxiosRequestConfig = {}) {
    return new Promise(function(resolve, reject) {
        axios
            .get(url, config)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function post(url: string, body: object) {
    return new Promise<any>(function(resolve, reject) {
        axios
            .post(url, body)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function del(url: string) {
    return new Promise(function(resolve, reject) {
        axios
            .delete(url)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function put(url: string, body = {}) {
    return new Promise(function(resolve, reject) {
        axios
            .put(url, body)
            .then(resp => {
                resolve(resp.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}
