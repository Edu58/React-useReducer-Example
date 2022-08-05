const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 }
        case 'subtract':
            return { count: state.count - 1 }
        default:
            return { count: state.count }
    }
}

export default reducer