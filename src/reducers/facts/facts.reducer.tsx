import {Fact} from '../../models/fact.model';
import {getFactsData} from '../../thunks/facts.thunk'

import {  createSlice } from '@reduxjs/toolkit';

interface FactState {
    facts: Fact[]|null|undefined;
  }
  
  const initialState: FactState = {
    facts: [],
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
        facts: action.payload,
      }))

      builder.addCase(getFactsData.pending, (state) => ({
        ...state,
        facts: undefined
                  }
                                                 ));
    
      builder.addCase(getFactsData.rejected, (state, action) => ({
        ...state,
        facts: null,
      }));


    },
  })
  

  export const factsReducer = factsSlice.reducer;
  export const factsActions = factsSlice.actions;
