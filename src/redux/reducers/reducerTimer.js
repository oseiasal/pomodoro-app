const initialState = {
    isOn: false,
    minutes: 50,
    started: false
}

export function reducerTimer(state = initialState, action) {
    switch (action.type) {
        case 'START_TIMER':
            return {
                minutes: action.minutes,
                isOn: action.isOn
            }
        case 'RESET_TIMER':
            return {
                minutes: action.minutes,
                isOn: action.isOn
            }

        default:
            return state;
    }
}
