import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import {LoginState} from './../../models/store/login-state.model'
import {UserModel} from './../../models/user.model'
  
  const initialLoginState: LoginState = {
    isLogin: false,
    userData:{
      firstName:'',
      lastName:'',
      email:''
    }
    
  }


  const userSlice= createSlice( {
    
    name:'entityA',
    initialState:initialLoginState,
    reducers:{
        userNotLogged:(state)=>{ // action userNotLogged action
            
            state.isLogin=false;
        },
        userIsLoggeed:(state, action: PayloadAction<UserModel>)=>{ // action userIsLogged action 
           console.log('**show the payload:', action)
            state.isLogin = true;
            state.userData=action.payload

        },
        
    }

  })


  console.log("entityASlice.reduce:", userSlice.reducer);


  export const userReducer = userSlice.reducer;
  export const {userIsLoggeed, userNotLogged } = userSlice.actions