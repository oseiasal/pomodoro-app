// import

const initialState = {key:'', status: '', task: '' }

// criar reducer
function reducerItem(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        task: action.task
      }


    case 'REMOVE':
      return console.log(state); // temporario
    default:
     return state;
  }
}


export default reducerItem