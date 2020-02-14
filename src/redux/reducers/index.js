// import

const initialState = [] 

// criar reducer
function reducerItem(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        task: action
      }


    case 'REMOVE':
      return console.log(state); // temporario
    default:
     return state;
  }
}


export default reducerItem