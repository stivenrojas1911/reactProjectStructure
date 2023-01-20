import {configureStore} from '@reduxjs/toolkit';

// import reducers
import {userReducer} from './reducers/user/user.reducer';
import {entityBreducer} from './reducers/entityB/entityB.reducer'
import {factsReducer} from './reducers/facts/facts.reducer'


export const store= configureStore({
    reducer:{
        user:userReducer, 
        entityB:entityBreducer,
        facts:factsReducer,
       
    }
})

console.log("store:", store);
export type AppDispatch = typeof store.dispatch; // in the tutorial are like this, but I am not sure about the use
export type RootState = ReturnType<typeof store.getState>;