import { createAsyncThunk } from '@reduxjs/toolkit';
import { Fact } from '../models/fact.model';
import { getFacts } from '../services/facts.service';

// import model error
import {ServiceErrorModel} from '../models/serviceError.model'

export const getFactsData = createAsyncThunk(
  'facts/getFactsData',
    async (param:{value:string, key:string}, thunkAPI):Promise<Fact[]|null> => {
      try{

        const resp = await getFacts(param?.key, param?.value)
        console.log("resp:", resp);
        return resp
        
      }catch(err:any){

        console.log("error:", err);

        if (err.hasOwnProperty('response')===false){
          console.log("Service not available") // when the endpoint is not available

        }

        const error:ServiceErrorModel= err;
        console.log("status: ", error.response.status)
  
        return null;

      }
      
    }
);

