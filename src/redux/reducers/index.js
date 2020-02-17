// import

const initialState = [] 

// criar reducer
function reducerItem(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return [...state,{
        key: action.key,
        task: action.task
      }]


    case 'REMOVE':
      return console.log(state); // temporario
    default:
     return state;
  }
}


export default reducerItem