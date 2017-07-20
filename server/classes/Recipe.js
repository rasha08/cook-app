'use strict';
function init(constructorObj) {
  return Object.seal(new Recipe(constructorObj));
}
function Recipe(constructorObj) {
  if (
    constructorObj.amount &&
    constructorObj.description &&
    constructorObj.image &&
    constructorObj.ingredients &&
    constructorObj.level &&
    constructorObj.name &&
    constructorObj.servings &&
    constructorObj.timeOfPreparation &&
    constructorObj.totalTime
  ) {
    //promenio sam yield u servings

    this.amount = constructorObj.amount;
    this.description = constructorObj.description;
    this.image = constructorObj.image;
    this.ingredients = constructorObj.ingredients;
    this.level = constructorObj.level;
    this.name = constructorObj.name;
    this.servings = constructorObj.servings;
    this.totalTime = constructorObj.totalTime;
    this.s = constructorObj.timeOfPeparation;
  }
}

// Creating set and get method for amount
Object.defineProperty(Recipe.prototype, 'amount', {
  get: () => this._amount,
  set: value => {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        // Once the validation is passed private property _amount is created
        if (!this.amount) {
          Object.defineProperty(this, '_amount', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else return;
      } else {
        throw `Error: amount is an empty array, expected array with multiple string values, given array with length of ${value.length}`;
      }
    } else {
      throw `Error: amount must be an Array passed value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'id', {
  get: () => this._id,
  set: value => {
    if (typeof value == 'number') {
      if (value >= 0) {
        if (!this.servings) {
          // Once the validation is passed private property _servings is created
          Object.defineProperty(this, '_id', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: id must be 0 or greatter then, given value is ${value}`;
      }
    } else {
      throw `Error: id must be integer, given value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'description', {
  get: () => this._description,
  set: value => {
    if (typeof value == 'string') {
      if (value.length > 0) {
        // Once the validation has passed private property _description is created
        if (!this.description) {
          Object.defineProperty(this, '_description', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return;
        }
      } else {
        throw `Error: description is an empty string, expected  non-empty string,
            given a string with length of ${value.length}`;
      }
    } else {
      throw `Error: description must be a string, passed value is of type ${typeof value} `;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'image', {
  get: () => this._image,
  set: value => {
    if (typeof value == 'string') {
      if (value.length > 0) {
        if (!this.image) {
          // Once the validation has passed private property _image is created
          Object.defineProperty(this, '_image', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: image is an empty string, expected non-empty string, given a string with length of ${value.length}`;
      }
    } else {
      throw `Error: image must be a string, given value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'ingredients', {
  get: () => this._ingredients,
  set: value => {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        if (!this.ingredients) {
          // Once the validation is passed private property _ingredients is created
          Object.defineProperty(this, '_ingredients', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: ingredients is an empty array, expected array with multiple integer values,
            given array is of length ${array.length}`;
      }
    } else {
      throw `Error: ingredients must be an Array, passed value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'level', {
  get: () => this._level,
  set: value => {
    if (typeof value == 'string') {
      if (value.length > 0) {
        if (!this.level) {
          // Once the validation is passed private property _level is created
          Object.defineProperty(this, '_level', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: level is an empty string, expected non-empty string, given string is of length ${value.length}`;
      }
    } else {
      throw `Error: level must be a string, given value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'name', {
  get: () => this._name,
  set: value => {
    if (typeof value == 'string') {
      if (value.length > 0) {
        if (!this.name) {
          // Once the validation is passed private property _name is creted
          Object.defineProperty(this, '_name', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: name is an empty string, expected non-empty string, given string is of length ${value.length}`;
      }
    } else {
      throw `Error: name must be a string, given value is of type ${typeof name}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'servings', {
  get: () => this._servings,
  set: value => {
    if (typeof value == 'number') {
      if (value > 0) {
        if (!this.servings) {
          // Once the validation is passed private property _servings is created
          Object.defineProperty(this, '_servings', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: servings must be greater than zero, given value is ${value}`;
      }
    } else {
      throw `Error: serving must be integer, given value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'timeOfPeparation', {
  get: () => this._timeOfPreparation,
  set: value => {
    if (typeof value == 'number') {
      if (value>=0) {
        if (!this.timeOfPreparation) {
          // Once the validation is passed private property _timeOfPreparation is created
          Object.defineProperty(this, '_timeOfPreparation', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: timeOfPreparation must be greater than zero, given value is ${value}`;
      }
    } else {
      throw `Error: timeOfPreparation must be of type integer, given value is of type ${typeof value}`;
    }
  }
});

Object.defineProperty(Recipe.prototype, 'totalTime', {
  get: () => this._totalTime,
  set: value => {
    if (typeof value == 'number') {
      if (value > 0) {
        if (!this.totalTime) {
          Object.defineProperty(this, '_totalTime', {
            value: value,
            enumerable: false,
            writable: true
          });
        } else {
          return
        }
      } else {
        throw `Error: totalTime must be greater than zero, given value is ${value}`;
      }
    } else {
      throw `Error: totalTime must be of type integer, given value is of type ${typeof value}`;
    }
  }
});
Recipe.prototype.getObjectRepresentation = function() {
  return {
    name: this.name,
    description: this.description,
    image: this.image,
    level: this.level,
    ingredients: this.ingredients,
    amount: this.amount,
    servings: this.servings,
    timeOfPeparation: this.timeOfPeparation,
    totalTime: this.totalTime
  };
};

module.exports.init = init;
