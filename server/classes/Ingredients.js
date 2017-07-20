'use strict'

function init(constructorObj){
    return Object.seal(new Ingredient(constructorObj))
}

function Ingredient(constructorObj){
    if (constructorObj.id && constructorObj.name && constructorObj.image) {
        this.id = constructorObj.id;
        this.name = constructorObj.name;
        this.image = constructorObj.image;
    }
}

Object.defineProperty(Ingredient.prototype, 'id', {
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

Object.defineProperty(Ingredient.prototype, 'name', {
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

Object.defineProperty(Ingredient.prototype, 'image', {
    get: () => this._image,
    set: (value) => {
        if (typeof value == 'string') {
            if (value.length > 0) {
                Object.defineProperty(this, '_image', {
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

Ingredient.prototype.getObjectRepresentation = function(){
    return {
        id:this.id,
        name:this.name,
        image: this.image
    }
}

module.exports.init = init