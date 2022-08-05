const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, count: state.count + 1 }
        case 'subtract':
            return { ...state, count: state.count - 1 }
        case 'addInput':
            return { ...state, input: action.payload }
        default:
            return { count: state.count }
    }
}

export default reducer