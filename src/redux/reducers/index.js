// criar reducer
function reducerItem(state = {}, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, action);


    case 'REMOVE':
      return console.log(state); // temporario
    default:
     return state;
  }
}


export default reducerItem
