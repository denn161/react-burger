



// Ингредиенты конструктора

export const GET_INGREDIENTS_CONSTRUCTOR = 'GET_INGREDIENTS_CONSTRUCTOR';
export const POST_BUN_CONSTRUCTOR = 'POST_BUN_CONSTRUCTOR';
export const POST_FILLING_CONSTRUCTOR = 'POST_ELEMENT_CONSTRUCTOR';
export const DELETE_FILLING_CONSTRUCTOR = 'DELETE_ELEMENT_CONSTRUCTOR';
export const UPDATE_LIST_FILLINGS = 'UPDATE_LIST_FILLINGS';


export const getElementsByConstructor = () => ({
    type: GET_INGREDIENTS_CONSTRUCTOR
})

export const addBunByConstructor = (bun) => ({
    type: POST_BUN_CONSTRUCTOR,
    payload: bun
})

export const addFillingConstructor = (item) => ({
    type: POST_FILLING_CONSTRUCTOR,
    payload: item
})

export const deleteFillingOfConstructor = (itemId) => ({
    type: DELETE_FILLING_CONSTRUCTOR,
    payload: itemId
})





////////////////////Users/////////////////////////////////////////////////////

//register





