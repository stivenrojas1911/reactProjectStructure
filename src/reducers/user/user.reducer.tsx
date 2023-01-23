import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import {LoginState} from './../../models/store/login-state.model'

  
  const initialLoginState: LoginState = {
    isLogin: false,
  }


  const userSlice= createSlice( {
    
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


  console.log("entityASlice.reduce:", userSlice.reducer);


  export const userReducer = userSlice.reducer;
  export const {userIsLoggeed, userNotLogged } = userSlice.actions