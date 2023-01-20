import {createSlice} from '@reduxjs/toolkit';



export interface NameState {
    name: string;
  }
  
  const initialNameState: NameState = {
    name: '',
  }


const entityBslice = createSlice({
    name:'entityB',
    initialState: initialNameState,
    reducers:
        {
            getName:(state)=>{
                state.name='Stiven' // invoke helpers in the actions

            }, 

            getAnomin:(state)=>{
                state.name='Anomin'
            }
        },

    
})

  
export const entityBreducer = entityBslice.reducer
export const {getName, getAnomin} = entityBslice.actions