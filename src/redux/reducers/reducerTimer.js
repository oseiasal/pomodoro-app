
export function reducerTimer(state = [], action) {
    switch (action.type) {
        case 'A':
            return console.log('B');
        case 'B':
            return alert();

        default:
            return state;

    }
}

