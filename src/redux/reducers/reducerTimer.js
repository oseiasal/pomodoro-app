const initialState = {
    isOn: false,
    minutes: 10,
    started: false
}

export function reducerTimer(state = initialState, action) {
    switch (action.type) {
        case 'A':
            return console.log('B');
            case 'B':
                return alert();
                default:
                    return state;
                }
            }
