'use strict'

function Ingredients(constructorObj){
    if(constructorObj.id && constructorObj.name && constructorObj.image){


        this._id = constructorObj.id;
        this._name = constructorObj.name;
        this._image = constructorObj.image;
    }
}

Object.defineProperty(Ingredients.prototype, 'id', {
            get: () => this._id,
            set: (value) => {
                if (typeof value == 'number') {
                    if (value > 0) {
                        Object.defineProperty(this, '_id', {
                            value: value,
                            enumerable: false,
                            writable: true
                        })
                    } else {
                        throw (`Error: id must be grater than zero, value given is ${value}`)
                    }
                } else {
                    throw (`Error: id must be number, value given is of type ${typeof value} `)
                }
            }
        })

Object.defineProperty(Ingredients.prototype, 'name', {
    get: () => this._name,
    set: (value) => {
        if (typeof value == 'string') {
            if (image.length > 0) {
                Object.defineProperty(this, '_name', {
                    value: value,
                    enumerable: false,
                    writable: true
                })
            } else {
                throw (`Error: image is an empty string, non-empty string expected, given a string with length of ${value.length}`)
            }
        } else {
            throw (`Error: image must be string, value given is of type ${typeof value}`)
        }
    }
})

Object.defineProperty(Ingredients.prototype, 'image', {
    get: () => this._image,
    set: (value) => {
        if (typeof value == 'string') {
            if (value.length > 0) {
                Object.defineProperty(this, 'image', {
                    value: value,
                    enumerable: false,
                    writable: true
                })
            } else {
                throw (`Error: image is an empty string, non-empty string expected, given value is of length ${value.length}`)
            }
        } else {
            throw (`Error: image must be string, given value is of type ${typeof value}`)
        }
    }
})