function ItemListReducer(state = {items: []}, action){
    switch(action.type){
        case 'ADD':
            return {...state, items: [...state.items, action.item]};
        case 'REMOVE':
            let temp = [...state.items];
            temp.splice(action.index, 1);
            return {...state, items: [...temp]};
        case 'REMOVE_ALL':
            return {...state, items: []};
        default:
            return state; 
    }
}

export default ItemListReducer;