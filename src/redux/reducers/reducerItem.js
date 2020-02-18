
const initialState = []

export function reducerItem(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                id: action.id,
                task: action.task
            }]

        case 'REMOVE':
            return state.filter(todo =>
                todo.id !== action.id
            )

        default:
            return state;
    }
}


