
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

    case 'removeUser':
      return state.filter(user=> user.id !== action.payload);

    case 'updateUser':
      return state.map((u)=>{
        if( u.id === action.payload.id ){
          return{
            ...action.payload,
            password: u.password,
          };
        }
        return u;
      })
      break;

    case 'loadingUsers':
      return action.payload;

    default:
      break;
  }
}
