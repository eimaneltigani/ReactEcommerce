import productArray from "../../components/productArray";


//Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';

//Action Creators
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

const initialState = {
    items: productArray,
    addedItems: [],
    total: 0
}

//Reducer
const cartReducer = (state = initialState, action) => {
    if(action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item) {
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price
            return {...state, total: newTotal};
        } else {
            addedItem.quantity = 1
            let newTotal = state.total + addedItem.price

            return {
                ...state, 
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            };
        }
    }
    if(action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        //console.log(itemToRemove)
        return {...state, addedItems: new_items, total: newTotal}
    }
    if(action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity +=1
        let newTotal = state.total + addedItem.price
        return {...state, total: newTotal};
    }
    if(action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {...state, addedItems: new_items, total: newTotal};
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {...state, total: newTotal};
        }
    }

    else {
        return state;
    } 
        
}

export default cartReducer;