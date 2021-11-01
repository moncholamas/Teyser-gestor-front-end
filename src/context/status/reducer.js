export const initialState = {
    modo: '',
    status: '',
    msg: '',
    itemActual: null
}

export const StatusReducer = (action, payload) =>{
    switch (action.type) {
        case 'NEW':
            return {
                ...initialState,
                modo: 'NEW'
            }
        case 'EDIT':
                return {
                    ...initialState,
                    modo: 'EDIT',
                    itemActual:payload
                }
        case 'DELETE':
                return {
                    ...initialState,
                    modo: 'EDIT',
                    itemActual: payload
                    }
        case 'VIEW':
                return {
                    ...initialState,
                    modo: 'EDIT',
                    itemActual:payload
                    }
        default:
                throw new Error('no existe una acción con este tipo');
    }
}