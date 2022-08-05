 const ADD_POST = "basket/ADD_POST";

let initialState = {
    items : []
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {

            let newItem ={
                id: state.items.length + 1,
                title: action.title,
                platform: action.platform,
                price: action.price,
                photo: action.photo
            }

            return {
                ...state,
                items: [...state.items, newItem]
            };
        }

        default:
            return (state);
    }
}

export const addItemToBasket = (title, platform, price, photo) => ({type: ADD_POST, title, platform, price, photo})

export default shopReducer;