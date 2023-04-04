const initialState = {
        profile: "https://assets.englishhelper.com/righttoread/v8.79.38.20230215/assets/images/leaderboard/profilePic/2.svg",
        filter: "brightness(100%)",
        toggle: false,
  }
  function learningPage(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_PROFILE': {
            return {
              ...state,
              profile: action.value,
            }
          }
          case 'CHANGE_TOGGLE': {
            return {
              ...state,
              toggle: action.value,
            }
          }
          case 'CHANGE_FILTER': {
            return {
                ...state,
                filter: action.value,
            }
          }
          default:
          return state
    }
  }
  export default learningPage