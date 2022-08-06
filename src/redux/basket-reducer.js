
const ADD_POST = "basket/ADD_POST";

let initialState = {
    items: new Map()
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newItem = {
                id: action.id,
                title: action.title,
                platform: action.platform,
                price: action.price,
                photo: action.photo
            }
            return {
                ...state,
                items: state.items.set(newItem.id, newItem)
            }
        }

        default:
            return (state);
    }
}

export const addItemToBasket = (title, platform, price, photo, id) =>
    ({type: ADD_POST, title, platform, price, photo, id})

export default shopReducer;