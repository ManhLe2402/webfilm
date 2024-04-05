const initialState = [];
const filmList = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      state = [...action.payload];
      console.log("filmList", state);
  }
  return state;
};
export default filmList;
