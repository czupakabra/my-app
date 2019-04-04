function ItemSelectorReducer(state = {checked: []}, action){
    switch(action.type){
        case 'INIT':
            return{};
        case 'ADD':
        console.log('item selektor reducer');            
            return state;
        default:
            return state; 
    }
}

export default ItemSelectorReducer;