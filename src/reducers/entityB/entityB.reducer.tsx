import {createSlice} from '@reduxjs/toolkit';
import {NameState} from './../../models/store/name-state.model'



  
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