import axios from "axios";

export const api = {
    _writeAllProperties: function (source, target) {
        for (const prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop) && Object.prototype.hasOwnProperty.call(target, prop)) {
                target[prop] = source[prop]
            }
        }
    },
    _getHydraCollection: function (url) {
        return new Promise(
            (resolve) => {
                axios.get(url)
                    .then(response => {
                        resolve(response.data['hydra:member'])
                    })
            }
        )
    },
    _getItem: function (url) {
        return new Promise(
            (resolve) => {
                axios.get(url)
                    .then(response => {
                        resolve(response.data)
                    })
            }
        )
    },

    _post: function (collectionUrl, post) {
        return new Promise(
            (resolve) => {
                axios.post(collectionUrl, post)
                    .then(response => {
                        resolve(response.data)
                    })
            }
        )
    },
    patch: function (instance, patch) {
        return new Promise(
            (resolve) => {
                axios.patch(instance['@id'], patch, { headers: { 'Content-Type': 'application/merge-patch+json' } })
                    .then(response => {
                        this._writeAllProperties(response.data, instance)
                        resolve()
                    })
            }
        )
    },
    getProducts: function () {
        return this._getHydraCollection('/api/products')
    }
}
