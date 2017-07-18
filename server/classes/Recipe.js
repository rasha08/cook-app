"use strict"
function Recipe(constructorObj) {
  // if(constructorObj.amount && constructorObj.description && constructorObj.image && constructorObj.ingredients && constructorObj.level && constructorObj.name && constructorObj.yeald && constructorObj.timeOfPreparation && constructorObj.totalTime){
  // }

  this.amount = constructorObj.amount

}

// Creating set and get method for amount
Object.defineProperty(Recipe.prototype, 'amount', {
  get: () => this._amount,
  set: (value) => {
    if(Array.isArray(value)){
      if(value.length > 0){
        // Once the validation is passed private property _amount is created
        Object.defineProperty(this, '_amount',{
          value:value,
          enumerable:false,
          writable:false
        })
      }
      else{
        throw(`Error: amount is an empty array, expected array with multiple string values, given array with length of ${value.length}`)
      }
    }
    else{
      throw (`Error: amount must be an Array passed value is of type ${typeof value}`)
    }    
  }
})

var recipe = new Recipe({amount:[2,4]})
//Should console empty Recipe object
console.log(recipe)

//Should console [2,4]
console.log(recipe.amount)

//Should console undefined
console.log(recipe._amount)

//Should trow error
recipe.amount = [5,6]