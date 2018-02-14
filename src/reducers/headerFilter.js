
const headerFilter = (state = [], action) => {
  switch (action.type) {
    case 'MINIMIZE_SIDE_PANEL':
      return [
        ...state,
        {
          headerDisplay: 'MINIMIZE'
        }
      ]
    case 'MAXIMIZE_SIDE_PANEL':
      return [
        ...state,
        {
          headerDisplay: 'MAXIMIZE'
        }
      ]
    default:
      return state
  }
}

export default headerFilter
