import ActionTypes from './TypesActions';

export default {

    setInputId: id => ({
        type: ActionTypes.SET_INPUT_ID,
        id
    }),
    setInputName: name => ({
        type: ActionTypes.SET_INPUT_NAME,
        name
    }),

    setInputCategory: category => ({
        type: ActionTypes.SET_INPUT_CATEGORY,
        category
    }),

    setInputMeasure: measure => ({
        type: ActionTypes.SET_INPUT_MEASURE,
        measure
    }),

    setInputBrand: brand => ({
        type: ActionTypes.SET_INPUT_BRAND,
        brand
    }),

    setInputAmount: amount => ({
        type: ActionTypes.SET_INPUT_AMOUNT,
        amount
    }),

    setInputPrice: price => ({
        type: ActionTypes.SET_INPUT_PRICE,
        price
    }),

    setInputCharacteristic: characteristic => ({
        type: ActionTypes.SET_INPUT_CHARACTERISTIC,
        characteristic
    }),

    setInputDate: date => ({
        type: ActionTypes.SET_INPUT_DATE,
        date
    }),

    resetInputs: () => ({
        type: ActionTypes.RESET_INPUT,
    })
}

