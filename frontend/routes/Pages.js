import $http from './API';

const get = (path, params) => {
    return $http.get(path, { params })
}

export {
    get
}