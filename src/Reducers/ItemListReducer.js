function ItemListReducer(state = {items: []}, action){
    switch(action.type){
        case 'ADD':
            console.log("reducer action.items");
            console.log(action.item);            
            //state.items.push(action.item)
            console.log("reducer state.items after push");
            console.log(action.item);
            return {...state, items: [...state.items, action.item]};
        default:
            return state; 
    }
}

export default ItemListReducer;