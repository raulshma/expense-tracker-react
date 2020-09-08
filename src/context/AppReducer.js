export default (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        transactions: [action.payload, ...state.transactions],
        ...state,
      };
    case 'FAILED':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
