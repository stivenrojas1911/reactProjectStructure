import { FactModel } from '../../models/fact.model';
import { getFactsData } from '../../thunks/facts.thunk'

import { createSlice } from '@reduxjs/toolkit';
import { FactState } from './../../models/store/fact-state.model'
import { AsyncStatusEnum } from '../../enums/asyncStatusEnum';


const initialState: FactState = {

  status: AsyncStatusEnum.idle,
  content: [],

};

const factsSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getFactsData.fulfilled, (state, action) => ({
      ...state,
      status: AsyncStatusEnum.completed,
      content: action.payload,

    }))

    builder.addCase(getFactsData.pending, (state) => ({
      ...state,
      status: AsyncStatusEnum.loading,
      content: null,
    }
    ));

    builder.addCase(getFactsData.rejected, (state, action) => ({
      ...state,
      status: AsyncStatusEnum.rejected,
      content: null,
    }
    ));

  },
})


export const factsReducer = factsSlice.reducer;
export const factsActions = factsSlice.actions;
