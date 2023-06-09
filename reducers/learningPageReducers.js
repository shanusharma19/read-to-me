const initialState = {
        profile: "",
        filter: "brightness(100%)",
        toggle: false,
        notify: false,
        brightness: "rgb(0,0,0,0.0)",
        details: null,
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
          case 'CHANGE_NOTIFY': {
            return {
              ...state,
              notify: action.value,
            }
          }
          case 'CHANGE_BRIGHTNESS': {
            return {
              ...state,
              brightness: action.value,
            }
          }
          case 'GET_DETAILS': {
            return {
              ...state,
              details: action.value,
            }
          }
          default:
          return state
    }
  }
    
  export default learningPage