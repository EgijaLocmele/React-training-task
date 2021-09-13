import Data from '../data/data.json'

const initialState = Data

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
