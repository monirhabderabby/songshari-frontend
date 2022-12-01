const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialmatchfilter = {
  matchfilter: [
    { id: uuidv4(), looking: "", lookingfor: "" },
    
  ],
};

export const filterSlice = createSlice({
  name: "matchfilter",
  initialState: initialmatchfilter,
  reducers: {
    showmatchfilter: (state) => state,

    updateMatch: (state, action) => {
      const { id, looking, lookingfor } = action.payload;
      const isMatchExist = state.matchfilter.filter((matchfilter) => matchfilter.id === id);
      if (isMatchExist) {
        isisMatchExist[0].looking = looking;
        isMatchExist[0].lookingfor = lookingfor;
      }
    },
  },
});

export const { showmatchfilter,  updateMatch } =
  filterSlice.actions;
export default filterSlice.reducer;