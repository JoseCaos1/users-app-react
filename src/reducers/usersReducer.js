
export const userReducer=( state=[], action )=>{
  switch (action.type) {
    case 'addUser':
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        }
      ]
      break;

    default:
      break;
  }
}
