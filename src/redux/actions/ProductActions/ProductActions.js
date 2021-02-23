import ActionTypes from './TypesActions';

export default {
    addProduct: (product) => ({
        type: ActionTypes.ADD_PRODUCT,
        product
    }),
    updateProduct: (id, product) => ({
        type: ActionTypes.UPDATE_PRODUCT,
        id,
        product
    }),
    deleteProduct: (id) => ({
        type: ActionTypes.DELETE_PRODUCT,
        id
    })
}