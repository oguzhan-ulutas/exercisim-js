/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (time=null) {

    if (time === null) {
        return 'You forgot to set the timer.';
    } else if (time === 0){
        return 'Lasagna is done.';
    } else {
        return 'Not done, please wait.'
    }

}

export function preparationTime (layers, time=2) {
    return layers.length * time
}

export function quantities (layers) {
    const obj = {noodles: 0, sauce: 0}
    for (let i = 0; i<layers.length; i++) {
        if (layers[i]==="noodles") {
            obj.noodles+=50
        }

        if (layers[i]==="sauce") {
            obj.sauce+=0.2
        }
    }

    return obj
}

export function addSecretIngredient (friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe (recipe, people) {
    const recipeCopy = {...recipe}

    for(let key in recipeCopy) {
        recipeCopy[key] *= people / 2
    }

    return recipeCopy
}
