const initialState = [];
const filmAll = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_FILMHOT":
      state = [...action.payload];

    case "NEW_CMT":
      for (const film of state) {
        if (film.id === action.payload.id) {
          console.log("action", film);
          film.cmts = { ...action.  payload.cmts };
        }
      }
    // case "NEW_VIEW":
    //   for (const film of state) {
    //     if (film.id === action.payload.id) {
    //       console.log("action", action.payload.id);
    //       film.view += +1;
    //     } else {
    //       console.log("action else", film.view);
    //     }
    //   }
  }
  return state;
};
export default filmAll;
