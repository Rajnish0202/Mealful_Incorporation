function reducer(state, action) {
  console.log({ state, action });
  if (action === GET) {
    return {
      ...state,
      filterData: state.filter((obj) => obj.item_date.includes.payload),
    };
  }
  return state;
}

export default reducer;
