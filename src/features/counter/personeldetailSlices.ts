import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { Type } from "typescript";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./counterAPI";

interface Details {
  id: number;
  firstname: string;
  lastname: string;
  adress: string;
  town: string;
  contry: string;
  datebirth: string;
}
export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
  PersonalDetails: Details[];
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
  PersonalDetails: [],
};

export const counterSlice = createSlice({
  name: "personaldetails",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addnewdetail: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.PersonalDetails.push(action.payload);
      console.log(action.payload);
    },

    editdetail: (state, action) => {
      let filterdetail = state.PersonalDetails.filter((item) => item.id == 1);
      console.log(filterdetail);
    },
  },
});

export const { addnewdetail ,editdetail} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
