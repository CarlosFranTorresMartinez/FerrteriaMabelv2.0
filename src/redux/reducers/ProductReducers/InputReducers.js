import TypesActions from "../../actions/ProductActions/TypesActions";

const initialState = {
    id: '',
    name: '',
    category: '',
    measure: '',
    brand: '',
    amount: 0,
    price: 0.0,
    characteristic: '',
    date: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TypesActions.SET_INPUT_ID: {
            const {id} = action;
            return {
                ...state,
                id
            }
        }
        case TypesActions.SET_INPUT_NAME: {
            const {name} = action;
            return {
                ...state,
                name
            }
        }
        case TypesActions.SET_INPUT_CATEGORY: {
            const {category} = action;
            return {
                ...state,
                category
            }
        }
        case TypesActions.SET_INPUT_MEASURE: {
            const {measure} = action;
            return {
                ...state,
                measure
            }
        }
        case TypesActions.SET_INPUT_BRAND: {
            const {brand} = action;
            return {
                ...state,
                brand
            }
        }
        case TypesActions.SET_INPUT_AMOUNT: {
            const {amount} = action;
            return {
                ...state,
                amount
            }
        }
        case TypesActions.SET_INPUT_PRICE: {
            const {price} = action;
            return {
                ...state,
                price
            }
        }
        case TypesActions.SET_INPUT_CHARACTERISTIC: {
            const {characteristic} = action;
            return {
                ...state,
                characteristic
            }
        }
        case TypesActions.SET_INPUT_DATE: {
            const {date} = action;
            return {
                ...state,
                date
            }
        }
        case TypesActions.RESET_INPUT: {
            return initialState;
        }
        default:
            return state;
    }
}