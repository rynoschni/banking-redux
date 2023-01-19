//Default State
const initialState = {
  balance: 0
};

// #3 Reducer
const account = (state = initialState, action) => {
  console.log("account reducer is reducing!!");
  console.log("account params")
  console.log("state", state)
  console.log("action", action)
  switch (action.type) {
    case 'increment':
      console.log("increment added:")
      return {
        balance: state.balance + action.payload
      }
    
    case 'decrement':
      console.log('decrement subtracted')
      return {
        balance: state.balance - action.payload
      }
    
    default:
      return state
  }
}

export default account