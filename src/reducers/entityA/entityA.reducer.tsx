import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
    isLogin: boolean
  }
  
  const initialLoginState: LoginState = {
    isLogin: false,
  }


  const entityASlice= createSlice( {
    
    name:'entityA',
    initialState:initialLoginState,
    reducers:{
        userNotLogged:(state, action: PayloadAction<number>)=>{ // action userNotLogged action
            console.log('number in the execution of action:', action)
            state.isLogin=false;
        },
        userIsLoggeed:(state)=>{ // action userIsLogged action 
          
            state.isLogin = true;

        },
        
    }

  })


  console.log("entityASlice.reduce:", entityASlice.reducer);
  export const entityAReducer = entityASlice.reducer;
  export const {userIsLoggeed, userNotLogged } = entityASlice.actions